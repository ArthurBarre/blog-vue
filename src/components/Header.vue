<template>
  <header>
    <img src="" alt="Logo">
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
  name: 'Header',
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border-top: 1rem solid #F8FC3B;
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
</style>