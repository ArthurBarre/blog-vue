<template>
  <router-link :to="`/article/${id}`" class="articleCover">
    <img
      class="cover"
      v-bind:style="{
        'background-image':
          'url(' + require('../assets/articlesImg/' + img) + ')',
      }"
    />
    <div class="articleCover__infos">
      <aside class="suggestion-date">{{ date }}</aside>
      <h2 class="suggestion-title">{{ title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img", "id", "date"],
};
</script>

<style scoped>
.articleCover__infos {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid black;
}

.cover {
  height: 150px;
  background-size: 150%;
  width: 100%;
  background-position: center;
  transition: all 0.5s ease-out;
}

.articleCover:hover .cover {
  background-size: 130%;
}

.articleCover:hover {
  letter-spacing: normal;
}

.suggestion-title {
  max-width: 70%;
  text-align: right;
  font-size: 0.875rem;
  font-weight: bold;
}

.suggestion-date {
  font-size: 0.75rem;
}
</style>
