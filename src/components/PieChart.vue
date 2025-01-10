<template>
  <div class="ml-2">
    <canvas ref="chartCanvas"></canvas>
    <span class="d-flex justify-center">Total value: {{store.makeTotalValue}}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement);

import { useStore } from './../stores/store';

const store = useStore();

const chartCanvas = ref(null);
let chartInstance = null;


const prepareChartData = () => {

  const categorySums = store.fetchData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.value;
    return acc;
  }, {});

  const labels = Object.keys(categorySums);
  const data = Object.values(categorySums);

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };
};


const createChart = () => {
  const data = prepareChartData();

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new ChartJS(chartCanvas.value.getContext('2d'), {
    type: 'doughnut',
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Costs by categories',
        },
      },
    },
  });
};


watch(
  () => store.fetchData,
  () => {
    createChart();
  },
  { deep: true }
);


onMounted(() => {
  createChart();
});
</script>

<style scoped>
canvas {
  width: 350px;
  margin: auto;
}
</style>
