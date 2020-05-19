<template>
  <section class="weekArticle">
    <h3>Article de la semaine</h3>
    <blockquote>
      <h2>FRANÇOIS REGIS-GAUDRY</h2>
      <p><strong>«</strong> Pour être reconnu, il faut respecter le triptyque “personnalité, prise de risques et talent. <strong>»</strong></p>
      <aside>10/06/2020</aside>
    </blockquote>
    <figure>
      <img src="" alt="Food Influencer">
      <router-link to="/article">Lire l'article</router-link>
    </figure>
  </section>
</template>

<script>
export default {
  name: 'WeekArticle',
}
</script>

<style scoped>

.weekArticle h3 {
  max-width: 29rem;
  padding: 1rem 2.5rem;
  text-align: right;
  font-size: .875rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #F8FC3B;
}

.weekArticle blockquote {
  position: relative;
  padding: 1.5rem 4.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.weekArticle blockquote h2 {
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
}

.weekArticle blockquote p {
  font-size: 1.125rem;
  font-style: italic;
}

.weekArticle blockquote p strong {
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
}

.weekArticle blockquote aside {
  position: absolute;
  bottom: .5rem;
  right: 0;
}

.weekArticle figure {
  padding: 1.5rem 4.5em 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weekArticle figure a {
  margin-top: 3rem;
  font-size: .875rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
}

</style>