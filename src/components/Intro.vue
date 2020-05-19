<template>
  <article class="intro">
    <img class="intro__titleIcon" src="../assets/svg/omf_title.svg" alt="Site Title">
      <h1>Présente les cuistos les plus influents de la food.</h1>
      <p>Alors que le confinement dû à la crise du coronavirus a mis bon nombre de restaurateurs à genoux, GQ a souhaité, à travers ce palmarès, célébrer les chefs, pâtissiers, producteurs, critiques et communicants qui tordent le cou aux vieilles traditions et innovent pour faire de la gastronomie française ce qu’elle est aujourd’hui : un prétexte pour parler d’une époque, d’une société, de la nature et du devenir de la Terre. Bienvenue dans le plus grand club de food !</p>
  </article>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style scoped>

.intro {
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: auto auto;
  margin-top: 2.5rem;
  padding: 0 1rem;
}

.intro img {
  grid-column: 1;
  grid-row: 1;
}

.intro h1 {
  grid-column: 2;
  grid-row: 1;
  margin-left: 10%;
  align-self: end;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
}

.intro p {
  grid-column: 1/3;
  grid-row: 2;
  margin-top: 2rem;
}

@media screen and (min-width: 800px) {
  .intro {
    margin: 0;
    padding: 5rem 25% 6rem 12.5%;
  }

  .intro img {
    grid-column: 1;
    grid-row: 1/3;
    width: 100%;
    align-self: center;
  }

  .intro h1 {
    font-size: 2.25rem;
    margin: 0;
    margin-left: 2rem;
  }

  .intro p {
    grid-column: 2;
    grid-row: 2;
    margin: 1rem 0 0 2rem;
  }
}

</style>