---
theme: default
title: Spec-Driven Development with AI
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: fade
---

<!-- ─── SLIDE 1 — TITLE ──────────────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="position:absolute;top:50%;left:1.5rem;transform:translateY(-50%);max-width:68%;">
  <div class="master-badge">
    <span class="master-pill">MASTER CLASS</span>
    <span class="master-hours">4  HOURS</span>
  </div>
  <div class="title-main">Spec-Driven<br>Development with AI</div>
  <div class="title-sub">
    <div class="title-sub-text">
      Building Reliable Applications<br>Using <strong>Claude Code</strong>
    </div>
  </div>
</div>

<div class="ghost-code">
  <pre v-pre>Spec: &#123;
  id: "phase-1",
  status: "draft",
  features: [
    "upload",
    "style-transform"
  ]
&#125;
function build(spec) &#123;
  return spec.plan()
    .then(execute)
    .then(review)
&#125;
// Spec-driven workflow
const outcome = await spec
  .validate()
  .implement();</pre>
</div>

<div class="bottom-red-bar"></div>

---
layout: default
---

<!-- ─── SLIDE 2 — THE COURSE IN 3 LINES ─────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Course in 3 Lines</h1>

<div class="pitch-rows" style="margin-top:1rem;">
  <div class="pitch-row">
    <div class="pitch-label-col">
      <div class="pitch-label-text" style="color:var(--or-red);">THE GAP</div>
      <div class="pitch-label-line" style="background:var(--or-red);"></div>
    </div>
    <div class="pitch-content">
      Developers using AI tools with <strong>vague prompts</strong> → brittle code, rework, and misalignment with what was actually needed.
    </div>
    <div class="pitch-icon" style="color:var(--or-red);">⚠</div>
  </div>
  <div class="pitch-row">
    <div class="pitch-label-col">
      <div class="pitch-label-text" style="color:var(--or-green);">THE FIX</div>
      <div class="pitch-label-line" style="background:var(--or-green);"></div>
    </div>
    <div class="pitch-content">
      Spec-driven development: <strong>spec → plan → work → review</strong>. Every feature starts with a written spec that AI can reason about.
    </div>
    <div class="pitch-icon" style="color:var(--or-green);">✓</div>
  </div>
  <div class="pitch-row">
    <div class="pitch-label-col">
      <div class="pitch-label-text" style="color:var(--or-orange);">THE BUILD</div>
      <div class="pitch-label-line" style="background:var(--or-orange);"></div>
    </div>
    <div class="pitch-content">
      Messy client brief → working AI renovation app. Built live, spec by spec, in 4 hours.
    </div>
    <div class="pitch-icon" style="color:var(--or-orange);">⊞</div>
  </div>
</div>

<div class="schedule-bar">
  <div class="schedule-box">
    <div class="sec-num">Section 1</div>
    <div class="sec-name">Foundations</div>
    <div class="sec-desc">Concept &amp; Risks</div>
  </div>
  <div class="schedule-box">
    <div class="sec-num">Section 2</div>
    <div class="sec-name">Spec Toolkit</div>
    <div class="sec-desc">GSD &amp; Requirements</div>
  </div>
  <div class="schedule-box">
    <div class="sec-num">Section 3</div>
    <div class="sec-name">The Workflow</div>
    <div class="sec-desc">Phase 1 Build</div>
  </div>
  <div class="schedule-box">
    <div class="sec-num">Section 4</div>
    <div class="sec-name">Validation</div>
    <div class="sec-desc">Review &amp; Phase 2</div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 3 — INSTRUCTOR BIO ─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex gap-10 items-center h-full px-4" style="margin-top:1rem;">
  <!-- Photo -->
  <div class="flex-shrink-0" style="position:relative;">
    <img src="/harshit.png" alt="Harshit Tyagi"
      style="width:220px;height:280px;object-fit:cover;border-radius:8px;display:block;" />
    <div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:var(--or-orange);border-radius:0 0 8px 8px;"></div>
  </div>

  <!-- Bio -->
  <div class="flex-1">
    <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.15em;color:var(--or-orange);margin-bottom:0.35rem;">YOUR INSTRUCTOR</div>
    <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:0.5rem;line-height:1.1;">Harshit Tyagi</h1>
    <p style="color:var(--or-muted);font-size:0.95rem;margin-bottom:1rem;">AI Consultant &amp; Founder, Agentiwise</p>
    <div style="width:40px;height:2px;background:var(--or-orange);margin-bottom:1rem;"></div>
    <div class="flex flex-col gap-3">
      <div style="display:flex;gap:0.6rem;align-items:baseline;">
        <span style="color:var(--or-orange);font-weight:700;font-size:0.75rem;flex-shrink:0;">●</span>
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Practical AI Solutions</strong> — Helping teams solve real business problems through automation systems, internal tools, and custom AI applications.</p>
      </div>
      <div style="display:flex;gap:0.6rem;align-items:baseline;">
        <span style="color:var(--or-orange);font-weight:700;font-size:0.75rem;flex-shrink:0;">●</span>
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Global AI Educator</strong> — Taught large global audiences via LinkedIn Learning and YouTube, known for clear, down-to-earth explanations of complex concepts.</p>
      </div>
      <div style="display:flex;gap:0.6rem;align-items:baseline;">
        <span style="color:var(--or-orange);font-weight:700;font-size:0.75rem;flex-shrink:0;">●</span>
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Operational Impact</strong> — Focused on using AI to quietly improve day-to-day operations and enable new capabilities where they matter most.</p>
      </div>
    </div>
    <!-- Social handles -->
    <div class="flex gap-5 mt-5">
      <a href="https://x.com/dswharshit" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.4rem;color:var(--or-muted);font-size:0.75rem;text-decoration:none;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        @dswharshit
      </a>
      <a href="https://github.com/dswh" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.4rem;color:var(--or-muted);font-size:0.75rem;text-decoration:none;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        dswh
      </a>
      <a href="https://www.linkedin.com/in/tyagiharshit" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.4rem;color:var(--or-muted);font-size:0.75rem;text-decoration:none;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        tyagiharshit
      </a>
    </div>
  </div>

  <div style="position:absolute;right:2rem;bottom:2rem;opacity:0.05;font-size:5rem;font-weight:900;font-family:monospace;color:#fff;user-select:none;">&lt;/&gt;</div>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 4 — SECTION 1 DIVIDER ──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="section-num">01</div>

<div style="position:absolute;top:44%;left:1.5rem;transform:translateY(-50%);max-width:65%;">
  <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);margin-bottom:0.6rem;">— SECTION 1</div>
  <div class="section-heading">Foundations:<br>Using Specs to Shape<br>an Application</div>
  <div class="section-subtitle">Understand the product, the risks, and the workflow</div>
</div>

<div style="position:absolute;bottom:2rem;left:1.5rem;right:1.5rem;">
  <Pipeline :active="0" />
</div>

---
layout: default
---

<!-- ─── SLIDE 5 — THE CLIENT BRIEF ───────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>You've Just Received This</h1>

<div class="flex gap-6" style="margin-top:2.5rem;">
  <div class="flex-1" style="border-left:3px solid var(--or-orange);padding-left:1rem;">
    <p style="font-size:1.05rem;font-style:italic;line-height:1.7;color:#e2e8f0;">
      "We need a tool where our agents can take a photo of any room and instantly see what it would look like renovated or staged. Different styles — modern, farmhouse, luxury, whatever the buyer demographic wants."
    </p>
    <p style="color:var(--or-muted);font-size:0.78rem;margin-top:0.5rem;">— Head of Operations, real estate agency</p>
  </div>
  <div class="flex flex-col gap-2" style="min-width:200px;">
    <div class="card muted" style="padding:0.55rem 0.75rem;">
      <span style="font-size:0.72rem;color:var(--or-muted);">50+ agents · 3 offices</span>
    </div>
    <div class="card muted" style="padding:0.55rem 0.75rem;">
      <span style="font-size:0.72rem;color:var(--or-muted);">400+ listings/year</span>
    </div>
    <div class="card muted" style="padding:0.55rem 0.75rem;">
      <span style="font-size:0.72rem;color:var(--or-muted);">$200–500/listing for staging today</span>
    </div>
    <div class="card muted" style="padding:0.55rem 0.75rem;">
      <span style="font-size:0.72rem;color:var(--or-muted);">Saw an AI demo at a conference</span>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8">
  <a href="https://docs.google.com/document/d/18eeZ8zvoM9qFCXWIYCo7JI_6DJfHRiRMwDaUk9dsz_U/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
     style="display:inline-flex;align-items:center;gap:0.5rem;border:1px solid var(--or-orange);color:var(--or-orange);border-radius:6px;padding:0.45rem 0.9rem;font-size:0.78rem;font-weight:600;text-decoration:none;background:rgba(249,115,22,0.08);">
    📄 Full Meeting Notes
  </a>
</div>

---
layout: default
---

<!-- ─── SLIDE 6 — FEATURE EXPLOSION ──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>What They Asked For</h1>
<p class="sub">14+ features. One meeting. Zero prioritization.</p>

<FeatureBubbles />

<p class="absolute bottom-8 left-8 right-8 text-center" style="color:var(--or-muted);font-size:0.78rem;font-style:italic;">
  This is what requirements look like in real life.
</p>

---
layout: default
---

<!-- ─── SLIDE 7 — POLL: WHAT WOULD YOU BUILD FIRST? ─────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>What's the first feature you'd build?</h1>

<div class="flex gap-6 mt-5">
  <div class="flex flex-col gap-3 flex-1">
    <div class="poll-option"><span style="color:var(--or-orange);font-weight:700;margin-right:0.75rem;">A</span> Photo upload + basic AI generation</div>
    <div class="poll-option"><span style="color:var(--or-orange);font-weight:700;margin-right:0.75rem;">B</span> Before/after comparison slider</div>
    <div class="poll-option"><span style="color:var(--or-orange);font-weight:700;margin-right:0.75rem;">C</span> Project saving + agent profiles</div>
    <div class="poll-option"><span style="color:var(--or-orange);font-weight:700;margin-right:0.75rem;">D</span> Multiple design styles</div>
  </div>
</div>

<div class="absolute bottom-8 left-8 right-8">
  <p style="font-size:0.78rem;font-style:italic;color:var(--or-muted);text-align:center;">
    Notice how we disagree — same brief, different priorities. <strong style="color:var(--or-orange);">Specs eliminate this.</strong>
  </p>
</div>

---
layout: default
---

<!-- ─── SLIDE 8 — COST OF NOT SPECIFYING ─────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>What Happens Without Specs</h1>
<p class="sub">Not an abstract risk. This is what happens on the renovation app.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:0.75rem;">

  <!-- LEFT: Brief + Dev interpretations -->
  <div style="display:flex;flex-direction:column;gap:0.45rem;">
    <div style="text-align:center;">
      <code style="background:#1e293b;border:1px solid #475569;color:#e2e8f0;padding:0.25rem 0.75rem;border-radius:20px;font-size:0.68rem;font-family:'Roboto Mono',monospace;">BRIEF: "Users can select from different styles."</code>
    </div>
    <div style="background:#1e293b;border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;gap:0.65rem;align-items:center;">
      <div style="width:26px;height:26px;background:#475569;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.65rem;flex-shrink:0;">A</div>
      <div>
        <div style="font-weight:700;font-size:0.68rem;color:#e2e8f0;">Dev A Built: Standard HTML Dropdown</div>
        <code style="font-size:0.52rem;color:var(--or-muted);">&lt;select&gt;&lt;option&gt;Modern...&lt;/option&gt;&lt;/select&gt;</code>
      </div>
    </div>
    <div style="background:#1e293b;border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;gap:0.65rem;align-items:center;">
      <div style="width:26px;height:26px;background:#475569;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.65rem;flex-shrink:0;">B</div>
      <div>
        <div style="font-weight:700;font-size:0.68rem;color:#e2e8f0;">Dev B Built: Free-text Input Field</div>
        <code style="font-size:0.52rem;color:var(--or-muted);">&lt;input type="text" placeholder="..." /&gt;</code>
      </div>
    </div>
    <div style="background:#1e293b;border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;gap:0.65rem;align-items:center;">
      <div style="width:26px;height:26px;background:#475569;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.65rem;flex-shrink:0;">C</div>
      <div>
        <div style="font-weight:700;font-size:0.68rem;color:#e2e8f0;">Dev C Built: Image Gallery Grid</div>
        <code style="font-size:0.52rem;color:var(--or-muted);">&lt;Gallery items={styles} /&gt;</code>
      </div>
    </div>
    <div style="background:var(--or-red);border-radius:4px;padding:0.3rem 0.6rem;text-align:center;font-size:0.65rem;font-weight:700;letter-spacing:0.06em;color:#fff;">
      RESULT: ALL "TECHNICALLY CORRECT" BUT TOTALLY MISALIGNED
    </div>
  </div>

  <!-- RIGHT: Compound cost -->
  <div style="display:flex;flex-direction:column;gap:0.4rem;">
    <div style="font-weight:700;font-size:0.88rem;color:#e2e8f0;">The Compound Cost</div>
    <p style="font-size:0.68rem;color:var(--or-muted);line-height:1.5;">Without specs, every sprint adds debt. Early misalignment compounds into expensive rework and brittle code.</p>
    <div style="display:flex;flex-direction:column;gap:0.2rem;margin-bottom:0.4rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.65rem;color:#e2e8f0;"><span style="color:var(--or-red);">✖</span> Sprint 1: Build wrong feature</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.65rem;color:#e2e8f0;"><span style="color:var(--or-amber);">↺</span> Sprint 2: Rewrite entirely</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.65rem;color:#e2e8f0;"><span style="color:var(--or-amber);">⚙</span> Sprint 3: Patch edge cases</div>
    </div>
    <CostChart />
  </div>

