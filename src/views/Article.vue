<template>
  <div class="article">
    <Header />
    <div>
      <article v-if="article">
        <h1 class="article-title">{{ article.author }}</h1>
        <hr class="separator" />
        <div class="insta-container">
          <img src="../assets/icons/instaLink.svg" alt="icon-insta" />
          <a class="instagram-link" href="">Son instagram</a>
        </div>
        <figure v-if="article.img" class="img-container">
          <img
            class="article-img"
            :src="require('../assets/articlesImg/' + article.img)"
            alt="Food Influencer"
          />
          <figcaption>{{ article.date }}</figcaption>
        </figure>
        <p class="article-content">
          {{ article.content }}
        </p>
        <blockquote v-if="article.citation" class="article-citation-container">
          <h3 class="article-citation-title">Elle nous a dit :</h3>
          <p class="article-citation-desc">
            {{ article.citation }}
          </p>
        </blockquote>
        <aside v-if="article.sign" class="sign-container">
          <div class="sign-wrapper">
            <h3 class="sign-title">Signe particulier :</h3>
            <p class="sign-desc">
              {{ article.sign }}
            </p>
          </div>
        </aside>
      </article>
    </div>
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
.article-title {
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 26px;
  line-height: 32px;
  color: #000000;
}
.separator {
  width: 65%;
  text-align: left;
  margin-left: 10px;
  border: 0.5px solid black;
}
.instagram-link {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  text-decoration-line: underline;
  margin-left: 1rem;
  color: #000000;
}
.insta-container {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
}

.img-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.article-img {
  max-width: 90%;
}
.article-content {
  font-size: 14px;
  line-height: 150%;
  text-align: justify;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.article-content::first-letter {
  font-size: 22px;
  font-weight: 600;
}
.article-citation-title {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 158.1%;
  color: #000000;
}
.article-citation-desc {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
}
.article-citation-container {
  width: 100vw;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.sign-container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.sign-wrapper {
  margin: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid black;
}
.sign-title {
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: black;
}
.sign-desc {
  margin-top: 0.5rem;
  font-size: 15px;
  line-height: 18px;
  color: black;
}
</style>
