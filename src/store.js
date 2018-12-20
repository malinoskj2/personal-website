/* eslint-disable import/no-named-as-default-member */
import Vue from 'vue';
import Vuex from 'vuex';

import _ from 'lodash';

import { getRecentCommits, getMastodonStatuses } from './api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commits: [],
    statuses: [],
    links: [{
      website: process.env.VUE_APP_WEBSITE_A,
      url: process.env.VUE_APP_LINK_A,
    },
    {
      website: process.env.VUE_APP_WEBSITE_B,
      url: process.env.VUE_APP_LINK_B,
    },
    {
      website: process.env.VUE_APP_WEBSITE_C,
      url: process.env.VUE_APP_LINK_C,
    },
    {
      website: process.env.VUE_APP_WEBSITE_D,
      url: process.env.VUE_APP_LINK_D,
    }],
  },
  mutations: {
    // link contains the website name + url
    addLink(state, payload) {
      const weblink = {
        website: payload.website,
        url: payload.url,
      };
      state.links.push(weblink);
    },
    setCommits(state, payload) {
      state.commits = payload.githubCommits;
    },
    setStatuses(state, payload) {
      state.statuses = payload.mastodonStatuses;
    },
  },
  getters: {
    getLinks: state => state.links,
    getCommits(state) {
      return state.commits;
    },
    getCommitMessages(state) {
      return _(state.commits)
        .map(commit => commit.message);
    },
    getStatuses(state) {
      return state.statuses;
    },
  },
  actions: {
    async loadRecentCommits({ commit }) {
      const recentCommits = await getRecentCommits();
      commit('setCommits', { githubCommits: recentCommits });
    },
    async loadRecentStatuses({ commit }) {
      const recentStatuses = await getMastodonStatuses();
      commit('setStatuses', { mastodonStatuses: recentStatuses });
    },
  },
});
