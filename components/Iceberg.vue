<template>
  <div class="iceberg-wrap">
    <!-- Water line -->
    <div class="waterline">
      <span class="waterline-label">What the PM sees</span>
    </div>

    <!-- Above water -->
    <div class="above-water">
      <div class="ice-tip">
        <div class="tip-item green">✅ Feature shipped</div>
        <div class="tip-item green">✅ "Looks great!"</div>
      </div>
    </div>

    <!-- Below water -->
    <div class="below-water">
      <div class="hidden-label">What's actually required</div>
      <div class="below-items">
        <div v-for="item in hidden" :key="item.text" class="below-item" :class="item.color">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hidden = [
  { text: 'Edge case: agent shares link before buyer logs in', color: 'orange' },
  { text: 'Race condition: two agents submit same property', color: 'orange' },
  { text: 'What happens when Nano Banana API is down?', color: 'red' },
  { text: 'Render fails on HDR images — silent error', color: 'red' },
  { text: 'Multi-room: order matters, no order field in schema', color: 'red' },
  { text: 'Mobile: iOS scroll position resets on re-render', color: 'amber' },
  { text: 'Auth token expiry during long render job', color: 'amber' },
  { text: 'PDF export: fonts not embedded → broken on Windows', color: 'amber' },
]
</script>

<style scoped>
.iceberg-wrap {
  position: relative;
  width: 100%;
  font-size: 0.78rem;
}

.waterline {
  position: relative;
  border-top: 2px dashed rgba(59, 130, 246, 0.6);
  margin: 0.5rem 0;
  text-align: center;
}

.waterline-label {
  position: absolute;
  top: -0.6rem;
  right: 0;
  background: #0D1117;
  padding: 0 0.4rem;
  color: #3B82F6;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.above-water {
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
}

.ice-tip {
  display: flex;
  gap: 1.5rem;
}

.tip-item {
  font-weight: 600;
}

.tip-item.green { color: #22C55E; }

.below-water {
  padding-top: 0.5rem;
  border-left: 3px solid rgba(59, 130, 246, 0.3);
  padding-left: 0.75rem;
}

.hidden-label {
  color: #94A3B8;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.below-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.below-item {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.72rem;
}

.below-item.orange { background: rgba(249,115,22,0.12); color: #F97316; }
.below-item.red    { background: rgba(224,60,46,0.12);  color: #E03C2E; }
.below-item.amber  { background: rgba(245,158,11,0.12); color: #F59E0B; }
</style>
