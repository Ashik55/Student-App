<template>
  <v-app>
    <h1>Meteor and Vue</h1>
    <router-link to="/add-student">AddStudent</router-link>
    <router-link to="/add-subject">AddSubject</router-link>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>
</style>