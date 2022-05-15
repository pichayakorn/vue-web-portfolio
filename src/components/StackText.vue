<template>
  <div>
    <h2>{{ upper }}</h2>
    <p>{{ lower }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upper: "Pratch Suntichaikul",
      lower: "Student / Intern / Computer Engineering",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>