/* eslint-disable import/no-named-as-default-member,no-unused-vars,no-use-before-define */
import Vue from 'vue';
import Vuex from 'vuex';

import _ from 'lodash';

import { getRecentCommits, getMastodonStatuses } from './api/api';

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
  }];
}

export default new Vuex.Store({
  state: {
    events: [],
    eventsBundled: [],
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
  },
  getters: {
    getLinks: state => state.links,
    getEvents2(state) {
      return state.events;
    },
    getEventsBundled(state, getters) {
      return state.eventsBundled;
    },
  },
  actions: {
    async initEvents({ commit }) {
      const commits = await getRecentCommits();
      const statuses = await getMastodonStatuses();
      const events = merge(commits, statuses);

      commit('setBundled', { bundled: groupByDate(events) });
      commit('setEvents', { events });
    },
  },
});

function merge(a, b) {
  const events = [];
  a.forEach(status => events.push(status));
  b.forEach(status => events.push(status));
  return events;
}

function groupByDate(objsWithDate) {
  return _(objsWithDate)
    .groupBy(obj => obj.time);
}
