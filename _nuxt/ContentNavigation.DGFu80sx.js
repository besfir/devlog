import{q as m,w as f,e as v,s as g,j as d,a as l,u as h}from"./query.D6e4Qjnj.js";import{E as _,ag as c,ah as y,d as C,a5 as w,f as P,Z as $,ac as N,af as r,p as j}from"./entry.vTdoUZMO.js";import{u as E}from"./preview.CTZZiCY5.js";const T=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=m(e));const a=e.params(),s=t.experimental.stripQueryParameters?f(`/navigation/${`${c(a)}.${t.integrity}`}/${v(a)}.json`):f(`/navigation/${c(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.CkqUcanQ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:E().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),O=D;export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.CkqUcanQ.js","./entry.vTdoUZMO.js","./entry.CeRIdo1R.css","./query.D6e4Qjnj.js","./preview.CTZZiCY5.js","./index.BsYmvPZw.js","./_commonjsHelpers.C4iS2aBk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
