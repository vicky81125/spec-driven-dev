---
theme: default
title: Spec-Driven Development with AI
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: fade
---

<!-- ─── SLIDE 1 — TITLE──────────────────────────────────────────── -->

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

<!-- ─── SLIDE 2 — THE COURSE IN 3 LINES──────────────────────────── -->

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

<!-- ─── SLIDE 3 — INSTRUCTOR BIO─────────────────────────────────── -->

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
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Practical AI Solutions</strong>: helping teams solve real business problems through automation systems, internal tools, and custom AI applications.</p>
      </div>
      <div style="display:flex;gap:0.6rem;align-items:baseline;">
        <span style="color:var(--or-orange);font-weight:700;font-size:0.75rem;flex-shrink:0;">●</span>
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Global AI Educator</strong>: taught large global audiences via LinkedIn Learning and YouTube, known for clear, down-to-earth explanations of complex concepts.</p>
      </div>
      <div style="display:flex;gap:0.6rem;align-items:baseline;">
        <span style="color:var(--or-orange);font-weight:700;font-size:0.75rem;flex-shrink:0;">●</span>
        <p style="font-size:0.82rem;color:#e2e8f0;line-height:1.5;margin:0;"><strong>Operational Impact</strong>: focused on using AI to quietly improve day-to-day operations and enable new capabilities where they matter most.</p>
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
      <a href="https://www.youtube.com/channel/UCH-xwLTKQaABNs2QmGxK2bQ" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.4rem;color:var(--or-muted);font-size:0.75rem;text-decoration:none;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        YouTube
      </a>
    </div>
  </div>

  <div style="position:absolute;right:2rem;bottom:2rem;opacity:0.05;font-size:5rem;font-weight:900;font-family:monospace;color:#fff;user-select:none;">&lt;/&gt;</div>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 4 — SECTION 1 DIVIDER──────────────────────────────── -->

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

<!-- ─── SLIDE 5 — THE CLIENT BRIEF───────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>You've Just Received This</h1>

<div class="flex gap-6" style="margin-top:2.5rem;">
  <div class="flex-1" style="border-left:3px solid var(--or-orange);padding-left:1rem;">
    <p style="font-size:1.05rem;font-style:italic;line-height:1.7;color:#e2e8f0;">
      "We need a tool where our real estate agents can take a photo of any room and instantly see what it would look like renovated or staged. Different styles: modern, farmhouse, luxury, whatever the buyer demographic wants."
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

<!-- ─── SLIDE 6 — FEATURE EXPLOSION──────────────────────────────── -->

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

<!-- ─── SLIDE 7 — DEV LEAD READ──────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="display:flex;align-items:center;justify-content:space-between;">
  <span>Reading Between the Lines</span>
  <button onclick="
    navigator.clipboard.writeText('My initial read (dev team lead thoughts, not shared with client)\n- Two clear layers here: (1) a listing platform, and (2) AI-powered visual enhancements on top of it\n- The listing platform itself is a known problem — CRUD, auth, search, agent dashboards. Buildable.\n- The AI visualization layer is where the differentiation lives — but scope needs to be tight\n- They\'re describing multiple products (listing platform, staging tool, renovation visualizer, AR viewer) as if they\'re one thing\n- AR / virtual walkthrough (reliving rooms remotely, both current and renovated) is a Phase 5 feature, not MVP\n- \'Instant\' and \'looks real\' are in tension with each other at this quality level\n- No mention of what happens when the AI gets it wrong (bad generation, wrong style applied)\n- Batch processing + element-level control + mobile + virtual walkthrough = scope explosion\n- The vacant property and dated-interior use cases are the strongest — start there');
    this.textContent='Copied!';
    setTimeout(()=>this.textContent='Copy notes',1500);
  " style="font-size:0.62rem;font-weight:600;padding:0.3rem 0.7rem;border-radius:5px;border:1px solid var(--or-orange);background:rgba(249,115,22,0.1);color:var(--or-orange);cursor:pointer;white-space:nowrap;margin:0;">Copy notes</button>
</h1>
<p class="sub">What a dev lead sees before writing a single spec: the human judgment AI cannot do for you</p>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.75rem;margin-top:0.4rem;">

  <!-- Col 1: Architecture -->
  <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:0.75rem;">
    <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);margin-bottom:0.5rem;">ARCHITECTURE</div>
    <div style="font-size:0.71rem;color:#e2e8f0;line-height:1.5;">
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-orange);flex-shrink:0;">▸</span><span><strong>Two clear layers:</strong> (1) a listing platform and (2) AI-powered visual enhancements on top. Not one product.</span></div>
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-orange);flex-shrink:0;">▸</span><span>Listing platform is a <strong>known problem</strong>: CRUD, auth, search, agent dashboards. Buildable.</span></div>
      <div style="display:flex;gap:0.35rem;"><span style="color:var(--or-orange);flex-shrink:0;">▸</span><span>Client is describing <strong>multiple products</strong> (listing platform, staging tool, renovation visualizer, AR viewer) as if they're one thing.</span></div>
    </div>
  </div>

  <!-- Col 2: Scope Flags -->
  <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:0.75rem;">
    <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.12em;color:var(--or-red);margin-bottom:0.5rem;">SCOPE FLAGS</div>
    <div style="font-size:0.71rem;color:#e2e8f0;line-height:1.5;">
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-red);flex-shrink:0;">▸</span><span>AR / virtual walkthrough = <strong>Phase 5</strong>, not MVP. Remove from scope conversation entirely.</span></div>
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-red);flex-shrink:0;">▸</span><span>Batch processing + element-level control + mobile + virtual walkthrough = <strong>scope explosion</strong>.</span></div>
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-amber);flex-shrink:0;">▸</span><span>"Instant" and "looks real" are in <strong>tension</strong> at this quality level. Client needs to choose.</span></div>
      <div style="display:flex;gap:0.35rem;"><span style="color:var(--or-amber);flex-shrink:0;">▸</span><span>No mention of what happens when AI gets it wrong (bad generation, wrong style applied). <strong>Error case undefined.</strong></span></div>
    </div>
  </div>

  <!-- Col 3: Where to start -->
  <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:0.75rem;">
    <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.12em;color:var(--or-green);margin-bottom:0.5rem;">WHERE TO START</div>
    <div style="font-size:0.71rem;color:#e2e8f0;line-height:1.5;">
      <div style="margin-bottom:0.4rem;display:flex;gap:0.35rem;"><span style="color:var(--or-green);flex-shrink:0;">▸</span><span>The AI visualization layer is where differentiation lives, but <strong>scope must stay tight</strong>.</span></div>
      <div style="display:flex;gap:0.35rem;"><span style="color:var(--or-green);flex-shrink:0;">▸</span><span><strong>Vacant property</strong> and <strong>dated-interior</strong> are the strongest use cases: clear input, clear output, measurable value. Start there.</span></div>
    </div>
  </div>

</div>

<div style="margin-top:0.7rem;background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.3);border-radius:6px;padding:0.5rem 0.9rem;display:flex;align-items:center;gap:0.65rem;">
  <span style="color:var(--or-orange);font-size:0.9rem;flex-shrink:0;">⚑</span>
  <p style="font-size:0.71rem;color:#e2e8f0;margin:0;line-height:1.45;"><strong>This is the work AI cannot do.</strong> Separating layers, flagging scope creep, spotting undefined edge cases, picking the starting point: these are human judgment calls. The spec you write next is built on this read.</p>
</div>

---
layout: default
---

<!-- ─── SLIDE 8 — HOW WOULD YOU DO THIS?────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Before We Go Further</h1>
<p class="sub">Try the naive approach. We'll compare notes after.</p>

<div style="margin-top:2rem;max-width:640px;">
  <div style="background:var(--or-card);border:1px solid var(--or-amber);border-radius:10px;padding:1.4rem 1.6rem;">
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-amber);margin-bottom:1rem;">— YOUR TASK</div>
    <div style="display:flex;flex-direction:column;gap:0.75rem;">
      <div style="display:flex;gap:0.75rem;align-items:flex-start;">
        <div style="background:var(--or-amber);color:#0D1117;border-radius:50%;width:1.3rem;height:1.3rem;display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">1</div>
        <p style="font-size:0.82rem;color:#e2e8f0;margin:0;line-height:1.5;">Open Claude Code (or any AI coding tool you use)</p>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:flex-start;">
        <div style="background:var(--or-amber);color:#0D1117;border-radius:50%;width:1.3rem;height:1.3rem;display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">2</div>
        <p style="font-size:0.82rem;color:#e2e8f0;margin:0;line-height:1.5;">Paste the real estate client brief and ask it to start building</p>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:flex-start;">
        <div style="background:var(--or-amber);color:#0D1117;border-radius:50%;width:1.3rem;height:1.3rem;display:flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">3</div>
        <p style="font-size:0.82rem;color:#e2e8f0;margin:0;line-height:1.5;">Notice what questions you'd want to ask before it continues. Write them down.</p>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 9 — THE UNSTRUCTURED APPROACH──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Unstructured Approach</h1>
<p class="sub">Tempting, fast to start, and harder to recover from than it looks</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.8rem;">
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.6rem;">— THE PROMPT</div>
    <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:1rem 1.1rem;font-family:'Fira Code',monospace;font-size:0.72rem;line-height:1.7;color:#e6edf3;">
      <span style="color:var(--or-muted);"># Claude Code</span><br/><br/>
      "Here's the brief from my client:<br/>
      <span style="color:var(--or-muted);">[pastes full meeting notes —<br/>
      14 features, AR Mode, MLS<br/>
      integration, ROI calculator...]</span><br/><br/>
      <strong>Build this for me.</strong>"
    </div>
  </div>
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.6rem;">— WHAT HAPPENS NEXT</div>
    <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:1rem 1.1rem;font-family:'Fira Code',monospace;font-size:0.7rem;line-height:1.7;color:#e6edf3;">
      <span style="color:var(--or-green);">✓</span> <span style="color:var(--or-muted);">Building photo upload...</span><br/>
      <span style="color:var(--or-green);">✓</span> <span style="color:var(--or-muted);">Adding AR mode scaffold...</span><br/>
      <span style="color:var(--or-green);">✓</span> <span style="color:var(--or-muted);">MLS connector setup...</span><br/>
      <span style="color:var(--or-green);">✓</span> <span style="color:var(--or-muted);">ROI calculator module...</span><br/><br/>
      <span style="color:#e6edf3;font-size:0.68rem;">847 lines · 23 files · 4 minutes</span>
    </div>
    <div style="background:rgba(224,60,46,0.08);border:1px solid rgba(224,60,46,0.25);border-radius:6px;padding:0.55rem 0.8rem;margin-top:0.75rem;">
      <p style="font-size:0.72rem;color:#fca5a5;margin:0;line-height:1.5;">Claude is eager. It will build everything you described, but none of what you actually needed.</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 10 — COST OF NOT SPECIFYING────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>One prompt. Three interpretations.</h1>
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

<!-- ─── SLIDE 11 — VAGUE VS CONCRETE────────────────────────────── -->

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

<!-- ─── SLIDE 12 — HERE'S WHAT BREAKS────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Going Naive: What Tends to Break</h1>
<p class="sub">The same patterns show up regardless of the project or the model</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:0.9rem;">
  <div class="card orange" style="padding:0.9rem 1rem;">
    <p style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-bottom:0.35rem;">No scope boundary</p>
    <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;margin:0;">The model might start with AR mode, MLS integration, or something else entirely. You had photo upload in mind. With no shared definition, the model decides what matters.</p>
  </div>
  <div class="card red" style="padding:0.9rem 1rem;">
    <p style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-bottom:0.35rem;">No definition of done</p>
    <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;margin:0;">Code gets generated. But without acceptance criteria, the AI has no concrete target to verify against either. It just stops when it runs out of obvious things to do.</p>
  </div>
  <div class="card amber" style="padding:0.9rem 1rem;">
    <p style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-bottom:0.35rem;">Unextendable output</p>
    <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;margin:0;">When the next feature arrives, the model has to re-read everything it generated for the first. Without proper context management, the context window grows, costs compound, and coherence shrinks.</p>
  </div>
  <div class="card muted" style="padding:0.9rem 1rem;">
    <p style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-bottom:0.35rem;">Can't resume or hand off</p>
    <p style="font-size:0.72rem;color:var(--or-muted);line-height:1.5;margin:0;">No written record of decisions made. The next session starts from scratch. So does your teammate. Every handoff loses context.</p>
  </div>
