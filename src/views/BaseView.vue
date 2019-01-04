<template>
  <div class="base-view" >

    <router-view name="nav" class=""></router-view>

    <section class="section">
      <div class="container">
        <router-view name="content-a" class="" ></router-view>
      </div>
    </section>

    <router-view name="footer"/>

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
</style>
