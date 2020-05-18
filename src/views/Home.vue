<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld @updateMessage="title = $event" :msg="title" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "ceci",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