</div>

<div style="position:absolute;bottom:3rem;left:1.5rem;right:1.5rem;display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;align-items:center;">
  <p style="font-size:0.72rem;color:var(--or-orange);font-weight:600;margin:0;line-height:1.5;">The hard part was never the code. It's alignment: knowing what to build, in what order, and how to verify it's right.</p>
  <p style="font-size:0.7rem;color:var(--or-muted);margin:0;line-height:1.5;">So instead of building everything at once, we pick deliberately: one feature at a time, with a spec for each.</p>
</div>

---
layout: default
---

<!-- ─── SLIDE 13 — STEERING CLAUDE──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Approaches to Context Management</h1>
<p class="sub">How developers actually manage AI context</p>

<div style="display:flex;align-items:flex-start;gap:1rem;margin-top:2.5rem;">
  <div style="flex:1;">
    <h3 style="color:var(--or-red);font-size:1.1rem;margin-bottom:0.5rem;margin-left:0.3rem;">1. The Native Wall</h3>
    <ul style="font-size:0.8rem;color:var(--or-muted);padding-left:1rem;margin-top:0.8rem;line-height:1.6;">
      <li style="margin-bottom:0.4rem;">Focuses heavily on immediate prompts, losing high-level product context.</li>
      <li style="margin-bottom:0.4rem;">Misses critical user journeys and edge cases.</li>
      <li>Forgets earlier constraints as the codebase grows.</li>
    </ul>
  </div>
  <div style="color:var(--or-muted);margin-top:1.5rem;font-size:1.2rem;flex-shrink:0;">→</div>
  <div style="flex:1;">
    <h3 style="color:var(--or-orange);font-size:1.1rem;margin-bottom:0.5rem;margin-left:0.3rem;">2. The Document Hack</h3>
    <ul style="font-size:0.8rem;color:var(--or-muted);padding-left:1rem;margin-top:0.8rem;line-height:1.6;">
      <li style="margin-bottom:0.4rem;">Force Claude Code to write a "Plan Doc" first.</li>
      <li style="margin-bottom:0.4rem;">Orchestrate code generation from that document.</li>
      <li>Problem: As docs multiply, the AI loses track again.</li>
    </ul>
  </div>
  <div style="color:var(--or-muted);margin-top:1.5rem;font-size:1.2rem;flex-shrink:0;">→</div>
  <div style="flex:1;">
    <h3 style="color:var(--or-green);font-size:1.1rem;margin-bottom:0.5rem;margin-left:0.3rem;">3. The Roadmap System</h3>
    <ul style="font-size:0.8rem;color:var(--or-muted);padding-left:1rem;margin-top:0.8rem;line-height:1.6;">
      <li style="margin-bottom:0.4rem;">Build a central, living product roadmap.</li>
      <li style="margin-bottom:0.4rem;">Break the product down into strict phases.</li>
      <li>Independently research, plan, and verify each phase.</li>
    </ul>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 14 — THE TOOL LANDSCAPE────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>How to Implement the Roadmap System</h1>
<p class="sub">Using modern frameworks to enforce your execution roadmap.</p>

<div style="margin-top:2.5rem;">
  <p style="font-size:0.9rem;color:#e2e8f0;margin-bottom:1rem;">You can use specific methodologies to systematically manage this context:</p>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;">
    <span style="background:#161b22;border:1px solid #30363d;padding:0.4rem 1rem;border-radius:20px;font-size:0.8rem;color:var(--or-muted);">GSD <span style="font-family:'Roboto Mono',monospace;font-size:0.7rem;opacity:0.7;">/gsd:plan-phase · /gsd:execute-phase</span></span>
    <span style="background:#161b22;border:1px solid #30363d;padding:0.4rem 1rem;border-radius:20px;font-size:0.8rem;color:var(--or-muted);">Compound Engineering <span style="font-family:'Roboto Mono',monospace;font-size:0.7rem;opacity:0.7;">/ce:brainstorm · /ce:plan · /ce:work</span></span>
    <span style="background:#161b22;border:1px solid #30363d;padding:0.4rem 1rem;border-radius:20px;font-size:0.8rem;color:var(--or-muted);">Claudekit <span style="font-family:'Roboto Mono',monospace;font-size:0.7rem;opacity:0.7;">checkpoints · multi-agent review</span></span>
    <span style="background:#161b22;border:1px solid #30363d;padding:0.4rem 1rem;border-radius:20px;font-size:0.8rem;color:var(--or-muted);">Pimzino Spec Workflow <span style="font-family:'Roboto Mono',monospace;font-size:0.7rem;opacity:0.7;">spec · design · tasks · impl</span></span>
  </div>

  <div style="background:rgba(34,197,94,0.06);border-left:3px solid var(--or-green);padding:1rem 1.5rem;">
    <h3 style="color:var(--or-green);margin-bottom:0.5rem;font-size:1rem;">Why are we choosing GSD?</h3>
    <p style="font-size:0.85rem;color:#e2e8f0;line-height:1.6;margin:0;">
      We use GSD because it natively embeds spec and constraint tracking directly into the execution loop, ensuring the central roadmap never gets overridden or lost during a long build.
    </p>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 15 — Q&A SECTION 1─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div class="text-center">
    <div class="qa-display">Q&amp;A</div>
    <p style="color:var(--or-orange);font-size:0.9rem;font-weight:600;letter-spacing:0.05em;">Section 1: Foundations</p>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.65rem;width:100%;max-width:680px;">
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.7rem 0.85rem;">
      <p style="font-size:0.72rem;font-weight:600;color:#e2e8f0;margin:0 0 0.25rem;">When does the "document hack" actually work?</p>
      <p style="font-size:0.65rem;color:var(--or-muted);line-height:1.5;margin:0;">Small scripts, throwaway prototypes? Or does it always fall apart past a certain size?</p>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.7rem 0.85rem;">
      <p style="font-size:0.72rem;font-weight:600;color:#e2e8f0;margin:0 0 0.25rem;">How do you keep context across sessions?</p>
      <p style="font-size:0.65rem;color:var(--or-muted);line-height:1.5;margin:0;">You close the terminal, open it tomorrow. What remembers your decisions?</p>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.7rem 0.85rem;">
      <p style="font-size:0.72rem;font-weight:600;color:#e2e8f0;margin:0 0 0.25rem;">How much structure is too much?</p>
      <p style="font-size:0.65rem;color:var(--or-muted);line-height:1.5;margin:0;">We saw vague fail. But when does specifying upfront start slowing you down instead?</p>
    </div>
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

<!-- ─── SLIDE 16 — SECTION 2 DIVIDER─────────────────────────────── -->

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

<!-- ─── SLIDE 17 — SPEC-DRIVEN WORKFLOW (HERO)───────────────────── -->

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
      <span style="font-size:0.72rem;color:var(--or-muted);">NOT waterfall. Specs are lightweight, living, and evolve.</span>
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

<!-- ─── SLIDE 18 — GSD: GET SHIT DONE─────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>GSD: Get Shit Done</h1>
<p class="sub">Automating the spec workflow with Claude Code</p>

<div style="max-width:680px;margin:0.8rem auto 0;">
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.4rem;">INSTALLATION</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;overflow:hidden;margin-bottom:0.75rem;">
<div style="padding:0.4rem 0.6rem;display:flex;gap:0.3rem;border-bottom:1px solid #21262d;">
<div style="width:10px;height:10px;border-radius:50%;background:#ff5f57;"></div>
<div style="width:10px;height:10px;border-radius:50%;background:#febc2e;"></div>
<div style="width:10px;height:10px;border-radius:50%;background:#28c840;"></div>
</div>
<div style="padding:0.5rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.82rem;display:flex;align-items:center;justify-content:space-between;">
<span><span style="color:var(--or-green);">$</span> <span style="color:#e2e8f0;">npx get-shit-done-cc@latest</span></span>
<span onclick="navigator.clipboard.writeText('npx get-shit-done-cc@latest')" style="border:1px solid #30363d;border-radius:4px;padding:0.2rem 0.35rem;cursor:pointer;color:#6b7280;display:flex;align-items:center;" title="Copy command">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
</span>
</div>
</div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.4rem;">COMMANDS</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:new-project</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Initialize project from a brief or idea, research domain, generate planning docs</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:map-codebase</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Analyze an existing codebase before starting (brownfield projects)</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:discuss-phase N</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Surface gray areas and lock implementation decisions before planning</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:plan-phase N</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Generate atomic execution plans validated against your requirements</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:execute-phase N</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Run plans in parallel with fresh context windows, produce atomic commits</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:verify-work N</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Run acceptance testing after execution, generate fix plans if issues found</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:review</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Cross-AI peer review of current phase or branch</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:debug</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Systematic debugging with persistent state tracking</span>
</div>
<div style="display:flex;align-items:baseline;gap:0.5rem;">
<div style="background:#1e2330;border:1px solid #334155;border-radius:5px;padding:0.22rem 0.55rem;font-family:'Roboto Mono',monospace;font-size:0.62rem;color:#e2e8f0;white-space:nowrap;flex-shrink:0;min-width:11rem;">/gsd:quick</div>
<span style="font-size:0.58rem;color:var(--or-muted);">Ad-hoc tasks outside the phase workflow, with GSD guarantees</span>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 19 — RUNNING /GSD:NEW-PROJECT──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Running <code>/gsd:new-project</code></h1>
<p class="sub">What GSD asks you before generating a single file</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">WHAT IT ASKS</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.45rem 0.65rem;display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.25rem;">
<span style="font-size:0.85rem;flex-shrink:0;">💬</span>
<div>
<div style="font-size:0.72rem;font-weight:700;color:var(--or-orange);">"What do you want to build?"</div>
<div style="font-size:0.6rem;color:var(--or-muted);">Paste your client notes + dev lead comments here</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">mode</span>
<span style="font-size:0.58rem;color:#e2e8f0;"><code style="color:var(--or-amber);font-size:0.58rem;">interactive</code> (confirm each step) · <code style="color:var(--or-amber);font-size:0.58rem;">yolo</code> (auto-approve)</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">granularity</span>
<span style="font-size:0.58rem;color:#e2e8f0;"><code style="color:var(--or-amber);font-size:0.58rem;">coarse</code> (3-5 phases) · <code style="color:var(--or-amber);font-size:0.58rem;">standard</code> (5-8) · <code style="color:var(--or-amber);font-size:0.58rem;">fine</code> (8-12)</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">model_profile</span>
<span style="font-size:0.58rem;color:#e2e8f0;"><code style="color:var(--or-amber);font-size:0.58rem;">balanced</code> (Sonnet) · <code style="color:var(--or-amber);font-size:0.58rem;">quality</code> (Opus) · <code style="color:var(--or-amber);font-size:0.58rem;">budget</code> (Haiku)</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">research</span>
<span style="font-size:0.58rem;color:#e2e8f0;">Research the domain ecosystem before defining requirements?</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">plan_check</span>
<span style="font-size:0.58rem;color:#e2e8f0;">Verify plans against requirements after generation?</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.4rem 0.65rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-family:'Roboto Mono',monospace;font-size:0.62rem;color:var(--or-amber);font-weight:700;min-width:5.5rem;">commit_docs</span>
<span style="font-size:0.58rem;color:#e2e8f0;">Track .planning/ files in git?</span>
</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">WHAT IT PRODUCES</div>
<div style="display:flex;flex-direction:column;gap:0.4rem;">
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">📋</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">PROJECT.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Vision, constraints, key decisions from your answers</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">📄</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:var(--or-orange);">REQUIREMENTS.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Structured PRD with trackable IDs (AUTH-01, LIST-02, AI-03...)</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🗺</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">ROADMAP.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Phases mapped to requirements with success criteria</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🔄</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">STATE.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Live project state: progress tracking, decisions log</div>
</div>
</div>
</div>
<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.5rem 0.75rem;margin-top:0.6rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-size:0.8rem;">💡</span>
<span style="font-size:0.62rem;color:#e2e8f0;">This is where you paste the client brief + dev lead notes from slides 5 and 7</span>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 20 — THE .PLANNING/ FOLDER─────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The <code>.planning/</code> Folder</h1>
<p class="sub">How GSD externalizes state: the same documents a human project lead would create</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">PROJECT FILES</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.6rem 0.8rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.8;">
<div><span style="color:var(--or-orange);font-weight:700;">.planning/</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">PROJECT.md</span> <span style="color:#6b7280;"># Project vision and context</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">REQUIREMENTS.md</span> <span style="color:#6b7280;"># Scoped requirements with IDs</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">ROADMAP.md</span> <span style="color:#6b7280;"># Phase breakdown + status</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">STATE.md</span> <span style="color:#6b7280;"># Decisions, blockers, memory</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">config.json</span> <span style="color:#6b7280;"># Workflow configuration</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">MILESTONES.md</span> <span style="color:#6b7280;"># Completed milestones</span></div>
<div style="padding-left:1rem;"><span style="color:#e2e8f0;">HANDOFF.json</span> <span style="color:#6b7280;"># Session handoff</span></div>
<div style="height:0.25rem;"></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">research/</span> <span style="color:#6b7280;"># Domain research</span></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">reports/</span> <span style="color:#6b7280;"># Session reports</span></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">todos/</span> <span style="color:#6b7280;"># Pending + done ideas</span></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">debug/</span> <span style="color:#6b7280;"># Debug sessions</span></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">codebase/</span> <span style="color:#6b7280;"># Brownfield mapping</span></div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">PHASE ARTIFACTS (grow per command)</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.6rem 0.8rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.8;">
<div><span style="color:var(--or-orange);font-weight:700;">phases/</span></div>
<div style="padding-left:1rem;"><span style="color:var(--or-orange);">XX-phase-name/</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">CONTEXT.md</span> <span style="color:#6b7280;"># From /gsd:discuss-phase</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">RESEARCH.md</span> <span style="color:#6b7280;"># Ecosystem research</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">XX-YY-PLAN.md</span> <span style="color:#6b7280;"># From /gsd:plan-phase</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">XX-YY-SUMMARY.md</span> <span style="color:#6b7280;"># From /gsd:execute-phase</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">VERIFICATION.md</span> <span style="color:#6b7280;"># Post-execution check</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">XX-UI-SPEC.md</span> <span style="color:#6b7280;"># UI design contract</span></div>
<div style="padding-left:2rem;"><span style="color:#e2e8f0;">XX-UI-REVIEW.md</span> <span style="color:#6b7280;"># Visual audit scores</span></div>
<div style="height:0.25rem;"></div>
<div><span style="color:var(--or-orange);font-weight:700;">ui-reviews/</span> <span style="color:#6b7280;"># Screenshots (gitignored)</span></div>
</div>
<div style="background:#0d1a10;border:1px solid #1a3a20;border-radius:8px;padding:0.55rem 0.8rem;margin-top:0.5rem;">
<div style="font-size:0.62rem;color:#e2e8f0;line-height:1.6;">GSD externalizes all project state into files. Instead of relying on conversation history, each agent reads the specific files it needs. This keeps context windows clean and outputs consistent.</div>
</div>
</div>
</div>

