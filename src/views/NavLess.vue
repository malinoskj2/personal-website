<template>
  <div class="navless" >

    <section class="section">
      <div class="container">
        <router-view name="content-a"></router-view>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <router-view name="content-b"></router-view>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <router-view name="content-c"></router-view>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavLess',
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
