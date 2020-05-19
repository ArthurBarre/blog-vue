<template>
  <article class="articleCover">
    <router-link :to="`/article/${id}`">
      <img class="cover" v-bind:style="{ 'background-image': 'url(' + require('../assets/articlesImg/' + img) + ')' }"/>
      <div class="articleCover__infos">
        <aside class="suggestion-date">{{ id }}</aside>
        <h2 class="suggestion-title">{{ title }}</h2>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img", "id"],
};
</script>

<style scoped>

.articleCover {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.articleCover__infos {
  width: 100%;
  margin: .5rem 0;
  padding: .5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.cover {
  height: 150px;
  background-size: 150%;
  width: 100%;
  background-position: center;
}

.suggestion-title {
  max-width: 75%;
  text-align: right;
  font-size: .875rem;
  font-weight: bold;
}

.suggestion-date {
  font-size: .75rem;
}
</style>

