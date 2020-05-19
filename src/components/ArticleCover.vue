<template>
  <article>
    <img
      class="listing-image"
      :src="require('../assets/articlesImg/' + img)"
      alt="Food Influencer"
    />
    <h2>{{ title }}</h2>
  </article>
</template>

<style scoped>
.listing-image {
  max-width: 100px;
}
article {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img"],
};
</script>
