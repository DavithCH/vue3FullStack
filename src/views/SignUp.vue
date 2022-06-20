<script setup>
import { ref } from "vue";
import axios from "axios";
import Joi from "joi";

const email = ref("");
const name = ref("");
const password = ref("");
const confpassword = ref("");
const error = ref(null);

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().min(3).required(),

  confpassword: Joi.ref("password"),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
const handleRegister = async () => {
  try {
    await schema.validate({
      name: name.value,
      password: password.value,
      confpassword: confpassword.value,
      email: email.value,
    });
    await axios.post("http://localhost:4000/user/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
  } catch (err) {
    error.value = err;
  }
};
</script>
<template>
  <h1>Formulaire d'incription</h1>
  <p v-if="error">{{ error.response.data.message[0].message }}</p>
  <form @submit.prevent="handleRegister">
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
      <label for="name" class="form-label">Nom</label>
      <input type="text" class="form-control" id="name" v-model="name" />
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
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"
        >Confirmation le mot de passe</label
      >
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="confpassword"
      />
    </div>
    <button type="submit" class="btn btn-primary">Se connecter</button>
  </form>
</template>
