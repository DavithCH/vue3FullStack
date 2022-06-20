<script setup>
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";
const listOfString = ref({});
const stringToUpdate = ref({});
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

const getStringToUpdate = (index, id) => {
  stringToUpdate.value = { string: listOfString.value[index].string, id: id };
  console.log(stringToUpdate.value);
};

const updateString = async (id) => {
  const response = await axios.put(
    "http://localhost:4000/string/update/" + id,
    {
      string: stringToUpdate.value.string,
    }
  );
  console.log(response.data);
};
</script>
<template>
  <h1>CRUD</h1>
  <ul v-for="(element, index) in listOfString">
    <li @click="getStringToUpdate(index, element.id)">{{ element.string }}</li>
  </ul>
  <div v-if="Object.keys(stringToUpdate).length > 0" class="my-3">
    <input
      type="text"
      v-model="stringToUpdate.string"
      class="form-control mb-2"
    />
    <button class="btn btn-warning" @click="updateString(stringToUpdate.id)">
      update
    </button>
  </div>
  <input
    type="text"
    placeholder="Saisisez une chaîne de caractères..."
    class="form-control mb-3"
    v-model="newString"
  />
  <button class="btn btn-primary" @click="handleAddString">Sauvegarder</button>
</template>
