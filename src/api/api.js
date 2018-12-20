/* eslint-disable no-useless-concat,no-unused-vars,arrow-parens,quotes */
const axios = require('axios');
const _ = require('lodash');

const githubUser = process.env.VUE_APP_GITHUB_USER;

export const getGithubEvents = async () => axios.get(`https://api.github.com/users/${githubUser}/events`);

export const getRecentCommits = async () => {
  const events = await getGithubEvents();

  return _(events.data)
    .filter(event => event.type === 'PushEvent')
    .flatMap(pushed => pushed.payload.commits)
    .value();
};
