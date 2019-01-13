import { expect, assert, should } from 'chai';
import { shallowMount } from '@vue/test-utils';

// Check if required variables are present in environment
(function varsExist() {
  const shouldExistVars = [
    'VUE_APP_NAV_WEBSITES',
    'VUE_APP_NAV_LINKS',
    'VUE_APP_GITHUB_USER',
    'VUE_APP_MASTODON_ACCESS_TOKEN',
    'VUE_APP_MASTODON_ID',
    'VUE_APP_INTRO_TEXT',
    'VUE_APP_HOST',
    'VUE_APP_HIGHLIGHTS',
  ];

  shouldExistVars.forEach((envVar) => {
    assert(process.env[envVar], `${envVar} exists`);
  });
}());