<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.5rem 0.75rem;margin-top:0.5rem;display:flex;align-items:center;gap:0.5rem;">
<span style="font-size:0.8rem;">💡</span>
<span style="font-size:0.6rem;color:#e2e8f0;">This is how the folder looks as you move through development. The structure builds up incrementally: each command adds its own artifacts to the workspace.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 21 — REVIEW BEFORE YOU MOVE ON────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Review Before You Move On</h1>
<p class="sub">The AI is non-deterministic. Phases it defined may not match your intent.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:1rem;">

  <!-- Left: What to check -->
  <div>
    <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.5rem;">WALK THROUGH THESE FILES</div>
    <div style="display:flex;flex-direction:column;gap:0.45rem;">
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-orange);font-weight:700;min-width:7rem;">ROADMAP.md</span>
        <span style="font-size:0.68rem;color:#e2e8f0;">Are the phases logical? Is the ordering right?</span>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-orange);font-weight:700;min-width:7rem;">REQUIREMENTS.md</span>
        <span style="font-size:0.68rem;color:#e2e8f0;">Did it capture everything? Anything missing or wrong?</span>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-orange);font-weight:700;min-width:7rem;">PROJECT.md</span>
        <span style="font-size:0.68rem;color:#e2e8f0;">Is the vision and context accurate?</span>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.8rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="font-family:'Roboto Mono',monospace;font-size:0.72rem;color:var(--or-orange);font-weight:700;min-width:7rem;">STATE.md</span>
        <span style="font-size:0.68rem;color:#e2e8f0;">Are initial decisions recorded correctly?</span>
      </div>
    </div>
  </div>

  <!-- Right: Why this matters -->
  <div>
    <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-red);margin-bottom:0.5rem;">WHY THIS MATTERS</div>
    <div style="background:#1e1010;border:1px solid #502020;border-radius:8px;padding:0.75rem 0.9rem;margin-bottom:0.5rem;">
      <div style="font-size:0.72rem;color:#e2e8f0;line-height:1.6;">Every command after this point builds on these files. If Phase 1 groups the wrong features, <span style="color:var(--or-red);font-weight:700;">every plan and discussion downstream inherits that mistake.</span></div>
    </div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.75rem 0.9rem;">
      <div style="font-size:0.62rem;font-weight:700;color:var(--or-green);margin-bottom:0.3rem;">THE RULE</div>
      <div style="font-size:0.72rem;color:#e2e8f0;line-height:1.6;">Fixing a wrong phase definition takes <strong style="color:var(--or-green);">2 minutes now</strong>. Discovering it mid-implementation costs <strong style="color:var(--or-red);">hours of rework</strong>.</div>
    </div>
  </div>

</div>

<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.6rem 1rem;margin-top:0.8rem;display:flex;align-items:center;gap:0.6rem;">
  <span style="font-size:0.9rem;">💡</span>
  <span style="font-size:0.72rem;color:#e2e8f0;">This is a 5-minute sanity check, not a deep review. Skim each file, confirm it matches your mental model. If anything drifts from your requirements, edit the files directly. Then move on.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 22 — PHASE BREAKDOWN────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Our Phase Breakdown</h1>
<p class="sub">We will develop this app in two phases. Additional phases can be scoped later as needed.</p>

<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:8px;padding:0.45rem 0.8rem;margin-top:0.4rem;margin-bottom:0.4rem;display:flex;align-items:center;gap:0.5rem;">
  <span style="font-size:0.78rem;">🎯</span>
  <span style="font-size:0.65rem;color:#e2e8f0;line-height:1.5;"><strong style="color:var(--or-green);">Why this order?</strong> Phase 1 is the foundation every future feature depends on. Auth, roles, listings, and dashboards are the spine of the app. Without a stable Phase 1, Phase 2 would build on assumptions that haven't been validated, leading to rework across auth flows, data models, and UI scaffolding.</span>
</div>

<div class="grid grid-cols-2 gap-6 mt-1">

  <!-- Phase 1 -->
  <div style="background:#0d1a10;border:1px solid var(--or-green);border-radius:10px;padding:1rem 1.2rem;">
    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem;">
      <span style="background:var(--or-green);color:#000;font-size:0.6rem;font-weight:800;padding:0.2rem 0.5rem;border-radius:4px;letter-spacing:0.05em;">PHASE 1</span>
      <span style="font-size:0.78rem;font-weight:700;color:#e2e8f0;">Foundation + Listing CRUD</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.45rem;">
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:var(--or-green);font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">User roles, sign-up, sign-in, and authentication structure</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:var(--or-green);font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Listing creation form (without photo upload)</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:var(--or-green);font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Role-based dashboards for buyers and listing creators</span>
      </div>
    </div>
  </div>

  <!-- Phase 2 -->
  <div style="background:#1a1530;border:1px solid #a78bfa;border-radius:10px;padding:1rem 1.2rem;">
    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem;">
      <span style="background:#a78bfa;color:#000;font-size:0.6rem;font-weight:800;padding:0.2rem 0.5rem;border-radius:4px;letter-spacing:0.05em;">PHASE 2</span>
      <span style="font-size:0.78rem;font-weight:700;color:#e2e8f0;">Photos + AI Renovation</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.45rem;">
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:#a78bfa;font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Photo upload with 5 MB limit, max 5 images per listing</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:#a78bfa;font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">AI generation job history: track successes and failures per run</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:#a78bfa;font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Save and display generated outputs for the user to review</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:#a78bfa;font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Re-run generation on the same image with different settings</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:0.5rem;">
        <span style="color:#a78bfa;font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">●</span>
        <span style="font-size:0.72rem;color:#e2e8f0;line-height:1.5;">Presets: staging, renovation, furniture swap, plus custom user input</span>
      </div>
    </div>
  </div>

</div>

---
layout: default
---

<!-- ─── SLIDE 23 — RUNNING GSD DISCUSS-PHASE 1───────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Running <code>/gsd:discuss-phase 1</code></h1>
<p class="sub">GSD probes your requirements for conflicts and ambiguity before planning</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">WHAT IT ASKS YOU</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.45rem 0.65rem;display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.25rem;">
<span style="font-size:0.85rem;flex-shrink:0;">💬</span>
<div>
<div style="font-size:0.72rem;font-weight:700;color:var(--or-orange);">"How many user roles does this app need?"</div>
<div style="font-size:0.6rem;color:var(--or-muted);">Should buyers and listing creators be separate roles, or one role with permissions?</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.45rem 0.65rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.85rem;flex-shrink:0;">💬</span>
<div>
<div style="font-size:0.72rem;font-weight:700;color:var(--or-amber);">"Listing creator signup gate unclear"</div>
<div style="font-size:0.6rem;color:var(--or-muted);">Invite code, admin promotion, or self-serve role selection?</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.45rem 0.65rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.85rem;flex-shrink:0;">💬</span>
<div>
<div style="font-size:0.72rem;font-weight:700;color:var(--or-amber);">"App navigation structure"</div>
<div style="font-size:0.6rem;color:var(--or-muted);">Where does each role land after login? Public home or login wall?</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.45rem 0.65rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.85rem;flex-shrink:0;">💬</span>
<div>
<div style="font-size:0.72rem;font-weight:700;color:var(--or-amber);">"Photo upload scope for this phase?"</div>
<div style="font-size:0.6rem;color:var(--or-muted);">Full upload with drag-and-drop now, or placeholder UI and defer to Phase 2?</div>
</div>
</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">WHAT IT PRODUCES</div>
<div style="display:flex;flex-direction:column;gap:0.4rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">📄</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:var(--or-orange);">01-CONTEXT.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">All decisions captured: roles, navigation, scope boundaries, DB schema choices</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">📋</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">01-DISCUSSION-LOG.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Audit trail of every question asked and decision made</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🔬</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">01-RESEARCH.md</div>
<div style="font-size:0.62rem;color:var(--or-muted);">Domain research that informed decisions (stack, auth patterns, pitfalls)</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🔄</span>
<div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.72rem;font-weight:700;color:#e2e8f0;">REQUIREMENTS.md <span style="color:var(--or-amber);font-size:0.58rem;">(updated)</span></div>
<div style="font-size:0.62rem;color:var(--or-muted);">Superseded requirements flagged, new IDs aligned with decisions</div>
</div>
</div>
</div>
</div>
</div>

