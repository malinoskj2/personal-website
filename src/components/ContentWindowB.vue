<template>
  <div class="root">

    <section class="section content-windowB">

      <div class="columns">
        <div class="j-text-area2">

          <vue-typer :text='text'
                     initial-action='typing' repeat='0'
                     :pre-type-delay="100" caret-animation='solid'
          ></vue-typer>


          <EventItem v-for="(event,index) in getEvents" :event="event" :key="index"
                     class="j-text"/>


        </div>
      </div>
    </section>

  </div>
</template>
<script>
/* eslint-disable no-unused-vars */

import _ from 'lodash';
import EventItem from './EventItem.vue';


export default {
  name: 'ContentWindow',
  props: {},
  components: {
    EventItem,
  },
  data() {
    return {
      text: ['Here\'s what I\'ve been up to lately.'],
    };
  },
  computed: {
    getEvents() {
      const events = _.take(this.$store.getters.getEvents2, 15);
      return events.reverse();
    },
    getBundled() {
      return this.$store.getters.getEventsBundled;
    },
  },
  methods: {},
};
</script>
<style scoped>
  .j-text {
    color: #444054;
  }

  .vue-typer >>> .custom.char.typed {
    color: #444054;
  }

  .vue-typer >>> .custom.caret {
    background-color: #f6f6f6;
    transform-origin: 100% 100%;
    transform: rotateZ(90deg) scaleY(.5) translateX(-8px);
  }

  .j-text-area2 {
    margin: 0rem 2rem 0rem 2rem;
    font-size: large;
    text-align: left;
    color: #444054;
  }

  .root {
    color: #f6f6f6;
  }

  .graphic-a {
    position: absolute;
    left: 48%;
    top: 90%;
  }

  .content-windowB {

    position: relative;

    margin: 1rem auto 5rem auto;
    overflow: hidden;
    background-color: transparent;
    border: solid #f46036;

    min-height: 30rem;
    width: 34rem;

    border-radius: 30px;
  }
</style>
