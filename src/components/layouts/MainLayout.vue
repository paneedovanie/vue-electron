<template>
  <v-app>
    <sidebar></sidebar>

    <v-app-bar color="transparent" elevate-on-scroll app>
      <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>

      <v-toolbar-title>App Title</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main app>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sidebar: "sidebar/sidebar",
    }),
  },

  methods: {
    ...mapActions({
      toggle: "sidebar/toggle",
    }),
  },
};
</script>