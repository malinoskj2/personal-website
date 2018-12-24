const axios = require('axios');

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
});

export const getRecentCommits = async () => {
  const commit = await api.get('/commits');
  return commit.data;
};

export const getRepos = async () => {
  const repos = await api.get('/repos');
  return repos.data;
};

export const getStatuses = async () => {
  const statuses = api.get('/statuses');
  return statuses.data;
};
