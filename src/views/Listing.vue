<template>
  <div>
    <Header />
    <main>
      <nav>
        <ul>
          <li>
            <div class="card" v-for="post in posts" :key="post.id">
              <router-link :to="`/article/${post.id}`">
                <ArticleCover
                  v-bind:title="post.author"
                  v-bind:img="post.img"
                />
              </router-link>
            </div>
          </li>
        </ul>
      </nav>
    </main>
    <Footer />
  </div>
  <!-- <div class="about">
    <div class="content">
      
    </div>
  </div> -->
</template>

<style>
.card {
  width: 33%;
  padding: 10px;
  border: 1px solid black;
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
    return { posts: null };
  },
  created() {
    fetch("https://api.npoint.io/cee526d970a090037ac5")
      .then((response) => response.json())
      .then((data) => (this.posts = data.articles));
  },
  name: "Listing",
  components: {
    Header,
    ArticleCover,
    Footer,
  },
};
</script>
