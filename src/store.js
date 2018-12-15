import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [],
  },
  mutations: {
    // link contains the website name + url
    addLink: (state, link) => {
      state.links.push({ Website: link['0'], Url: link['1'] });
    },
  },
  getters: {
    getLinks: state => state.links,
  },
  actions: {

  },
});
