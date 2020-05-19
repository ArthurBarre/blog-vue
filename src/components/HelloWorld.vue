<template>
  <div>
    <h1 v-if="isShow">{{ msg }}</h1>
    <h1 v-else>{{ msg }} !</h1>
    <h1>{{ bigMessage }}</h1>
    <!-- <h1 @click="toogleShow()">{{ isShow }}</h1> -->
    <h1 @click="$emit('updateMessage', 'un autre message')">{{ isShow }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    console.log("création");
  },
  mounted() {
    console.log("ajouté au DOM");
  },
  computed: {
    bigMessage() {
      return this.msg + "!!!!";
    },
  },
  methods: {
    toogleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
