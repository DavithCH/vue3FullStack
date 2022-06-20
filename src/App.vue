<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./router";

const signOut = () => {
  localStorage.clear();
  user.value = false;
  show.value = false;
};

const show = ref(false);
const user = ref(localStorage.getItem("user"));

onMounted(() => {
  if (user.value) {
    show.value = true;
  } else {
    router.push({ path: "/signin" });
  }
});

watchEffect(() => {
  user;
  show;
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
          <RouterLink to="/signin" v-if="show" class="nav-link"
            >Se connecter</RouterLink
          >
          <button v-if="show" class="btn btn-danger" @click="signOut">
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
