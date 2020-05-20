<template>
  <section class="weekArticle">
    <h3>Article de la semaine</h3>
    <blockquote>
      <h2>{{ title }}</h2>
      <aside>10/06/2020</aside>
      <p>{{ citation }}</p>
    </blockquote>
    <figure>
      <img
        class="cover"
        v-bind:style="{
          'background-image':
            'url(' + require('../assets/articlesImg/' + img) + ')',
        }"
      />
      <router-link :to="`/article/${id}`">
        <img class="handIcon" src="../assets/svg/hand.svg" alt="icon-insta" />
        <p>Lire l'article</p>
      </router-link>
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
.weekArticle {
  margin: 2rem 0;
}

.weekArticle h3 {
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #f8fc3b;
}

.weekArticle blockquote {
  margin: 1rem 0 2rem;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.weekArticle blockquote h2 {
  width: 75%;
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
}

.weekArticle blockquote aside {
  font-size: 0.75rem;
}

.weekArticle blockquote p {
  margin-top: 2rem;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 200;
}

.weekArticle figure {
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
  padding: 2rem 0;
  display: flex;
  align-items: center;
}

.weekArticle figure a img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 2rem;
}

.weekArticle figure a p {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-decoration-line: underline;
}

@media screen and (min-width: 800px) {
  .weekArticle {
    padding: 0 3rem;
    margin-bottom: 8.625rem;
  }

  .weekArticle h3 {
    min-width: 33%;
    padding: 1rem 2.5rem;
    text-align: right;
  }

  .weekArticle blockquote {
    position: relative;
    padding: 1.5rem 4.875rem;
    margin: 0 0 1.5rem;
  }

  .weekArticle figure {
    padding: 0 4.875rem;
    align-items: center;
  }

  .weekArticle figure .cover {
    height: 60vh;
  }

  .weekArticle blockquote aside {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
  }
}
</style>
