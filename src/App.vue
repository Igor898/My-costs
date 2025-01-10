<template>
  <v-app style="background: rgb(206, 216, 224);">
    <v-container style="height: 100vh;" class="container d-flex flex-column">
      <div class="d-flex justify-space-between">
        <div class="cont-items">
          <h3 class="text-h3">My personal costs</h3>
          <v-btn @click="toggleVisibility" variant="elevated" color="primary" class="mt-2 mb-2">ADD NEW COST +</v-btn>
          <new-cost v-if="isVisible"/>
          <div class="d-flex justify-space-between">
            <div>#</div>
            <div>Date</div>
            <div>Category</div>
            <div>Value</div>
          </div>
          <hr>
          <list-of-costs :paginatedItems="paginatedItems" :currentPage="currentPage" :itemsPerPage="itemsPerPage"/>
        </div>
        <pie-chart/>
      </div>
      <div class="align-self-center w-66 mt-auto">
        <v-pagination
          v-model:modelValue="currentPage"
          :length="totalPages"
          rounded="circle"
          color="primary"
          class="pagination-controls"
          @update:modelValue="changePage"
        ></v-pagination>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import NewCost from "./components/NewCost.vue"
import ListOfCosts from "./components/ListOfCosts.vue"
import PieChart from "./components/PieChart.vue"
import { ref } from "vue"
import { useStore } from './stores/store';
import { computed, onUpdated } from 'vue';

// Получаем доступ к хранилищу
const store = useStore();

// Получаем данные для текущей страницы и общие страницы
const paginatedItems = computed(() => store.paginatedData);
const currentPage = computed({
  get: () => store.currentPage,
  set: (value) => store.setPage(value)
});
const totalPages = computed(() => store.totalPages);
const itemsPerPage = computed(() => store.itemsPerPage);

// Функция для изменения страницы
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    store.setPage(page);
  }
};


let isVisible = ref(false)
const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

</script>

<style scoped>
.container{
  width: 60%;
}
.cont-items{
  width: 600px;
}


@media (max-width: 1400px){
.container{
  width: 90%;
}
}
</style>