</div>

---
layout: default
---

<!-- ─── SLIDE 9 — SPEC-DRIVEN WORKFLOW (HERO) ────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Spec-Driven Workflow</h1>
<p class="sub">Every feature starts with a spec. The spec stays the source of truth.</p>

<div style="margin-top:3rem;">
  <!-- Main workflow boxes -->
  <div style="display:flex;align-items:flex-start;justify-content:center;gap:0;position:relative;">
    <!-- SPEC -->
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
      <div style="background:var(--or-orange);color:#000;font-weight:900;font-size:1rem;letter-spacing:0.08em;border-radius:8px;padding:0.7rem 0;width:100%;text-align:center;">SPEC</div>
      <div style="width:2px;height:20px;background:#475569;margin:0 auto;"></div>
      <div style="background:#1a3a2a;border:1px solid var(--or-green);border-radius:20px;padding:0.22rem 0.6rem;display:flex;align-items:center;gap:0.3rem;font-size:0.58rem;font-weight:600;color:var(--or-green);white-space:nowrap;">📋 Design Doc</div>
      <div style="font-size:0.55rem;color:var(--or-muted);text-align:center;margin-top:0.3rem;line-height:1.4;">User Story, Constraints,<br>Non-Goals</div>
    </div>
    <!-- Arrow -->
    <div style="display:flex;align-items:center;padding:0.5rem 0.3rem;padding-top:0.7rem;flex-shrink:0;">
      <svg width="24" height="20" viewBox="0 0 24 20"><path d="M2 10 L18 10 M14 5 L20 10 L14 15" stroke="#475569" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <!-- PLAN -->
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
      <div style="background:var(--or-orange);color:#000;font-weight:900;font-size:1rem;letter-spacing:0.08em;border-radius:8px;padding:0.7rem 0;width:100%;text-align:center;">PLAN</div>
      <div style="width:2px;height:20px;background:#475569;margin:0 auto;"></div>
      <div style="background:#1a3a2a;border:1px solid var(--or-green);border-radius:20px;padding:0.22rem 0.6rem;display:flex;align-items:center;gap:0.3rem;font-size:0.58rem;font-weight:600;color:var(--or-green);white-space:nowrap;">📋 Task Plan</div>
      <div style="font-size:0.55rem;color:var(--or-muted);text-align:center;margin-top:0.3rem;line-height:1.4;">Atomic Steps,<br>Dependencies</div>
    </div>
    <!-- Arrow -->
    <div style="display:flex;align-items:center;padding:0.5rem 0.3rem;padding-top:0.7rem;flex-shrink:0;">
      <svg width="24" height="20" viewBox="0 0 24 20"><path d="M2 10 L18 10 M14 5 L20 10 L14 15" stroke="#475569" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <!-- WORK -->
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
      <div style="background:var(--or-orange);color:#000;font-weight:900;font-size:1rem;letter-spacing:0.08em;border-radius:8px;padding:0.7rem 0;width:100%;text-align:center;">WORK</div>
      <div style="width:2px;height:20px;background:#475569;margin:0 auto;"></div>
      <div style="background:#1a3a2a;border:1px solid var(--or-green);border-radius:20px;padding:0.22rem 0.6rem;display:flex;align-items:center;gap:0.3rem;font-size:0.58rem;font-weight:600;color:var(--or-green);white-space:nowrap;">&lt;/&gt; Running Code</div>
      <div style="font-size:0.55rem;color:var(--or-muted);text-align:center;margin-top:0.3rem;line-height:1.4;">Implementation,<br>Tests</div>
    </div>
    <!-- Arrow -->
    <div style="display:flex;align-items:center;padding:0.5rem 0.3rem;padding-top:0.7rem;flex-shrink:0;">
      <svg width="24" height="20" viewBox="0 0 24 20"><path d="M2 10 L18 10 M14 5 L20 10 L14 15" stroke="#475569" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <!-- REVIEW -->
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
      <div style="background:var(--or-blue);color:#fff;font-weight:900;font-size:1rem;letter-spacing:0.08em;border-radius:8px;padding:0.7rem 0;width:100%;text-align:center;">REVIEW</div>
      <div style="width:2px;height:20px;background:#475569;margin:0 auto;"></div>
      <div style="background:#0f1f3d;border:1px solid var(--or-blue);border-radius:20px;padding:0.22rem 0.6rem;display:flex;align-items:center;gap:0.3rem;font-size:0.58rem;font-weight:600;color:var(--or-blue);white-space:nowrap;">📋 Review Report</div>
      <div style="font-size:0.55rem;color:var(--or-muted);text-align:center;margin-top:0.3rem;line-height:1.4;">Validation<br>against Spec</div>
    </div>
  </div>

  <!-- Iterative loop -->
  <div style="margin-top:0.75rem;padding:0 1rem;">
    <svg width="100%" height="52" viewBox="0 0 640 52" preserveAspectRatio="xMidYMid meet" style="display:block;overflow:visible;">
      <defs>
        <marker id="loopArrow" markerWidth="9" markerHeight="9" refX="1" refY="4.5" orient="auto">
          <path d="M8,1 L1,4.5 L8,8" fill="none" stroke="#3B82F6" stroke-width="1.5" opacity="0.75"/>
        </marker>
      </defs>
      <!-- Arc from right to left, curving downward -->
      <path d="M 610 10 Q 320 50 30 10" stroke="#3B82F6" stroke-width="1.5" fill="none"
            stroke-dasharray="6 4" opacity="0.65" marker-end="url(#loopArrow)"/>
      <!-- Dot at the start (right/REVIEW end) -->
      <circle cx="610" cy="10" r="3.5" fill="#3B82F6" opacity="0.55"/>
      <!-- Label text centered below the arc apex -->
      <text x="320" y="48" text-anchor="middle" font-size="8.5" font-weight="700"
            letter-spacing="1.8" fill="#3B82F6" opacity="0.85" font-family="Inter, sans-serif">ITERATIVE LOOP</text>
    </svg>
  </div>

  <!-- Info cards -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.75rem;">
    <div style="background:var(--or-card);border-radius:8px;padding:0.5rem 0.75rem;border:1px solid #334155;display:flex;align-items:center;gap:0.5rem;">
      <span style="font-size:0.75rem;color:var(--or-blue);">ℹ</span>
      <span style="font-size:0.72rem;color:var(--or-muted);">NOT waterfall — specs are lightweight, living, and evolve.</span>
    </div>
    <div style="background:var(--or-card);border-radius:8px;padding:0.5rem 0.75rem;border:1px solid #334155;display:flex;align-items:center;gap:0.5rem;">
      <span style="font-size:0.75rem;color:var(--or-blue);">↺</span>
      <span style="font-size:0.72rem;color:var(--or-muted);">This pipeline runs once per feature, per phase.</span>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 10 — VAGUE VS CONCRETE ─────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Same Requirement. Two Very Different Specs.</h1>
<p class="sub">From the renovation app brief</p>

<div style="display:grid;grid-template-columns:1fr 1.35fr;gap:1rem;margin-top:0.75rem;">
  <!-- Left: VAGUE -->
  <div>
    <div style="background:var(--or-red);color:#fff;border-radius:20px;padding:0.22rem 0.7rem;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.65rem;font-weight:700;margin-bottom:0.55rem;">✖ VAGUE</div>
    <div style="border:2px solid rgba(224,60,46,0.5);border-radius:10px;padding:0.85rem;background:rgba(224,60,46,0.04);min-height:260px;">
      <div style="font-size:0.58rem;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.75rem;font-weight:600;">SOURCE: CLIENT BRIEF</div>
      <p style="font-size:0.9rem;font-style:italic;line-height:1.65;color:#e2e8f0;margin-bottom:0.85rem;">
        "Users can upload photos and see redesigns in different styles."
      </p>
      <div style="font-size:0.68rem;font-weight:600;color:var(--or-red);margin-bottom:0.35rem;">▲ Problems:</div>
      <ul style="list-style:none;padding:0;font-size:0.68rem;color:var(--or-muted);display:flex;flex-direction:column;gap:0.2rem;">
        <li>• What file types?</li>
        <li>• How many styles?</li>
        <li>• What if AI fails?</li>
        <li>• How long is "see redesigns"?</li>
      </ul>
    </div>
  </div>

  <!-- Right: STRUCTURED SPEC -->
  <div>
    <div style="background:var(--or-green);color:#000;border-radius:20px;padding:0.22rem 0.7rem;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.65rem;font-weight:700;margin-bottom:0.55rem;">✓ STRUCTURED SPEC</div>
    <div style="border:2px solid rgba(34,197,94,0.4);border-radius:10px;background:#161b22;overflow:hidden;min-height:260px;">
      <div style="padding:0.5rem 0.75rem;border-bottom:1px solid #30363d;font-size:0.58rem;letter-spacing:0.1em;color:var(--or-muted);font-weight:600;">FORMAT: STRUCTURED REQUIREMENTS</div>
      <div style="padding:0.5rem 0.75rem;border-bottom:1px solid #30363d;font-size:0.7rem;font-weight:700;color:#e2e8f0;">Feature: Style Selection + AI Generation</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;padding:0.5rem 0.75rem;gap:0.75rem;font-size:0.6rem;">
        <div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">USER JOURNEY</div>
          <div style="color:#e2e8f0;line-height:1.55;margin-bottom:0.5rem;">User uploads room photo → selects from 6 preset styles → clicks "Generate" → sees redesigned room within 15 sec</div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">CONSTRAINTS</div>
          <div style="color:#e2e8f0;line-height:1.55;"><span style="color:#60a5fa;">File types:</span> JPEG/PNG only, max 10MB<br><span style="color:#60a5fa;">Render time:</span> &lt; 15 seconds (Nano Banana API)<br><span style="color:#60a5fa;">Styles:</span> Modern, Farmhouse, Mid-Century, Coastal, Luxury, Minimalist</div>
        </div>
        <div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">ERROR HANDLING</div>
          <div style="color:#e2e8f0;line-height:1.55;margin-bottom:0.5rem;">API timeout &gt;20s → show retry button<br>Non-room photo detected → show warning</div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">ACCEPTANCE CRITERIA</div>
          <div style="color:#e2e8f0;line-height:1.6;margin-bottom:0.5rem;">
            <div>✓ All 6 styles render correctly</div>
            <div>✓ Upload validation rejects &gt;10MB files</div>
            <div>✓ Error state shown on API failure</div>
          </div>
          <div style="color:var(--or-red);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">NON-GOALS</div>
          <div style="color:#e2e8f0;font-style:italic;font-size:0.58rem;">✕ Custom style input, style thumbnails (Phase 2)</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="absolute bottom-5 left-8 right-8 text-center">
  <span style="font-size:0.85rem;color:var(--or-orange);font-weight:600;">🤖 Question: Which one would you hand to Claude Code?</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 11 — QUIZ: WHICH SPEC DO YOU TRUST? ────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>QUIZ: Which spec would you hand to Claude Code?</h1>
<p class="sub">Same feature request. Two very different outcomes.</p>

