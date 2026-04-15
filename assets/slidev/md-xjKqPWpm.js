import{f as u,o as d,e as p,g as e,i as m,k as v,z as f,b,w as g,j as S,ac as r,v as x,x as _,C as l}from"../modules/vue-DgG068mQ.js";import{u as c,f as k}from"./context-Dq7L5cVr.js";import"../index-OzAGVSry.js";import"../modules/shiki-DMZ5NkrA.js";function i(t){return t.startsWith("/")?"/spec-driven-dev/"+t.slice(1):t}function w(t,o=!1){const n=t&&["#","rgb","hsl"].some(s=>t.indexOf(s)===0),a={background:n?t:void 0,color:t&&!n?"white":void 0,backgroundImage:n?void 0:t?o?`linear-gradient(#0005, #0008), url(${i(t)})`:`url("${i(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const C={class:"my-auto w-full"},I=u({__name:"cover",props:{background:{default:""}},setup(t){c();const o=t,n=f(()=>w(o.background,!0));return(a,s)=>(d(),p("div",{class:"slidev-layout cover",style:v(n.value)},[e("div",C,[m(a.$slots,"default")])],4))}}),N={__name:"slides.md__slidev_1",setup(t){const{$clicksContext:o,$frontmatter:n}=c();return o.setup(),(a,s)=>(d(),b(I,x(_(l(k)(l(n),0))),{default:g(()=>[S(" ─── SLIDE 1 — TITLE──────────────────────────────────────────── "),s[0]||(s[0]=e("div",{class:"orm-badge"},[e("div",{class:"brand"},[r("O'REILLY"),e("sup",null,"®")]),e("div",{class:"sub-brand"},"LIVE ONLINE TRAINING")],-1)),s[1]||(s[1]=e("div",{style:{position:"absolute",top:"50%",left:"1.5rem",transform:"translateY(-50%)","max-width":"68%"}},[e("div",{class:"master-badge"},[e("span",{class:"master-pill"},"MASTER CLASS"),e("span",{class:"master-hours"},"4 HOURS")]),e("div",{class:"title-main"},[r("Spec-Driven"),e("br"),r("Development with AI")]),e("div",{class:"title-sub"},[e("div",{class:"title-sub-text"},[r(" Building Reliable Applications"),e("br"),r("Using "),e("strong",null,"Claude Code")])])],-1)),s[2]||(s[2]=e("div",{class:"ghost-code"},[e("pre",null,`Spec: {
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
  .implement();`)],-1)),s[3]||(s[3]=e("div",{class:"bottom-red-bar"},null,-1))]),_:1},16))}};export{N as default};
