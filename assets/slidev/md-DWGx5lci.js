import{f as u,o as d,e as p,g as e,i as m,k as v,z as f,b,w as g,j as S,ac as r,v as x,x as _,C as l}from"../modules/vue-DgG068mQ.js";import{u as c,f as k}from"./context-rCZ7r4YI.js";import"../index-4CJUuxWn.js";import"../modules/shiki-DMZ5NkrA.js";function i(s){return s.startsWith("/")?"/spec-driven-course/"+s.slice(1):s}function w(s,a=!1){const n=s&&["#","rgb","hsl"].some(t=>s.indexOf(t)===0),o={background:n?s:void 0,color:s&&!n?"white":void 0,backgroundImage:n?void 0:s?a?`linear-gradient(#0005, #0008), url(${i(s)})`:`url("${i(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const C={class:"my-auto w-full"},I=u({__name:"cover",props:{background:{default:""}},setup(s){c();const a=s,n=f(()=>w(a.background,!0));return(o,t)=>(d(),p("div",{class:"slidev-layout cover",style:v(n.value)},[e("div",C,[m(o.$slots,"default")])],4))}}),N={__name:"slides.md__slidev_1",setup(s){const{$clicksContext:a,$frontmatter:n}=c();return a.setup(),(o,t)=>(d(),b(I,x(_(l(k)(l(n),0))),{default:g(()=>[S(" ─── SLIDE 1 — TITLE ──────────────────────────────────────────── "),t[0]||(t[0]=e("div",{class:"orm-badge"},[e("div",{class:"brand"},[r("O'REILLY"),e("sup",null,"®")]),e("div",{class:"sub-brand"},"LIVE ONLINE TRAINING")],-1)),t[1]||(t[1]=e("div",{style:{position:"absolute",top:"50%",left:"1.5rem",transform:"translateY(-50%)","max-width":"68%"}},[e("div",{class:"master-badge"},[e("span",{class:"master-pill"},"MASTER CLASS"),e("span",{class:"master-hours"},"4 HOURS")]),e("div",{class:"title-main"},[r("Spec-Driven"),e("br"),r("Development with AI")]),e("div",{class:"title-sub"},[e("div",{class:"title-sub-text"},[r(" Building Reliable Applications"),e("br"),r("Using "),e("strong",null,"Claude Code")])])],-1)),t[2]||(t[2]=e("div",{class:"ghost-code"},[e("pre",null,`Spec: {
  id: "phase-1",
  status: "draft",
  features: [
    "upload",
    "style-transform"
  ]
}
function build(spec) {
  return spec.plan()
    .then(execute)
    .then(review)
}
// Spec-driven workflow
const outcome = await spec
  .validate()
  .implement();`)],-1)),t[3]||(t[3]=e("div",{class:"bottom-red-bar"},null,-1))]),_:1},16))}};export{N as default};
