<template>
  <section class="suggestions">
    <h2>OMF | Recommande</h2>
    <div class="suggestions-container">
      <div class="card" v-for="article in articles" :key="article.id">
        <SuggestionCard
          v-if="article.img"
          v-bind:title="article.author"
          v-bind:id="article.id"
          v-bind:img="article.img"
          v-bind:date="article.date"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SuggestionCard from "@/components/SuggestionCard.vue";
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
        this.articles = articlesAleatContent;
      });
  },
  name: "Suggestions",
  components: {
    SuggestionCard,
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
  }
}
.suggestions {
  margin-top: 1rem;
}

.suggestions h2 {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
}

.card {
  width: 33%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.suggestions-container {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