<div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
<div style="flex:1;background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.5rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.8rem;flex-shrink:0;">💡</span>
<span style="font-size:0.62rem;color:#e2e8f0;">Read CONTEXT.md and DISCUSSION-LOG.md carefully. These files feed directly into the planner. You can re-run <code style="color:var(--or-orange);font-size:0.58rem;">/gsd:discuss-phase</code> until you have full clarity, or prompt Claude directly to modify the context and discussion files.</span>
</div>
<div style="flex:1;background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.25);border-radius:8px;padding:0.5rem 0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.8rem;flex-shrink:0;">🔍</span>
<span style="font-size:0.62rem;color:#e2e8f0;">GSD also runs an <strong style="color:#a78bfa;">assumptions-analyzer</strong> agent that scans the context for unstated assumptions, implicit scope creep, and contradicting decisions, flagging them before they leak into the plan.</span>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 24 — WHAT TO DISCUSS BEFORE THE PLAN──────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Ensure Every Feature Covers These</h1>
<p class="sub">Before planning, confirm you have discussed or prompted about all these aspects for each feature</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-top:0.6rem;">
  <!-- User Journey -->
  <div style="background:#1a2030;border:1px solid #2d3a50;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">👥</span>
      <span style="font-size:0.88rem;font-weight:700;color:#60a5fa;">User Journey</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">Who does what, step by step?</div>
    <div style="border-left:3px solid #60a5fa;background:#0d1525;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">What does the user actually do from start to finish? Where do they start, what decision do they make, what do they get?</div>
  </div>
  <!-- Screen Description -->
  <div style="background:#1e1a30;border:1px solid #3a2d50;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">🖥</span>
      <span style="font-size:0.88rem;font-weight:700;color:#a78bfa;">Screen Description</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What does each screen show?</div>
    <div style="border-left:3px solid #a78bfa;background:#0d0a20;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">What are the key UI elements? What inputs, outputs, and states need to be visible?</div>
  </div>
  <!-- Success Metrics -->
  <div style="background:#0d1a10;border:1px solid #1a3a20;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">📊</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-green);">Success Metrics</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">How do we measure success?</div>
    <div style="border-left:3px solid var(--or-green);background:#060f08;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">What does good look like after launch? Speed? Conversion? User retention? Be specific.</div>
  </div>
  <!-- Scope Boundaries -->
  <div style="background:#1e1505;border:1px solid #3a2d10;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">🔲</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-amber);">Scope Boundaries</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What's in? What's out?</div>
    <div style="border-left:3px solid var(--or-amber);background:#100d00;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">Explicitly name what you're NOT building. Unspoken scope kills timelines.</div>
  </div>
  <!-- Risks / Unknowns -->
  <div style="background:#1e1010;border:1px solid #502020;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">⚠️</span>
      <span style="font-size:0.88rem;font-weight:700;color:var(--or-red);">Risks / Unknowns</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What could surprise us?</div>
    <div style="border-left:3px solid var(--or-red);background:#0f0808;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">Third-party APIs? New tech? Unclear requirements? Name the unknowns before the AI plans around them.</div>
  </div>
  <!-- Acceptance Criteria -->
  <div style="background:#081820;border:1px solid #103040;border-radius:10px;padding:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <span style="font-size:1.1rem;">✅</span>
      <span style="font-size:0.88rem;font-weight:700;color:#2dd4bf;">Acceptance Criteria</span>
    </div>
    <div style="font-size:0.68rem;color:var(--or-muted);margin-bottom:0.25rem;">What does "done" look like?</div>
    <div style="border-left:3px solid #2dd4bf;background:#050f14;border-radius:0 6px 6px 0;padding:0.5rem 0.6rem;font-size:0.68rem;color:#e2e8f0;line-height:1.55;">Pass/fail statements, not vibes. "The user can X" or "The system does Y within Z seconds."</div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 25 — DEFINE THE PILLARS, NOT THE IMPLEMENTATION─────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Define the Pillars, Not the Implementation</h1>
<p class="sub">Your job is to specify <strong>what</strong> each feature does and <strong>how it behaves</strong>. The AI handles the how-to-build.</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">THE OBJECTIVE</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.6rem 0.8rem;margin-bottom:0.5rem;">
<div style="font-size:0.72rem;color:#e2e8f0;line-height:1.6;">For every feature in each phase, define the <strong style="color:var(--or-orange);">pillar aspects</strong> that the AI cannot infer on its own: user journey, screen states, scope boundaries, edge cases, and what "done" looks like.</div>
</div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-amber);margin-bottom:0.4rem;">WHAT TO DISCUSS</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="background:var(--or-card);border-left:3px solid #60a5fa;border-radius:0 6px 6px 0;padding:0.35rem 0.6rem;font-size:0.65rem;color:#e2e8f0;">Who triggers this flow and what do they expect?</div>
<div style="background:var(--or-card);border-left:3px solid #a78bfa;border-radius:0 6px 6px 0;padding:0.35rem 0.6rem;font-size:0.65rem;color:#e2e8f0;">What screens or states does the user see?</div>
<div style="background:var(--or-card);border-left:3px solid var(--or-green);border-radius:0 6px 6px 0;padding:0.35rem 0.6rem;font-size:0.65rem;color:#e2e8f0;">What are the failure states and how do we handle them?</div>
<div style="background:var(--or-card);border-left:3px solid var(--or-amber);border-radius:0 6px 6px 0;padding:0.35rem 0.6rem;font-size:0.65rem;color:#e2e8f0;">What is explicitly out of scope?</div>
<div style="background:var(--or-card);border-left:3px solid #2dd4bf;border-radius:0 6px 6px 0;padding:0.35rem 0.6rem;font-size:0.65rem;color:#e2e8f0;">What are the pass/fail acceptance criteria?</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">EXAMPLE: RESET PASSWORD FLOW</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.55rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.7;color:#e6edf3;">
<span style="color:var(--or-orange);font-weight:700;">User journey:</span> User clicks "Forgot password"<br/>
on login page, enters email, receives a<br/>
reset link, sets new password, gets redirected<br/>
to login with a success message.<br/>
<br/>
<span style="color:#a78bfa;font-weight:700;">Screen states:</span> Email input form, "check<br/>
your inbox" confirmation, new password form<br/>
with confirm field, success redirect.<br/>
<br/>
<span style="color:var(--or-green);font-weight:700;">Failure states:</span> Email not found (show same<br/>
"check inbox" message, no user enumeration).<br/>
Expired link (show "link expired, request<br/>
a new one"). Weak password (inline error).<br/>
<br/>
<span style="color:var(--or-amber);font-weight:700;">Out of scope:</span> Rate limiting, CAPTCHA,<br/>
SMS-based reset, password history check.<br/>
<br/>
<span style="color:#2dd4bf;font-weight:700;">Acceptance:</span> Reset link expires in 1 hour.<br/>
Password minimum 8 chars. Old sessions<br/>
invalidated after reset.
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 26 — Q&A SECTION 2─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div class="text-center">
    <div class="qa-display">Q&amp;A</div>
    <p style="color:var(--or-orange);font-size:0.9rem;font-weight:600;letter-spacing:0.05em;">The Spec Toolkit</p>
    <p style="color:var(--or-muted);font-size:0.78rem;margin-top:0.3rem;">Section 2: Designing the App Before Writing Code</p>
  </div>
  <div style="background:var(--or-card);border-radius:8px;padding:0.75rem 1.5rem;border:1px solid #334155;max-width:480px;text-align:center;">
    <p style="font-size:0.78rem;color:var(--or-muted);">Up next: translate specs into an executable build plan. And discover a loophole most plans never catch.</p>
  </div>
</div>

<div class="breadcrumb">
  <span class="done">✅ Foundations</span>
  <span class="done">✅ Spec Toolkit</span>
  <span>○ Implementation</span>
  <span>○ Validation</span>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 27 — SECTION 3 DIVIDER─────────────────────────────── -->

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
  <Pipeline :active="2" :highlights="[1, 2]" />
</div>

---
layout: default
---

<!-- ─── SLIDE 28 — WE DON'T BUILD EVERYTHING AT ONCE─────────────── -->

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
      <div style="font-size:0.85rem;font-weight:800;color:#e2e8f0;line-height:1.2;margin-bottom:0.3rem;">Foundation + Listing CRUD</div>
      <div style="display:inline-block;background:#1a3a20;color:var(--or-green);font-size:0.55rem;padding:0.1rem 0.4rem;border-radius:10px;font-weight:600;">Building Now (S3)</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(34,197,94,0.3);">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ 3 Tasks · No Dependencies</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🔐 Auth + User Roles</span>
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">📝 Listing Form</span>
        <span style="background:#0d2010;border:1px solid var(--or-green);color:var(--or-green);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">📊 Role-based Dashboards</span>
      </div>
    </div>
    <div style="padding:0.45rem 0.65rem;">
      <div style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.3rem;">CHECKPOINT CRITERIA</div>
      <div style="display:flex;align-items:flex-start;gap:0.3rem;font-size:0.65rem;color:#e2e8f0;line-height:1.4;">
        <span style="color:var(--or-green);flex-shrink:0;">●</span>
        <span>User can sign up, create a listing, and see it on their dashboard</span>
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
      <div style="font-size:0.85rem;font-weight:800;color:#e2e8f0;line-height:1.2;margin-bottom:0.3rem;">Photos + AI Renovation</div>
      <div style="display:inline-block;background:#2a1500;color:var(--or-amber);font-size:0.55rem;padding:0.1rem 0.4rem;border-radius:10px;font-weight:600;">Next</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid rgba(234,88,12,0.3);">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ 5 Tasks · Requires Phase 1</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">📷 Photo Upload</span>
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🧠 AI Generation Jobs</span>
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">💾 Output Save + Display</span>
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🔄 Re-run Generation</span>
        <span style="background:#1a0e00;border:1px solid var(--or-orange);color:var(--or-orange);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🎨 Presets + Custom Input</span>
      </div>
    </div>
    <div style="padding:0.45rem 0.65rem;">
      <div style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;color:var(--or-muted);margin-bottom:0.3rem;">CHECKPOINT CRITERIA</div>
      <div style="display:flex;align-items:flex-start;gap:0.3rem;font-size:0.65rem;color:#e2e8f0;line-height:1.4;">
        <span style="color:var(--or-amber);flex-shrink:0;">●</span>
        <span>User can upload a photo, pick a preset, generate a renovation, and view the result</span>
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
      <div style="font-size:0.6rem;color:var(--or-muted);">Scoped Later</div>
    </div>
    <div style="padding:0.45rem 0.65rem;border-right:1px solid #334155;">
      <div style="font-size:0.58rem;color:var(--or-muted);margin-bottom:0.3rem;">☰ TBD · Requires Phase 2</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">🔍 Advanced Search</span>
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">💬 Inquiry Forms</span>
        <span style="background:#1a1a2e;border:1px solid #334155;color:var(--or-muted);font-size:0.58rem;padding:0.15rem 0.4rem;border-radius:4px;font-family:'Roboto Mono',monospace;">📈 Analytics</span>
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
---
layout: default
---

<!-- ─── SLIDE 29 — HOW /GSD:PLAN-PHASE 1 WORKS───────────────────── -->

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
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.4rem;">
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">1</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Auth + Roles</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">Sign-up, sign-in, role selection (buyer / listing creator)</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-001.md</div>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">2</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Listing Form</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">Create, edit, publish listings (no photo upload)</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-002.md</div>
      </div>
      <div style="background:var(--or-card);border:1px solid #334155;border-radius:7px;padding:0.4rem 0.5rem;position:relative;">
        <div style="position:absolute;top:-7px;left:8px;background:var(--or-green);color:#000;font-size:0.55rem;font-weight:800;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;">3</div>
        <div style="font-size:0.72rem;font-weight:700;color:#e2e8f0;margin-top:0.25rem;margin-bottom:0.15rem;">Dashboards</div>
        <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.35;margin-bottom:0.3rem;">Role-based dashboards for buyers and creators</div>
        <div style="font-size:0.55rem;color:var(--or-muted);font-family:'Roboto Mono',monospace;">task-003.md</div>
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

<!-- ─── SLIDE 30 — RUNNING GSD PLAN-PHASE 1──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Running <code>/gsd:plan-phase 1</code></h1>
<p class="sub">Three internal agents collaborate to produce a verified plan from your context</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">INTERNAL AGENTS</div>
<div style="display:flex;flex-direction:column;gap:0.35rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🔬</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-orange);">Phase Researcher</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">Reads CONTEXT.md, REQUIREMENTS.md, and RESEARCH.md. Gathers all decisions, constraints, and domain knowledge specific to this phase before planning begins.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🗺</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-amber);">GSD Planner</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">Takes the researcher's output and generates atomic task plans. Each plan has a clear scope, dependencies, acceptance criteria, and file-level implementation details.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">✅</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-green);">Plan Checker</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">Verifies every generated plan against the original requirements. Flags missing coverage, scope drift, and contradictions between plans before you start building.</div>
</div>
</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">WHAT IT PRODUCES</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.5rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.6rem;line-height:1.8;">
<span style="color:var(--or-orange);font-weight:700;">.planning/phases/01-foundation/</span><br/>
<span style="padding-left:0.8rem;color:#e2e8f0;">01-01-PLAN.md</span> <span style="color:#6b7280;"># Auth + Roles</span><br/>
<span style="padding-left:0.8rem;color:#e2e8f0;">01-02-PLAN.md</span> <span style="color:#6b7280;"># Listing Form</span><br/>
<span style="padding-left:0.8rem;color:#e2e8f0;">01-03-PLAN.md</span> <span style="color:#6b7280;"># Dashboards</span><br/>
<span style="padding-left:0.8rem;color:var(--or-muted);">01-01-SUMMARY.md</span> <span style="color:#6b7280;"># per-plan summary</span><br/>
<span style="padding-left:0.8rem;color:var(--or-muted);">01-02-SUMMARY.md</span><br/>
<span style="padding-left:0.8rem;color:var(--or-muted);">01-03-SUMMARY.md</span>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;margin-top:0.4rem;">
<div style="font-size:0.62rem;font-weight:700;color:var(--or-amber);margin-bottom:0.25rem;">Each PLAN.md contains:</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.6;">Scope, dependencies, acceptance criteria, file-level implementation details, and requirement IDs it covers.</div>
</div>
</div>
</div>

