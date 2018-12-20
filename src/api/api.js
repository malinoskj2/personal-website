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
    .flatMap(pushed => pushed.payload.commits)
    .value();
};

export const getMastodonStatuses = async () => axios.get(`https://fosstodon.org/api/v1/accounts/${mastodonIdNum}/statuses`, {
  headers: {
    Authorization: `Bearer ${mastodonAccessToken}`, // the token is a variable which holds the token
  },
});
