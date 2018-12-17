<template>

  <div class="root">
    <section class="section content-windowB">
      <div class="columns">
        <div class="j-text-area2">
          <vue-typer :text='text'
                     initial-action='typing' repeat='0'
                     pre-type-delay="1200s" caret-animation='solid'
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
    return { text: ["Here's what I've been up to."] };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>

  .vue-typer >>> .custom.char.typed {
    color: #444054;
  }

  .vue-typer >>> .custom.caret {
    background-color: #f6f6f6;
    transform-origin: 100% 100%;
    transform: rotateZ(90deg) scaleY(.5) translateX(-8px  );
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

  @-webkit-keyframes grow-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50% {
      transform: scaleX(.5) scaleY(.3);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @keyframes fade-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50% {
      transform: scaleX(.5) scaleY(.3);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @-webkit-keyframes half-size {
    0% {
      width: 84rem;
    }
    70% {
      width: 30rem;
    }
    100% {
      width: 34vw;
    }
  }

  @keyframes half-size {
    0% {
      width: 70vw;
    }
    70% {
      width: 30rem;
    }
    100% {
      width: 34vw;
    }
  }
</style>
