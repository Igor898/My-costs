import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    fetchData: [
      { date: '28.03.2025', category: 'Food', value: 169 },
      { date: '24.03.2025', category: 'Transport', value: 360 },
      { date: '24.03.2025', category: 'Food', value: 532 },
      { date: '02.04.2025', category: 'Education', value: 456 },
    ],
    currentPage: 1, // Текущая страница
    itemsPerPage: 10, // Количество элементов на странице
  }),

  actions: {
    addNewData(item) {
      this.fetchData.push(item);
    },

    // Функция для переключения страницы
    setPage(page) {
      this.currentPage = page;
    },
  },

  getters: {
    // Геттер для получения данных для текущей страницы
    paginatedData(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.fetchData.slice(start, end);
    },

    // Общее количество страниц
    totalPages(state) {
      return Math.ceil(state.fetchData.length / state.itemsPerPage);
    },
    makeTotalValue(state) {
      return state.fetchData.reduce((sum, item) => sum + item.value, 0);
    },
  },
});
