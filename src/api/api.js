/* eslint-disable no-param-reassign */
const axios = require('axios');
const _ = require('lodash');


const githubUser = process.env.VUE_APP_GITHUB_USER;
const mastodonAccessToken = process.env.VUE_APP_MASTODON_ACCESS_TOKEN;
const mastodonIdNum = process.env.VUE_APP_MASTODON_ID;

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
      url: commit.url,
    }));
};
export const getMastodonStatuses = async () => {
  const statuses = await axios.get(`https://fosstodon.org/api/v1/accounts/${mastodonIdNum}/statuses`, {
    headers: {
      Authorization: `Bearer ${mastodonAccessToken}`, // the token is a variable which holds the token
      'Content-Type': 'application/json',
    },
  });

  return _(statuses.data)
    .map(status => ({
      source: 'mastodon',
      time: Date.parse(status.created_at),
      message: status.content,
      url: status.uri,
    }));
};
