import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    getLinks: state => state.links,
  },
  actions: {},
});