<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.5rem 0.75rem;margin-top:0.5rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.8rem;flex-shrink:0;">💡</span>
<span style="font-size:0.62rem;color:#e2e8f0;">Review each plan at a high level: does the scope match your intent? Are the acceptance criteria testable? Are dependencies between plans correct? Fix before building.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 31 — THIS PLAN HAS A LOOPHOLE──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>This Plan Has a Loophole</h1>
<p class="sub">It looks organized. It is. But organized and safe are not the same thing.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.8rem;align-items:start;">
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.6rem;">— THE GSD PLAN (WAVE VIEW)</div>
    <div style="display:flex;flex-direction:column;gap:0.5rem;">
      <div style="background:var(--or-card);border-left:3px solid var(--or-blue);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;font-weight:700;color:#93c5fd;margin:0 0 0.2rem;">Wave A: UI Layer</p>
        <p style="font-size:0.7rem;color:var(--or-muted);margin:0;">Upload form, style picker, before/after viewer</p>
      </div>
      <div style="background:var(--or-card);border-left:3px solid var(--or-green);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;font-weight:700;color:var(--or-green);margin:0 0 0.2rem;">Wave B: API Layer</p>
        <p style="font-size:0.7rem;color:var(--or-muted);margin:0;">Upload endpoint, generation call, result handler</p>
      </div>
      <div style="background:var(--or-card);border-left:3px solid var(--or-amber);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;font-weight:700;color:var(--or-amber);margin:0 0 0.2rem;">Wave C: Data Layer</p>
        <p style="font-size:0.7rem;color:var(--or-muted);margin:0;">Image storage, project persistence, user sessions</p>
      </div>
    </div>
    <div style="background:rgba(224,60,46,0.08);border:1px solid rgba(224,60,46,0.25);border-radius:6px;padding:0.55rem 0.8rem;margin-top:0.75rem;">
      <p style="font-size:0.72rem;color:#fca5a5;margin:0;line-height:1.5;">⚠ The UI is fully built before the API is wired. What if the shapes don't match?</p>
    </div>
  </div>
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.6rem;">— THIS HAPPENED TO US</div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:1rem 1.1rem;">
      <p style="font-size:0.75rem;color:#e2e8f0;line-height:1.6;margin:0 0 0.6rem;">We were building a marketing analytics dashboard. The chart layer looked great: bar charts, KPI cards, trend lines. Then we wired the API.</p>
      <p style="font-size:0.75rem;color:#e2e8f0;line-height:1.6;margin:0 0 0.6rem;">Charts expected <code style="color:var(--or-orange);background:#161b22;padding:0.1rem 0.3rem;border-radius:3px;">{ date, value }</code> arrays. The API returned <code style="color:var(--or-orange);background:#161b22;padding:0.1rem 0.3rem;border-radius:3px;">{ events: [...] }</code> objects.</p>
      <p style="font-size:0.75rem;color:#e2e8f0;line-height:1.6;margin:0 0 0.6rem;">Every chart needed a custom transform. <strong style="color:var(--or-amber);">Two weeks of rework</strong> that a single E2E test on day 1 would have caught.</p>
      <p style="font-size:0.7rem;color:var(--or-muted);margin:0;border-top:1px solid #334155;padding-top:0.5rem;">The plan was organized. It was also completely layer-by-layer.</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 32 — TRACER BULLET: BUILD THIN, NOT FLAT───────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Tracer Bullet: Build Thin, Not Flat</h1>
<p class="sub">The thinnest path through every layer, before any layer is "finished"</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.6rem;align-items:start;">
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:rgba(224,60,46,0.9);margin-bottom:0.6rem;">— ✗ LAYER BY LAYER (the loophole)</div>
    <div style="display:flex;flex-direction:column;gap:0.4rem;">
      <div style="background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.3);border-radius:4px;padding:0.5rem 0.7rem;text-align:center;">
        <p style="font-size:0.72rem;color:#93c5fd;margin:0;font-weight:600;">▓▓▓▓▓▓ Full UI Layer</p>
      </div>
      <div style="text-align:center;color:var(--or-muted);font-size:0.7rem;">↓ then</div>
      <div style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);border-radius:4px;padding:0.5rem 0.7rem;text-align:center;">
        <p style="font-size:0.72rem;color:#86efac;margin:0;font-weight:600;">▓▓▓▓▓▓ Full API Layer</p>
      </div>
      <div style="text-align:center;color:var(--or-muted);font-size:0.7rem;">↓ then</div>
      <div style="background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);border-radius:4px;padding:0.5rem 0.7rem;text-align:center;">
        <p style="font-size:0.72rem;color:#fcd34d;margin:0;font-weight:600;">▓▓▓▓▓▓ Full Data Layer</p>
      </div>
    </div>
  </div>
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.6rem;">— ✓ TRACER BULLET (the fix)</div>
    <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.8rem 1rem;margin-bottom:0.75rem;">
      <p style="font-size:0.7rem;color:var(--or-muted);margin:0 0 0.4rem;font-weight:600;">1 path through all layers first:</p>
      <p style="font-size:0.75rem;color:#e2e8f0;margin:0;font-family:'Fira Code',monospace;line-height:1.6;">
        Sign up as listing creator<br/>
        <span style="color:var(--or-muted);">→</span> Role stored in Supabase<br/>
        <span style="color:var(--or-muted);">→</span> Redirected to dashboard<br/>
        <span style="color:var(--or-muted);">→</span> Create one listing<br/>
        <span style="color:var(--or-muted);">→</span> See it on the dashboard
      </p>
    </div>
    <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:6px;padding:0.55rem 0.8rem;">
      <p style="font-size:0.72rem;color:#86efac;margin:0;line-height:1.5;">✓ Auth → DB → routing → CRUD → UI proven on day 1. Then expand each layer.</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 33 — ENCODE THIS IN YOUR TOOLING───────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Encode This in Your Tooling</h1>
<p class="sub">Make Claude plan this way in every future session, regardless of which plugin you use</p>

<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:1.5rem;margin-top:2rem;align-items:start;">
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.6rem;">— ADD TO ~/.claude/CLAUDE.md</div>
    <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:1rem 1.1rem;font-family:'Fira Code',monospace;font-size:0.72rem;line-height:1.7;color:#e6edf3;">
      <span style="color:var(--or-muted);"># Planning Rules</span><br/><br/>
      When planning any feature,<br/>
      identify the <span style="color:var(--or-orange);">tracer bullet path</span> first:<br/>
      the thinnest E2E slice that<br/>
      touches every layer.<br/><br/>
      Build that before expanding<br/>
      any single layer.
    </div>
  </div>
  <div>
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:0.1em;color:var(--or-muted);margin-bottom:0.6rem;">— WHY THIS WORKS</div>
    <div style="display:flex;flex-direction:column;gap:0.6rem;">
      <div style="background:var(--or-card);border-left:3px solid var(--or-green);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;color:#e2e8f0;margin:0;line-height:1.4;">Claude reads your <code style="color:var(--or-orange);background:#161b22;padding:0.1rem 0.25rem;border-radius:2px;">CLAUDE.md</code> before every session</p>
      </div>
      <div style="background:var(--or-card);border-left:3px solid var(--or-green);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;color:#e2e8f0;margin:0;line-height:1.4;">Every plan it generates will follow this constraint: GSD, raw session, any plugin</p>
      </div>
      <div style="background:var(--or-card);border-left:3px solid var(--or-blue);border-radius:4px;padding:0.55rem 0.8rem;">
        <p style="font-size:0.72rem;color:#e2e8f0;margin:0;line-height:1.4;">You can encode any engineering instinct this way. Skills take it further, but that's a next step.</p>
      </div>
    </div>
    <div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:6px;padding:0.5rem 0.75rem;margin-top:0.75rem;">
      <p style="font-size:0.7rem;color:#e2e8f0;margin:0;font-style:italic;">Your tooling learns your discipline. You only have to teach it once.</p>
    </div>
  </div>
</div>

---
layout: default
---

<!-- ─── SLIDE 34 — EXERCISE: FIND THE TRACER BULLET PATH─────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Review the Plan for Tracer Bullet Gaps</h1>
<p class="sub">Walk through each task plan and check if any single task tries to build all layers at once</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">HOW TO REVIEW</div>
<div style="display:flex;flex-direction:column;gap:0.35rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="background:var(--or-orange);color:#0D1117;border-radius:50%;width:1.2rem;height:1.2rem;display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">1</span>
<div>
<div style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Open each PLAN.md file</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">Read the scope and implementation steps. Look for tasks that span UI + API + DB + Auth in a single plan.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="background:var(--or-amber);color:#0D1117;border-radius:50%;width:1.2rem;height:1.2rem;display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">2</span>
<div>
<div style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Spot the multi-layer tasks</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">If a task touches all layers, it should be the first one built. If it is buried as task 2 or 3, reorder it.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="background:var(--or-green);color:#0D1117;border-radius:50%;width:1.2rem;height:1.2rem;display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:800;flex-shrink:0;margin-top:0.05rem;">3</span>
<div>
<div style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Prompt Claude to restructure</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">Tell Claude: "Reorder task plans so the thinnest E2E path is built first. The first task should prove all layers work together."</div>
</div>
</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">EXAMPLE: OUR PHASE 1</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.6rem 0.8rem;margin-bottom:0.4rem;">
<div style="font-size:0.62rem;color:var(--or-muted);margin-bottom:0.3rem;">The tracer bullet for Phase 1 is:</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:0.45rem 0.65rem;font-family:'Roboto Mono',monospace;font-size:0.6rem;line-height:1.7;color:#e2e8f0;">
Sign up as creator <span style="color:var(--or-muted);">→</span> role in DB<br/>
<span style="color:var(--or-muted);">→</span> routed to creator dashboard<br/>
<span style="color:var(--or-muted);">→</span> create one listing<br/>
<span style="color:var(--or-muted);">→</span> see it on the dashboard
</div>
<div style="font-size:0.58rem;color:var(--or-muted);margin-top:0.3rem;">This single flow touches: UI, Auth, DB, Routing, CRUD, Dashboard.</div>
</div>
<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.8rem;flex-shrink:0;">💡</span>
<span style="font-size:0.6rem;color:#e2e8f0;line-height:1.5;">If this path isn't task 1 in your plan, prompt Claude to restructure: <code style="color:var(--or-orange);font-size:0.58rem;">"Move the E2E signup-to-dashboard flow to plan-01 and reorder dependencies."</code></span>
</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 35 — DONE = ACCEPTANCE CRITERIA PASS───────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Done = Acceptance Criteria Pass</h1>
<p class="sub">Not "it works on my machine." Not "looks good." Testable criteria from the spec.</p>

