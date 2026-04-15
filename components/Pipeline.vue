<template>
  <div class="pipeline">
    <div
      v-for="(step, i) in steps"
      :key="step.label"
      class="pipe-step"
      :class="{ active: activeIndex >= i, highlight: highlightSet.has(i) || (!highlightSet.size && activeIndex === i) }"
    >
      <div class="pipe-icon">{{ step.icon }}</div>
      <div class="pipe-label">{{ step.label }}</div>
      <div class="pipe-sub">{{ step.sub }}</div>
      <div v-if="i < steps.length - 1" class="pipe-arrow">→</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  active: { type: Number, default: -1 },
  animate: { type: Boolean, default: false },
  highlights: { type: Array, default: () => [] },
})

const highlightSet = new Set(props.highlights)

const steps = [
  { icon: '📋', label: 'SPEC',   sub: 'REQUIREMENTS.md' },
  { icon: '🗺️', label: 'PLAN',   sub: 'Tasks + scope' },
  { icon: '⚙️', label: 'WORK',   sub: 'AI builds it' },
  { icon: '✅', label: 'REVIEW', sub: 'You verify' },
]

const activeIndex = ref(props.active)

onMounted(() => {
  if (props.animate) {
    activeIndex.value = -1
    let i = 0
    const tick = setInterval(() => {
      activeIndex.value = i
      i++
      if (i >= steps.length) clearInterval(tick)
    }, 600)
  } else {
    activeIndex.value = props.active
  }
})
</script>

<style scoped>
.pipeline {
  display: flex;
  align-items: center;
  gap: 0;
  justify-content: center;
  width: 100%;
  position: relative;
}

.pipe-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 0.35;
  transition: all 0.4s ease;
  flex: 1;
}

.pipe-step.active {
  opacity: 1;
}

.pipe-step.highlight .pipe-icon {
  box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.3);
  border-color: #F97316;
}

.pipe-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1E293B;
  border: 2px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all 0.4s ease;
  z-index: 1;
}

.pipe-label {
  font-weight: 700;
  font-size: 0.85rem;
  color: #F97316;
  margin-top: 0.4rem;
  letter-spacing: 0.05em;
}

.pipe-sub {
  font-size: 0.7rem;
  color: #94A3B8;
  text-align: center;
  margin-top: 0.15rem;
}

.pipe-arrow {
  position: absolute;
  right: -12px;
  top: 18px;
  color: #F97316;
  font-size: 1.4rem;
  font-weight: 700;
  z-index: 2;
}
</style>
