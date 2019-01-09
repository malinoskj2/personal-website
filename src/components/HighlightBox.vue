<template>
  <div class="highlight-box-container">

    <div id="content-box" class="is-8 box">
      <p class="subtitle">Title</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HightlightBox',
  data() {
    return {
      imgSrc: '../resources/bloba.svg',
    };
  },
};
</script>

<style scoped>

  .highlight-box-container {
    position:relative;
  }

  .shape-a {
    filter: hue-rotate(200deg);
    transform: scale(1.6, .8) rotate(80deg) translate(-50%,-10%);
    position: absolute;
  }

  .shape-b {

    transform: skew(20deg) scale(1.3, .4) rotate(80deg) translate(-100%,-20%);
    position: absolute;
  }

   #content-box {
     border-left: 0rem solid #292f36;

     min-height: 400px;
     border-radius:.25px;
     transition: all 230ms;
     transform:scale(1.06);
     transform-origin: right;
  }

  #content-box:hover{
    cursor: pointer;
    border-left: .25rem solid #292f36;
  }

  @keyframes box-scale-up {
    0% {
      border-left: 0rem solid #292f36;
    }
    100% {

    }
  }

  @keyframes box-slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
