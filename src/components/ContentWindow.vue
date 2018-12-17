<template>

<div class="root">
  <section class="section content-window">
    <div class="columns">
        <div class="j-text-area">
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
  props: { },
  data() {
    return { text: ['Hello! 😀', 'Thanks for stopping by my site.'] };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
    .j-text-area {
      margin: 0rem 2rem 0rem 2rem;
      font-size: x-large;
      text-align:left;
      color: #f6f6f6
    }

    .root {
      color: #f6f6f6;
    }


  .graphic-a {
    position: absolute;
    left: 48%;
    top: 90%;
  }

  .content-window {

    position: relative;

    margin: 1rem auto 5rem auto;
    overflow: hidden;
    background-color:#444054;

    min-height: 30rem;
    width: 84rem;
    filter: drop-shadow(5px 5px 2px rgba(39, 39, 39, 0.31));
    transform:scaleX(0);

     border-radius: 30px;
    -webkit-animation: grow-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both,
    half-size 1.2s 6.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: grow-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both,
    half-size 1.2s 6.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  @-webkit-keyframes grow-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50%{
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
    50%{
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