<div style="display:grid;grid-template-columns:1fr 1.35fr;gap:1rem;margin-top:0.75rem;">
  <!-- Left: Option A (Vague) -->
  <div>
    <div style="background:var(--or-red);color:#fff;border-radius:20px;padding:0.22rem 0.7rem;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.65rem;font-weight:700;margin-bottom:0.55rem;">✖ OPTION A — VAGUE</div>
    <div style="border:2px solid rgba(224,60,46,0.5);border-radius:10px;padding:0.85rem;background:rgba(224,60,46,0.04);min-height:240px;">
      <div style="font-size:0.58rem;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.75rem;font-weight:600;">FROM: FEATURE REQUEST</div>
      <p style="font-size:0.88rem;font-style:italic;line-height:1.65;color:#e2e8f0;margin-bottom:0.85rem;">
        "Implement a photo upload feature where users can upload room photos and generate AI-styled versions."
      </p>
      <div style="font-size:0.68rem;font-weight:600;color:var(--or-red);margin-bottom:0.35rem;">▲ What Claude Code will guess:</div>
      <ul style="list-style:none;padding:0;font-size:0.68rem;color:var(--or-muted);display:flex;flex-direction:column;gap:0.2rem;">
        <li>• Any file type allowed?</li>
        <li>• How many styles to show?</li>
        <li>• What if AI fails or times out?</li>
        <li>• Where does the image get stored?</li>
      </ul>
    </div>
  </div>

  <!-- Right: Option B (Structured Spec) -->
  <div>
    <div style="background:var(--or-green);color:#000;border-radius:20px;padding:0.22rem 0.7rem;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.65rem;font-weight:700;margin-bottom:0.55rem;">✓ OPTION B — STRUCTURED SPEC</div>
    <div style="border:2px solid rgba(34,197,94,0.4);border-radius:10px;background:#161b22;overflow:hidden;min-height:240px;">
      <div style="padding:0.5rem 0.75rem;border-bottom:1px solid #30363d;font-size:0.58rem;letter-spacing:0.1em;color:var(--or-muted);font-weight:600;">FORMAT: STRUCTURED REQUIREMENTS</div>
      <div style="padding:0.5rem 0.75rem;border-bottom:1px solid #30363d;font-size:0.7rem;font-weight:700;color:#e2e8f0;">Feature: Photo Upload + AI Style Generation</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;padding:0.5rem 0.75rem;gap:0.75rem;font-size:0.6rem;">
        <div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">CONSTRAINTS</div>
          <div style="color:#e2e8f0;line-height:1.55;margin-bottom:0.5rem;"><span style="color:#60a5fa;">File types:</span> JPEG/PNG only, max 10MB<br><span style="color:#60a5fa;">Storage:</span> Supabase /rooms/&#123;userId&#125;/&#123;projectId&#125;<br><span style="color:#60a5fa;">Styles:</span> 6 presets only</div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">ROOM DETECTION</div>
          <div style="color:#e2e8f0;line-height:1.55;">Nano Banana detect endpoint<br>Confidence &lt;0.7 → show manual selector</div>
        </div>
        <div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">ERROR HANDLING</div>
          <div style="color:#e2e8f0;line-height:1.55;margin-bottom:0.5rem;">API timeout &gt;20s → retry button<br>Non-room photo → block + warn</div>
          <div style="color:var(--or-orange);font-weight:700;margin-bottom:0.2rem;font-size:0.6rem;">ACCEPTANCE CRITERIA</div>
          <div style="color:#e2e8f0;line-height:1.6;">
            <div>✓ Rejects files &gt;10MB</div>
            <div>✓ Generates in &lt;15s</div>
            <div>✓ Error state on failure</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="absolute bottom-5 left-8 right-8 text-center">
  <span style="font-size:0.85rem;color:var(--or-green);font-weight:600;">✅ Spec B — Not because it's longer. Because it leaves nothing for Claude to guess.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 12 — DISCUSSION (FOUNDATIONS) ──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="margin-top:2.2rem;">
  <div class="discussion-header">
    <div class="discussion-bar-line"></div>
    <div>
      <div class="discussion-title-text">Discussion</div>
      <div class="discussion-sub">Bridging the gap between intent and implementation</div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4 mt-2">
    <div class="card blue" style="padding:0.75rem;">
      <p style="font-size:0.82rem;font-weight:600;color:#e2e8f0;margin-bottom:0.3rem;">Why do vague requirements break at scale?</p>
      <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;">What are the common failure points when specs meet implementation? Where do you see drift?</p>
    </div>
    <div class="card blue" style="padding:0.75rem;">
      <p style="font-size:0.82rem;font-weight:600;color:#e2e8f0;margin-bottom:0.3rem;">Live vs Structured</p>
      <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;">"Can AI figure it out from context?" vs "Does this spec give AI what it needs?" — what's the difference in practice?</p>
    </div>
  </div>

  <!-- Live: Vague → Structured -->
  <div style="margin-top:0.75rem;">
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.5rem;">⚡ LIVE: VAGUE → STRUCTURED</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
      <!-- RAW BRIEF -->
      <div style="border:2px dashed rgba(224,60,46,0.6);border-radius:8px;padding:0.65rem;background:rgba(224,60,46,0.04);">
        <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-red);margin-bottom:0.4rem;">RAW BRIEF</div>
        <p style="font-size:0.72rem;font-style:italic;color:#cbd5e1;line-height:1.5;margin-bottom:0.5rem;">
          "Users should be able to upload a photo of their room and see what it looks like redesigned in different styles."
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">
          <span style="background:rgba(224,60,46,0.15);color:var(--or-red);font-size:0.55rem;padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">MISSING: file types</span>
          <span style="background:rgba(224,60,46,0.15);color:var(--or-red);font-size:0.55rem;padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">MISSING: style count</span>
          <span style="background:rgba(224,60,46,0.15);color:var(--or-red);font-size:0.55rem;padding:0.15rem 0.4rem;border-radius:4px;font-weight:600;">MISSING: error states</span>
        </div>
      </div>
      <!-- STRUCTURED SPEC -->
      <div style="border:2px solid rgba(34,197,94,0.4);border-radius:8px;background:#161b22;overflow:hidden;">
        <div style="padding:0.4rem 0.65rem;border-bottom:1px solid #30363d;font-size:0.58rem;letter-spacing:0.1em;color:var(--or-green);font-weight:700;">STRUCTURED SPEC OUTPUT</div>
        <div style="padding:0.5rem 0.65rem;font-size:0.6rem;line-height:1.7;color:#e2e8f0;font-family:'Roboto Mono',monospace;">
          <div><span style="color:var(--or-orange);">USER JOURNEY:</span> Upload → Select style → Generate → Compare</div>
          <div><span style="color:var(--or-orange);">CONSTRAINTS:</span> JPEG/PNG ≤10MB, 6 presets, &lt;15s render</div>
          <div><span style="color:var(--or-orange);">EDGE CASES:</span> Timeout → retry, Non-room → block</div>
          <div><span style="color:var(--or-orange);">NON-GOALS:</span> Custom styles, AR mode (Phase 2+)</div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 13 — Q&A SECTION 1 ─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div class="text-center">
    <div class="qa-display">Q&amp;A</div>
    <p style="color:var(--or-orange);font-size:0.9rem;font-weight:600;letter-spacing:0.05em;">The Spec Toolkit</p>
    <p style="color:var(--or-muted);font-size:0.8rem;margin-top:0.3rem;">Section 1 — Foundations</p>
  </div>
  <div style="background:var(--or-card);border-radius:8px;padding:0.75rem 1.5rem;border:1px solid #334155;max-width:480px;text-align:center;">
    <p style="font-size:0.78rem;color:var(--or-muted);">In Section 2: install GSD, clarify the full brief, and build specs for every MVP feature.</p>
  </div>
</div>

<div class="breadcrumb">
  <span class="done">✅ Foundations</span>
  <span>○ Spec Toolkit</span>
  <span>○ Implementation</span>
  <span>○ Validation</span>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 14 — SECTION 2 DIVIDER ──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="section-num">02</div>

<div style="position:absolute;top:44%;left:1.5rem;transform:translateY(-50%);max-width:65%;">
  <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);margin-bottom:0.6rem;">— SECTION 2</div>
  <div class="section-heading">The Spec Toolkit:<br>Designing the App<br>Before Writing Code</div>
  <div class="section-subtitle">Clarify requirements. Build specs. Set up GSD.</div>
</div>

<div style="position:absolute;bottom:2rem;left:1.5rem;right:1.5rem;">
  <Pipeline :active="0" />
</div>

---
layout: default
---

<!-- ─── SLIDE 15 — FROM BRIEF TO DESIGN SPEC ─────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Converting the Brief: 5 Steps</h1>
<p class="sub">What happens before writing a single line of code</p>

<div style="display:flex;gap:0;margin-top:0.75rem;align-items:stretch;">
  <!-- Left: vertical orange line + circles -->
  <div style="display:flex;flex-direction:column;align-items:center;width:52px;flex-shrink:0;padding-top:0.55rem;">
    <div style="width:36px;height:36px;border:2px solid var(--or-orange);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.88rem;font-weight:700;color:var(--or-orange);background:#1a0f00;z-index:1;">1</div>
    <div style="width:2px;flex:1;background:var(--or-orange);opacity:0.3;min-height:10px;"></div>
    <div style="width:36px;height:36px;border:2px solid var(--or-orange);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.88rem;font-weight:700;color:var(--or-orange);background:#1a0f00;z-index:1;">2</div>
    <div style="width:2px;flex:1;background:var(--or-orange);opacity:0.3;min-height:10px;"></div>
    <div style="width:36px;height:36px;border:2px solid var(--or-orange);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.88rem;font-weight:700;color:var(--or-orange);background:#1a0f00;z-index:1;">3</div>
    <div style="width:2px;flex:1;background:var(--or-orange);opacity:0.3;min-height:10px;"></div>
    <div style="width:36px;height:36px;border:2px solid var(--or-orange);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.88rem;font-weight:700;color:var(--or-orange);background:#1a0f00;z-index:1;">4</div>
    <div style="width:2px;flex:1;background:var(--or-orange);opacity:0.3;min-height:10px;"></div>
    <div style="width:36px;height:36px;border:2px solid var(--or-orange);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.88rem;font-weight:700;color:var(--or-orange);background:#1a0f00;z-index:1;">5</div>
  </div>
  <!-- Right: step cards -->
  <div style="flex:1;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.1rem;">👥</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">Identify user journeys</div>
        <div style="font-size:0.7rem;color:var(--or-muted);">Who does what, in what order?</div>
      </div>
      <span style="color:var(--or-muted);font-size:0.9rem;">→</span>
      <div style="background:var(--or-green);color:#000;font-size:0.62rem;font-weight:700;padding:0.25rem 0.6rem;border-radius:5px;white-space:nowrap;font-family:'Roboto Mono',monospace;">🗺 User Flow Diagram</div>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.1rem;">🎯</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">Define MVP scope</div>
        <div style="font-size:0.7rem;color:var(--or-muted);">Which 6 features are core? Which wait?</div>
      </div>
      <span style="color:var(--or-muted);font-size:0.9rem;">→</span>
      <div style="background:var(--or-green);color:#000;font-size:0.62rem;font-weight:700;padding:0.25rem 0.6rem;border-radius:5px;white-space:nowrap;font-family:'Roboto Mono',monospace;">☰ ROADMAP entry</div>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.1rem;">🖐</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">State constraints</div>
        <div style="font-size:0.7rem;color:var(--or-muted);">Quality, Privacy, Timeline (6 weeks)</div>
      </div>
      <span style="color:var(--or-muted);font-size:0.9rem;">→</span>
      <div style="background:var(--or-green);color:#000;font-size:0.62rem;font-weight:700;padding:0.25rem 0.6rem;border-radius:5px;white-space:nowrap;font-family:'Roboto Mono',monospace;">📋 Constraints Doc</div>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.1rem;">🚫</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">List non-goals</div>
        <div style="font-size:0.7rem;color:var(--or-muted);">Explicitly out of scope (AR, Mobile App)</div>
      </div>
      <span style="color:var(--or-muted);font-size:0.9rem;">→</span>
      <div style="background:var(--or-red);color:#fff;font-size:0.62rem;font-weight:700;padding:0.25rem 0.6rem;border-radius:5px;white-space:nowrap;font-family:'Roboto Mono',monospace;">📄 Non-goals List</div>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:1.1rem;">🔨</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">Document decisions</div>
        <div style="font-size:0.7rem;color:var(--or-muted);">Why Phase 1 now? Capture the 'Why'.</div>
      </div>
      <span style="color:var(--or-muted);font-size:0.9rem;">→</span>
      <div style="background:var(--or-green);color:#000;font-size:0.62rem;font-weight:700;padding:0.25rem 0.6rem;border-radius:5px;white-space:nowrap;font-family:'Roboto Mono',monospace;">📗 Decisions Log</div>
    </div>
  </div>
</div>

<div class="absolute bottom-4 left-8 right-8 text-center">
  <span style="font-size:0.72rem;color:var(--or-muted);">ℹ This is the mental model for what the Section 2 exercise produces</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 16 — INTRODUCING GSD ───────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>GSD: Get Shit Done</h1>
<p class="sub">Automating the spec workflow with Claude Code</p>

