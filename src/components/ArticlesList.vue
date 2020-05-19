<template>
  <section class="coversList">
    <h1>Tous nos articles</h1>
    <nav class="coversNav">
      <ul class="coversNav__list">
        <li class="card" v-for="article in articles" :key="article.id">
          <router-link :to="`/article/${article.id}`">
            <ArticleCover
              v-if="article.img"
              v-bind:title="article.author"
              v-bind:img="article.img"
            />
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="test">

    </section>
  </section>
</template>

<script>
import ArticleCover from "@/components/ArticleCover.vue";

export default {
  name: 'ArticlesList', 
  data() {
    return { articles: null };
  },
  created() {
    fetch("https://api.npoint.io/cee526d970a090037ac5")
      .then((response) => response.json())
      .then((data) => (this.articles = data.articles));
  },
  components: {
    ArticleCover
  },
};
</script>

<style scoped>
  .coversList {
    padding: 4rem 1rem 0;
    background-color: rgba(255, 255, 255, 0.582);
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .coversNav ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .coversNav ul li {
    width: 48%;
    margin-bottom: 2rem;
  }

  .coversNav ul li img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 800px) {
    .coversList {
      padding: 4rem 3rem;
    }

    h1 {
      margin-bottom: 4rem;
      text-align: right;
      font-size: 2rem;
      font-weight: 900;
    }
    .coversNav ul li {
      width: 32%;
    }
  }
</style>