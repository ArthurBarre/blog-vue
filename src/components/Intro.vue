<template>
  <article class="intro">
    <img src="" alt="Site Title">
    <div class="intro__content">
      <h1>Présente les cuistos les plus influents de la food.</h1>
      <p>Alors que le confinement dû à la crise du coronavirus a mis bon nombre de restaurateurs à genoux, GQ a souhaité, à travers ce palmarès, célébrer les chefs, pâtissiers, producteurs, critiques et communicants qui tordent le cou aux vieilles traditions et innovent pour faire de la gastronomie française ce qu’elle est aujourd’hui : un prétexte pour parler d’une époque, d’une société, de la nature et du devenir de la Terre. Bienvenue dans le plus grand club de food !</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style scoped>

.intro {
  padding: 9.375rem 25% 5rem; 
  display: flex;
}

.intro__content {
}

.intro h1 {
  font-size: 2.25rem;
  font-weight: 900;
  text-transform: uppercase;
}

.intro p {
  font-weight: 700;
}

.intro aside {
  width: 50%;
  font-size: 4.5rem;
  font-weight: 900;
  text-transform: uppercase;
  transform: rotate(-90deg);
}

</style>