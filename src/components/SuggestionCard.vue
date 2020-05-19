<template>
    <router-link :to="`/article/${id}`" class="articleCover">
      <img class="cover" v-bind:style="{ 'background-image': 'url(' + require('../assets/articlesImg/' + img) + ')' }"/>
      <div class="articleCover__infos">
        <aside class="suggestion-date">{{ id }}</aside>
        <h2 class="suggestion-title">{{ title }}</h2>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img", "id"],
};
</script>

<style scoped>

.articleCover__infos {
  width: 100%;
  margin: .5rem 0;
  padding: .5rem 0;
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
  transition: all .5s ease-out;
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
  font-size: .875rem;
  font-weight: bold;
}

.suggestion-date {
  font-size: .75rem;
}
</style>

