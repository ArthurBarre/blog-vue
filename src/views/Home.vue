<template>
  <div class="home">
    <Header/>
    <main>
      <Intro/>
      <WeekArticle/>
      <Suggestions/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import WeekArticle from "@/components/WeekArticle.vue";
import Suggestions from "@/components/Suggestions.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header, 
    Intro,
    WeekArticle, 
    Suggestions, 
    Footer
  },
};
</script>

<style scoped>
</style>