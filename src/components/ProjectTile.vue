<template>

  <div class="tile is-child box j-card">

    <div class="title-line">

             <span class="icon is-small is-pulled-right hover-card-to-see">
               <a :href="projectInfo.html_url">
                 <i class="fab fa-github low-opac-till-hover"></i>
               </a>

             </span>
    </div>

  </div>


</template>

<script>
import moment from 'moment';

export default {
  name: 'ProjectTile',
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
    background: #393d3f;
    border-radius: 2px;
    color: #f6f6f6;
    min-height: 100%;
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

  .low-opac-till-hover {
    filter: opacity(.8);
  }

  .low-opac-till-hover:hover {
    cursor: pointer;
    filter: opacity(1);
  }

  .j-card:hover {
    filter: drop-shadow(0px 1px 1px #717171);
    -webkit-filter: drop-shadow(0px 1px 1px #717171);
    -moz-filter: drop-shadow(0px 1px 1px #717171);
  }

  .title-line {
    margin-bottom: 1.5rem;
  }

</style>
