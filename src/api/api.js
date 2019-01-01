const axios = require('axios');

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
});

export const getRecentCommits = async () => {
  const commit = await api.get('/commits')
    .catch(error => console.log(error));

  return commit.data;
};

export const getRepos = async () => {
  const repos = await api.get('/repos')
    .catch(error => console.log(error));

  return repos.data;
};

export const getStatuses = async () => {
  const statuses = api.get('/statuses')
    .catch(error => console.log(error));

  return statuses.data;
};
