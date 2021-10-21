<template>
  <public-layout>
    <v-container class="ve-height-100" fluid>
      <div class="ve-height-100 d-flex justify-center align-center">
        <v-card width="400px" flat>
          <h1 class="text-center">App Title</h1>
          <v-card-title> LOGIN </v-card-title>
          <v-card-text>
            <v-text-field label="Username" dense outlined></v-text-field>
            <v-text-field label="Password" dense outlined></v-text-field>
            <v-btn
              width="100%"
              color="primary"
              @click="$router.push({ name: 'users.index' })"
              >Log in</v-btn
            >
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </public-layout>
</template>