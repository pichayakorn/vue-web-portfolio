<template>
  <div id="app">
    <navigator class="navigator"></navigator>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import navigator from "./components/navigator.vue";
export default {
  name: "App",
  components: {
    navigator,
  },
  created() {
    document.body.style.backgroundColor = "#202023";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap");
* {
  margin: 0;
}
#app {
  font-family: Segoe UI, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffffeb;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  min-height: 800px;
}
.view {
  width: 550px;
  margin-left: auto;
  margin-right: auto;
}
h1,
h2,
h3 {
  font-family: "M PLUS Rounded 1c", sans-serif;
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 20px;
}
a {
  color: #81e6d9;
}
.navigator {
  padding: 8px;
  width: 800px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
