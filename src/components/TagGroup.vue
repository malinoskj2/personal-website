<template>
  <div>
    <h1 id="lang-header">{{groupTitle}}</h1>

    <span v-for="(tag,index) in getTagsWithState" :key="index"
          class="control"
          @click="tagClick(tag)">

      <span class="has-addons">
        <span class="tag is-unselectable low-base-opac"
              :class="{'j-active-tag': tag.isActive}">{{tag.name}}</span>
      </span>

    </span>
  </div>
</template>

<script>
export default {
  name: 'TagGroup',
  props: {
    groupTitle: String,
  },
  data() {
    return {
      activeTags: [],
    };
  },
  computed: {
    getTagsWithState() {
      console.log(this.$store.getters.getAllTags);
      return this.$store.getters.getAllTags.map((tag) => {
        const isActive = this.activeTags.includes(tag);
        return {
          name: tag,
          isActive,
        };
      });
    },

  },
  methods: {
    updateActiveTags(payload) {
      if (this.activeTags.includes(payload.name)) {
        this.activeTags = this.activeTags.filter(tagName => tagName !== payload.name);
      } else {
        this.activeTags.push(payload.name);
      }
    },
    tagClick(tag) {
      console.log(`the tag${tag.name} was clicked`);
      const payload = {
        name: tag.name,
      };
      this.updateActiveTags(payload);

      this.$emit('tag-click', payload);
    },
  },
};
</script>

<style scoped>
  h1 {
    font-family: Lato;
    font-weight: 700;
    font-size: 16px;
  }

  #lang-header {
    margin-bottom: .5rem;
  }
  .j-active-tag {
    background: #292f36;
    color: ghostwhite;
  }

  .tag{
    border: solid 1px #292f36;
    transition: color .3s ease-in-out;
    filter: opacity(.92);
    margin: 0rem .5rem .25rem 0rem;
    filter: opacity(.8);
  }

  .tag:hover {
    filter: opacity(1);
    cursor: pointer;
  }

  .has-addons {
    transition: all 1s;
  }
</style>
