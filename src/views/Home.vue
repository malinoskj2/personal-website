<template>
  <div class="home" >

      <div class="container">


            <nav class="level j-header is-hidden-mobile">

              <div class="level-left">
                <div class="level-item">
                  <router-view name="a" class="" ></router-view>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item">
                  <transition appear name="fade">
                    <router-view name="d" class=""></router-view>
                  </transition>
                </div>
              </div>
            </nav>


       <div class="columns j-content">
         <router-view name="c" class="column" ></router-view>
       </div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
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
  .j-header {
    margin-left: 1rem;
    overflow: visible
  }

  .j-content{
    margin:auto;
  }
</style>
