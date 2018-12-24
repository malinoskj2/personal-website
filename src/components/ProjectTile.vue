<template>

    <div class="tile is-child box j-card">

      <div class="title-line">
        <span class="title has-text-white">{{projectInfo.name}} </span>

             <span class="icon is-small is-pulled-right hover-card-to-see">
               <a :href="projectInfo.html_url">
                 <i class="fab fa-github low-opac-till-hover"></i>
               </a>

             </span>
      </div>

      <p class="has-text-white">{{projectInfo.description}}</p>


      <nav class="level is-clipped is-mobile">

        <div class="level-left">
          <div class="level-item">

            <div class="tags">
              <span class="">
               <span class="tag is-white is-unselectable j-tag low-base-opac"
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
    }
    .j-tag {
       filter: opacity(.92);
         }
    .title {

    }
    a {
      color: inherit;
    }

  .hover-card-to-see {
    filter: opacity(0);
    transition: filter 300ms ease-in-out;
  }

  .j-card:hover .hover-card-to-see{
    filter: opacity(1);
  }

  .j-card hover-card-to-see:hover{
    filter:opacity(1)
  }

  .low-opac-till-hover{
    filter: opacity(.8);
  }
  .low-opac-till-hover:hover {
    cursor: pointer;
    filter: opacity(1);
  }

  .low-base-opac{
    filter: opacity(.8);
  }

  #time-update{
    filter: opacity(.8);
  }
  #time-update:hover {
    cursor:default;
  }

  .low-base-opac:hover {
    filter: opacity(1);
    cursor:pointer;
  }

  .j-card:hover{
    filter: drop-shadow(0px 2px 3px #717171);
    -webkit-filter: drop-shadow(0px 2px 3px #717171);
    -moz-filter: drop-shadow(0px 2px 3px #717171);
  }

  span, p{

  }

  .level {
    margin-top: 1rem;
  }
  .title-line {
    margin-bottom: 1.5rem;
  }

</style>
