<template>
  <div>
    <h1 id="lang-header">{{groupTitle}}</h1>

    <span v-for="(tag,index) in tagsWithState" :key="index"
          class="control"
          @click="$emit('tag-click',tag)">

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
    tagsWithState: {
      type: Array,
      default: () => [{ name: 'noName', isActive: false }],
    },
    groupTitle: {
      type: String,
      default: 'unableToGetTags',
    },
  },
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {
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
