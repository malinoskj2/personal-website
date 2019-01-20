import Vue from 'vue';
import Vuex from 'vuex';
import initApi from '@/client/client';
import _ from 'lodash';

Vue.use(Vuex);

function initLinks(siteNameList, siteUrlList, delimiter = ',') {
  return _.zip(siteNameList.split(delimiter), siteUrlList.split(delimiter))
    .map((siteName, siteUrl) => ({ website: siteName, url: siteUrl }));
}

export default new Vuex.Store({
  state: {
    api: null,
    projects: [],
    links: initLinks(
      process.env.VUE_APP_NAV_WEBSITES,
      process.env.VUE_APP_NAV_LINKS,
    ),
    introTextContent: process.env.VUE_APP_INTRO_TEXT,
    highlights: ['prompt_j2'],
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
    setProjects(state, payload) {
      state.projects = payload.projects;
    },
    setApi(state, payload) {
      state.api = payload.api;
    },
  },
  getters: {
    getLinks: state => state.links,
    getProjects(state, getters) {
      return state.projects;
    },
    getProjectsHighlights(state, getters) {
      const { highlights } = state;
      return state.projects.filter(project => highlights.includes(project.name));
    },
    getIntroTextContent(state) {
      return state.introTextContent;
    },
    getIntroTextLinks(state) {
      console.log('running getIntroTextLinks()');
      return state.introTextLinks;
    },
  },
  actions: {
    async initApi({ commit, state }) {
      const api = await initApi();

      commit('setApi', { api });
    },
    async initProjects({ commit, state, dispatch }) {
      if (state.api) {
        commit('setProjects', { projects: await state.api.get('repos') });
      } else {
        dispatch('initApi')
          .catch(() => console.log('failed to init api'))
          .then(() => state.api.get('repos'))
          .catch(() => console.log('failed to get repos'))
          .then((repos) => {
            commit('setProjects', { projects: repos });
          });
      }
    },
  },
});
