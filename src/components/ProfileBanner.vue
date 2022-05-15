<template>
  <div class="banner">
    <stacktext></stacktext>
    <img alt="Nuko" src="../assets/nuko.png" width="96px" height="96px" />
  </div>
</template>

<script>
import stacktext from "./StackText.vue";

export default {
  components: {
    stacktext,
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.banner {
  display: flex;
  justify-content: space-between;
}
img {
  margin-left: 24px;
  margin-right: 40px;
  border: 2px solid #81e6d9;
  border-radius: 50%;
  text-align: left;
}
</style>