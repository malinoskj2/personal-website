<template>
  <div class="tile is-child j-card">

    <div class="title-line">
      <span class="title">
        <a :href="projectInfo.html_url">{{projectInfo.name}}</a>
      </span>

      <span id="time-update"
            class="is-unselectable">
        updated {{lastPushed}}
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
  name: 'ProjectListItem',
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
    padding-bottom: 2rem;
  }

  .j-card:hover {
    background: linear-gradient( to right, #f5f5f5, #ffffff);

    border-radius: 2px;
    cursor: pointer;
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
    filter: opacity(.65);
  }

  #time-update:hover {
    cursor: default;
  }


</style>
