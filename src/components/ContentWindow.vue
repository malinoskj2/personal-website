<template>

<div class="root">

      <section class="section content-window">
        <div class="columns">
          <div class="j-text-area">
            <vue-typer :text='text'
                       initial-action='typing' repeat='0'
                       :pre-type-delay="1200" caret-animation='solid'
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


  .vue-typer >>> .custom.char.typed {
    color: #f6f6f6;
  }

  .vue-typer >>> .custom.caret {
    background-color: #f6f6f6;
    transform-origin: 100% 100%;
    transform: rotateZ(90deg) scaleY(.5) translateX(-8px  );
  }

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
    transform:scale(1);

     border-radius: 30px;
  }
</style>
