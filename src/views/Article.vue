<template>
  <div class="article">
    <Header />
    <main>
      <article v-if="article">
        <h1 class="article-title">{{ article.author }}</h1>
        <a class="instagram-link" href="">
          <img class="handIcon" src="../assets/svg/hand.svg" alt="icon-insta" />
          <p>Son instagram</p>
        </a>
        <figure>
          <img
            v-if="article.img"
            class="article-img"
            :src="require('../assets/articlesImg/' + article.img)"
            alt="Food Influencer"
          />
          <figcaption>Date de l’article et genre Credit</figcaption>
        </figure>
        <p class="article-content">
          {{ article.content }}
        </p>
        <blockquote class="article-citation-container">
          <h3 class="article-citation-title">Elle nous a dit :</h3>
          <p class="article-citation-desc" v-if="article.citation">
            {{ article.citation }}
          </p>
        </blockquote>
        <aside class="sign-container">
          <h3 class="sign-title">Signe particulier :</h3>
          <p class="sign-desc" v-if="article.sign">
            {{ article.sign }}
          </p>
        </aside>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return { article: null };
  },
  created() {
    fetch(`https://api.npoint.io/cee526d970a090037ac5`)
      .then((response) => response.json())
      .then((data) => (this.article = data.articles[this.$route.params.id]));
  },
  name: "Listing",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

main {
  margin: 2rem 0;
  padding: 0 1rem;
}
.article-title {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 32px;
}

.article-title:after {
  content: "";
  display: block;
  width: 65%;
  height: 1px;
  margin-top: 1rem;
  background-color: black;
}

.instagram-link {
  padding: 1rem 0;
  display: flex;
  align-items: center;
}

.instagram-link img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
}

.instagram-link p {
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.75rem;
  text-decoration-line: underline;
}

figure img {
  width: 100%;
  margin-bottom: 2rem;
}

figcaption {
  display: none;
}

.article-content {
  font-size: .875rem;
  font-weight: 200;
  line-height: 1.5;
}

.article-content::first-letter {
  font-size: 1.5rem;
  font-weight: 600;
}

.article-citation-container {
  margin: 2rem 0;
}

.article-citation-title {
  margin-bottom: .5rem;
  font-size: .938rem;
  font-weight: 700;
}

.article-citation-desc {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.3;
}

.sign-container {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}

.sign-title {
  font-size: .938rem;
  font-weight: 700;
}
.sign-desc {
  margin-top: 0.5rem;
  font-size: .938rem;
  line-height: 1.5;
}
</style>
