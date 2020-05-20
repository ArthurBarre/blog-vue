<template>
  <section class="suggestions">
    <h2>OMF | Recommande</h2>
    <ul class="suggestions__list">
      <li class="card" v-for="article in articles" :key="article.id">
        <ArticleCover
          v-if="article.img"
          v-bind:title="article.author"
          v-bind:id="article.id"
          v-bind:img="article.img"
          v-bind:date="article.date"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ArticleCover from "@/components/ArticleCover.vue";
export default {
  data() {
    return { articles: null };
  },
  created() {
    fetch(`https://api.npoint.io/cee526d970a090037ac5`)
      .then((response) => response.json())
      .then((data) => {
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

        let articles = data.articles;
        let length = articles.length;
        let articlesAleat = [];
        let articlesAleatContent = [];

        for (let i = 0; i < 3; i++) {
          articlesAleat.push(getRandomInt(length));
        }

        articlesAleat.map((a) => {
          articlesAleatContent.push(articles[a]);
        });
        console.log(articlesAleatContent);

        this.articles = articlesAleatContent;
      });
  },
  name: "Suggestions",
  components: {
    ArticleCover,
  },
};
</script>

<style scoped>
.suggestions {
  display: none;
}

@media screen and (min-width: 800px) {
  .suggestions {
    display: block;
    margin: 0 3rem 5rem;
    padding: 1.5rem 4.875rem;
    border-top: 1px solid black;
  }

  .suggestions h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .suggestions__list {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .suggestions__list li {
    width: 30%;
    min-width: 250px;
    margin-bottom: 2rem;
  }

  .suggestions__list li:nth-child(2) {
    margin: 0 5%;
  }
}
</style>
