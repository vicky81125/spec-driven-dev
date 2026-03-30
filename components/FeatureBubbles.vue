<template>
  <div class="bubbles-wrap">
    <!-- SVG connection lines layer -->
    <svg class="bubbles-svg" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid meet">
      <line x1="130" y1="105" x2="280" y2="55" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="280" y1="55" x2="430" y2="55" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="430" y1="55" x2="545" y2="85" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="545" y1="85" x2="640" y2="105" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="130" y1="105" x2="200" y2="170" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="200" y1="170" x2="350" y2="165" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="350" y1="165" x2="470" y2="170" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="470" y1="170" x2="580" y2="165" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="640" y1="105" x2="700" y2="55" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="640" y1="105" x2="580" y2="165" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <line x1="545" y1="85" x2="470" y2="170" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    </svg>

    <!-- Bubbles -->
    <div
      v-for="(f, i) in features"
      :key="f.label"
      class="bubble"
      :class="{ 'bubble-highlight': f.highlight, 'bubble-dark': f.dark }"
      :style="bubbleStyle(f)"
    >
      <div v-if="f.flag" class="bubble-flag">{{ f.flag }}</div>
      <div class="bubble-label">{{ f.label }}</div>
      <div v-if="f.sub" class="bubble-sub">{{ f.sub }}</div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { label: 'Upload Room\nPhoto', size: 100, top: '30%', left: '8%', dark: true },
  { label: 'Sharing\nLink', size: 52, top: '5%', left: '34%', dark: false },
  { label: 'Before/After\nSlider', size: 80, top: '8%', left: '46%', dark: true },
  { label: 'AR Mode', size: 120, top: '15%', left: '62%', highlight: true, flag: '🚩', sub: '"Point phone at room &\nsee live"' },
  { label: 'Element-Level\nControl', size: 88, top: '45%', left: '67%', dark: true, sub: 'Walls, floors,\nfurniture...' },
  { label: 'Mobile\nApp', size: 60, top: '5%', left: '81%', dark: false },
  { label: 'Agent\nProfiles', size: 72, top: '40%', left: '43%', dark: false },
  { label: 'Multiple\nDesign Styles', size: 98, top: '58%', left: '26%', dark: true },
  { label: 'Batch Upload', size: 76, top: '58%', left: '54%', dark: false, sub: '(All rooms at once)' },
  { label: 'MLS\nIntegration', size: 72, top: '62%', left: '70%', dark: false },
  { label: 'ROI\nSuggestions', size: 58, top: '38%', left: '82%', dark: false },
  { label: 'Analytics\nDashboard', size: 62, top: '52%', left: '83%', dark: false },
  { label: 'White-Label', size: 62, top: '68%', left: '81%', dark: false, sub: 'For other agencies' },
  { label: 'Save\nProjects', size: 65, top: '70%', left: '6%', dark: false },
]

function bubbleStyle(f) {
  const halfSize = f.size / 2
  return {
    width: `${f.size}px`,
    height: `${f.size}px`,
    top: `calc(${f.top} - ${halfSize}px)`,
    left: `calc(${f.left} - ${halfSize / 8}px)`,
    borderRadius: '50%',
    animationDelay: `${Math.random() * 0.5}s`,
  }
}
</script>

<style scoped>
.bubbles-wrap {
  position: relative;
  width: 100%;
  height: 260px;
  margin-top: 0.5rem;
}

.bubbles-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bubble {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(100, 116, 139, 0.3);
  animation: popIn 0.4s ease forwards;
  opacity: 0;
  padding: 0.25rem;
  cursor: default;
}

.bubble-dark {
  background: rgba(60, 20, 15, 0.75);
  border-color: rgba(150, 60, 50, 0.4);
}

.bubble-highlight {
  background: rgba(100, 20, 15, 0.85);
  border: 2px solid var(--or-red);
  box-shadow: 0 0 15px rgba(224, 60, 46, 0.2);
}

.bubble-flag {
  font-size: 0.65rem;
  margin-bottom: 0.1rem;
}

.bubble-label {
  font-size: 0.58rem;
  font-weight: 700;
  color: #e2e8f0;
  text-align: center;
  line-height: 1.3;
  white-space: pre-line;
}

.bubble-highlight .bubble-label {
  font-size: 0.72rem;
  color: #fff;
}

.bubble-sub {
  font-size: 0.48rem;
  color: rgba(148, 163, 184, 0.8);
  text-align: center;
  line-height: 1.2;
  white-space: pre-line;
  margin-top: 0.1rem;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
}
</style>
