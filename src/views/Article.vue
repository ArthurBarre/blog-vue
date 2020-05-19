<template>
  <div>
    <Header />
    <main>
      <figure>
        <img src="" alt="Food Influencer" />
        <figcaption>Date de l’article et genre Credit</figcaption>
      </figure>
      <article>
        <h1>Laura Vidal</h1>
        <h2>Somelière à Marseille</h2>
        <a href="">Son instagram</a>
        <p>
          Dans la restauration depuis ses 16 ans pour « subvenir à ses besoins
          », la Québécoise étudie à Montréal la sexologie, après avoir tenté la
          finance. Le restaurant qui l’emploie lui offre sa formation en
          sommellerie. À Lyon, elle rencontre Catherine Breton, vigneronne, dans
          un salon d’indépendants. Début d’une carrière prometteur : alors
          qu’elle doit démarcher Grégory Marchand pour le compte de cette
          dernière, il lui propose d’être la sommelière de son comptoir,
          Frenchie. Elle y rencontre Harry Cummins, son compagnon, avec qui elle
          fonde en 2012 le Paris Popup, un restaurant itinérant. Ils
          vadrouillent autour du monde et s’installent avec leur associée Julia
          Mitton à Arles, puis à Marseille, à la Mercerie, la première adresse
          fixe d’un « trio de nomades ».
        </p>
        <blockquote>
          <h3>Elle nous a dit :</h3>
          <p>
            « La sommellerie, c’est sortir des sentiers battus tout en racontant
            l’histoire des personnes derrière l’étiquette. »
          </p>
        </blockquote>
        <aside>
          <h3>Signe particulier :</h3>
          <p>
            Elle est élue « meilleure sommelière de l’année 2020 » par le Gault
            et Millau. C’est la première femme à l’être en cinquante ans
            d’existence du guide.
          </p>
        </aside>
      </article>
    </main>
    <Footer />
    <div>
      {{ $route.params.id }}
    </div>
    <div v-if="post">
      {{ post.title }}
      {{ post.body }}
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return { post: null };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => (this.post = data));
  },
  name: "Listing",
  components: {
    Header,
    Footer,
  },
};
</script>
