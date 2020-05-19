<template>
  <article>
    <img
      class="listing-image"
      :src="require('../assets/articlesImg/' + img)"
      alt="Food Influencer"
    />
    <!-- <div
      class="listing-image"
      :style="{ backgroundImage: `url(../assets/articlesImg/${img})` }"
    ></div> -->
    <hr class="separator" />
    <div class="article-info">
      <h2>{{ id }}</h2>
      <h2 class="suggestion-title">{{ title }}</h2>
    </div>
    <hr class="separator" />
  </article>
</template>

<style scoped>
.listing-image {
  max-width: 200px;
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
  props: ["title", "img", "id"],
};
</script>
