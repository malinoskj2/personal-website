<template>
  <div class="tile is-child j-card">

    <div class="title-line">
      <span class="title has-text-black">{{projectInfo.name}} </span>
    </div>

    <p class="has-text-black">{{projectInfo.description}}</p>


    <nav class="level is-clipped is-mobile">

      <div class="level-left">
        <div class="level-item">

          <div class="tags">
              <span class="">
               <span class="tag is-black is-unselectable j-tag low-base-opac"
                     v-for="(langCount, langName, index) in projectInfo.languages"
                     :key="index"> {{langName}}</span>

              </span>
          </div>
        </div>

      </div>


      <div class="level-right">
        <div class="level-item">
            <span id="time-update"
                  class="is-unselectable is-pulled-right
                    ">updated {{lastPushed}} </span>
        </div>
      </div>


    </nav>


  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProjectDescripBox',
  props: {
    projectInfo: Object,
  },
  data() {
    return {};
  },
  computed: {
    lastPushed() {
      return moment(this.projectInfo.pushed_at).fromNow();
    },
  },
  methods: {},
};
</script>

<style scoped>

  .j-card {
    background: transparent;
    border-radius: 2px;
    padding-bottom: 2rem;
    border-bottom: 1px solid;
  }

  .j-tag {
    filter: opacity(.92);
  }
  .tags {
    margin-right: 1rem;
  }


  a {
    color: inherit;
  }

  .hover-card-to-see {
    filter: opacity(0);
    transition: filter 300ms ease-in-out;
  }

  .j-card:hover .hover-card-to-see {
    filter: opacity(1);
  }

  .j-card hover-card-to-see:hover {
    filter: opacity(1)
  }

  .low-base-opac {
    filter: opacity(.8);
  }

  #time-update {
    filter: opacity(.8);
  }

  #time-update:hover {
    cursor: default;
  }

  .low-base-opac:hover {
    filter: opacity(1);
    cursor: pointer;
  }

  .level {
    margin-top: 1rem;
  }

  .title-line {
    margin-bottom: 1.5rem;
  }

</style>
