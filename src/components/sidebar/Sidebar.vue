<template>
  <v-navigation-drawer app v-model="model">
    <!-- -->
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sidebar: "sidebar/sidebar",
    }),

    model: {
      get() {
        return this.sidebar.model;
      },
      set(val) {
        if (val) this.show();
        else this.hide();
      },
    },
  },

  methods: {
    ...mapActions({
      show: "sidebar/show",
      hide: "sidebar/hide",
    }),
  },
};
</script>