<div class="grid grid-cols-2 gap-5 mt-3">
  <!-- Left: Terminal + Command Flow -->
  <div>
    <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.4rem;">INSTALLATION</div>
    <!-- Terminal widget -->
    <div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;overflow:hidden;margin-bottom:0.75rem;">
      <div style="padding:0.4rem 0.6rem;display:flex;gap:0.3rem;border-bottom:1px solid #21262d;">
        <div style="width:10px;height:10px;border-radius:50%;background:#ff5f57;"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#febc2e;"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#28c840;"></div>
      </div>
      <div style="padding:0.5rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.82rem;">
        <span style="color:var(--or-green);">$</span> <span style="color:#e2e8f0;">npx get-shit-done-cc@latest</span>
      </div>
    </div>
    <!-- Command flow diagram -->
    <div style="display:flex;flex-direction:column;gap:0;padding-left:0.2rem;">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.2rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:#4b5563;border:2px solid #6b7280;flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:#e2e8f0;">/gsd:new-project</div>
      </div>
      <div style="width:2px;height:12px;background:#4b5563;margin-left:5px;border-left:2px dashed #4b5563;border-right:none;margin-bottom:0.2rem;opacity:0.6;"></div>
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.2rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:var(--or-orange);flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid var(--or-orange);border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-orange);">/gsd:discuss-phase</div>
      </div>
      <div style="width:2px;height:12px;background:#4b5563;margin-left:5px;margin-bottom:0.2rem;opacity:0.6;"></div>
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.2rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:#4b5563;border:2px solid #6b7280;flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:#e2e8f0;">/gsd:plan-phase</div>
      </div>
      <div style="width:2px;height:12px;background:#4b5563;margin-left:5px;margin-bottom:0.2rem;opacity:0.6;"></div>
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.2rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:#4b5563;border:2px solid #6b7280;flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:#e2e8f0;">/gsd:execute-phase</div>
      </div>
      <div style="width:2px;height:12px;background:#4b5563;margin-left:5px;margin-bottom:0.2rem;opacity:0.6;"></div>
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.2rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:#4b5563;border:2px solid #6b7280;flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:#e2e8f0;">/gsd:verify-work</div>
      </div>
      <div style="width:2px;height:12px;background:#4b5563;margin-left:5px;margin-bottom:0.2rem;opacity:0.6;"></div>
      <div style="display:flex;align-items:center;gap:0.6rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:#4b5563;border:2px solid var(--or-green);flex-shrink:0;"></div>
        <div style="background:#1e2330;border:1px solid var(--or-green);border-radius:5px;padding:0.28rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-green);">/gsd:ship</div>
      </div>
    </div>
  </div>

  <!-- Right: The Spec is the Center + Config -->
  <div>
    <div style="display:inline-block;background:var(--or-orange);color:#000;font-size:0.6rem;font-weight:700;padding:0.2rem 0.6rem;border-radius:4px;letter-spacing:0.08em;margin-bottom:0.5rem;">KEY DIFFERENTIATOR</div>
    <div style="font-size:1.15rem;font-weight:800;color:#e2e8f0;margin-bottom:0.6rem;">The Spec is the Center</div>
    <!-- REQUIREMENTS.md card -->
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.6rem 0.75rem;display:flex;align-items:flex-start;gap:0.6rem;margin-bottom:0.5rem;">
      <div style="font-size:1.4rem;flex-shrink:0;">📄</div>
      <div>
        <div style="font-size:0.8rem;font-weight:700;color:#e2e8f0;font-family:'Roboto Mono',monospace;">REQUIREMENTS.md</div>
        <div style="font-size:0.68rem;color:var(--or-muted);">The single source of truth.</div>
      </div>
    </div>
    <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.55;margin-bottom:0.75rem;">GSD keeps this file central at every phase. The spec doesn't get lost during a long build — it's referenced, checked, and updated at every step.</p>
    <!-- Configuration & Rules -->
    <div style="font-size:0.88rem;font-weight:700;color:#e2e8f0;margin-bottom:0.4rem;">Configuration &amp; Rules</div>
    <div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.6rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.68rem;line-height:2;color:#e2e8f0;">
      <div><span style="color:var(--or-amber);">📁</span> <span style="color:#e2e8f0;">my-project/</span></div>
      <div style="padding-left:1.2rem;"><span style="color:var(--or-red);">📄</span> <span style="color:#e2e8f0;">REQUIREMENTS.md</span><span style="color:var(--or-muted);font-style:italic;margin-left:1rem;">Living spec</span></div>
      <div style="padding-left:1.2rem;"><span style="color:#60a5fa;">📄</span> <span style="color:#e2e8f0;">CLAUDE.md</span><span style="color:var(--or-muted);font-style:italic;margin-left:1rem;">Coding conventions</span></div>
      <div style="padding-left:1.2rem;"><span style="color:var(--or-amber);">📁</span> <span style="color:#e2e8f0;">.claude/rules/</span></div>
      <div style="padding-left:2.4rem;"><span style="color:#94a3b8;">📄</span> <span style="color:#e2e8f0;">api-design.md</span></div>
      <div style="padding-left:2.4rem;"><span style="color:#94a3b8;">📄</span> <span style="color:#e2e8f0;">testing.md</span></div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 17 — ANATOMY OF A FEATURE SPEC ─────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>What Goes in a Feature Spec?</h1>
<p class="sub">6 building blocks — each prevents a different type of ambiguity</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-top:0.6rem;">
  <!-- User Journey -->
  <div style="background:#1a2030;border:1px solid #2d3a50;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">👥</span>
      <span style="font-size:0.88rem;font-weight:700;color:#60a5fa;">User Journey</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">Step-by-step user flow</div>
    <div style="border-left:3px solid #60a5fa;padding-left:0.6rem;background:#0d1525;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">Agent uploads photo → selects 'Modern' style → clicks Generate → sees result in 12s</div>
  </div>
  <!-- Screen Description -->
  <div style="background:#1e1a30;border:1px solid #3a2d50;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">🖥</span>
      <span style="font-size:0.88rem;font-weight:700;color:#a78bfa;">Screen Description</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What the UI shows</div>
    <div style="border-left:3px solid #a78bfa;padding-left:0.6rem;background:#0d0a20;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">Upload page: drag-and-drop zone, room type selector (6 options), 10MB limit shown</div>
  </div>
  <!-- API Contract -->
  <div style="background:#201a15;border:1px solid #503a2d;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">⚡</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-orange);">API Contract</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">Endpoint, request, response</div>
    <div style="border-left:3px solid var(--or-orange);background:#100d08;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.65rem;color:#e2e8f0;line-height:1.7;"><span style="color:#60a5fa;">POST</span> /api/generate<br>&#123;roomId, styleId&#125;<br>→ &#123;generationId, status, imageUrl&#125;</div>
  </div>
  <!-- Data Model -->
  <div style="background:#0d1a1a;border:1px solid #1a3a3a;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">🗄</span>
      <span style="font-size:0.88rem;font-weight:700;color:#2dd4bf;">Data Model</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">Tables, fields, types</div>
    <div style="border-left:3px solid #2dd4bf;background:#060f0f;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.65rem;color:#e2e8f0;line-height:1.7;">rooms (<br>&nbsp;&nbsp;id: <span style="color:#60a5fa;">uuid</span>,<br>&nbsp;&nbsp;projectId: <span style="color:#60a5fa;">uuid</span>,<br>&nbsp;&nbsp;originalUrl: <span style="color:#60a5fa;">text</span>,<br>&nbsp;&nbsp;roomType: <span style="color:#a78bfa;">enum</span><br>)</div>
  </div>
  <!-- Edge Cases -->
  <div style="background:#1e1010;border:1px solid #502020;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">⚠️</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-red);">Edge Cases</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What could go wrong</div>
    <div style="border-left:3px solid var(--or-red);background:#0f0808;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.7;">Blurry photo → warn.<br>Non-room → block.<br>API timeout → retry once, then error state</div>
  </div>
  <!-- Acceptance Criteria -->
  <div style="background:#0d1a10;border:1px solid #1a3a20;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">✅</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-green);">Acceptance Criteria</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">Testable pass/fail</div>
    <div style="border-left:3px solid var(--or-green);background:#060f08;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.7;">✅ Style selection shows 6 options with preview<br>✅ Generation completes in &lt;15s</div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 18 — ARCHITECTURE + DATA MODEL ──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>System Architecture + Data Model</h1>
<p class="sub">How specs translate to system design for the renovation app</p>

<div style="display:grid;grid-template-columns:1.7fr 1fr;gap:1.2rem;margin-top:0.6rem;align-items:start;">
<div style="background:var(--or-card);border:1px solid #334155;border-radius:10px;padding:0.65rem 1rem;">
<div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.55rem;">SYSTEM ARCHITECTURE</div>
<div style="display:flex;flex-direction:column;align-items:center;">
<div style="border:2px solid var(--or-orange);border-radius:8px;padding:0.38rem 1rem;width:62%;text-align:center;background:rgba(234,88,12,0.1);">
<div style="display:flex;align-items:center;justify-content:center;gap:0.35rem;margin-bottom:0.12rem;"><span style="font-size:0.9rem;">🌐</span><span style="font-size:0.82rem;font-weight:700;color:var(--or-orange);">Browser</span></div>
<div style="font-size:0.6rem;color:#e2e8f0;">Next.js App Router (Client)</div>
<div style="font-size:0.55rem;color:var(--or-muted);">/upload, /projects</div>
</div>
<div style="display:flex;flex-direction:column;align-items:center;padding:0.06rem 0;">
<div style="width:2px;height:10px;background:#4b5563;"></div>
<div style="font-size:0.55rem;color:var(--or-muted);padding:0.06rem 0.4rem;background:#0f172a;border:1px solid #334155;border-radius:3px;white-space:nowrap;">HTTP / API Routes</div>
<div style="width:2px;height:10px;background:#4b5563;"></div>
<div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #4b5563;"></div>
</div>
<div style="border:2px solid var(--or-orange);border-radius:8px;padding:0.38rem 1rem;width:62%;text-align:center;background:rgba(234,88,12,0.1);">
<div style="display:flex;align-items:center;justify-content:center;gap:0.35rem;margin-bottom:0.12rem;"><span style="font-size:0.9rem;">⚙️</span><span style="font-size:0.82rem;font-weight:700;color:var(--or-orange);">Next.js Server</span></div>
<div style="font-size:0.6rem;color:#e2e8f0;">API Routes / Middleware</div>
<div style="font-size:0.55rem;color:var(--or-muted);">/api/generate, /api/auth</div>
</div>
<div style="position:relative;width:70%;height:28px;margin:0 auto;flex-shrink:0;">
<div style="position:absolute;left:50%;top:0;width:2px;height:10px;background:#4b5563;transform:translateX(-50%);"></div>
<div style="position:absolute;left:18%;right:18%;top:10px;height:2px;background:#4b5563;"></div>
<div style="position:absolute;left:18%;top:10px;width:2px;height:14px;background:#4b5563;transform:translateX(-50%);"></div>
<div style="position:absolute;right:18%;top:10px;width:2px;height:14px;background:#4b5563;transform:translateX(50%);"></div>
<div style="position:absolute;left:18%;bottom:0;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #4b5563;transform:translateX(-50%);"></div>
<div style="position:absolute;right:18%;bottom:0;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #4b5563;transform:translateX(50%);"></div>
</div>
<div style="display:flex;gap:0.75rem;width:82%;">
<div style="flex:1;border:2px solid var(--or-green);border-radius:8px;padding:0.32rem 0.6rem;background:rgba(34,197,94,0.07);text-align:center;">
<div style="display:flex;align-items:center;justify-content:center;gap:0.25rem;margin-bottom:0.15rem;"><span style="font-size:0.85rem;">⚡</span><span style="font-size:0.75rem;font-weight:700;color:var(--or-green);">Supabase</span></div>
<div style="font-size:0.57rem;color:var(--or-muted);line-height:1.5;"><div>Auth</div><div>Postgres DB</div><div>Storage</div></div>
</div>
<div style="flex:1;border:2px solid var(--or-blue);border-radius:8px;padding:0.32rem 0.6rem;background:rgba(59,130,246,0.07);text-align:center;">
<div style="display:flex;align-items:center;justify-content:center;gap:0.25rem;margin-bottom:0.15rem;"><span style="font-size:0.85rem;">✏️</span><span style="font-size:0.75rem;font-weight:700;color:var(--or-blue);">Nano Banana</span></div>
<div style="font-size:0.57rem;color:var(--or-muted);line-height:1.5;"><div>Image Gen</div><div>Room Detect</div></div>
</div>
</div>
</div>
</div>
<div>
<div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.5rem;">DATABASE ERD</div>
<div style="font-size:0.6rem;font-family:'Roboto Mono',monospace;">
<div style="width:76%;margin-left:0;background:#1e2330;border:1px solid #334155;border-radius:6px;overflow:hidden;">
<div style="background:#2a3040;padding:0.2rem 0.45rem;font-weight:700;color:#e2e8f0;display:flex;justify-content:space-between;"><span>users</span><span style="color:var(--or-muted);">👤</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">id</span><span style="color:var(--or-amber);">PK</span><span style="color:var(--or-muted);">uuid</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">email</span><span style="color:var(--or-muted);">text</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:var(--or-muted);">···</div>
</div>
<div style="display:flex;align-items:center;margin-left:34%;padding:0.1rem 0;gap:0.3rem;">
<div style="display:flex;flex-direction:column;align-items:center;">
<div style="width:1.5px;height:12px;background:#4b5563;"></div>
<div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid #4b5563;"></div>
</div>
<div style="font-size:0.5rem;color:#60a5fa;letter-spacing:0.05em;">1:N</div>
</div>
<div style="width:76%;margin-left:12%;background:#1e2330;border:1px solid #334155;border-radius:6px;overflow:hidden;">
<div style="background:#2a3040;padding:0.2rem 0.45rem;font-weight:700;color:#e2e8f0;display:flex;justify-content:space-between;"><span>projects</span><span style="color:var(--or-muted);">📁</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">id</span><span style="color:var(--or-amber);">PK</span><span style="color:var(--or-muted);">uuid</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">user_id</span><span style="color:#60a5fa;">FK</span><span style="color:var(--or-muted);">uuid</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:var(--or-muted);">···</div>
</div>
<div style="display:flex;align-items:center;margin-left:46%;padding:0.1rem 0;gap:0.3rem;">
<div style="display:flex;flex-direction:column;align-items:center;">
<div style="width:1.5px;height:12px;background:#4b5563;"></div>
<div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid #4b5563;"></div>
</div>
<div style="font-size:0.5rem;color:#60a5fa;letter-spacing:0.05em;">1:N</div>
</div>
<div style="width:76%;margin-left:24%;background:#1e2330;border:1px solid #334155;border-radius:6px;overflow:hidden;">
<div style="background:#2a3040;padding:0.2rem 0.45rem;font-weight:700;color:#e2e8f0;display:flex;justify-content:space-between;"><span>generations</span><span style="color:var(--or-muted);">🖼</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">id</span><span style="color:var(--or-amber);">PK</span><span style="color:var(--or-muted);">uuid</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:#e2e8f0;display:flex;gap:0.4rem;"><span style="flex:1;">project_id</span><span style="color:#60a5fa;">FK</span><span style="color:var(--or-muted);">uuid</span></div>
<div style="padding:0.16rem 0.45rem;border-top:1px solid #334155;color:var(--or-muted);">···</div>
</div>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 19 — FROM 14 FEATURES TO 6 ─────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>From 14 Features to 6 — Here's Why</h1>
<p class="sub">Not all features are equal. Some are core. Some are deferred.</p>

