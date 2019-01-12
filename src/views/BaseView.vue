<template>
  <div class="base-view"
       :class="{ 'view-a': boxPosA, 'view-b': !boxPosA }" >

    <section class="section nav-section nav-section-mob">
      <div class="container">
        <router-view name="nav" class="" ></router-view>
      </div>
    </section>

      <div class="container intro-text is-hidden-mobile">
        <div ref="homePageRoot">

          <div class="page-content section">
            <div  class="columns"
                  ref="projectList">

              <div  class="column is-4-fullhd is-8-desktop">
                <router-view name="pre-content"
                :introTextContent="introTextContent"
                :introTextLinks="introTextLinks"/>
              </div>

              <div class="column is-3 is-offset-1 is-hidden-mobile">
                <div class="right-side-box box-pos-a"
                      @click="toggleBoxPos"></div>
              </div>

            </div>
          </div>

        </div>
      </div>


    <section class="section project-list">
      <div class="container">
        <div ref="homePageRoot" class="home-page">

          <div class="page-content section">
              <div  class="columns is-centered"
                  :style="{'min-height': dynamicMin +'px'}"
                  ref="projectList">

              <router-view name="left-content"
                           class="left-content-mob"
                          :projectList="projectsHighlights"
                           projectListTitle="Projects"
                          ></router-view>

              <div class="is-6">
                  <router-view name="right-content"
                               :groupTitle="groupTitle"
                               :projectList="projectsFiltered"
                               projectListTitle="Everything"
                               :tagsWithState="tagsWithState"
                               @tag-click="updateActiveTags"/>
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>


    <router-view name="footer"/>

  </div>
</template>

<script>
export default {
  name: 'BaseView',
  data() {
    return {
      dynamicMin: 0,
      reactiveShapes: true,
      shapeKind: 'rectangle',
      introTextLinks: [
        { website: 'Mastodon', url: 'https://fosstodon.org/@malinoskj2', color: '#f46036' },
        { website: 'Github', url: 'https://github.com/malinoskj2', color: '#f46036' },
      ],
      boxPosA: true,
    };
  },
  props: {
    groupTitle: String,
  },
  methods: {
    updateActiveTags(payload) {
      this.$store.commit('updateActiveTags', payload);
    },
    toggleBoxPos(payload) {
      this.boxPosA = !this.boxPosA;
    },
  },
  computed: {
    tagsWithState() {
      return this.$store.getters.getTagsWithState;
    },
    projectsFiltered() {
      return this.$store.getters.getProjectsFiltered;
    },
    projectsHighlights() {
      return this.$store.getters.getProjectsHighlights;
    },
    introTextContent() {
      return this.$store.getters.getIntroTextContent;
    },
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
};
</script>
<style scoped>
  @media (min-width:769px) {
    .page-content {
      padding: 0rem 5.5rem 0rem 5.5rem;
    }
  }
  .home-page {
    min-height: 720px;
  }

  .project-list {
    filter: opacity(0);
    animation: list-in-ani 1600ms 2s forwards;
   }

  @keyframes list-in-ani {
    0% {
      filter: opacity(0);

    }
    60%{
      filter: opacity(.8);

    }
    100% {
      filter: opacity(1);

    }
  }

  .right-side-box {
    background-color: #f46036;
    min-height: 40vh;
    min-width: 54vw;
    position: fixed;
    will-change: transform;
    backface-visibility: hidden;
  }

  .right-side-box:hover {
    cursor: pointer;
  }

  .base-view {
    transition: 350ms ease-in-out transform;
  }

  .view-a {
    transform: translate(0%,0%);
  }

  .view-b {
    transform: translate(0%,20vh);
  }

  .box-pos-a {
    top: -64vh;
    transform: translateX(6%);
  }

  .intro-content {
    margin: -4rem 0rem 4rem 0rem;
  }

  .intro-col {
    margin-left: 10rem;
  }

  .intro-text {
    position: relative;
    z-index: 3;
    margin-bottom: 8rem;
  }

  .nav-section {
    margin-top: 30vh;
  }

  .highlight-boxes {
    padding: .25rem;
    margin-top: 8rem;
    z-index: -10;
    background-color: #f5f5f5;
  }

  @media (max-width:768px) {
    .nav-section-mob {
      margin: -4rem 0rem 0rem 0rem;
      padding-bottom: 0rem;
    }
  }

  @media only screen
  and (min-width: 769px) and (max-width: 1024px)  {
    .left-content-mob{
      transform: translateX(20%);
    }
  }

</style>
