<template>
  <section class="weekArticle">
    <h3>Article de la semaine</h3>
    <blockquote>
      <h2>{{ title }}</h2>
      <p>{{ citation }}</p>
      <aside>10/06/2020</aside>
    </blockquote>
    <figure>
      <img
        class="week-image"
        :src="require('../assets/articlesImg/' + img)"
        alt="Food Influencer"
      />
      <router-link :to="`/article/${id}`">Lire l'article</router-link>
    </figure>
  </section>
</template>

<script>
export default {
  name: "WeekArticle",
  props: ["img", "title", "citation", "id"],
};
</script>

<style scoped>
.weekArticle h3 {
  max-width: 29rem;
  padding: 1rem 2.5rem;
  text-align: right;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #f8fc3b;
}

.weekArticle blockquote {
  position: relative;
  padding: 1.5rem 4.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.weekArticle blockquote h2 {
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
}

.weekArticle blockquote p {
  font-size: 1.125rem;
  font-style: italic;
}

.weekArticle blockquote p strong {
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
}

.weekArticle blockquote aside {
  position: absolute;
  bottom: 0.5rem;
  right: 0;
}

.weekArticle figure {
  padding: 1.5rem 4.5em 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weekArticle figure a {
  margin-top: 3rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
}
.week-image {
  max-width: 80vw;
}
</style>
