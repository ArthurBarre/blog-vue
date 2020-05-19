<template>
  <div>
    <Header />
    <main>
      <ArticlesList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Listing",
  components: {
    Header,
    ArticlesList,
    Footer,
  },
};
</script>

<style scoped>

</style>
