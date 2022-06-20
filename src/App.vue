<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./router";

const signOut = () => {
  localStorage.clear();
};

const user = ref(localStorage.getItem("user") || null);

onMounted(() => {
  if (!user.value) router.push({ path: "/signin" });
});

watchEffect(() => {
  user.value = localStorage.getItem("user");
});
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav class="nav">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/about" class="nav-link">À Propos</RouterLink>

          <RouterLink to="/signup" class="nav-link">Inscription</RouterLink>
          <RouterLink to="/todo" class="nav-link">Todo</RouterLink>
          <RouterLink to="/todo" class="nav-link">Au hasard</RouterLink>
          <RouterLink to="/signin" v-if="user" class="nav-link"
            >Se connecter</RouterLink
          >
          <button v-if="user" class="btn btn-danger" @click="signOut">
            Déconnecter
          </button>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
