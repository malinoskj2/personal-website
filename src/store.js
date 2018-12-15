import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [],
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
  },
  getters: {
    getLinks: state => state.links,
  },
  actions: {

  },
});
