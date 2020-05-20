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
          <div
            class="article-img"
            v-bind:style="{
              'background-image':
                'url(' + require('../assets/articlesImg/' + article.img) + ')',
            }"
          ></div>
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
          <h3 class="sign-title">Signe particulier :</h3>
          <p class="sign-desc">
            {{ article.sign }}
          </p>
        </aside>
      </article>
    </main>
    <Suggestions />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Suggestions from "@/components/Suggestions.vue";

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
    Suggestions,
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
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-decoration-line: underline;
}

figure .article-img {
  width: 100%;
  height: 50vh;
  margin-bottom: 2rem;
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
}

figcaption {
  display: none;
}

.article-content {
  font-size: 0.875rem;
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
  margin-bottom: 0.5rem;
  font-size: 0.938rem;
  font-weight: 700;
}

.article-citation-desc {
  font-size: 1rem;
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
  font-size: 0.938rem;
  font-weight: 700;
}

.sign-desc {
  margin-top: 0.5rem;
  font-size: 0.938rem;
  line-height: 1.5;
}

.suggestions {
  display: none;
}

@media screen and (min-width: 800px) {
  main {
    padding: 0 3rem;
    margin-bottom: 6rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  figure {
    width: 38vw;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 0;
    left: 3rem;
  }

  figure .article-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top;
  }

  figcaption {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.625rem;
    font-weight: 200;
    font-style: italic;
  }

  article {
    width: 55vw;
    padding: 0 3rem;
  }

  .article-title:after {
    width: 40%;
  }

  .instagram-link {
    width: fit-content;
  }

  .article-citation-desc {
    line-height: 1.5;
  }

  .suggestions {
    display: block;
  }
}
</style>
