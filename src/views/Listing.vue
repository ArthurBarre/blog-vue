<template>
  <div class="listing">
    <h1>Listing page</h1>
    {{ posts }}
    <div class="content">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { posts: null };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => (this.posts = data));
  },
};
</script>
