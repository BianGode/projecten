<template>
    <div>
      <h1>TEST</h1>
      <RouterLink>Test</RouterLink>
        <!-- <RouterLink to="/">Home </RouterLink> -->
        <!-- <RouterLink to="/about"> About</RouterLink> -->
    </div>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style>
div {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    border: 3px solid blue;
}
</style>