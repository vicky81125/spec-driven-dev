<template>
  <div class="chart-wrap">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend, Filler
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const chartData = {
  labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6'],
  datasets: [
    {
      label: 'Cost / Effort',
      data: [20, 50, 100, 175, 300, 450],
      borderColor: '#ef4444',
      borderWidth: 2,
      pointBackgroundColor: '#ef4444',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx
        const gradient = canvas.createLinearGradient(0, 0, 0, 200)
        gradient.addColorStop(0, 'rgba(239,68,68,0.35)')
        gradient.addColorStop(1, 'rgba(239,68,68,0.02)')
        return gradient
      },
      tension: 0.4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `$${ctx.raw}k`,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#94A3B8', font: { size: 10 } },
      grid:  { color: 'rgba(255,255,255,0.05)' },
    },
    y: {
      ticks: { color: '#94A3B8', font: { size: 10 }, callback: (v) => `$${v}k` },
      grid:  { color: 'rgba(255,255,255,0.05)' },
    },
  },
}
</script>

<style scoped>
.chart-wrap {
  width: 100%;
  height: 200px;
}
</style>