<!-- 3-column feature cards with colored top border -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-top:0.5rem;">
  <!-- MVP CORE -->
  <div style="border-top:3px solid var(--or-green);background:var(--or-card);border-radius:0 0 8px 8px;padding:0.65rem;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
      <span style="font-size:0.65rem;font-weight:700;color:var(--or-green);">MVP CORE (PHASE 1)</span>
      <span style="background:#1a3a20;color:var(--or-green);font-size:0.58rem;padding:0.12rem 0.4rem;border-radius:4px;font-weight:600;">6 Features</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.3rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>📷</span> Photo upload + detect</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>🎨</span> Style selection (6 presets)</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>✏️</span> AI generation (Nano Banana)</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>⇄</span> Before/after comparison</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>💾</span> Project save/load</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#0d1a10;border-radius:4px;padding:0.28rem 0.5rem;"><span>⊞</span> Basic design gallery</div>
    </div>
  </div>
  <!-- V2 ENHANCEMENTS -->
  <div style="border-top:3px solid var(--or-amber);background:var(--or-card);border-radius:0 0 8px 8px;padding:0.65rem;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
      <span style="font-size:0.65rem;font-weight:700;color:var(--or-amber);">V2 ENHANCEMENTS (PHASE 3+)</span>
      <span style="background:#2a1f00;color:var(--or-amber);font-size:0.58rem;padding:0.12rem 0.4rem;border-radius:4px;font-weight:600;">Deferred</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.3rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a1200;border-radius:4px;padding:0.28rem 0.5rem;"><span>⚡</span> Element-level control</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a1200;border-radius:4px;padding:0.28rem 0.5rem;"><span>↗</span> Sharing link for sellers</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a1200;border-radius:4px;padding:0.28rem 0.5rem;"><span>📈</span> Analytics dashboard</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a1200;border-radius:4px;padding:0.28rem 0.5rem;"><span>🔄</span> Version history</div>
    </div>
  </div>
  <!-- OUT OF SCOPE -->
  <div style="border-top:3px solid var(--or-red);background:var(--or-card);border-radius:0 0 8px 8px;padding:0.65rem;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
      <span style="font-size:0.65rem;font-weight:700;color:var(--or-red);">OUT OF SCOPE</span>
      <span style="background:#2a0a00;color:var(--or-red);font-size:0.58rem;padding:0.12rem 0.4rem;border-radius:4px;font-weight:600;">Do Not Build</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.3rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a0800;border-radius:4px;padding:0.28rem 0.5rem;"><span>🥽</span> AR Mode</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a0800;border-radius:4px;padding:0.28rem 0.5rem;"><span>🏠</span> MLS Integration</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a0800;border-radius:4px;padding:0.28rem 0.5rem;"><span>$</span> ROI Suggestions</div>
      <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.7rem;color:#e2e8f0;background:#1a0800;border-radius:4px;padding:0.28rem 0.5rem;"><span>🏷</span> White-labeling</div>
    </div>
  </div>
</div>

<!-- Edge Cases Table -->
<div style="margin-top:0.6rem;">
  <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:#e2e8f0;margin-bottom:0.35rem;">DEFINING EDGE CASES</div>
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;overflow:hidden;font-size:0.65rem;">
    <div style="display:grid;grid-template-columns:1.2fr 1.4fr 2fr;border-bottom:1px solid #334155;">
      <div style="padding:0.35rem 0.6rem;font-weight:700;letter-spacing:0.07em;color:var(--or-muted);font-size:0.58rem;">FEATURE</div>
      <div style="padding:0.35rem 0.6rem;font-weight:700;letter-spacing:0.07em;color:var(--or-muted);font-size:0.58rem;border-left:1px solid #334155;">EDGE CASE</div>
      <div style="padding:0.35rem 0.6rem;font-weight:700;letter-spacing:0.07em;color:var(--or-muted);font-size:0.58rem;border-left:1px solid #334155;">SPEC DECISION</div>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1.4fr 2fr;border-bottom:1px solid #1e2a3a;">
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;font-size:0.62rem;">Photo upload</div>
      <div style="padding:0.3rem 0.6rem;color:var(--or-muted);border-left:1px solid #1e2a3a;">Blurry / low-res image</div>
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;border-left:1px solid #1e2a3a;">Warn user, but allow upload anyway</div>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1.4fr 2fr;border-bottom:1px solid #1e2a3a;">
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;font-size:0.62rem;">Photo upload</div>
      <div style="padding:0.3rem 0.6rem;color:var(--or-muted);border-left:1px solid #1e2a3a;">Non-room photo (e.g., selfie)</div>
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;border-left:1px solid #1e2a3a;">Block with error message "Please upload a room photo"</div>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1.4fr 2fr;border-bottom:1px solid #1e2a3a;">
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;font-size:0.62rem;">AI generation</div>
      <div style="padding:0.3rem 0.6rem;color:var(--or-muted);border-left:1px solid #1e2a3a;">API timeout (&gt;20s)</div>
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;border-left:1px solid #1e2a3a;">Retry once automatically, then show error state</div>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1.4fr 2fr;">
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;font-size:0.62rem;">Style selection</div>
      <div style="padding:0.3rem 0.6rem;color:var(--or-muted);border-left:1px solid #1e2a3a;">User changes style mid-generation</div>
      <div style="padding:0.3rem 0.6rem;color:#e2e8f0;border-left:1px solid #1e2a3a;">Cancel previous request immediately, start new one</div>
    </div>
  </div>
</div>

<!-- Vague vs Testable criteria -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-top:0.5rem;">
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.75rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.35rem;">
      <span style="color:var(--or-red);font-size:0.75rem;">⊗</span>
      <span style="font-size:0.62rem;font-weight:700;color:var(--or-red);">VAGUE CRITERIA</span>
    </div>
    <div style="background:#0d1117;border-radius:4px;padding:0.3rem 0.5rem;font-family:'Roboto Mono',monospace;font-size:0.65rem;color:var(--or-muted);">"The AI image should look good."</div>
  </div>
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.75rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.35rem;">
      <span style="color:var(--or-green);font-size:0.75rem;">✓</span>
      <span style="font-size:0.62rem;font-weight:700;color:var(--or-green);">TESTABLE CRITERIA</span>
    </div>
    <div style="font-size:0.65rem;color:#e2e8f0;font-style:italic;line-height:1.5;">"Generated image passes threshold: no artifacts, room boundaries intact, style matches selection."</div>
  </div>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 20 — SECTION 3 DIVIDER ──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="section-num">03</div>

<div style="position:absolute;top:44%;left:1.5rem;transform:translateY(-50%);max-width:65%;">
  <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);margin-bottom:0.6rem;">— SECTION 3</div>
  <div class="section-heading">The Workflow:<br>Implementing Phase 1<br>Spec by Spec</div>
  <div class="section-subtitle">Spec → Plan → Build. Live.</div>
</div>

<div style="position:absolute;bottom:2rem;left:1.5rem;right:1.5rem;">
  <Pipeline :active="2" />
</div>

---
layout: default
---

<!-- ─── SLIDE 21 — WE DON'T BUILD EVERYTHING AT ONCE ─────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="margin-top:0.8rem;">We Don't Build Everything at Once</h1>
<p class="sub">Each phase is spec'd, planned, built, and reviewed before the next begins.</p>

<div style="display:flex;flex-direction:column;gap:0;margin-top:0.3rem;">

  <!-- PHASE 1 -->
  <div style="display:grid;grid-template-columns:170px 1fr 200px;border:2px solid var(--or-green);border-radius:8px;overflow:hidden;background:rgba(34,197,94,0.04);">
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(34,197,94,0.3);">
      <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.08em;color:var(--or-green);margin-bottom:0.2rem;">PHASE 1</div>
      <div style="font-size:0.85rem;font-weight:800;color:#e2e8f0;line-height:1.2;margin-bottom:0.3rem;">Core MVP Flow</div>
      <div style="display:inline-block;background:#1a3a20;color:var(--or-green);font-size:0.55rem;padding:0.1rem 0.4rem;border-radius:10px;font-weight:600;">Building Now (S3)</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(34,197,94,0.3);">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ 4 Tasks · No Dependencies</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🌐 Next.js Scaffold</span>
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">📷 Photo Upload</span>
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🎨 Style Selection</span>
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">✏️ AI Generation</span>
      </div>
    </div>
    <div style="padding:0.45rem 0.65rem;">
      <div style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.3rem;">CHECKPOINT CRITERIA</div>
      <div style="display:flex;align-items:flex-start;gap:0.3rem;font-size:0.65rem;color:#e2e8f0;line-height:1.4;">
        <span style="color:var(--or-green);flex-shrink:0;">●</span>
        <span>User can complete end-to-end flow: upload photo → select style → view result</span>
      </div>
    </div>
  </div>

  <!-- REVIEW connector 1 -->
  <div style="display:flex;align-items:center;padding-left:75px;">
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="width:2px;height:6px;background:#4b5563;"></div>
      <div style="background:#3b82f6;color:#fff;font-size:0.55rem;font-weight:700;padding:0.12rem 0.55rem;border-radius:20px;letter-spacing:0.05em;">REVIEW</div>
      <div style="width:2px;height:6px;background:#4b5563;"></div>
    </div>
  </div>

  <!-- PHASE 2 -->
  <div style="display:grid;grid-template-columns:170px 1fr 200px;border:2px solid var(--or-orange);border-radius:8px;overflow:hidden;background:rgba(234,88,12,0.04);">
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(234,88,12,0.3);">
      <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.08em;color:var(--or-orange);margin-bottom:0.2rem;">PHASE 2</div>
      <div style="font-size:0.85rem;font-weight:800;color:#e2e8f0;line-height:1.2;margin-bottom:0.3rem;">Compare &amp; Save</div>
      <div style="display:inline-block;background:#2a1500;color:var(--or-amber);font-size:0.55rem;padding:0.1rem 0.4rem;border-radius:10px;font-weight:600;">Next</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(234,88,12,0.3);">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ 2 Tasks · Requires Phase 1</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">⇄ Before/After Slider</span>
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">💾 Project Save + Load</span>
      </div>
    </div>
    <div style="padding:0.45rem 0.65rem;">
      <div style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.3rem;">CHECKPOINT CRITERIA</div>
      <div style="display:flex;align-items:flex-start;gap:0.3rem;font-size:0.65rem;color:#e2e8f0;line-height:1.4;">
        <span style="color:var(--or-amber);flex-shrink:0;">●</span>
        <span>User can save generation to project and visually compare against original</span>
      </div>
    </div>
  </div>

  <!-- REVIEW connector 2 -->
  <div style="display:flex;align-items:center;padding-left:75px;">
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="width:2px;height:6px;background:#4b5563;"></div>
      <div style="background:#3b82f6;color:#fff;font-size:0.55rem;font-weight:700;padding:0.12rem 0.55rem;border-radius:20px;letter-spacing:0.05em;">REVIEW</div>
      <div style="width:2px;height:6px;background:#4b5563;"></div>
    </div>
  </div>

  <!-- PHASE 3+ -->
  <div style="display:grid;grid-template-columns:170px 1fr 200px;border:1px solid #334155;border-radius:8px;overflow:hidden;background:rgba(255,255,255,0.02);opacity:0.7;">
    <div style="padding:0.45rem 0.65rem;border-right:1px solid #334155;">
      <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.2rem;">PHASE 3+</div>
      <div style="font-size:0.85rem;font-weight:800;color:var(--or-muted);line-height:1.2;margin-bottom:0.3rem;">Enhancements</div>
      <div style="font-size:0.6rem;color:var(--or-muted);">Take-Home</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid #334155;">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ TBD · Requires Phase 2</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">⊞ Design Gallery</span>
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">⚡ Element Control</span>
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">↗ Sharing Links</span>
      </div>
    </div>
    <div style="padding:0.45rem 0.65rem;">
      <div style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.3rem;">CHECKPOINT CRITERIA</div>
      <div style="display:flex;align-items:flex-start;gap:0.3rem;font-size:0.65rem;color:var(--or-muted);line-height:1.4;">
        <span style="flex-shrink:0;">●</span>
        <span>Per-feature acceptance criteria defined in REQUIREMENTS.md</span>
      </div>
    </div>
  </div>

</div>

<div class="absolute bottom-3 left-8 right-8 text-center">
  <span style="font-size:0.62rem;color:var(--or-muted);">ℹ We review Phase 1 before Phase 2 starts. Review findings feed the next phase's specs.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 22 — HOW /GSD:PLAN-PHASE 1 WORKS ───────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="margin-top:0.8rem;">How <span style="color:var(--or-orange);font-family:'Roboto Mono',monospace;">/gsd:plan-phase</span> Works</h1>
<p class="sub">Reads the spec → creates atomic task plans → verifies against requirements</p>

