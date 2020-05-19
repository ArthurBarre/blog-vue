<template>
  <router-link :to="`/article/${id - 1}`">
    <article>
      <img
        class="listing-image"
        :src="require('../assets/articlesImg/' + img)"
        alt="Food Influencer"
      />
      <div class="article-info">
        <h5>{{ date }}</h5>
        <h2 class="suggestion-title">{{ title }}</h2>
      </div>
    </article>
  </router-link>
</template>

<style scoped>
.listing-image {
  max-width: 80%;
  object-fit: fill;
  margin-bottom: 0.5rem;
}
article {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.article-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.separator {
  width: 100%;
  margin: 0;
}
.suggestion-title {
  max-width: 170px;
  text-align: right;
  font-size: 12px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img", "id", "date"],
};
</script>