<div class="grid grid-cols-2 gap-4 mt-1">
<div>
<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
<span style="font-size:0.55rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);">PHASE 1 CHECKLIST</span>
<div style="flex:1;height:1px;background:#334155;"></div>
</div>
<div style="display:flex;flex-direction:column;gap:0.2rem;">
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">User can sign up and select role (buyer / creator)</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">User can sign in and is routed to correct dashboard</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">Creator can create, edit, and publish a listing</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">Listing status transitions: draft → active → off-market → sold</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">Creator dashboard shows listing cards with status</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">Buyer dashboard shows placeholder with "Browse" CTA</span>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-radius:5px;padding:0.28rem 0.5rem;display:flex;gap:0.4rem;align-items:center;">
<div style="width:12px;height:12px;border:1.5px solid #4b5563;border-radius:2px;flex-shrink:0;"></div>
<span style="font-size:0.58rem;color:#e2e8f0;font-family:'Roboto Mono',monospace;">Invalid form inputs rejected with clear error messages</span>
</div>
</div>
</div>
<div>
<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.3rem;">TEST-DRIVEN DEVELOPMENT</div>
<div style="background:var(--or-card);border:1px solid var(--or-green);border-radius:8px;padding:0.5rem 0.7rem;margin-bottom:0.4rem;">
<div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.3rem;">
<span style="background:rgba(34,197,94,0.15);color:var(--or-green);font-size:0.55rem;font-weight:800;padding:0.15rem 0.4rem;border-radius:3px;">RED → GREEN → REFACTOR</span>
</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="color:var(--or-red);font-size:0.65rem;flex-shrink:0;margin-top:0.05rem;">●</span>
<span style="font-size:0.6rem;color:#e2e8f0;line-height:1.5;">Turn each acceptance criterion into a failing test first. The test defines "done" before any code is written.</span>
</div>
<div style="display:flex;align-items:flex-start;gap:0.4rem;">
<span style="color:var(--or-green);font-size:0.65rem;flex-shrink:0;margin-top:0.05rem;">●</span>
<span style="font-size:0.6rem;color:#e2e8f0;line-height:1.5;">Write the minimum code to make each test pass. Only refactor once all criteria are green.</span>
</div>
</div>
</div>

<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.1em;color:var(--or-blue);margin-bottom:0.3rem;">DISCUSSION</div>
<div style="display:flex;flex-direction:column;gap:0.3rem;">
<div style="background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.4rem 0.6rem;">
<div style="font-size:0.65rem;font-weight:600;color:#e2e8f0;margin-bottom:0.1rem;">Implementation Drift</div>
<div style="font-size:0.58rem;color:var(--or-muted);line-height:1.4;">Where does drift show up? What are the common failure points between spec and code?</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.4rem 0.6rem;">
<div style="font-size:0.65rem;font-weight:600;color:#e2e8f0;margin-bottom:0.1rem;">Early Detection</div>
<div style="font-size:0.58rem;color:var(--or-muted);line-height:1.4;">How do you detect misalignment between what was spec'd and what gets built?</div>
</div>
</div>
</div>
</div>

<div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:8px;padding:0.35rem 0.7rem;margin-top:0.35rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🔗</span>
<span style="font-size:0.58rem;color:#e2e8f0;line-height:1.5;">After completing each plan, review the <strong style="color:#60a5fa;">interfaces</strong> between sections. An interface is the contract between two parts of the system: what one side sends, and what the other expects. Example: the auth layer returns a <code style="font-size:0.55rem;color:var(--or-amber);">user.role</code>, and the dashboard expects it for routing. If those don't match, it breaks at integration. Also check: does the plan include <strong style="color:#60a5fa;">tests</strong> during implementation, or only at the end? Tests should run alongside each task, not as a final batch.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 36 — EXECUTE PHASE 1──────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>What <code>/gsd:execute-phase</code> Does</h1>
<p class="sub">It implements all requirements for the phase in parallel waves, not one task at a time</p>

<div class="grid grid-cols-2 gap-5 mt-2">
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-orange);margin-bottom:0.4rem;">EXECUTION MODEL</div>
<div style="display:flex;flex-direction:column;gap:0.35rem;">
<div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🌊</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-orange);">Waves (Groups of Subtasks)</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">Each plan is split into subtasks. Independent subtasks are grouped into waves and executed in parallel. Wave 2 starts only after Wave 1 completes.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🌿</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-green);">Git Worktrees for Parallelism</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">Creates isolated worktrees inside <code style="font-size:0.55rem;color:var(--or-amber);">.claude/</code> so multiple subtasks can be implemented simultaneously without conflicts. Each worktree is a full copy of the repo on its own branch.</div>
</div>
</div>
<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.5rem 0.7rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.9rem;flex-shrink:0;">🔀</span>
<div>
<div style="font-size:0.75rem;font-weight:700;color:var(--or-blue);">Commit + Merge to Main</div>
<div style="font-size:0.62rem;color:var(--or-muted);line-height:1.5;">After each subtask passes, the worktree commits and merges back into the main branch. You get atomic commits per subtask, not one giant commit at the end.</div>
</div>
</div>
</div>
</div>
<div>
<div style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);margin-bottom:0.4rem;">CONTINUITY DOCS</div>
<div style="background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:0.5rem 0.75rem;font-family:'Roboto Mono',monospace;font-size:0.6rem;line-height:1.8;">
<span style="color:var(--or-green);">✓</span> <span style="color:#e2e8f0;">context.md</span> <span style="color:#6b7280;"># current state of the build</span><br/>
<span style="color:var(--or-green);">✓</span> <span style="color:#e2e8f0;">subtask summaries</span> <span style="color:#6b7280;"># what each subtask did</span><br/>
<span style="color:var(--or-green);">✓</span> <span style="color:#e2e8f0;">suggested commands:</span><br/>
<span style="padding-left:0.8rem;color:var(--or-orange);">/clear</span> <span style="color:#6b7280;"># reset context window</span><br/>
<span style="padding-left:0.8rem;color:var(--or-orange);">/gsd progress</span> <span style="color:#6b7280;"># check what's done</span>
</div>
<div style="background:var(--or-card);border:1px solid rgba(249,115,22,0.3);border-radius:8px;padding:0.55rem 0.75rem;margin-top:0.4rem;">
<div style="font-size:0.62rem;font-weight:700;color:var(--or-amber);margin-bottom:0.25rem;">Why this matters</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.6;">Claude's context window fills up during execution. These docs let you <code style="font-size:0.55rem;color:var(--or-amber);">/clear</code> the context and resume without losing progress. The agent reads context.md to understand where it left off.</div>
</div>

<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.55rem 0.75rem;margin-top:0.35rem;">
<div style="font-size:0.62rem;font-weight:700;color:var(--or-blue);margin-bottom:0.25rem;">Tracking Progress</div>
<div style="font-size:0.6rem;color:var(--or-muted);line-height:1.6;">Run <code style="font-size:0.55rem;color:var(--or-orange);">/gsd progress</code> to see which subtasks are complete, in progress, or blocked. This is your dashboard for the entire phase execution.</div>
</div>
</div>
</div>

<div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:8px;padding:0.35rem 0.7rem;margin-top:0.35rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🔗</span>
<span style="font-size:0.58rem;color:#e2e8f0;line-height:1.5;">Worktrees are a Git feature, not a Claude invention. Each worktree is a separate checkout of the same repo, sharing the same <code style="font-size:0.55rem;color:var(--or-amber);">.git</code> history. GSD uses them to run multiple implementation agents in parallel without merge conflicts during a wave.</span>
</div>

---
layout: default
---

<!-- ─── SLIDE 37 — RUNNING GSD EXECUTE-PHASE 1 (LIVE)─────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="position:absolute;top:1.2rem;right:1.5rem;background:rgba(59,130,246,0.12);border:1px solid var(--or-blue);border-radius:4px;padding:0.2rem 0.7rem;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-blue);">💻 DEMO</div>

<h1>Running <code>/gsd:execute-phase 1</code></h1>
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
      <span style="color:var(--or-green);"># Task 1: Auth + Role selection</span><br>
      <span style="color:var(--or-green);"># Task 2: Listing form + CRUD</span><br>
      <span style="color:var(--or-green);"># Task 3: Role-based dashboards</span>
    </div>
  </div>
  <div class="live-panel">
    <div style="margin-bottom:0.4rem;">
      <div class="panel-label">Smoke Test</div>
    </div>
    <div class="panel-body">
      <span style="color:var(--or-green);"># Manual Verification:</span><br>
      <span style="color:#e2e8f0;">1. Sign up as listing creator</span><br>
      <span style="color:#e2e8f0;">2. Create + publish a listing</span><br>
      <span style="color:#e2e8f0;">3. Verify it shows on dashboard</span>
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
layout: default
---

<!-- ─── SLIDE 38 — ARCHITECTURE + DATA MODEL─────────────────────── -->

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

<div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:8px;padding:0.35rem 0.7rem;margin-top:0.35rem;display:flex;align-items:flex-start;gap:0.5rem;">
<span style="font-size:0.75rem;flex-shrink:0;">🔗</span>
<span style="font-size:0.58rem;color:#e2e8f0;line-height:1.5;">With <strong style="color:#60a5fa;">Supabase MCP</strong>, database creation and schema modifications happen directly from Claude Code. Tables, columns, RLS policies, migrations: all from your terminal. But control the permissions: set MCP access to <code style="font-size:0.55rem;color:var(--or-amber);">read-only</code> in production, and only allow write operations on development branches.</span>
</div>

---
layout: center
class: section-divider
---

<!-- ─── SLIDE 39 — SECTION 4 DIVIDER─────────────────────────────── -->

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

<!-- ─── SLIDE 40 — HOW GSD VERIFY-WORK WORKS──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>How <code>/gsd:verify-work 1</code> Works</h1>
<p class="sub">Automated UAT generation, human-in-the-loop UI checks, then fix-and-retest until clean</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:0.6rem;align-items:start;">
<div style="display:flex;flex-direction:column;gap:0.45rem;">
  <div style="background:var(--or-card);border:1px solid var(--or-green);border-radius:8px;padding:0.5rem 0.7rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
      <div style="background:var(--or-green);color:#0D1117;border-radius:50%;width:1.1rem;height:1.1rem;font-size:0.55rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div>
      <span style="font-size:0.72rem;font-weight:700;color:var(--or-green);">Generate UAT File</span>
    </div>
    <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">Creates a UAT document listing every testable criterion from the phase spec. Backend tests run automatically, results logged to the UAT file.</div>
  </div>
  <div style="background:var(--or-card);border:1px solid var(--or-blue);border-radius:8px;padding:0.5rem 0.7rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
      <div style="background:var(--or-blue);color:#0D1117;border-radius:50%;width:1.1rem;height:1.1rem;font-size:0.55rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
      <span style="font-size:0.72rem;font-weight:700;color:var(--or-blue);">Prompt for UI Verification</span>
    </div>
    <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">Asks you to manually verify UI-based tests it cannot validate on its own. You confirm pass/fail for each, and it records your results in the UAT file.</div>
  </div>
  <div style="background:var(--or-card);border:1px solid var(--or-orange);border-radius:8px;padding:0.5rem 0.7rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
      <div style="background:var(--or-orange);color:#0D1117;border-radius:50%;width:1.1rem;height:1.1rem;font-size:0.55rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</div>
      <span style="font-size:0.72rem;font-weight:700;color:var(--or-orange);">Log Gaps</span>
    </div>
    <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">All failures (automated + manual) are noted in the UAT document with specific descriptions. This becomes your fix list.</div>
  </div>
  <div style="background:var(--or-card);border:1px solid var(--or-amber);border-radius:8px;padding:0.5rem 0.7rem;">
    <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
      <div style="background:var(--or-amber);color:#0D1117;border-radius:50%;width:1.1rem;height:1.1rem;font-size:0.55rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">4</div>
      <span style="font-size:0.72rem;font-weight:700;color:var(--or-amber);">Fix All → Retest</span>
    </div>
    <div style="font-size:0.6rem;color:var(--or-muted);line-height:1.5;">Prompt it to fix every gap in the UAT file. Once done, run <code style="font-size:0.55rem;color:var(--or-amber);">/gsd:verify-work 1</code> again. Repeat until all tests pass.</div>
  </div>