<div style="display:flex;flex-direction:column;align-items:center;margin-top:0.3rem;gap:0;">

  <!-- REQUIREMENTS.md file card -->
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:10px;padding:0.4rem 1.5rem;text-align:center;">
    <div style="font-size:1.3rem;margin-bottom:0.1rem;">📄</div>
    <div style="font-family:'Roboto Mono',monospace;font-size:0.75rem;font-weight:700;color:#e2e8f0;">REQUIREMENTS.md</div>
    <div style="font-size:0.6rem;color:var(--or-muted);">(Phase 1 Section)</div>
  </div>

  <!-- Arrow -->
  <div style="display:flex;flex-direction:column;align-items:center;padding:0.1rem 0;">
    <div style="width:2px;height:10px;background:#4b5563;"></div>
    <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid #4b5563;"></div>
  </div>

  <!-- /gsd:plan-phase pill -->
  <div style="border:2px solid var(--or-orange);border-radius:30px;padding:0.35rem 1.8rem;font-family:'Roboto Mono',monospace;font-size:0.85rem;font-weight:700;color:var(--or-orange);background:rgba(234,88,12,0.06);">/gsd:plan-phase</div>

  <!-- Arrow -->
  <div style="display:flex;flex-direction:column;align-items:center;padding:0.1rem 0;">
    <div style="width:2px;height:10px;background:#4b5563;"></div>
    <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid #4b5563;"></div>
  </div>

  <!-- GENERATED TASK PLANS container -->
  <div style="border:1.5px dashed #334155;border-radius:10px;padding:0.45rem 0.6rem;width:100%;background:rgba(255,255,255,0.015);">
    <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);text-align:center;margin-bottom:0.4rem;">GENERATED TASK PLANS</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.4rem;">
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">1</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Scaffold</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">Next.js setup + Supabase config</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-001.md</div>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">2</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Photo Upload</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">UI component + storage bucket</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-002.md</div>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">3</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Style Selection</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">6 presets with preview cards</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-003.md</div>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">4</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Nano Banana</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">API integration for image gen</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-004.md</div>
      </div>
    </div>
    <div style="text-align:right;font-size:0.55rem;color:var(--or-muted);font-style:italic;margin-top:0.3rem;">↔ Dependencies resolved automatically</div>
  </div>

  <!-- Arrow -->
  <div style="display:flex;flex-direction:column;align-items:center;padding:0.1rem 0;">
    <div style="width:2px;height:10px;background:#4b5563;"></div>
    <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid #4b5563;"></div>
  </div>

  <!-- Bottom feature cards -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;width:100%;">
    <div style="border:1.5px solid #3b82f6;border-radius:8px;padding:0.4rem 0.65rem;background:rgba(59,130,246,0.06);display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:0.95rem;">☰</span>
      <div>
        <div style="font-size:0.7rem;font-weight:700;color:#60a5fa;">Fresh 200K Context Window</div>
        <div style="font-size:0.6rem;color:var(--or-muted);">Per task. Spec re-injected every time.</div>
      </div>
    </div>
    <div style="border:1.5px solid #a78bfa;border-radius:8px;padding:0.4rem 0.65rem;background:rgba(167,139,250,0.06);display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:0.95rem;">🔀</span>
      <div>
        <div style="font-size:0.7rem;font-weight:700;color:#a78bfa;">Atomic Commits</div>
        <div style="font-size:0.6rem;color:var(--or-muted);">One commit per completed task plan.</div>
      </div>
    </div>
  </div>

</div>

---
layout: default
---

<!-- ─── SLIDE 23 — DONE = ACCEPTANCE CRITERIA PASS ────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Done = Acceptance Criteria Pass</h1>
<p class="sub">Not "it works on my machine." Not "looks good." Testable criteria from the spec.</p>

<div style="margin-top:0.8rem;">
<div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
<span style="font-size:0.62rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);white-space:nowrap;">PHASE 1 — ACCEPTANCE CRITERIA CHECKLIST</span>
<div style="flex:1;height:1px;background:#334155;"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:0.65rem;">
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">UPLOAD VALIDATION</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">Photo upload accepts JPEG/PNG ≤10MB, rejects others</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">PERFORMANCE</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">AI generation completes in &lt; 15 seconds</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">ROOM DETECTION</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">Room type detection runs on upload (or manual fallback)</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">PERSISTENCE</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">Generated image stored in Supabase Storage</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">EDGE CASES</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">Non-room photo shows warning, blocks generation</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">ERROR HANDLING</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">Error state shown on API timeout (&gt;20s)</div></div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:6px;padding:0.6rem 0.75rem;display:flex;gap:0.65rem;align-items:flex-start;">
<div style="width:18px;height:18px;border:1.5px solid #4b5563;border-radius:3px;flex-shrink:0;margin-top:0.1rem;"></div>
<div><div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.22rem;">STYLES</div><div style="font-size:0.72rem;font-family:'Roboto Mono',monospace;color:#e2e8f0;line-height:1.4;">All 6 styles displayed with correct preview</div></div>
</div>
</div>
<div style="background:#0d1a10;border-left:3px solid var(--or-green);border-radius:0 6px 6px 0;padding:0.6rem 0.9rem;display:flex;align-items:center;gap:0.6rem;">
<span style="font-size:1rem;">ℹ️</span>
<span style="font-size:0.75rem;color:#e2e8f0;">After Phase 1 is "done," we review in <strong>Section 4</strong> before Phase 2 starts.</span>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 24 — DISCUSSION SECTION 3 ──────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="margin-top:2.5rem;">
  <div class="discussion-header">
    <div class="discussion-bar-line"></div>
    <div>
      <div class="discussion-title-text">Discussion</div>
      <div class="discussion-sub">Bridging the gap between spec and code</div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-5 mt-2">
    <div class="card blue" style="padding:1rem;">
      <p style="font-size:0.9rem;font-weight:600;color:#e2e8f0;margin-bottom:0.4rem;">Implementation Drift</p>
      <p style="font-size:0.78rem;color:var(--or-muted);line-height:1.5;">Where does drift show up in implementation? What are the common failure points?</p>
    </div>
    <div class="card blue" style="padding:1rem;">
      <p style="font-size:0.9rem;font-weight:600;color:#e2e8f0;margin-bottom:0.4rem;">Early Detection</p>
      <p style="font-size:0.78rem;color:var(--or-muted);line-height:1.5;">How do you detect loss of alignment between what was spec'd and what gets built early in the process?</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 25 — BUILDING PHASE 1 (LIVE) ───────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Building Phase 1 — Live</h1>
<p class="sub">Follow along as the instructor builds using the spec</p>

<div class="live-grid">
  <div class="live-panel">
    <div style="margin-bottom:0.4rem;">
      <div class="panel-label">GSD plan phase</div>
    </div>
    <div class="panel-body">
      <span style="color:var(--or-orange);">/gsd:plan-phase</span><br>
      <span style="color:var(--or-muted);"># Action:</span><br>
      <span style="color:var(--or-muted);"># Review generated task list</span><br>
      <span style="color:var(--or-muted);"># vs REQUIREMENTS.md</span>
    </div>
  </div>
  <div class="live-panel">
    <div style="margin-bottom:0.4rem;">
      <div class="panel-label">GSD execute phase</div>
    </div>
    <div class="panel-body">
      <span style="color:var(--or-orange);">/gsd:execute-phase</span><br>
      <span style="color:var(--or-green);"># Wave A: Scaffold Next.js + Supabase</span><br>
      <span style="color:var(--or-green);"># Wave B: Photo upload (UI + storage)</span><br>
      <span style="color:var(--or-green);"># Wave C: Style selection (6 presets)</span><br>
      <span style="color:var(--or-green);"># Wave D: Nano Banana API integration</span>
    </div>
  </div>
  <div class="live-panel">
    <div style="margin-bottom:0.4rem;">
      <div class="panel-label">Smoke Test</div>
    </div>
    <div class="panel-body">
      <span style="color:var(--or-green);"># Manual Verification:</span><br>
      <span style="color:#e2e8f0;">1. Upload a room photo</span><br>
      <span style="color:#e2e8f0;">2. Select "Modern" style</span><br>
      <span style="color:#e2e8f0;">3. Verify AI result appears</span>
    </div>
  </div>
  <div class="live-panel" style="border-color:rgba(249,115,22,0.2);">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
      <div class="panel-label" style="color:var(--or-amber);">Fallback</div>
      <div style="font-size:0.62rem;font-weight:700;border:1px solid var(--or-amber);color:var(--or-amber);padding:0.1rem 0.4rem;border-radius:4px;">Safety Net</div>
    </div>
    <div class="panel-body">
      <span style="color:var(--or-muted);"># Emergency checkout:</span><br>
      <span style="color:#e2e8f0;">git </span><span style="color:var(--or-orange);">checkout checkpoint-p1</span><br>
      <br>
      <span style="color:var(--or-muted);"># Contains completed Phase 1</span><br>
      <span style="color:var(--or-muted);"># ready for review</span>
    </div>
  </div>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 26 — SECTION 4 DIVIDER ──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="section-num">04</div>

<div style="position:absolute;top:44%;left:1.5rem;transform:translateY(-50%);max-width:65%;">
  <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);margin-bottom:0.6rem;">— SECTION 4</div>
  <div class="section-heading">Validation, Continuity,<br>and Scaling<br>the Workflow</div>
  <div class="section-subtitle">Review Phase 1. Fix it. Build Phase 2.</div>
</div>

<div style="position:absolute;bottom:2rem;left:1.5rem;right:1.5rem;">
  <Pipeline :active="3" />
</div>

---
layout: default
---

<!-- ─── SLIDE 27 — WHAT REVIEW CATCHES (ICEBERG) ──────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="text-align:center;margin-bottom:0.1rem;">What Review Catches</h1>
<p class="sub" style="text-align:center;margin-bottom:0;">The visible implementation is just the tip of the iceberg</p>

<div style="position:relative;display:grid;grid-template-columns:42% 58%;gap:0;height:calc(100% - 8.5rem);margin-top:0.4rem;">
<div style="position:absolute;left:0;right:0;top:34%;height:1.5px;background:linear-gradient(90deg,rgba(147,197,253,0.7),rgba(147,197,253,0.25));z-index:1;"></div>
<div style="position:relative;display:flex;align-items:center;justify-content:center;">
<div style="position:absolute;left:0.3rem;top:14%;text-align:left;z-index:2;">
<div style="font-size:0.65rem;font-weight:700;color:#e2e8f0;letter-spacing:0.1em;">VISIBLE</div>
<div style="font-size:0.55rem;color:var(--or-muted);">10% of Reality</div>
</div>
<div style="position:absolute;left:0.3rem;top:54%;text-align:left;z-index:2;">
<div style="font-size:0.65rem;font-weight:700;color:#60a5fa;letter-spacing:0.1em;">HIDDEN</div>
<div style="font-size:0.55rem;color:var(--or-muted);">90% of Risk</div>
</div>
<svg viewBox="0 0 210 390" style="width:78%;height:auto;">
<polygon points="105,8 38,132 172,132" fill="rgba(191,219,254,0.88)" stroke="rgba(147,197,253,0.7)" stroke-width="1.2"/>
<line x1="105" y1="8" x2="78" y2="132" stroke="rgba(255,255,255,0.28)" stroke-width="0.9"/>
<line x1="105" y1="8" x2="132" y2="132" stroke="rgba(255,255,255,0.28)" stroke-width="0.9"/>
<line x1="68" y1="88" x2="142" y2="88" stroke="rgba(255,255,255,0.18)" stroke-width="0.7"/>
<polygon points="38,136 22,178 14,245 20,308 42,358 78,378 132,378 168,358 190,308 196,245 188,178 172,136" fill="rgba(23,52,110,0.96)" stroke="rgba(59,130,246,0.5)" stroke-width="1.2"/>
<line x1="105" y1="136" x2="22" y2="308" stroke="rgba(96,165,250,0.18)" stroke-width="0.9"/>
<line x1="105" y1="136" x2="188" y2="308" stroke="rgba(96,165,250,0.18)" stroke-width="0.9"/>
<line x1="20" y1="215" x2="190" y2="215" stroke="rgba(96,165,250,0.15)" stroke-width="0.7"/>
<line x1="16" y1="278" x2="194" y2="278" stroke="rgba(96,165,250,0.15)" stroke-width="0.7"/>
</svg>
</div>
<div style="display:flex;flex-direction:column;gap:0.55rem;padding-left:0.85rem;padding-top:0.1rem;">
<div style="background:#1a1f2e;border:1px solid #334155;border-radius:8px;padding:0.6rem 0.8rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.45rem;">
<span style="font-size:0.88rem;">👁️</span>
<span style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">Above the Waterline</span>
</div>
<div style="display:flex;flex-direction:column;gap:0.32rem;">
<div style="display:flex;align-items:flex-start;gap:0.45rem;">
<span style="font-size:0.78rem;flex-shrink:0;margin-top:0.05rem;">✅</span>
<span style="font-size:0.72rem;color:#e2e8f0;">Feature works on the "happy path"</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.45rem;">
<span style="font-size:0.78rem;flex-shrink:0;margin-top:0.05rem;">🖥️</span>
<span style="font-size:0.72rem;color:#e2e8f0;">UI looks correct in the demo</span>
</div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d4a7a;border-radius:8px;padding:0.6rem 0.8rem;flex:1;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.45rem;">
<span style="font-size:0.88rem;">⚠️</span>
<span style="font-size:0.85rem;font-weight:700;color:#e2e8f0;">Below the Waterline</span>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.38rem 0.6rem;">
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🧭</span>
<span style="font-size:0.68rem;color:#e2e8f0;"><strong>Spec Drift:</strong> Code &ne; Requirements</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🐛</span>
<span style="font-size:0.68rem;color:#e2e8f0;">Missing edge cases</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">📋</span>
<span style="font-size:0.68rem;color:#e2e8f0;">Unmet acceptance criteria</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">⚡</span>
<span style="font-size:0.68rem;color:#e2e8f0;">Performance issues (&gt;15s)</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🔒</span>
<span style="font-size:0.68rem;color:#e2e8f0;">Auth &amp; permission gaps</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🔗</span>
<span style="font-size:0.68rem;color:#e2e8f0;">Phase 2 inheriting P1 bugs</span>
</div>
</div>
</div>
</div>
</div>

