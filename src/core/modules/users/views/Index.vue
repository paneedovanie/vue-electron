<template>
  <main-layout>
    <h1>Index</h1>
  </main-layout>
</template>

<script>
export default {
  mounted() {
    this.request("user.controller@index", "hi!")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>