<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import demo from "./components/test/demo";

export default {
  name: "app",
  components: {
    demo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