<div style="position:absolute;bottom:0;left:-2rem;right:-2rem;background:#161b27;border-top:1px solid #334155;padding:0.5rem 2rem;display:flex;align-items:center;justify-content:space-between;">
<div style="display:flex;align-items:center;gap:0.5rem;">
<span style="font-size:0.85rem;">ℹ️</span>
<span style="font-size:0.73rem;color:#e2e8f0;">Review catches what's below the waterline — before it compounds.</span>
</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-blue);border:1px solid var(--or-blue);padding:0.12rem 0.55rem;border-radius:4px;">Phase 2</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 28 — THE LOOP ───────────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Workflow Is a Loop, Not a Line</h1>
<p class="sub">Each phase gets tighter because reviews catch drift early.</p>

<div style="margin-top:0.7rem;">
<div style="display:flex;align-items:stretch;gap:0.55rem;">
<div style="border:1.5px dashed #374151;border-radius:10px;padding:0.45rem 0.6rem;flex:1.15;">
<div style="font-size:0.52rem;font-weight:700;color:var(--or-muted);letter-spacing:0.1em;margin-bottom:0.38rem;">CYCLE 1 (SECTION 3 &amp; 4)</div>
<div style="display:flex;align-items:center;gap:0.32rem;">
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-orange);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">🔨</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-orange);">BUILD</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">S3: Live Code</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">→</div>
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-blue);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">🔍</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-blue);">REVIEW</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">/gsd:verify-work</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">→</div>
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-green);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">🔧</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-green);">FIX</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">Edge Cases</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">→</div>
<div style="background:#1e2330;border-radius:7px;border:1.5px solid #e2e8f0;padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">🚩</div>
<div style="font-size:0.68rem;font-weight:700;color:#e2e8f0;">PHASE 2</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">Spec Refined</div>
</div>
</div>
</div>
<div style="display:flex;align-items:center;color:var(--or-muted);font-size:0.85rem;flex-shrink:0;">▶</div>
<div style="border:1.5px dashed #374151;border-radius:10px;padding:0.45rem 0.6rem;flex:0.95;">
<div style="font-size:0.52rem;font-weight:700;color:var(--or-muted);letter-spacing:0.1em;margin-bottom:0.38rem;">CYCLE 2 (SECTION 4)</div>
<div style="display:flex;align-items:center;gap:0.32rem;">
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-orange);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:0.78rem;font-family:'Roboto Mono',monospace;font-weight:700;color:var(--or-orange);margin-bottom:0.2rem;">&lt;/&gt;</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-orange);">BUILD</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">S4: Expansion</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">→</div>
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-blue);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">🔍</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-blue);">REVIEW</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">Verify</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">→</div>
<div style="background:#1e2330;border-radius:7px;border-top:3px solid var(--or-green);padding:0.42rem 0.5rem;text-align:center;flex:1;">
<div style="font-size:1rem;margin-bottom:0.15rem;">✅</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-green);">FIX</div>
<div style="font-size:0.5rem;color:var(--or-muted);margin-top:0.08rem;">Polish</div>
</div>
<div style="color:var(--or-muted);font-size:0.72rem;flex-shrink:0;">▶</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1px 1fr 1px 1fr;gap:0;margin-top:0.85rem;padding-top:0.75rem;border-top:1px solid #334155;">
<div style="text-align:center;padding:0 0.75rem;">
<div style="font-size:1.3rem;margin-bottom:0.28rem;">🤖</div>
<div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Automated Verification</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.45;">GSD checks spec constraints and API contracts first</div>
</div>
<div style="background:#334155;"></div>
<div style="text-align:center;padding:0 0.75rem;">
<div style="font-size:1.3rem;margin-bottom:0.28rem;">👤</div>
<div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Manual Edge Testing</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.45;">Human verifies "feel", error states, and UX nuance</div>
</div>
<div style="background:#334155;"></div>
<div style="text-align:center;padding:0 0.75rem;">
<div style="font-size:1.3rem;margin-bottom:0.28rem;">📋</div>
<div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Spec Hardening</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.45;">Fixes update the spec for the next phase (no regression)</div>
</div>
</div>
<div style="text-align:center;margin-top:0.7rem;">
<div style="display:inline-flex;background:#1a1f2e;border:1px solid #334155;border-radius:20px;padding:0.28rem 0.85rem;gap:0.9rem;align-items:center;">
<span style="display:flex;align-items:center;gap:0.28rem;font-size:0.6rem;color:#e2e8f0;"><span style="width:7px;height:7px;border-radius:50%;background:var(--or-orange);display:inline-block;flex-shrink:0;"></span>Build (Execute)</span>
<span style="display:flex;align-items:center;gap:0.28rem;font-size:0.6rem;color:#e2e8f0;"><span style="width:7px;height:7px;border-radius:50%;background:var(--or-blue);display:inline-block;flex-shrink:0;"></span>Review (Verify)</span>
<span style="display:flex;align-items:center;gap:0.28rem;font-size:0.6rem;color:#e2e8f0;"><span style="width:7px;height:7px;border-radius:50%;background:var(--or-green);display:inline-block;flex-shrink:0;"></span>Fix (Refine)</span>
<span style="display:flex;align-items:center;gap:0.28rem;font-size:0.6rem;color:#e2e8f0;"><span style="width:7px;height:7px;border-radius:50%;background:#e2e8f0;display:inline-block;flex-shrink:0;"></span>Phase Checkpoint</span>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 29 — REVIEWING PHASE 1 (LIVE) ──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Reviewing Phase 1 — Live</h1>
<p class="sub">Identify gaps and fix them before starting the next phase.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;margin-top:0.5rem;">
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">1</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Automated Verification</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">4 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">GSD checks Phase 1 implementation against REQUIREMENTS.md.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div><span style="color:var(--or-orange);">/gsd:verify-work</span> <span style="color:#e2e8f0;">1</span></div>
<div style="color:var(--or-green);font-style:italic;"># Validates file structure</div>
<div style="color:var(--or-green);font-style:italic;"># Checks for exported functions</div>
<div style="color:var(--or-green);font-style:italic;"># Compares against spec definitions</div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">2</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Manual Acceptance Walk</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">5 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Go through Phase 1 checklist line by line.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div style="color:#e2e8f0;">Mark each criterion:</div>
<div><span style="color:var(--or-green);">✅ Pass</span><span style="color:#e2e8f0;"> &nbsp;- Works as spec'd</span></div>
<div><span style="color:var(--or-red);">❌ Fail</span><span style="color:#e2e8f0;"> &nbsp;- Not working / missing</span></div>
<div><span style="color:var(--or-amber);">⚠️ Partial</span><span style="color:#e2e8f0;"> - Flaky or incomplete</span></div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-left:3px solid var(--or-orange);border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">3</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Edge Case Testing</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">3 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Stress test the inputs and API handling.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div><span style="color:#e2e8f0;">Try: upload 15MB file &nbsp;</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-orange);"> expect rejection</span></div>
<div><span style="color:#e2e8f0;">Try: upload selfie &nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-amber);"> expect warning</span></div>
<div><span style="color:#e2e8f0;">Try: simulate timeout &nbsp;</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-red);"> expect error state</span></div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">4</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Document Findings</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">3 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Record gaps and required fixes in the spec.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div style="color:var(--or-green);font-style:italic;"># Update REQUIREMENTS.md:</div>
<div style="color:#e2e8f0;">- Gaps found during review</div>
<div style="color:#e2e8f0;">- Fixes needed before Phase 2 start</div>
<div style="color:#e2e8f0;">- Any spec updates based on learnings</div>
</div>
</div>
</div>

<div style="border-top:1px solid #334155;margin-top:0.55rem;padding-top:0.42rem;">
<div style="font-size:0.52rem;font-weight:700;color:var(--or-muted);letter-spacing:0.1em;margin-bottom:0.3rem;">REVIEW OUTPUTS</div>
<div style="display:flex;gap:1.2rem;">
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Gaps Identified</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Fix List Created</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Spec Updated</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Ready for Phase 2</span>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 30 — FIX + BUILD PHASE 2 ───────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Fix → Build Phase 2 — The Loop in Action</h1>
<p class="sub">Review findings feed the next phase. Specs evolve based on what we learned.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.55rem;margin-top:0.5rem;">
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">1</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Fix Gaps from Review</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">5 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Update spec and implement validation updates &amp; error handling.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div style="color:var(--or-green);font-style:italic;"># Apply fixes to REQUIREMENTS.md</div>
<div style="color:var(--or-green);font-style:italic;"># Implement strict validation logic</div>
<div><span style="color:var(--or-orange);">git commit</span><span style="color:#e2e8f0;"> -m "fix: upload validation per Phase 1 review"</span></div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">2</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Plan + Build Phase 2</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">8 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Scope: Before/after comparison slider, Project save/load.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div><span style="color:var(--or-orange);">/gsd:plan-phase</span><span style="color:#e2e8f0;"> 2</span></div>
<div><span style="color:var(--or-orange);">/gsd:execute-phase</span><span style="color:#e2e8f0;"> 2</span></div>
<div style="color:var(--or-green);font-style:italic;"># Focus: DB schema update for 'projects'</div>
<div style="color:var(--or-green);font-style:italic;"># Focus: Interactive slider UI component</div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">3</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Quick Verify</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">2 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Ensure new features meet acceptance criteria immediately.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div><span style="color:var(--or-orange);">/gsd:verify-work</span><span style="color:#e2e8f0;"> 2</span></div>
<div style="color:var(--or-green);font-style:italic;"># Check: Can save project?</div>
<div style="color:var(--or-green);font-style:italic;"># Check: Slider works on mobile?</div>
</div>
</div>
<div style="background:#1a1f2e;border:1.5px dashed #374151;border-radius:8px;padding:0.6rem 0.75rem;display:flex;flex-direction:column;align-items:center;justify-content:center;">
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.55rem;">
<span style="font-size:1.1rem;">🔍</span>
<span style="font-size:0.72rem;color:var(--or-muted);">→</span>
<span style="font-size:1.1rem;">🔧</span>
<span style="font-size:0.72rem;color:var(--or-muted);">→</span>
<div style="display:flex;flex-direction:column;align-items:center;gap:0.1rem;">
<span style="font-size:1.1rem;">📦</span>
<span style="font-size:0.52rem;font-weight:700;color:#e2e8f0;letter-spacing:0.05em;">NEXT PHASE</span>
</div>
</div>
<div style="font-size:0.62rem;color:var(--or-muted);text-align:center;">The cycle repeats for every phase.</div>
</div>
</div>

<div style="border-top:1px solid #334155;margin-top:0.55rem;padding-top:0.42rem;">
<div style="font-size:0.52rem;font-weight:700;color:var(--or-muted);letter-spacing:0.1em;margin-bottom:0.3rem;">LOOP STATUS</div>
<div style="display:flex;gap:1.2rem;">
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Phase 1 Gaps Fixed</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Phase 2 Spec Planned</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Phase 2 Built</span>
<span style="font-size:0.65rem;color:#e2e8f0;">✅ Verification Passed</span>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 31 — DISCUSSION SECTION 4 ──────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="margin-top:2.5rem;">
  <div class="discussion-header">
    <div class="discussion-bar-line"></div>
    <div>
      <div class="discussion-title-text">Discussion</div>
      <div class="discussion-sub">Reflecting on the gap between intent and delivery</div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 mt-2">
    <div class="card blue" style="padding:0.9rem;">
      <p style="font-size:0.82rem;font-weight:600;color:#e2e8f0;margin-bottom:0.35rem;">Failure Modes</p>
      <p style="font-size:0.75rem;color:var(--or-muted);line-height:1.5;">What are the real-world failure modes in software development? How many come from spec gaps vs execution gaps?</p>
    </div>
    <div class="card blue" style="padding:0.9rem;">
      <p style="font-size:0.82rem;font-weight:600;color:#e2e8f0;margin-bottom:0.35rem;">Context Loss</p>
      <p style="font-size:0.75rem;color:var(--or-muted);line-height:1.5;">How do specifications reduce context loss across handoffs and team changes?</p>
    </div>
    <div class="card blue" style="padding:0.9rem;">
      <p style="font-size:0.82rem;font-weight:600;color:#e2e8f0;margin-bottom:0.35rem;">Workflow Shift</p>
      <p style="font-size:0.75rem;color:var(--or-muted);line-height:1.5;">What would change in your team's workflow if specs were the starting point for every feature?</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 32 — SCALING THE WORKFLOW ──────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Workflow Scales</h1>
<p class="sub">From solo developer to large organization — the methodology transfers.</p>

