<template>
  <div id="intro-text">
     <p v-html="introHtml" class="intro-text-container"></p>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
  name: 'IntroText',
  props: {
    introTextContent: {
      type: String,
      default: 'no content provided',
    },
    introTextLinks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    introHtml() {
      const mapLinksToContent = (introContent, linksToMap, linkClass) =>

          linksToMap.reduce((acc, { website, url, color}) => {

        return acc.replace(
          website,
          `<span class="${linkClass}"><a href="${url}" style="color:${color}; outline: 0;">${website}</a></span>`,
        );
      }, introContent);

      const wrapInTag = (html, tag) => `<${tag}>${html}</${tag}>`;

      const contentWithLinks = mapLinksToContent(this.introTextContent,
        this.introTextLinks, 'j-link');

      return wrapInTag(contentWithLinks, 'div');
    },
  },
  method: {

  },
};
</script>

<style scoped>
  p {
    font-size: 1.10rem;
  }

  .intro-text-container >>> .j-link {
      display: inline-block;
      transition: 180ms all ease-in-out;
      will-change: auto;
      transform: scale(1) translateY(0);
  }

  .intro-text-container >>> .j-link:hover, .j-link:focus {
    outline: 0;
    transform: scale(1.05) translateY(-2%);
    filter: drop-shadow(0px -1px 1px rgba(41, 47, 54, 0.12));
  }



</style>
