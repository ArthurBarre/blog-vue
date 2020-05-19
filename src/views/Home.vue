<template>
  <div class="home">
    <Header />
    <main>
      <Intro />
      <WeekArticle
        v-bind:title="article.author"
        v-bind:id="article.id"
        v-bind:img="article.img"
        v-bind:citation="article.citation"
      />
      <Suggestions />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import WeekArticle from "@/components/WeekArticle.vue";
import Suggestions from "@/components/Suggestions.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return { article: null };
  },
  created() {
    fetch(`https://api.npoint.io/cee526d970a090037ac5`)
      .then((response) => response.json())
      .then((data) => {
        let articles = data.articles;
        let length = articles.length;
        let article = articles[length - 4];
        console.log(article);
        this.article = article;
      });
  },
  name: "Home",
  components: {
    Header,
    Intro,
    WeekArticle,
    Suggestions,
    Footer,
  },
};
</script>

<style scoped></style>