<div style="display:grid;grid-template-columns:44% 56%;gap:0;margin-top:0.4rem;height:calc(100% - 7rem);">
<div style="display:flex;align-items:center;justify-content:center;overflow:visible;">
<svg viewBox="0 0 285 335" style="width:100%;height:auto;max-height:320px;overflow:visible;">
<ellipse cx="142" cy="185" rx="138" ry="145" fill="none" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.75"/>
<ellipse cx="142" cy="185" rx="98" ry="105" fill="none" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.75"/>
<ellipse cx="142" cy="185" rx="60" ry="65" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.85"/>
<ellipse cx="142" cy="185" rx="27" ry="27" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2"/>
<circle cx="142" cy="178" r="8" fill="#ea580c" opacity="0.9"/>
<path d="M130,192 Q142,185 154,192" stroke="#ea580c" stroke-width="2.2" fill="none" opacity="0.9"/>
<line x1="142" y1="185" x2="283" y2="185" stroke="#4b5563" stroke-width="0.8" stroke-dasharray="3,3"/>
<circle cx="202" cy="185" r="4.5" fill="#3b82f6"/>
<circle cx="240" cy="185" r="4.5" fill="#16a34a"/>
<circle cx="280" cy="185" r="4.5" fill="#7c3aed"/>
<text x="142" y="32" text-anchor="middle" font-size="4.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.3">ORGANIZATION</text>
<text x="50" y="150" text-anchor="middle" font-size="4.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.2">TEAM</text>
<text x="142" y="260" text-anchor="middle" font-size="4.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.2">PAIR</text>
</svg>
</div>
<div style="display:flex;flex-direction:column;gap:0.38rem;padding-left:0.5rem;">
<div style="border-left:3px solid #ea580c;background:#1a1f2e;border-radius:0 7px 7px 0;padding:0.42rem 0.65rem;">
<div style="display:flex;align-items:center;gap:0.35rem;margin-bottom:0.15rem;">
<span style="font-size:0.82rem;">👤</span>
<span style="font-size:0.78rem;font-weight:700;color:#ea580c;">Solo Developer</span>
</div>
<div style="font-size:0.62rem;color:#e2e8f0;margin-bottom:0.12rem;">One developer with Claude Code + GSD.</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">CLAUDE.md + REQUIREMENTS.md = full context</div>
</div>
<div style="border-left:3px solid #3b82f6;background:#1a1f2e;border-radius:0 7px 7px 0;padding:0.42rem 0.65rem;">
<div style="display:flex;align-items:center;gap:0.35rem;margin-bottom:0.15rem;">
<span style="font-size:0.82rem;">👥</span>
<span style="font-size:0.78rem;font-weight:700;color:#3b82f6;">Pair Programming</span>
</div>
<div style="font-size:0.62rem;color:#e2e8f0;margin-bottom:0.12rem;">Two developers working from the same truth.</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">Shared REQUIREMENTS.md in repo root</div>
</div>
<div style="border-left:3px solid #16a34a;background:#1a1f2e;border-radius:0 7px 7px 0;padding:0.42rem 0.65rem;">
<div style="display:flex;align-items:center;gap:0.35rem;margin-bottom:0.15rem;">
<span style="font-size:0.82rem;">👥</span>
<span style="font-size:0.78rem;font-weight:700;color:#16a34a;">Feature Team (4-8)</span>
</div>
<div style="font-size:0.62rem;color:#e2e8f0;margin-bottom:0.12rem;">Specs assigned per phase. PRs reviewed against spec docs.</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">Spec is the PR review baseline</div>
</div>
<div style="border-left:3px solid #7c3aed;background:#1a1f2e;border-radius:0 7px 7px 0;padding:0.42rem 0.65rem;">
<div style="display:flex;align-items:center;gap:0.35rem;margin-bottom:0.15rem;">
<span style="font-size:0.82rem;">🏛️</span>
<span style="font-size:0.78rem;font-weight:700;color:#7c3aed;">Organization</span>
</div>
<div style="font-size:0.62rem;color:#e2e8f0;margin-bottom:0.12rem;">Multiple teams. Specs become API contracts between services.</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">Review gates built into CI pipelines</div>
</div>
<div style="background:#1a1f2e;border:1px solid #334155;border-radius:7px;padding:0.38rem 0.6rem;display:flex;gap:0.5rem;align-items:flex-start;margin-top:0.1rem;">
<span style="font-size:1rem;flex-shrink:0;">🔧</span>
<div>
<div style="font-size:0.52rem;font-weight:700;color:var(--or-muted);letter-spacing:0.1em;margin-bottom:0.1rem;">ALTERNATIVE IMPLEMENTATIONS</div>
<div style="font-size:0.6rem;color:#e2e8f0;margin-bottom:0.1rem;">GSD is just one tool. The methodology works with:</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.56rem;color:#e2e8f0;">Compound Engineering (/ce:*) · claude-workflow · Spec-Flow</div>
</div>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 33 — Q&A SECTION 4 ─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div class="text-center">
    <div class="qa-display">Q&amp;A</div>
    <p style="color:var(--or-orange);font-size:0.9rem;font-weight:600;letter-spacing:0.05em;">Apply the Loop to Phase 3+</p>
    <p style="color:var(--or-muted);font-size:0.78rem;margin-top:0.3rem;">Section 4 — Validation + Scaling</p>
  </div>
  <div style="background:var(--or-card);border-radius:8px;padding:0.75rem 1.5rem;border:1px solid #334155;max-width:500px;text-align:center;">
    <p style="font-size:0.78rem;color:#e2e8f0;">Apply the full workflow to Phase 3+ features, or bring it to a feature in your own project.</p>
    <p style="font-size:0.72rem;color:var(--or-muted);margin-top:0.4rem;">Phase 3+: Design gallery · Element-level control · Sharing links — all spec'd in REQUIREMENTS.md, ready to build.</p>
  </div>
</div>

<div class="breadcrumb">
  <span class="done">✅ Foundations</span>
  <span class="done">✅ Spec Toolkit</span>
  <span class="done">✅ Implementation</span>
  <span class="done">✅ Validation</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 34 — WHAT WE JUST BUILT ────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="text-align:center;margin-bottom:0.15rem;">What We Just Built</h1>
<p class="sub" style="text-align:center;margin-bottom:0;">From messy brief to working production app — spec by spec.</p>

<div style="position:relative;width:100%;height:272px;margin-top:0.3rem;">

  <!-- Timeline line -->
  <div style="position:absolute;top:130px;left:2%;right:2%;height:2px;background:#334155;z-index:1;"></div>

  <!-- NODE 1: MESSY BRIEF (above) -->
  <div style="position:absolute;left:7%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:1rem;line-height:1;">📄</div>
    <div style="position:absolute;top:22px;left:0;right:0;background:rgba(224,60,46,0.1);border:1.5px solid var(--or-red);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-red);letter-spacing:0.05em;">MESSY BRIEF</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">14 features, contradictions, AR demands</div>
    </div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:#1e293b;border:2px solid #64748b;z-index:2;"></div>
  </div>

  <!-- NODE 2: DESIGN SPEC (below) -->
  <div style="position:absolute;left:21%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:110px;left:50%;transform:translateX(-50%);font-size:0.95rem;line-height:1;">⚒️</div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--or-orange);z-index:2;"></div>
    <div style="position:absolute;top:145px;left:0;right:0;background:rgba(249,115,22,0.08);border:1.5px solid var(--or-orange);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-orange);letter-spacing:0.05em;">DESIGN SPEC</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">5-step conversion, non-goals stated</div>
    </div>
  </div>

  <!-- NODE 3: REQS DOC (above) -->
  <div style="position:absolute;left:35%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:1rem;line-height:1;">📋</div>
    <div style="position:absolute;top:22px;left:0;right:0;background:rgba(249,115,22,0.08);border:1.5px solid var(--or-orange);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-orange);letter-spacing:0.05em;">REQS DOC</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">GSD setup, 3 phases, acceptance criteria</div>
    </div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--or-orange);z-index:2;"></div>
  </div>

  <!-- NODE 4: PHASE 1 BUILT (below) -->
  <div style="position:absolute;left:50%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:110px;left:50%;transform:translateX(-50%);font-size:0.8rem;font-weight:700;color:var(--or-green);line-height:1;font-family:monospace;">&lt;/&gt;</div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--or-green);z-index:2;"></div>
    <div style="position:absolute;top:145px;left:0;right:0;background:rgba(34,197,94,0.08);border:1.5px solid var(--or-green);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-green);letter-spacing:0.05em;">PHASE 1 BUILT</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">Upload → Style → Generate flow working</div>
    </div>
  </div>

  <!-- NODE 5: REVIEWED (above, highlighted) -->
  <div style="position:absolute;left:64%;transform:translateX(-50%);width:120px;">
    <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:1rem;line-height:1;">🔍</div>
    <div style="position:absolute;top:22px;left:0;right:0;background:rgba(59,130,246,0.15);border:2px solid var(--or-blue);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-blue);letter-spacing:0.05em;">REVIEWED</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">Gaps found, edge cases tested, fixes applied</div>
    </div>
    <div style="position:absolute;top:122px;left:50%;transform:translateX(-50%);width:18px;height:18px;border-radius:50%;background:var(--or-blue);z-index:2;"></div>
  </div>

  <!-- NODE 6: PHASE 2 BUILT (below) -->
  <div style="position:absolute;left:79%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:110px;left:50%;transform:translateX(-50%);font-size:0.95rem;line-height:1;">🗂️</div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--or-green);z-index:2;"></div>
    <div style="position:absolute;top:145px;left:0;right:0;background:rgba(34,197,94,0.08);border:1.5px solid var(--or-green);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-green);letter-spacing:0.05em;">PHASE 2 BUILT</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">Comparison slider, project save/load</div>
    </div>
  </div>

  <!-- NODE 7: WORKING MVP (above) -->
  <div style="position:absolute;left:93%;transform:translateX(-50%);width:112px;">
    <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:1rem;line-height:1;">✅</div>
    <div style="position:absolute;top:22px;left:0;right:0;background:rgba(34,197,94,0.12);border:2px solid var(--or-green);border-radius:6px;padding:0.32rem 0.4rem;text-align:center;">
      <div style="font-size:0.51rem;font-weight:800;color:var(--or-green);letter-spacing:0.05em;">WORKING MVP</div>
      <div style="font-size:0.43rem;color:var(--or-muted);margin-top:0.15rem;line-height:1.4;">Spec-driven, reliable, ready for Phase 3</div>
    </div>
    <div style="position:absolute;top:124px;left:50%;transform:translateX(-50%);width:14px;height:14px;border-radius:50%;background:var(--or-green);z-index:2;"></div>
  </div>

</div>

<!-- Legend -->
<div style="display:flex;justify-content:center;align-items:center;gap:1.8rem;padding-top:0.35rem;border-top:1px solid #1e293b;">
  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.5rem;color:#94a3b8;letter-spacing:0.08em;">
    <div style="width:10px;height:10px;border-radius:50%;background:var(--or-orange);flex-shrink:0;"></div>SPEC / PLAN
  </div>
  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.5rem;color:#94a3b8;letter-spacing:0.08em;">
    <div style="width:10px;height:10px;border-radius:50%;background:var(--or-green);flex-shrink:0;"></div>BUILD / FIX
  </div>
  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.5rem;color:#94a3b8;letter-spacing:0.08em;">
    <div style="width:10px;height:10px;border-radius:50%;background:var(--or-blue);flex-shrink:0;"></div>REVIEW / VERIFY
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 35 — 3 THINGS TO TAKE WITH YOU ─────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>3 Things to Take With You</h1>

<div class="flex flex-col gap-3 mt-4">
  <div class="card orange" style="display:flex;gap:1rem;align-items:start;padding:0.75rem 1rem;">
    <span style="font-size:1.8rem;font-weight:900;color:var(--or-orange);line-height:1;flex-shrink:0;">1</span>
    <div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Specs are contracts — for humans AND AI</div>
      <p style="font-size:0.78rem;color:var(--or-muted);">"A good spec is the difference between Claude Code building the right thing and building a confident wrong thing."</p>
    </div>
  </div>
  <div class="card blue" style="display:flex;gap:1rem;align-items:start;padding:0.75rem 1rem;">
    <span style="font-size:1.8rem;font-weight:900;color:var(--or-blue);line-height:1;flex-shrink:0;">2</span>
    <div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">The workflow is a loop</div>
      <p style="font-size:0.78rem;color:var(--or-muted);">Build → Review → Fix → Build Next. Every phase is a chance to catch drift before it compounds.</p>
    </div>
  </div>
  <div class="card green" style="display:flex;gap:1rem;align-items:start;padding:0.75rem 1rem;">
    <span style="font-size:1.8rem;font-weight:900;color:var(--or-green);line-height:1;flex-shrink:0;">3</span>
    <div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Tools amplify the methodology</div>
      <p style="font-size:0.78rem;color:var(--or-muted);">CLAUDE.md + GSD make the workflow fast. But the value is in the spec, not the tool.</p>
    </div>
  </div>
</div>

<div class="absolute bottom-5 left-8 right-8">
  <div style="font-size:0.68rem;color:var(--or-muted);text-align:center;">
    📦 GSD: <code>npx get-shit-done-cc@latest</code> · 📂 Course repo: [instructor to fill] · 🚀 Phase 3+: spec'd in REQUIREMENTS.md, ready to build
  </div>
</div>
