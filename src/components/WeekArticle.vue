<template>
  <section class="weekArticle">
    <h3>Article de la semaine</h3>
    <blockquote>
      <h2>{{ title }}</h2>
      <aside>10/06/2020</aside>
      <p>{{ citation }}</p>
    </blockquote>
    <figure>
      <div class="cover" v-bind:style="{ 'background-image': 'url(' + require('../assets/articlesImg/' + img) + ')' }"></div>
      <router-link :to="`/article/${id - 1}`">Lire l'article</router-link>
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

/* .weekArticle blockquote aside {
  position: absolute;
  bottom: 0.5rem;
  right: 0;
} */

.weekArticle h3 {
  max-width: 29rem;
  padding: 1rem 2.5rem;
  text-align: right;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #f8fc3b;
}

.weekArticle {
  margin: 2rem 0;
}

.weekArticle h3 {
  width: fit-content;
  padding: 1rem 2rem;
}

.weekArticle blockquote {
  margin: 1rem 0 2rem;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
}

.weekArticle blockquote h2 {
  width: 75%;
  font-size: 1.75rem;
  font-weight: 900;
}

.weekArticle blockquote aside {
  font-size: .75rem;
}

.weekArticle blockquote p {
  margin-top: 2rem;
  font-size: 1.125rem;
}

.weekArticle figure {
  padding: 1.5rem 4.5em 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0 1rem;
}

.weekArticle figure .cover {
  width: 100%;
  height: 148px;
  background-image: url(/img/ladeyn.9601d92d.png);
  background-position: center;
  background-size: 120%;
}

.weekArticle figure a {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
