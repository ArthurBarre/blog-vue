<template>
  <div>
    <Header/>
    <main>
      <p>Je suis la page About - pcq ça tient à coeur à Hln - pcq sinon c'est moche dans le header </p>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'About',
    components: {
    Header, 
    Footer
  }
}
</script>