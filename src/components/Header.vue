<template>
  <header>
    <img class="logo" src alt="Logo" />
    <nav class="headerNav">
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/listing">Nos articles</router-link>
        </li>
        <li>
          <router-link to="/about">À propos</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  width: 100%;
  height: 40px;
  background-color: #f8fc3b;
  position: fixed;
  @media (min-width: 900px) {
    header {
      display: flex;
    }
  }
}

.logo {
}

.headerNav ul {
  display: none;
  @media (min-width: 900px) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.headerNav ul li:not(:first-child) {
  margin-left: 3.5rem;
}

.headerNav ul li a.router-link-exact-active {
  font-weight: 700;
}
</style>
