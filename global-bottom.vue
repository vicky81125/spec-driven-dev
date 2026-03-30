<template>
  <div class="nav-controls">
    <button
      class="nav-btn nav-prev"
      :class="{ disabled: isFirst }"
      @click="prev"
      aria-label="Previous slide"
    >
      ‹
    </button>

    <div class="slide-counter">
      {{ currentPage }} / {{ total }}
    </div>

    <button
      class="nav-btn nav-next"
      :class="{ disabled: isLast }"
      @click="next"
      aria-label="Next slide"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { useNav } from '@slidev/client'

const { currentPage, total, prev, next, isFirst, isLast } = useNav()
</script>

<style scoped>
.nav-controls {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem 0.4rem;
  pointer-events: none;
  z-index: 100;
}

.nav-btn {
  pointer-events: all;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(249, 115, 22, 0.35);
  background: rgba(13, 17, 23, 0.8);
  color: #F97316;
  font-size: 1.3rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  padding-bottom: 1px;
}

.nav-btn:hover {
  background: rgba(249, 115, 22, 0.15);
  border-color: #F97316;
  transform: scale(1.1);
}

.nav-btn.disabled {
  opacity: 0.25;
  cursor: not-allowed;
  pointer-events: none;
}

.slide-counter {
  font-size: 0.55rem;
  color: rgba(148, 163, 184, 0.45);
  letter-spacing: 0.06em;
  font-family: 'Roboto Mono', monospace;
  pointer-events: none;
}
</style>
