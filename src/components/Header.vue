<template>
  <header>
    <router-link to="/">
      <img class="logo logo--mobile" src="../assets/svg/omf_logo_mobile.svg" alt="Logo Oh My Food"/>
      <img class="logo logo--desktop" src="../assets/svg/omf_logo_desktop.svg" alt="Logo Oh My Food">
    </router-link>
    <nav class="headerNav">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/listing">Nos articles</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: #f8fc3b;
}

header .logo--mobile {
  width: 40px;
}

header .logo--desktop {
  display: none;
}

@media screen and (min-width: 800px) {
  header .logo--mobile {
    display: none;
  }

  header .logo--desktop {
    width: 90px;
    display: block;
  }
}

.headerNav {
  display: none;
}

@media screen and (min-width: 800px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1rem solid #f8fc3b; 
    background-color: unset;
    padding: 2rem 3rem;
  }

  .headerNav {
    display: block;
  }

  .headerNav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerNav ul li:not(:first-child) {
    margin-left: 3.5rem;
  }

  .headerNav ul li a.router-link-exact-active {
    font-weight: 700;
  }
}
</style>
