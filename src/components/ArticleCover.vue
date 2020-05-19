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

<style>
.listing-image {
  max-width: 100px;
}
</style>

<script>
export default {
  name: "ArticleCover",
  props: ["title", "img"],
};
</script>
