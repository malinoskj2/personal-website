/* eslint-disable import/no-named-as-default-member,no-unused-vars,no-use-before-define,max-len,arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';

import _ from 'lodash';
import { getRecentCommits, getRepos, getStatuses } from './api/api';

Vue.use(Vuex);

function getEnvLinks() {
  return [{
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
  },
  {
    website: process.env.VUE_APP_WEBSITE_E,
    url: process.env.VUE_APP_LINK_E,
  },
  {
    website: process.env.VUE_APP_WEBSITE_F,
    url: process.env.VUE_APP_LINK_F,
  }];
}

export default new Vuex.Store({
  state: {
    events: [],
    eventsBundled: [],
    projects: [],
    links: getEnvLinks(),
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
    setEvents(state, payload) {
      state.events = payload.events;
    },
    setBundled(state, payload) {
      state.eventsBundled = payload.bundled;
    },
    setProjects(state, payload) {
      state.projects = payload.projects;
    },
  },
  getters: {
    getLinks: state => state.links,
    getEvents2(state) {
      return state.events;
    },
    getEventsBundled(state, getters) {
      return state.eventsBundled;
    },
    getProjects(state, getters) {
      return state.projects;
    },
    // eslint-disable-next-line arrow-body-style
    getProjectsFiltered: (state, getters) => (tags) => {
      return state.projects.filter((project) => {
        const languagesLow = Object.entries(project.languages)
          .map(lang => lang[0].toLowerCase());
        const tagsLow = tags.map(tag => tag.toLowerCase());
        return _.difference(tagsLow, languagesLow).length === 0;
      });
    },
    getAllTags(state, getters) {
      const allTags = state.projects
        .flatMap(project => Object.entries(project.languages).map(lang => lang[0]));

      return Array.from(new Set(allTags));
    },
  },
  actions: {
    async initProjects({ commit }) {
      commit('setProjects', { projects: await getRepos() });
    },
  },
});
