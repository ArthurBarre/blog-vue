<template>
  <div>
    <Header />
    <main>
      <nav>
        <ul>
          <li>
            <div class="content">
              <div class="card" v-for="article in articles" :key="article.id">
                <router-link :to="`/article/${article.id}`">
                  <ArticleCover
                    v-if="article.img"
                    v-bind:title="article.author"
                    v-bind:img="article.img"
                  />
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </main>
    <Footer />
  </div>
</template>

<style>
.card {
  width: 30%;
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import Header from "@/components/Header.vue";
import ArticleCover from "@/components/ArticleCover.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return { articles: null };
  },
  created() {
    fetch("https://api.npoint.io/cee526d970a090037ac5")
      .then((response) => response.json())
      .then((data) => (this.articles = data.articles));
  },
  name: "Listing",
  components: {
    Header,
    ArticleCover,
    Footer,
  },
};
</script>
