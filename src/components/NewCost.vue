<template>
  <v-container class="ml-0 pa-0">
    <form @submit.prevent="send" style="text-align: right;">
      <v-text-field
        v-model="item.category"
        label="Payment description"
        variant="outlined"
        required
      ></v-text-field>

      <v-text-field
        v-model="item.value"
        label="Payment amount"
        variant="outlined"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="item.date"
        label="Payment date"
        variant="outlined"
        required
      ></v-text-field>

      <v-btn type="submit" variant="elevated" color="primary" class="mb-2">ADD+</v-btn>
    </form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../stores/store";

// Создаем реактивный объект для хранения данных формы
const item = ref({
  date: '',
  category: '',
  value: ''
});

// Получаем доступ к хранилищу
const store = useStore();

// Функция для отправки формы и добавления данных в хранилище
const send = () => {
  store.addNewData({
    date: item.value.date,
    category: item.value.category,
    value: parseFloat(item.value.value), // Преобразуем строку в число
  });

  // Очистка формы после добавления данных

};
</script>
