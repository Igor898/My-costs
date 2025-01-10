<template>
  <div>
    <!-- Список данных -->
    <div v-for="(item, index) in paginatedItems" :key="index">
      <div class="d-flex justify-space-between mt-2">
        <div>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</div>
        <div>{{ item.date }}</div>
        <div class="text-center" style="width: 100px;">{{ item.category }}</div>
        <div>{{ item.value }}</div>
      </div>
      <hr>
    </div>




  </div>
</template>

<script setup>
defineProps(['paginatedItems', 'currentPage', 'itemsPerPage']);
import { useStore } from './../stores/store';
import { onUpdated } from 'vue';
const store = useStore();

onUpdated(() => {
  store.totalValue = 0
})
</script>

<style scoped>

</style>
