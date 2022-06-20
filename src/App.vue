<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/signin">Sign in</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
          <RouterLink to="/todo">Todo</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
