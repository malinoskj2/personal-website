/* eslint-disable no-param-reassign,camelcase */
const axios = require('axios');
const _ = require('lodash');

const githubUser = process.env.VUE_APP_GITHUB_USER;
const mastodonAccessToken = process.env.VUE_APP_MASTODON_ACCESS_TOKEN;
const mastodonIdNum = process.env.VUE_APP_MASTODON_ID;


// Github
const getGithubEvents = async () => axios.get(`https://api.github.com/users/${githubUser}/events`);

export const getRecentCommits = async () => {
  const events = await getGithubEvents();

  return _(events.data)
    .filter(event => event.type === 'PushEvent')
    .flatMap((pushed) => {
      pushed.payload.commits.map((commit) => {
        commit.created_at = pushed.created_at;
        return commit;
      });
      return pushed.payload.commits;
    })
    .map(commit => ({
      source: 'github',
      time: Date.parse(commit.created_at),
      message: commit.message,
      url: commit.url
        .replace('repos/', '')
        .replace('api.', '')
        .replace('commits', 'commit'),
    }));
};

// GitHub Projects
const getGithubContribCounts = async (repoList) => {
  const contribReqs = _(repoList)
    .map(repo => axios.get(repo.contributors_url))
    .value();

  const contributorLists = await Promise.all(contribReqs);

  const contribNums = _(contributorLists)
    .map(list => list.data[0].contributions)
    .value();

  return contribNums;
};

const getGithubTopics = async (repoList) => {
  const contribReqs = _(repoList)
    .map(repo => axios.get(`${repoList.url}/topics`, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    }))
    .value();

  const topicLists = await Promise.all(contribReqs);
  return topicLists.data;
};

export const getGithubRepos = async () => {
  const repos = await axios.get(`https://api.github.com/users/${githubUser}/repos`);

  const contribNums = await getGithubContribCounts(repos.data);
  const topicLists = await getGithubTopics(repos.data);

  const reposWith = _.zip(repos.data, contribNums, topicLists);

  // only keep wanted data
  // 0: object from /repo request
  // 1: number of time I contributed to repo
  // 2: array of all the repo's topics
  return _(reposWith)
    .map(repo => ({
      fullName: repo[0].full_name,
      name: repo[0].name,
      description: repo[0].description,
      url: repo[0].html_url,
      lastPushDate: repo[0].pushed_at,
      numCommits: repo[1],
      topics: repo[2],
    }))
    .value();
};

// Mastodon
export const getMastodonStatuses = async () => {
  const statuses = await axios.get(`https://fosstodon.org/api/v1/accounts/${mastodonIdNum}/statuses`, {
    headers: {
      Authorization: `Bearer ${mastodonAccessToken}`, // the token is a variable which holds the token
      'Content-Type': 'application/json',
    },
  });

  return _(statuses.data)
    .filter(status => _.isNull(status.in_reply_to_id))
    .filter(status => !_.includes(status.uri, 'activity'))
    .map((status) => {
      const { created_at, content, uri } = status;
      const message = (content.includes('&') ? content.split('&')[0].concat('...')
        : content
      ).substring(0, 36);

      return {
        source: 'mastodon',
        time: Date.parse(created_at),
        message: message.replace(/<[^>]+>/ig, ''), // i know
        url: uri,
      };
    });
};
