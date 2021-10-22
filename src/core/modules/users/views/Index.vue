<template>
  <main-layout>
    <h1>Index</h1>
    <v-btn @click="add">Add</v-btn>
  </main-layout>
</template>

<script>
export default {
  methods: {
    add() {
      this.request("user.controller@create", {})
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.request("user.controller@index", {})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>