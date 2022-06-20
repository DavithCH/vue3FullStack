<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const handleSignIn = async () => {
  const response = await axios.post("http://localhost:4000/user/login", {
    email: email.value,
    password: password.value,
  });
  console.log(response.data);
};
</script>
<template>
  <h1>Formulaire de connexion</h1>
  <form @submit.prevent="handleSignIn">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">L'adresse email</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Se connecter</button>
  </form>
</template>
