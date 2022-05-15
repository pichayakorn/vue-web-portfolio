<template>
  <div id="profile">
    <profilebanner></profilebanner>
    <shortdesc></shortdesc>
    <bio></bio>
    <skill></skill>
  </div>
</template>

<script>
import profilebanner from "../components/ProfileBanner.vue";
import shortdesc from "../components/ShortDesc.vue";
import bio from "../components/Bio.vue";
import skill from "../components/Skill";

export default {
  name: "App",
  components: {
    profilebanner,
    bio,
    skill,
    shortdesc,
  },
  created() {
    document.body.style.backgroundColor = "#202023";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap");
#profile {
  font-family: Segoe UI, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffffeb;
  margin-top: 100px;
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
</style>
