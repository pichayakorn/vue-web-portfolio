<template>
  <div class="bio">
    <h3>Bio</h3>
    <p><span>2001</span>Born in Bangkok, Thailand. ({{ age }} years old)</p>
    <p>
      <span>2014</span>Completed the Primary school of Saint Dominic School.
    </p>
    <p>
      <span>2019</span>Completed the High school of Suankularb Wittayalai
      School.
    </p>
    <p>
      <span style="display: inline; margin-right: 1em">2019 - present</span
      >Study at Thai-Nichi Institute of Technology (泰日工業大学).
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: (this.age = new Date().getFullYear() - 2001),
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  text-align: left;
}
h3 {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
}
p {
  margin: 0;
  line-height: 24px;
  display: table;
}
span {
  font-weight: bold;
  display: table-cell;
  width: 54px;
}
</style>