</div>
<div>
  <div style="font-size:0.58rem;font-weight:700;letter-spacing:0.1em;color:var(--or-red);margin-bottom:0.4rem;">GAPS FOUND IN OUR BUILD</div>
  <div style="display:flex;flex-direction:column;gap:0.35rem;">
    <div style="background:#1a1020;border:1px solid rgba(224,60,46,0.35);border-radius:6px;padding:0.45rem 0.65rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.15rem;">
        <span style="color:var(--or-red);font-size:0.7rem;">❌</span>
        <span style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Reset Password</span>
      </div>
      <div style="font-size:0.58rem;color:var(--or-muted);line-height:1.4;">Email sends but reset link returns a 404. Callback URL not configured in Supabase auth settings.</div>
    </div>
    <div style="background:#1a1020;border:1px solid rgba(224,60,46,0.35);border-radius:6px;padding:0.45rem 0.65rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.15rem;">
        <span style="color:var(--or-red);font-size:0.7rem;">❌</span>
        <span style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Login Flow</span>
      </div>
      <div style="font-size:0.58rem;color:var(--or-muted);line-height:1.4;">Credentials accepted but session not persisted. User redirected back to login on every page refresh.</div>
    </div>
    <div style="background:#1a1020;border:1px solid rgba(224,60,46,0.35);border-radius:6px;padding:0.45rem 0.65rem;">
      <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.15rem;">
        <span style="color:var(--or-red);font-size:0.7rem;">❌</span>
        <span style="font-size:0.7rem;font-weight:700;color:#e2e8f0;">Listing Status Transitions</span>
      </div>
      <div style="font-size:0.58rem;color:var(--or-muted);line-height:1.4;">Draft → active works, but active → off-market and off-market → sold buttons do nothing. Status update API not wired to those transitions.</div>
    </div>
  </div>
  <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:6px;padding:0.45rem 0.65rem;margin-top:0.45rem;">
    <div style="font-size:0.58rem;font-weight:700;color:var(--or-green);margin-bottom:0.15rem;">THE FIX LOOP</div>
    <div style="font-size:0.58rem;color:#e2e8f0;line-height:1.5;font-family:'Roboto Mono',monospace;">
      <span style="color:var(--or-muted);">1.</span> "Fix all gaps in the UAT file"<br/>
      <span style="color:var(--or-muted);">2.</span> <span style="color:var(--or-orange);">/gsd:verify-work 1</span><br/>
      <span style="color:var(--or-muted);">3.</span> Repeat until <span style="color:var(--or-green);">all green</span>
    </div>
  </div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 41 — WHAT REVIEW CATCHES (ICEBERG)─────────────────── -->

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
<span style="font-size:0.73rem;color:#e2e8f0;">Review catches what's below the waterline, before it compounds.</span>
</div>
<div style="font-size:0.68rem;font-weight:700;color:var(--or-blue);border:1px solid var(--or-blue);padding:0.12rem 0.55rem;border-radius:4px;">Phase 2</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 42 — THE LOOP──────────────────────────────────────── -->

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

<!-- ─── SLIDE 43 — REVIEWING PHASE 1 (LIVE)──────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="position:absolute;top:1.2rem;right:1.5rem;background:rgba(59,130,246,0.12);border:1px solid var(--or-blue);border-radius:4px;padding:0.2rem 0.7rem;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-blue);">💻 DEMO</div>

<h1>Reviewing Phase 1</h1>
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
<div style="color:var(--or-green);font-style:italic;"># Validates auth + role selection</div>
<div style="color:var(--or-green);font-style:italic;"># Checks listing CRUD endpoints</div>
<div style="color:var(--or-green);font-style:italic;"># Verifies dashboard routing by role</div>
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
<div><span style="color:var(--or-green);">✅</span><span style="color:#e2e8f0;"> Sign up + select role (buyer / creator)</span></div>
<div><span style="color:var(--or-green);">✅</span><span style="color:#e2e8f0;"> Sign in → routed to correct dashboard</span></div>
<div><span style="color:var(--or-amber);">⚠️</span><span style="color:#e2e8f0;"> Create, edit, publish a listing</span></div>
<div><span style="color:var(--or-red);">❌</span><span style="color:#e2e8f0;"> Status transitions: draft → active → sold</span></div>
</div>
</div>
<div style="background:#1a1f2e;border:1px solid #2d3748;border-left:3px solid var(--or-orange);border-radius:8px;padding:0.6rem 0.75rem;">
<div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.3rem;">
<div style="width:20px;height:20px;border-radius:50%;background:var(--or-orange);display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;color:white;flex-shrink:0;">3</div>
<span style="font-size:0.82rem;font-weight:700;color:#e2e8f0;">Edge Case Testing</span>
<div style="background:#374151;color:#9ca3af;font-size:0.55rem;padding:0.08rem 0.38rem;border-radius:4px;margin-left:auto;">3 min</div>
</div>
<div style="font-size:0.65rem;color:var(--or-muted);margin-bottom:0.38rem;">Stress test auth, forms, and role boundaries.</div>
<div style="background:#0d1117;border:1px solid #2d3748;border-radius:5px;padding:0.45rem 0.6rem;font-family:'Roboto Mono',monospace;font-size:0.58rem;line-height:1.75;">
<div><span style="color:#e2e8f0;">Try: empty listing form &nbsp;</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-orange);"> expect validation errors</span></div>
<div><span style="color:#e2e8f0;">Try: buyer creates listing</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-red);"> expect blocked by role</span></div>
<div><span style="color:#e2e8f0;">Try: expired session &nbsp;&nbsp;&nbsp;</span><span style="color:var(--or-muted);">→</span><span style="color:var(--or-amber);"> expect redirect to login</span></div>
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
<div style="color:#e2e8f0;">- Status transition logic incomplete</div>
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

<!-- ─── SLIDE 44 — FIX + BUILD PHASE 2───────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>Fix → Build Phase 2: The Loop in Action</h1>
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
<div style="color:var(--or-green);font-style:italic;"># Apply fixes to the spec</div>
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

<!-- ─── SLIDE 45 — Q&A SECTION 4─────────────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div class="text-center">
    <div class="qa-display">Q&amp;A</div>
    <p style="color:var(--or-orange);font-size:0.9rem;font-weight:600;letter-spacing:0.05em;">Apply the Loop to Phase 3+</p>
    <p style="color:var(--or-muted);font-size:0.78rem;margin-top:0.3rem;">Section 4: Validation + Scaling</p>
  </div>
  <div style="background:var(--or-card);border-radius:8px;padding:0.75rem 1.5rem;border:1px solid #334155;max-width:500px;text-align:center;">
    <p style="font-size:0.78rem;color:#e2e8f0;">Apply the full workflow to Phase 3+ features, or bring it to a feature in your own project.</p>
    <p style="font-size:0.72rem;color:var(--or-muted);margin-top:0.4rem;">Phase 3+: Design gallery · Element-level control · Sharing links, all spec'd in the requirements doc, ready to build.</p>
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

<!-- ─── SLIDE 46 — SCALING THE WORKFLOW──────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>The Workflow Scales</h1>
<p class="sub">From solo developer to large organization. The methodology transfers.</p>

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
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">CLAUDE.md + spec doc = full context</div>
</div>
<div style="border-left:3px solid #3b82f6;background:#1a1f2e;border-radius:0 7px 7px 0;padding:0.42rem 0.65rem;">
<div style="display:flex;align-items:center;gap:0.35rem;margin-bottom:0.15rem;">
<span style="font-size:0.82rem;">👥</span>
<span style="font-size:0.78rem;font-weight:700;color:#3b82f6;">Pair Programming</span>
</div>
<div style="font-size:0.62rem;color:#e2e8f0;margin-bottom:0.12rem;">Two developers working from the same truth.</div>
<div style="font-family:'Roboto Mono',monospace;font-size:0.54rem;color:var(--or-muted);">Shared spec doc in repo root</div>
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

<!-- ─── SLIDE 47 — WHAT WE JUST BUILT────────────────────────────── -->
<div class="orm-badge">
<div class="brand">O'REILLY<sup>®</sup></div>
<div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>
<h1 style="text-align:center;margin-bottom:0.15rem;margin-top:1.4rem;">What We Just Built</h1>
<p class="sub" style="text-align:center;margin-bottom:0.5rem;">Messy brief to working MVP. Run the loop, spec by spec.</p>
<div style="display:flex;align-items:center;justify-content:center;gap:0.65rem;margin-bottom:0.55rem;">
<div style="background:rgba(224,60,46,0.1);border:1.5px solid #E03C2E;border-radius:6px;padding:0.28rem 0.8rem;text-align:center;">
<div style="font-size:0.58rem;font-weight:700;color:#E03C2E;letter-spacing:0.05em;">MESSY BRIEF</div>
<div style="font-size:0.46rem;color:#94A3B8;">14 features · no priority</div>
</div>
<div style="color:#F97316;font-size:1.1rem;">→</div>
<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.3);border-radius:6px;padding:0.28rem 0.8rem;text-align:center;">
<div style="font-size:0.58rem;font-weight:700;color:#F97316;letter-spacing:0.05em;">LOOP × 2</div>
<div style="font-size:0.46rem;color:#94A3B8;">Phase 1 + Phase 2</div>
</div>
<div style="color:#22C55E;font-size:1.1rem;">→</div>
<div style="background:rgba(34,197,94,0.1);border:1.5px solid #22C55E;border-radius:6px;padding:0.28rem 0.8rem;text-align:center;">
<div style="font-size:0.58rem;font-weight:700;color:#22C55E;letter-spacing:0.05em;">WORKING MVP</div>
<div style="font-size:0.46rem;color:#94A3B8;">spec-validated · ready for Phase 3</div>
</div>
</div>
<div style="position:relative;width:380px;height:306px;margin:0 auto;">
<svg viewBox="0 0 320 258" style="position:absolute;top:0;left:0;width:100%;height:100%;">
<circle cx="160" cy="124" r="82" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-dasharray="5,4"/>
<path d="M 145 68 Q 24 104 104 140" fill="none" stroke="#F97316" stroke-width="2.2"/>
<polygon points="104,140 95,140 98,133" fill="#F97316"/>
<path d="M 119 165 Q 160 226 201 165" fill="none" stroke="#22C55E" stroke-width="2.2"/>
<polygon points="201,165 200,174 193,170" fill="#22C55E"/>
<path d="M 216 140 Q 296 104 175 68" fill="none" stroke="#3B82F6" stroke-width="2.2"/>
<polygon points="175,68 184,67 182,74" fill="#3B82F6"/>
<circle cx="160" cy="42" r="30" fill="#0d1117" stroke="#F97316" stroke-width="2.2"/>
<circle cx="160" cy="42" r="28" fill="rgba(249,115,22,0.12)"/>
<circle cx="89" cy="165" r="30" fill="#0d1117" stroke="#22C55E" stroke-width="2.2"/>
<circle cx="89" cy="165" r="28" fill="rgba(34,197,94,0.12)"/>
<circle cx="231" cy="165" r="30" fill="#0d1117" stroke="#3B82F6" stroke-width="2.2"/>
<circle cx="231" cy="165" r="28" fill="rgba(59,130,246,0.12)"/>
</svg>
<div style="position:absolute;left:190px;top:50px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.72rem;font-weight:800;color:#F97316;line-height:1.1;">SPEC</div>
<div style="font-size:0.42rem;color:#94A3B8;margin-top:1px;">brief to contract</div>
</div>
<div style="position:absolute;left:106px;top:196px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.72rem;font-weight:800;color:#22C55E;line-height:1.1;">BUILD</div>
<div style="font-size:0.42rem;color:#94A3B8;margin-top:1px;">spec to code</div>
</div>
<div style="position:absolute;left:274px;top:196px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.65rem;font-weight:800;color:#3B82F6;line-height:1.1;">REVIEW</div>
<div style="font-size:0.42rem;color:#94A3B8;margin-top:1px;">output to spec</div>
</div>
<div style="position:absolute;left:190px;top:143px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.58rem;font-weight:700;color:#e2e8f0;letter-spacing:1.5px;">THE LOOP</div>
<div style="font-size:0.44rem;color:#64748b;margin-top:2px;">ran ×2</div>
<div style="font-size:0.38rem;color:#475569;margin-top:1px;">Phase 1 + Phase 2</div>
</div>
<div style="position:absolute;left:46px;top:115px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.42rem;font-weight:600;color:#F97316;line-height:1.5;">Tracer<br>Bullet</div>
</div>
<div style="position:absolute;left:316px;top:115px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;">
<div style="font-size:0.42rem;font-weight:600;color:#3B82F6;line-height:1.5;">Next<br>Phase</div>
</div>
<div style="position:absolute;left:190px;top:250px;transform:translate(-50%,-50%);text-align:center;pointer-events:none;white-space:nowrap;">
<div style="font-size:0.42rem;font-weight:600;color:#22C55E;">Acceptance Criteria</div>
</div>
</div>

