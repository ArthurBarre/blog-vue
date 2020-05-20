<template>
  <header>
    <router-link to="/">
      <img class="logo logo--mobile" src="../assets/svg/omf_logo_mobile.svg" alt="Logo Oh My Food"/>
      <img class="logo logo--desktop" src="../assets/svg/omf_logo_desktop.svg" alt="Logo Oh My Food">
    </router-link>
    <nav class="headerNav">
      <ul>
        <li class="homeLink"><router-link to="/">Accueil</router-link></li>
        <li class="listingLink"><router-link to="/listing">Nos articles</router-link></li>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.headerNav ul li {
  font-size: .875rem;
}

.headerNav .homeLink {
  display: none;
}

.headerNav .listingLink {
  text-decoration: underline;
}

.headerNav .listingLink .router-link-exact-active {
  font-weight: 700;
}

@media screen and (min-width: 800px) {
  header {
    border-top: 1rem solid #f8fc3b; 
    background-color: unset;
    padding: 2rem 3rem;
  }

  .headerNav .homeLink {
    display: block;
  }

  .headerNav .listingLink {
    text-decoration: none;
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
