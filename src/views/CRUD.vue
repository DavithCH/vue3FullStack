<script setup>
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";
const listOfString = ref(null);
const newString = ref(localStorage.getItem("currentInput") || "");
onMounted(() => {
  const fetchAllString = async () => {
    const response = await axios.get("http://localhost:4000/string/list");
    listOfString.value = response.data;
  };
  fetchAllString();
});

watchEffect(() => {
  listOfString;
  localStorage.setItem("currentInput", newString.value);
});

const handleAddString = async () => {
  try {
    await axios.post("http://localhost:4000/string/create", {
      string: newString.value,
    });
    newString.value = "";
    localStorage.removeItem("currentInput");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <h1>CRUD</h1>
  <ul v-for="element in listOfString">
    <li>{{ element }}</li>
  </ul>
  <input
    type="text"
    placeholder="Saisisez une chaîne de caractères ..."
    class="form-control mb-3"
    v-model="newString"
  />
  <button class="btn btn-primary" @click="handleAddString">Sauvegarder</button>
</template>
