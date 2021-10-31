<template>
  <div>templateでは、HTMLとVue構文を書く。</div>
  <div>{{ hello }}</div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
console.log("scriptでは、JSを書く")
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      hello: "export default {} で Vueを書く。",
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app::after {
  content: "styleではcssを書く";
}
</style>