---
layout: default
---

<!-- ─── SLIDE 48 — THE AUTONOMOUS LOOP (RALPH)───────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="position:absolute;top:1.2rem;right:1.5rem;background:rgba(245,158,11,0.12);border:1px solid var(--or-amber);border-radius:4px;padding:0.2rem 0.7rem;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-amber);">🔭 EXPLORE NEXT</div>

<h1 style="margin-top:2.2rem;">The Autonomous Loop</h1>
<p class="sub" style="margin-bottom:0.5rem;">Try this once you've shipped GSD on multiple projects and feel confident with the workflow</p>

<div style="display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;align-items:center;gap:0;margin-top:0.85rem;">
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.9rem;text-align:center;">
    <div style="font-size:1.4rem;margin-bottom:0.3rem;">📋</div>
    <div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;">Plan</div>
    <div style="font-size:0.6rem;color:var(--or-muted);margin-top:0.2rem;">Break spec into tasks</div>
  </div>
  <div style="font-size:1.2rem;color:var(--or-orange);padding:0 0.5rem;">→</div>
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.9rem;text-align:center;">
    <div style="font-size:1.4rem;margin-bottom:0.3rem;">⚡</div>
    <div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;">Execute</div>
    <div style="font-size:0.6rem;color:var(--or-muted);margin-top:0.2rem;">Implement each task</div>
  </div>
  <div style="font-size:1.2rem;color:var(--or-orange);padding:0 0.5rem;">→</div>
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.9rem;text-align:center;">
    <div style="font-size:1.4rem;margin-bottom:0.3rem;">🔍</div>
    <div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;">Review</div>
    <div style="font-size:0.6rem;color:var(--or-muted);margin-top:0.2rem;">Check against spec</div>
  </div>
  <div style="font-size:1.2rem;color:var(--or-orange);padding:0 0.5rem;">→</div>
  <div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.9rem;text-align:center;">
    <div style="font-size:1.4rem;margin-bottom:0.3rem;">✅</div>
    <div style="font-size:0.75rem;font-weight:700;color:#e2e8f0;">Commit</div>
    <div style="font-size:0.6rem;color:var(--or-muted);margin-top:0.2rem;">Only if criteria pass</div>
  </div>
</div>

<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.25);border-radius:8px;padding:0.85rem 1.1rem;margin-top:1.2rem;">
  <p style="font-size:0.78rem;color:#e2e8f0;margin:0;line-height:1.6;">This is the <strong style="color:var(--or-orange);">RALPH pattern</strong> (Review, Act, Loop, Push, Hold). When your spec defines exact acceptance criteria, Claude knows what "done" means. The loop runs unattended. <span style="color:var(--or-muted);">Today's specs are the prerequisite: vague requirements break autonomous loops immediately.</span></p>
</div>

<div style="background:var(--or-card);border:1px solid #334155;border-radius:8px;padding:0.65rem 1rem;margin-top:0.75rem;display:flex;align-items:center;gap:0.6rem;">
  <div style="width:3px;height:100%;background:var(--or-green);border-radius:2px;align-self:stretch;"></div>
  <p style="font-size:0.72rem;color:var(--or-muted);margin:0;line-height:1.5;">The specs you've been writing today are the prerequisite. Well-defined acceptance criteria are what let Claude know what "done" means. Without them,, autonomous loops break immediately.</p>
</div>

---
layout: default
---

<!-- ─── SLIDE 49 — SANDBOXING CLAUDE CODE────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<div style="position:absolute;top:1.2rem;right:1.5rem;background:rgba(245,158,11,0.12);border:1px solid var(--or-amber);border-radius:4px;padding:0.2rem 0.7rem;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:var(--or-amber);">🔭 EXPLORE NEXT</div>

<h1 style="margin-top:2.2rem;">Sandboxing Claude Code</h1>
<p class="sub" style="margin-bottom:0.5rem;">Try this once you've shipped GSD on multiple projects and are ready to run the RALPH loop</p>
<div style="background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.2);border-radius:6px;padding:0.32rem 0.85rem;margin-bottom:0.6rem;">
<p style="font-size:0.63rem;color:var(--or-amber);margin:0;line-height:1.5;">When you run RALPH, Claude operates autonomously across your codebase: no confirmation prompts, no human in the loop. Sandboxing is what prevents an autonomous run from making irreversible mistakes.</p>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.85rem;">
  <div>
    <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:var(--or-red);text-transform:uppercase;margin-bottom:0.5rem;">⚠️ Unsandboxed Risks</p>
    <div style="display:flex;flex-direction:column;gap:0.4rem;">
      <div style="background:rgba(224,60,46,0.08);border:1px solid rgba(224,60,46,0.2);border-radius:6px;padding:0.55rem 0.75rem;">
        <p style="font-size:0.75rem;color:#e2e8f0;margin:0;font-weight:600;">Pushes broken code</p>
        <p style="font-size:0.65rem;color:var(--or-muted);margin:0.2rem 0 0;">Auto-commits and pushes without human review</p>
      </div>
      <div style="background:rgba(224,60,46,0.08);border:1px solid rgba(224,60,46,0.2);border-radius:6px;padding:0.55rem 0.75rem;">
        <p style="font-size:0.75rem;color:#e2e8f0;margin:0;font-weight:600;">Deletes files</p>
        <p style="font-size:0.65rem;color:var(--or-muted);margin:0.2rem 0 0;">Irreversible operations with no confirmation step</p>
      </div>
      <div style="background:rgba(224,60,46,0.08);border:1px solid rgba(224,60,46,0.2);border-radius:6px;padding:0.55rem 0.75rem;">
        <p style="font-size:0.75rem;color:#e2e8f0;margin:0;font-weight:600;">Makes live API calls</p>
        <p style="font-size:0.65rem;color:var(--or-muted);margin:0.2rem 0 0;">Charges cards, sends emails, mutates prod data</p>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:var(--or-green);text-transform:uppercase;margin-bottom:0.5rem;">✅ Safe Sandbox Config</p>
    <div style="background:#161b22;border:1px solid #30363d;border-radius:8px;padding:0.75rem;font-family:'Roboto Mono',monospace;font-size:0.65rem;line-height:1.8;color:#e2e8f0;">
      <span style="color:var(--or-muted)"># ~/.claude/settings.json</span><br>
      <span style="color:var(--or-blue)">"allowedTools"</span><span>: [</span><br>
      <span style="padding-left:1rem;color:var(--or-green)">"Read"</span><span>, </span><span style="color:var(--or-green)">"Edit"</span><span>, </span><span style="color:var(--or-green)">"Bash"</span><br>
      <span>],</span><br>
      <span style="color:var(--or-blue)">"autoApprove"</span><span>: </span><span style="color:var(--or-amber)">false</span><span>,</span><br>
      <span style="color:var(--or-blue)">"noPush"</span><span>: </span><span style="color:var(--or-amber)">true</span>
    </div>
    <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:6px;padding:0.55rem 0.75rem;margin-top:0.5rem;">
      <p style="font-size:0.72rem;color:#e2e8f0;margin:0;font-weight:600;">Worktree isolation</p>
      <p style="font-size:0.65rem;color:var(--or-muted);margin:0.2rem 0 0;">Each run gets its own branch. Main stays clean until you merge</p>
    </div>
  </div>
</div>

<div style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);border-radius:8px;padding:0.6rem 1rem;margin-top:0.75rem;">
  <p style="font-size:0.72rem;color:#e2e8f0;margin:0;line-height:1.5;"><strong style="color:var(--or-orange);">Principle:</strong> <span style="color:var(--or-muted);">The loop earns autonomy incrementally. Start with human-in-the-loop. Add automation only when each step has proven reliable in your codebase.</span></p>
</div>

---
layout: default
---

<!-- ─── SLIDE 50 — 3 THINGS TO TAKE WITH YOU─────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1>3 Things to Take With You</h1>

<div class="flex flex-col gap-3 mt-4">
  <div class="card orange" style="display:flex;gap:1rem;align-items:start;padding:0.75rem 1rem;">
    <span style="font-size:1.8rem;font-weight:900;color:var(--or-orange);line-height:1;flex-shrink:0;">1</span>
    <div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:0.2rem;">Specs are contracts: for humans AND AI</div>
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

---
layout: default
---

<!-- ─── SLIDE 51 — RECOMMENDED RESOURCES─────────────────────────── -->

<div class="orm-badge">
  <div class="brand">O'REILLY<sup>®</sup></div>
  <div class="sub-brand">LIVE ONLINE TRAINING</div>
</div>

<h1 style="margin-top:1.2rem;">Go Deeper</h1>
<p class="sub">Continue your learning on O'Reilly. Click any card to open.</p>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.55rem;margin-top:0.55rem;">
<div>
<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.12em;color:var(--or-orange);text-transform:uppercase;margin-bottom:0.3rem;">📚 Books</div>
<div style="display:flex;flex-direction:column;gap:0.25rem;">
<a href="https://www.oreilly.com/library/view/agentic-coding-with/9781806022595/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#F97316'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">Agentic Coding with Claude Code</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Eden Marco · Mar 2026 · Skills, Hooks, MCP, multi-agent systems</p>
</a>
<a href="https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#F97316'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">The Pragmatic Programmer</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Thomas &amp; Hunt · Tracer Bullet (Topic 12) + programming by contract</p>
</a>
</div>
<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.12em;color:var(--or-muted);text-transform:uppercase;margin-top:0.5rem;margin-bottom:0.3rem;">📄 Article</div>
<a href="https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#94A3B8'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">How to Write a Good Spec for AI Agents</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Addy Osmani · O'Reilly Radar · Feb 2026</p>
</a>
</div>
<div>
<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.12em;color:var(--or-blue);text-transform:uppercase;margin-bottom:0.3rem;">🎓 Live Courses</div>
<div style="display:flex;flex-direction:column;gap:0.25rem;">
<a href="https://www.oreilly.com/live-events/agentic-coding-with-claude-code/0642572184049/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">Agentic Coding with Claude Code</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Ken Kousen · 5 hrs · Skills, Hooks, Subagents</p>
</a>
<a href="https://www.oreilly.com/live-events/ai-assisted-test-driven-development/0642572011956/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">AI-Assisted Test-Driven Development</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Venkat Subramaniam · 4 hrs · Red-Green-Refactor with AI</p>
</a>
<a href="https://www.oreilly.com/live-events/building-agent-skills-for-claude-code/0642572305628/0642572305611/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#3B82F6'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">Building Agent Skills for Claude Code</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Bence Csernak · 3 hrs · Custom agents + orchestration</p>
</a>
</div>
</div>
<div>
<div style="font-size:0.55rem;font-weight:700;letter-spacing:0.12em;color:var(--or-green);text-transform:uppercase;margin-bottom:0.3rem;">🎥 Videos</div>
<div style="display:flex;flex-direction:column;gap:0.25rem;">
<a href="https://www.oreilly.com/videos/building-agentic-ai/9780135919989/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#22C55E'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">Building Agentic AI: Workflows to Production</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Sinan Ozdemir · ~5 hrs on-demand · LangGraph, MCP, multi-agent</p>
</a>
<a href="https://www.oreilly.com/AgenticWorld/" target="_blank" style="text-decoration:none;display:block;background:var(--or-card);border:1px solid #334155;border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#22C55E'" onmouseout="this.style.borderColor='#334155'">
<p style="font-size:0.65rem;font-weight:700;color:#e2e8f0;margin:0 0 0.1rem;">AI Codecon: Coding for the Agentic World</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">O'Reilly · Free recordings · Context engineering, MCP, agentic patterns</p>
</a>
<a href="https://www.youtube.com/@oreilly" target="_blank" style="text-decoration:none;display:block;background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.2);border-radius:6px;padding:0.35rem 0.55rem;" onmouseover="this.style.borderColor='#22C55E'" onmouseout="this.style.borderColor='rgba(34,197,94,0.2)'">
<p style="font-size:0.65rem;font-weight:700;color:#22C55E;margin:0 0 0.1rem;">O'Reilly YouTube Channel →</p>
<p style="font-size:0.55rem;color:var(--or-muted);margin:0;">Free Codecon + Superstream recordings</p>
</a>
</div>
</div>
</div>
