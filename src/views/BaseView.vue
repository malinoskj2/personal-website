<template>
  <div class="home" >

    <router-view name="nav" class=""></router-view>

    <section class="section">
      <div class="container">
        <router-view name="content-a" class="" ></router-view>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
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
