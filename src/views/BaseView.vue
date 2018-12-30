<template>
  <div class="base-view" >

    <router-view name="nav" class=""></router-view>

    <section class="section">
      <div class="container">
        <router-view name="content-a" class="" ></router-view>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p id="thank-you"><strong>thanks for visting my site</strong></p>
        <p>
          Copyright <strong>©</strong> 2018 Jesse Malinosky. The source code is licensed
          <a href="https://opensource.org/licenses/BSD-2-Clause">BSD 2-Clause</a>.
          The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BaseView',
  data() {
    return {};
  },
  components: {
  },
  methods: {

  },
  computed: {
  },
  created() {

  },
};
</script>
<style>
  .footer {
    margin: .5rem;
    background: rgba(214, 248, 214, 0.47);
  }
  #thank-you {
    font-family: Karla;
    font-size: .75rem;
  }
</style>
