<template>
  <div class="root">

    <section class="section content-windowB">
      <p> {{getEvents}}</p>
      <div class="columns">
        <div class="j-text-area2">
          <vue-typer :text='text'
                     initial-action='typing' repeat='0'
                     :pre-type-delay="100" caret-animation='solid'
          ></vue-typer>
        </div>
      </div>
    </section>

  </div>
</template>
<script>

export default {
  name: 'ContentWindow',
  props: {},
  data() {
    return {
      text: ['Here\'s what I\'ve been up to lately.'],
    };
  },
  computed: {
    getEvents() {
      return this.$store.getters.getEvents.map(event => event.url);
    },
  },
  methods: {},
};
</script>
<style scoped>
  p {
    color: red;
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
    font-size: x-large;
    text-align: left;
    color: #444054
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
