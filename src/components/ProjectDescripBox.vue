<template>
  <div class="tile is-child j-card">

    <div class="title-line">
      <span class="title">{{projectInfo.name}} </span>

      <span id="time-update"
            class="is-unselectable">
        ~ updated {{lastPushed}}
      </span>

      <span class="icon is-small gh-icon">
               <a :href="projectInfo.html_url">
                 <i class="fab fa-github low-opac-till-hover"></i>
               </a>
      </span>
    </div>

    <p class="description">{{projectInfo.description}}</p>

  </div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default {
  name: 'ProjectDescripBox',
  props: {
    projectInfo: Object,
  },
  data() {
    return {

    };
  },
  computed: {
    lastPushed() {
      return dayjs(this.projectInfo.pushed_at).fromNow();
    },
  },
  methods: {

  },
};
</script>

<style scoped>
  .description {
    font-size: 1rem;
    font-family: Karla;
    line-height: 1rem;
  }

  .gh-icon {
    transform: scale(.6);
  }

  .title {
    letter-spacing: -2px;
    color: #2455c3;
    font-size: 1.5rem;
    font-family: Karla;
  }

  .title:hover {
    color: #444054;

    background: linear-gradient(
      to bottom, #f46036 0%,
      #f46036 100%
    ) repeat-x 0 100%;
    background-size: 4px 10px;

    text-decoration: none;
    transition: background-size .2s;
  }

  .j-card {
    background: transparent;
    border-radius: 2px;
    padding-bottom: 2rem;
  }

  .title-line:hover {
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  #time-update {
    margin-left: .25rem;
    font-size: .8rem;
    filter: opacity(.8);
  }

  #time-update:hover {
    cursor: default;
  }


</style>
