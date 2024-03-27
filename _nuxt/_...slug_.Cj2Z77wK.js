import{_ as N,m as At,b as K,d as x,u as It,t as St,e as Jt,f as A,g as $t,h as W,a as r,c as g,r as D,i as F,j as m,k as et,l,n as b,w as h,p as st,q as j,s as Rt,v as ot,x as o,F as z,y as Q,z as p,A as w,B as te,C as nt,D as ee,E as Tt,G as ae,H as se,I as oe,J as ut,o as Ot,K as pt,L as Y,M as ne,N as X,O as H,P as Lt,Q as le,U as Dt,R as Ut,S as V,T as ie,V as re,W as ce,X as de,Y as ue,Z as pe,$ as _t,a0 as _e,a1 as ge}from"./entry.CyUdpldo.js";import he from"./ContentRenderer.CDUsBU2r.js";import fe from"./DocToc.CdCEh0J6.js";import{u as me}from"./useCopyToClipboard.Cf8cl_ih.js";import{f as be,u as ye}from"./useClap.CbjfJBr4.js";import"./ContentRendererMarkdown.vue.BVVB2OM5.js";import"./index.BsYmvPZw.js";import"./preview.vZAl6dLl.js";import"./DocTocLinks.B7JkGRqa.js";import"./DocTocMarker.c1c4D9VP.js";import"./query.BXpgnUO9.js";const ve={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},xe={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},I=At(K.ui.strategy,K.ui.badge,ve),Ce=x({inheritAttrs:!1,props:{size:{type:String,default:()=>I.default.size,validator(t){return Object.keys(I.size).includes(t)}},color:{type:String,default:()=>I.default.color,validator(t){return[...K.ui.colors,...Object.keys(I.color)].includes(t)}},variant:{type:String,default:()=>I.default.variant,validator(t){return[...Object.keys(I.variant),...Object.values(I.color).flatMap(e=>Object.keys(e))].includes(t)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:a}=It("badge",St(t,"ui"),I),{size:s,rounded:n}=Jt({ui:e,props:t}),c=A(()=>{var i,u;const d=((u=(i=e.value.color)==null?void 0:i[t.color])==null?void 0:u[t.variant])||e.value.variant[t.variant];return $t(W(e.value.base,e.value.font,n.value,e.value.size[s.value],d==null?void 0:d.replaceAll("{color}",t.color)),t.class)});return{attrs:a,badgeClass:c}}});function ke(t,e,a,s,n,c){return r(),g("span",et({class:t.badgeClass},t.attrs),[D(t.$slots,"default",{},()=>[F(m(t.label),1)])],16)}const we=N(Ce,[["render",ke]]),Ee=x({__name:"SeriesLink",props:{to:{},index:{},title:{},isAnchor:{type:Boolean}},setup(t){const{to:e,isAnchor:a,title:s,index:n}=t;return(c,d)=>{const i=st;return a?(r(),g("a",{key:0,href:e,class:"text-sm md:text-base !leading-7 group inline-flex dark:text-slate-400"},[l("span",{class:"mr-3 border border-slate-200/60 dark:border-slate-600/80 bg-gradient-to-tl from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-600 rounded-full rounded-tl-none h-7 w-7 flex items-center justify-center"},m(n)),l("span",{class:"truncate flex-1 group-hover:underline decoration-dotted underline-offset-2"},m(s))])):(r(),b(i,{key:1,to:e,class:"text-sm md:text-base !leading-7 group inline-flex dark:text-slate-400","active-class":"!text-primary font-semibold"},{default:h(()=>[l("span",{class:"mr-3 border border-slate-200/60 dark:border-slate-600/80 bg-gradient-to-tl from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-600 rounded-full rounded-tl-none h-7 w-7 flex items-center justify-center"},m(n)),l("span",{class:"truncate flex-1 group-hover:underline decoration-dotted underline-offset-2"},m(s))]),_:1}))}}}),Ae={class:"mb-5 md:mb-6"},Ie={class:"p-6 bg-slate-50 dark:bg-slate-800 relative rounded-2xl"},Se={class:"text-lg md:text-2xl mb-6 font-bold text-slate-600 dark:text-slate-300 pr-4"},$e={class:"flex flex-col gap-y-1 md:gap-y-2"},Re={class:"absolute right-2.5 -top-1 drop-shadow-lg"},Te={class:"polygon"},Oe=x({__name:"SeriesList",props:{items:{},title:{}},setup(t){const e=t,a=j(!1),s=e.items.map(({title:u,_path:y},f)=>({_path:y,idx:f+1,title:u.slice(u.indexOf("] ")+1)})),n=Rt(),c=ot(),i=!!e.items.slice(2,-2).find(u=>n.path.includes(u._path));return(u,y)=>{const f=Ee,C=nt;return r(),g("section",Ae,[l("div",Ie,[l("div",Se,m(u.title),1),l("div",$e,[u.items.length>5&&!o(a)?(r(),g(z,{key:0},[(r(!0),g(z,null,Q(o(s).slice(0,2),_=>(r(),b(f,{key:_.title,to:o(c)(_._path),index:_.idx,title:_.title},null,8,["to","index","title"]))),128)),p(f,{"is-anchor":"",to:"#",index:"...",title:`${u.items.length-4} ${u.$t("page.blog.series.moreParts")}`,class:w({"!text-primary font-bold":i}),onClick:y[0]||(y[0]=te(_=>a.value=!0,["prevent"]))},null,8,["title","class"]),(r(!0),g(z,null,Q(o(s).slice(-2),_=>(r(),b(f,{key:_.title,to:o(c)(_._path),index:_.idx,title:_.title},null,8,["to","index","title"]))),128))],64)):(r(!0),g(z,{key:1},Q(o(s),_=>(r(),b(f,{key:_.title,to:o(c)(_._path),index:_.idx,title:_.title},null,8,["to","index","title"]))),128))]),l("div",Re,[l("div",Te,[p(C,{name:"mdi:star",size:"24"})])])])])}}}),Le={class:"heart-svg",viewBox:"0 0 58 57",xmlns:"http://www.w3.org/2000/svg"},De=ee('<g fill="none" fill-rule="evenodd" transform="translate(0)" data-v-529460f8><path class="heart" d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" fill="#AAB8C2" data-v-529460f8></path><circle class="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" data-v-529460f8></circle><g class="grp7" opacity="0" transform="translate(7 6)" data-v-529460f8><circle class="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" data-v-529460f8></circle><circle class="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" data-v-529460f8></circle></g><g class="grp6" opacity="0" transform="translate(0 28)" data-v-529460f8><circle class="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" data-v-529460f8></circle><circle class="oval2" fill="#91D2FA" cx="3" cy="2" r="2" data-v-529460f8></circle></g><g class="grp3" opacity="0" transform="translate(52 28)" data-v-529460f8><circle class="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" data-v-529460f8></circle><circle class="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" data-v-529460f8></circle></g><g class="grp2" opacity="0" transform="translate(44 6)" data-v-529460f8><circle class="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" data-v-529460f8></circle><circle class="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" data-v-529460f8></circle></g><g class="grp5" opacity="0" transform="translate(14 50)" data-v-529460f8><circle class="oval1" fill="#91D2FA" cx="6" cy="5" r="2" data-v-529460f8></circle><circle class="oval2" fill="#91D2FA" cx="2" cy="2" r="2" data-v-529460f8></circle></g><g class="grp4" opacity="0" transform="translate(35 50)" data-v-529460f8><circle class="oval1" fill="#F48EA7" cx="6" cy="5" r="2" data-v-529460f8></circle><circle class="oval2" fill="#F48EA7" cx="2" cy="2" r="2" data-v-529460f8></circle></g><g class="grp1" opacity="0" transform="translate(24)" data-v-529460f8><circle class="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" data-v-529460f8></circle><circle class="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" data-v-529460f8></circle></g></g>',1),Ue=[De],Ne=x({__name:"Heart",props:{size:{default:"md"}},setup(t){return(e,a)=>(r(),g("svg",Le,Ue))}}),Nt=N(Ne,[["__scopeId","data-v-529460f8"]]),Be={class:"bg-slate-50 dark:bg-transparent dark:border border-slate-700 w-16 p-2 rounded-full ml-auto flex flex-wrap justify-center"},Pe={class:"text-slate-500 dark:text-slate-400 text-sm mb-2"},ze=x({__name:"SideLikeNComment",props:{isLiked:{type:Boolean},postPath:{},clapCount:{}},emits:["update:isLiked"],setup(t,{emit:e}){const a=e;function s(){window.scrollTo({behavior:"smooth",top:document.documentElement.scrollHeight})}return(n,c)=>{const d=Nt,i=nt;return r(),g("div",Be,[l("button",{class:"flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-950 border dark:border-slate-700/65",onClick:c[0]||(c[0]=u=>a("update:isLiked",!0))},[l("span",{class:w(["w-8 h-8 relative",{active:n.isLiked}])},[p(d,{class:"w-11 h-11"})],2)]),l("span",Pe,m(n.clapCount),1),l("button",{class:"flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-950 border dark:border-slate-700/65",onClick:s},[p(i,{name:"i-heroicons-chat-bubble-oval-left-16-solid",class:"text-slate-400",size:"22"})])])}}});function je(t){const e=Tt().public.googleAdsense,a=ae(t,e),s=a.adClient??a.id,n=a.test?"on":null,c=Math.random(),d=se(),i=j(""),u=j(!1),y=A(()=>u.value?`page-${Math.random()}`:null),f=A(()=>{var k;return((k=d.value)==null?void 0:k.getAttribute("data-ad-status"))==="unfilled"}),C=gt("path"),_=gt("query"),$=A(()=>u.value?null:"");async function R(){u.value=!1,await pt(),E()}async function E(){var k;if(u.value=!0,await pt(),!((k=d.value)!=null&&k.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(T){console.error(T)}}return oe([C,_],(k,T)=>{const v=Me(k,T,a.includeQuery);d.value&&!d.value.isConnected||v&&R()}),ut(()=>{!d.value||!d.value.isConnected||(u.value?d.value.innerHTML="":d.value.innerHTML=" ")}),a.hideUnfilled&&ut(()=>f.value&&(i.value="hide-unfilled")),Ot(()=>E()),{adClass:i,dataAdClient:s,dataAdRegion:y,dataAdTest:n,dataAnalyticsDomainName:a.analyticsDomainName,dataAnalyticsUacct:a.analyticsUacct,isUnfilled:f,key:c,status:$,updateAd:R,showAd:E}}function gt(t){const e=Rt();return A(()=>e[t])}function Me(t,e,a){const[s,n]=t,[c,d]=e;if(s!==c)return!0;if(!a)return;const i=Object.keys(n),u=Object.keys(d);return i.length!==u.length||i.some(y=>n[y]!==d[y])}const Fe=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],Ve=x({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(t,{expose:e}){const{adClient:a,analyticsDomainName:s,analyticsUacct:n,hideUnfilled:c,includeQuery:d}=t,{adClass:i,dataAdClient:u,dataAdRegion:y,dataAdTest:f,dataAnalyticsDomainName:C,dataAnalyticsUacct:_,isUnfilled:$,key:R,status:E,updateAd:k,showAd:T}=je({adClient:a,analyticsDomainName:s,analyticsUacct:n,hideUnfilled:c,includeQuery:d});return e({isUnfilled:$,updateAd:k,showAd:T}),(v,O)=>(r(),g("ins",{ref:"ad",key:o(R),class:w(["adsbygoogle",o(i)]),style:Y(v.adStyle),"data-ad-client":o(u),"data-ad-slot":v.adSlot,"data-ad-format":v.adFormat,"data-ad-region":o(y),"data-ad-layout":v.adLayout,"data-ad-layout-key":v.adLayoutKey,"data-page-url":v.pageUrl,"data-analytics-uacct":o(_),"data-analytics-domain-name":o(C),"data-adtest":o(f),"data-adsbygoogle-status":o(E),"data-ad-full-width-responsive":v.adFullWidthResponsive},null,14,Fe))}}),Bt=N(Ve,[["__scopeId","data-v-c59cd125"]]),Ke=x({__name:"CopyUrl",setup(t){const{t:e}=ne(),{copy:a}=me({timeout:2e3}),s=()=>{const n=X().trailingSlash,c=window.location.origin+window.location.pathname+(n&&"/");a(c,{title:e("copy.link")})};return(n,c)=>{const d=H;return r(),b(d,{"aria-label":"copy url",variant:"plain",icon:"i-heroicons-link-16-solid",onClick:s})}}}),Ye=x({__name:"ShareX",props:{text:{},hashtags:{}},setup(t){const e=t,{text:a,hashtags:s}=Lt(e),n=()=>{const c=X().trailingSlash,d=window.location.origin+window.location.pathname+(c&&"/");let i=`https://twitter.com/share?url=${encodeURI(d)}&text=${a}`;s!=null&&s.length&&(i+=`&hashtags=${encodeURI(s.join(","))}`),window.open(i,"sharer","toolbar=0,status=0,width=626,height=436")};return(c,d)=>{const i=H;return r(),b(i,{"aria-label":"share on X",variant:"plain",icon:"i-fa6-brands-x-twitter",onClick:n})}}}),He=x({__name:"ShareFacebook",props:{text:{},hashtags:{}},setup(t){const e=t,{text:a,hashtags:s}=Lt(e),n=()=>{const c=X().trailingSlash,d=window.location.origin+window.location.pathname+(c&&"/");let i=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(d)}&quote=${a}`;s!=null&&s.length&&(i+=`&hashtag=${encodeURI(s.join(","))}`),window.open(i,"sharer","toolbar=0,status=0,width=626,height=436")};return(c,d)=>{const i=H;return r(),b(i,{"aria-label":"share on X",variant:"plain",icon:"i-fa6-brands-facebook",onClick:n})}}}),qe={class:"flex items-end gap-x-1.5"},Ge={class:"pr-1"},We={class:"p-1"},Qe=x({__name:"ShareNInteraction",props:{isLiked:{type:Boolean},postTitle:{},postPath:{},postTags:{},clapCount:{}},emits:["update:isLiked"],setup(t,{emit:e}){const a=e;function s(){window.scrollTo({behavior:"smooth",top:document.documentElement.scrollHeight})}return(n,c)=>{const d=Nt,i=H,u=Ke,y=Ye,f=He,C=le;return r(),g("div",qe,[p(i,{color:"slate",ui:{padding:{md:"px-1.5 py-0.5"}},size:"md","aria-label":"like button",onClick:c[0]||(c[0]=_=>a("update:isLiked",!0))},{leading:h(()=>[l("span",{class:w(["w-8 h-8 relative",{active:n.isLiked}])},[p(d,{class:"w-9 h-9"})],2)]),default:h(()=>[l("span",Ge,m(n.clapCount),1)]),_:1}),p(i,{color:"slate",icon:"i-heroicons-chat-bubble-oval-left-16-solid",size:"md","aria-label":"comment button",onClick:s}),p(C,null,{panel:h(()=>[l("div",We,[p(u,{class:"ml-auto"}),p(y,{text:n.postTitle+".",hashtags:n.postTags},null,8,["text","hashtags"]),p(f,{text:n.postTitle+".",hashtags:n.postTags},null,8,["text","hashtags"])])]),default:h(()=>[p(i,{color:"slate",icon:"i-heroicons-share-16-solid",size:"md","aria-label":"share button"})]),_:1})])}}}),G=At(K.ui.strategy,K.ui.divider,xe),Ze=x({components:{UIcon:Dt,UAvatar:Ut},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>G.default.size,validator(t){return Object.keys(G.border.size.horizontal).includes(t)||Object.keys(G.border.size.vertical).includes(t)}},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:a}=It("divider",St(t,"ui"),G),s=A(()=>$t(W(e.value.wrapper.base,e.value.wrapper[t.orientation]),t.class)),n=A(()=>W(e.value.container.base,e.value.container[t.orientation])),c=A(()=>W(e.value.border.base,e.value.border[t.orientation],e.value.border.size[t.orientation][t.size],e.value.border.type[t.type]));return{ui:e,attrs:a,wrapperClass:s,containerClass:n,borderClass:c}}});function Xe(t,e,a,s,n,c){const d=Dt,i=Ut;return r(),g("div",et({class:t.wrapperClass},t.attrs),[l("div",{class:w(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(r(),g(z,{key:0},[l("div",{class:w(t.containerClass)},[D(t.$slots,"default",{},()=>[t.label?(r(),g("span",{key:0,class:w(t.ui.label)},m(t.label),3)):t.icon?(r(),b(d,{key:1,name:t.icon,class:w(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(r(),b(i,et({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):V("",!0)])],2),l("div",{class:w(t.borderClass)},null,2)],64)):V("",!0)],16)}const Je=N(Ze,[["render",Xe]]),ta={class:"surround-link__icon"},ea={class:"surround-link__title"},aa={class:"surround-link__description"},sa=x({__name:"SurroundCard",props:{path:{},title:{},description:{},right:{type:Boolean}},setup(t){const e=ot();return(a,s)=>{const n=nt,c=st;return r(),b(c,{to:o(e)(a.path),class:w(["surround-link group",{right:a.right}])},{default:h(()=>[l("div",ta,[p(n,{name:a.right?"i-heroicons-arrow-right-16-solid":"heroicons:arrow-left-16-solid",dynamic:""},null,8,["name"])]),l("p",ea,m(a.title),1),l("p",aa,m(a.description),1)]),_:1},8,["to","class"])}}}),oa=N(sa,[["__scopeId","data-v-5a6a6f59"]]),na=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),la="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",ia=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],ra=["name","button","icon","url","logout","width","height"],ca=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],da={props:{shortname:String,pageConfig:{type:Object,validator:t=>Object.keys(t).every(e=>ia.includes(e))},ssoConfig:{type:Object,validator:t=>Object.keys(t).every(e=>ra.includes(e))},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:()=>({root:null,rootMargin:"300px",threshold:.5})}},data:()=>({observer:null,colorScheme:ie().value}),computed:{getShortname(){const t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(la);return t}},watch:{lang(){this.reset()}},mounted(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init(){if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();const t=this.setBaseConfig;window.disqus_config=function(){t(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",()=>this.reset())},reset(t=window.DISQUS){const e=this.setBaseConfig;t==null||t.reset({reload:!0,config:function(){e(this)}})},observerDisqus(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver(t){t.forEach(e=>{e.isIntersecting&&(this.observer.disconnect(),this.init())})},loadEmbedScript(){const t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src=`//${this.getShortname}.disqus.com/embed.js`,(t.head||t.body).appendChild(e)},setBaseConfig(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig(t){const e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus(t){ca.forEach(e=>{t.callbacks[e]=[a=>{this.$emit(na(e),a)}]})}}};function ua(t,e,a,s,n,c){return r(),g("div",{id:"disqus_thread",style:Y([{"min-height":"200px"},{"color-scheme":"none"}])})}const pa=N(da,[["render",ua]]),_a={},ga={class:"b-ads"};function ha(t,e){const a=Bt;return r(),g("div",ga,[p(a,{"ad-full-width-responsive":!0,"ad-format":"auto"})])}const fa=N(_a,[["render",ha],["__scopeId","data-v-8b0e34b5"]]),ma={class:"mx-auto max-w-2xl"},ba={class:"relative"},ya={class:"absolute inset-y-0 -left-[calc(64px+160px+32px)] w-40 hidden xl:block"},va={class:"sticky top-28"},xa={class:"md:text-lg space-y-5 lg:space-y-6 max-w-2xl mx-auto"},Ca=x({__name:"Page",setup(t){const e=re();return(a,s)=>{const n=fa;return r(),g("section",ma,[l("header",null,[D(a.$slots,"header")]),l("article",ba,[l("div",ya,[l("div",va,[D(a.$slots,"bodyLeft")])]),l("div",{class:"sticky top-[var(--header-extra-position,0)] 2xl:absolute 2xl:inset-y-0 2xl:-right-[calc(64px+320px+32px)] 2xl:w-80 2xl:block z-[9]",style:Y({"--header-extra-position":o(e)+"px"})},[D(a.$slots,"bodyRight")],4),l("div",xa,[p(n),D(a.$slots,"default"),p(n)])]),l("footer",null,[D(a.$slots,"footer")])])}}});var P={},ka={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},wa={};const Z=Object.create(null),M=t=>{var e;return P||ka||((e=globalThis.Deno)==null?void 0:e.env.toObject())||globalThis.__env__||(t?Z:globalThis)},S=new Proxy(Z,{get(t,e){return M()[e]??Z[e]},has(t,e){const a=M();return e in a||e in Z},set(t,e,a){const s=M(!0);return s[e]=a,!0},deleteProperty(t,e){if(!e)return!1;const a=M(!0);return delete a[e],!0},ownKeys(){const t=M(!0);return Object.keys(t)}}),at=typeof process<"u"&&wa&&"production"||"",Ea=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function Aa(){var t,e;if(P)for(const a of Ea){const s=a[1]||a[0];if(P[s])return{name:a[0].toLowerCase(),...a[2]}}return(P==null?void 0:P.SHELL)==="/bin/jsh"&&((e=(t=globalThis.process)==null?void 0:t.versions)!=null&&e.webcontainer)?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const Pt=Aa();Pt.name;function U(t){return t?t!=="false":!1}var ft;const Ia=((ft=globalThis.process)==null?void 0:ft.platform)||"",zt=U(S.CI)||Pt.ci!==!1;var mt,bt;const jt=U(((mt=globalThis.process)==null?void 0:mt.stdout)&&((bt=globalThis.process)==null?void 0:bt.stdout.isTTY));U(S.DEBUG);const Sa=at==="test"||U(S.TEST),$a=at==="dev"||at==="development";U(S.MINIMAL);const Ra=/^win/i.test(Ia);!U(S.NO_COLOR)&&(U(S.FORCE_COLOR)||(jt||Ra)&&S.TERM);var yt,vt;const J=(((vt=(yt=globalThis.process)==null?void 0:yt.versions)==null?void 0:vt.node)||"").replace(/^v/,"")||null;Number(J==null?void 0:J.split(".")[0]);const Ta=globalThis.process||Object.create(null),ht={versions:{}};new Proxy(Ta,{get(t,e){if(e==="env")return S;if(e in t)return t[e];if(e in ht)return ht[e]}});var xt,Ct;const Oa=((Ct=(xt=globalThis.process)==null?void 0:xt.release)==null?void 0:Ct.name)==="node";var kt,wt;const La=!!globalThis.Bun||!!((wt=(kt=globalThis.process)==null?void 0:kt.versions)!=null&&wt.bun),Da=!!globalThis.Deno,Ua=!!globalThis.fastly,Na=!!globalThis.Netlify,Ba=!!globalThis.EdgeRuntime;var Et;const Pa=((Et=globalThis.navigator)==null?void 0:Et.userAgent)==="Cloudflare-Workers",za=!!globalThis.__lagon__,ja=[[Na,"netlify"],[Ba,"edge-light"],[Pa,"workerd"],[Ua,"fastly"],[Da,"deno"],[La,"bun"],[Oa,"node"],[za,"lagon"]];function Ma(){const t=ja.find(e=>e[0]);if(t)return{name:t[1]}}const tt=Ma();tt!=null&&tt.name;const Fa={class:"mb-3 lg:mb-5 flex justify-center gap-x-1"},Va={class:"flex justify-center items-center text-slate-400/80 mb-8 lg:mb-16"},Ka=l("span",{class:"mx-1"},"·",-1),Ya={key:0},Ha={key:1},qa={class:"mb-8 lg:mb-16 lg:ml-[calc(50%-512px)] lg:w-[1024px]"},Ga=["src","alt"],Wa={class:"max-w-40 max-h-32 hidden 2xl:block"},Qa={class:"mt-12 bg-slate-50 dark:bg-slate-950/80 p-4 rounded-xl text-center space-y-1 space-x-2"},Za={class:"text-sm mb-2.5 dark:text-slate-300"},Xa={class:"grid gap-8 sm:grid-cols-2"},Ja={key:1,class:"hidden sm:block"},ts={key:0,id:"comment",class:"mt-12","aria-label":"comment"},ps=x({__name:"[...slug]",async setup(t){let e,a;const{post:s,surround:n,seriesItem:c}=([e,a]=ce(()=>be()),e=await e,a(),e),d=ot(),[i,u]=n.value,f=de()(s.value.cover,{width:1024,height:647,quality:100}),C=s.value._path,_=s.value.description,$=s.value.title,R=X().url+f;ue({title:$,meta:[{name:"description",content:_},{name:"twitter:title",content:$+" %separator %siteName"},{name:"twitter:description",content:_},{property:"og:image",content:R},{name:"twitter:image",content:R},{name:"twitter:image:alt",content:$}]});const E=j(!1),{getClap:k,updateClaps:T}=ye(),v=j(0);Ot(async()=>{v.value=await k(s.value._path)});const O=A({get(){return E.value},set(){E.value||(E.value=!0,v.value++,T(s.value._path))}}),lt=j(),{DISQUS:Mt}=Tt().public.KEY_STATE;pe(Mt,()=>lt);const{resolveViewTransitionNameStyle:it}=_e();return(B,q)=>{const Ft=we,Vt=st,Kt=Oe,Yt=ze,rt=Bt,Ht=he,qt=fe,Gt=Qe,ct=H,Wt=Je,dt=oa,Qt=pa,Zt=ge,Xt=Ca;return r(),b(Xt,null,{header:h(()=>[l("div",Fa,[(r(!0),g(z,null,Q(o(s).tags,L=>(r(),b(Vt,{key:L,to:o(d)(`/blog/tags/${L}/page/1`)},{default:h(()=>[p(Ft,{variant:"soft",size:"lg"},{default:h(()=>[F(" #"+m(L),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),l("h1",{class:"font-extrabold text-[28px] lg:text-[45px] leading-tight text-center text-slate-900 dark:text-slate-200 mb-5 lg:mb-[22.5px] break-words",style:Y([o(it)(o(C),"title")])},m(o(s).title),5),l("div",Va,[F(" Besfir "),Ka,o(s).updatedAt?(r(),g("span",Ya,m(B.$t("page.blog.slug.updatedAt",{date:B.$d(o(s).updatedAt,{key:"short"})})),1)):(r(),g("span",Ha,m(B.$t("page.blog.slug.createdAt",{date:B.$d(o(s).createdAt,{key:"short"})})),1))]),l("div",qa,[l("img",{style:Y([o(it)(o(C),"cover")]),class:"rounded-3xl w-full bg-slate-100 dark:bg-slate-950/50",height:"647",width:"1024",src:o(f),alt:o(s).title+" cover"},null,12,Ga)]),o(s).series?(r(),b(Kt,{key:0,title:o(s).series,items:o(c)},null,8,["title","items"])):V("",!0)]),bodyLeft:h(()=>[p(Yt,{"is-liked":o(O),"onUpdate:isLiked":q[0]||(q[0]=L=>_t(O)?O.value=L:null),"post-path":o(C),"clap-count":o(v)},null,8,["is-liked","post-path","clap-count"]),p(rt)]),bodyRight:h(()=>[p(qt,{links:o(s).body.toc.links},{bottom:h(()=>[l("div",Wa,[p(rt)])]),_:1},8,["links"])]),footer:h(()=>[p(Gt,{"is-liked":o(O),"onUpdate:isLiked":q[1]||(q[1]=L=>_t(O)?O.value=L:null),"post-title":o(s).title,"post-path":o(C),"post-tags":o(s).tags,"clap-count":o(v),class:"mt-12"},null,8,["is-liked","post-title","post-path","post-tags","clap-count"]),l("div",Qa,[l("div",Za,m(B.$t("page.blog.donation")),1),p(ct,{"leading-icon":"i-besfir-ko-fi",size:"lg",to:"https://ko-fi.com/besfir/?hidefeed=true&widget=true&embed=true",target:"_blank",ui:{padding:{lg:"px-3 py-0.5"},icon:{size:{lg:"w-8 h-8"}}},variant:"outline"},{default:h(()=>[F(" Ko-fi ")]),_:1}),p(ct,{"leading-icon":"i-besfir-toss",size:"lg",to:"https://toss.me/besfir",target:"_blank",ui:{padding:{lg:"px-3 py-0.5"},icon:{size:{lg:"w-8 h-8"}}},variant:"outline"},{default:h(()=>[F(" Toss ")]),_:1})]),p(Wt,{class:"my-12"}),l("div",Xa,[o(i)?(r(),b(dt,{key:0,title:o(i).title,path:o(i)._path,description:o(i).description},null,8,["title","path","description"])):(r(),g("span",Ja)),o(u)?(r(),b(dt,{key:2,title:o(u).title,path:o(u)._path,description:o(u).description,right:""},null,8,["title","path","description"])):V("",!0)]),o($a)?V("",!0):(r(),g("div",ts,[p(Zt,null,{default:h(()=>[p(Qt,{ref_key:"disqusEl",ref:lt,lang:B.$i18n.locale,"page-config":{identifier:o(C)},shortname:"besfir"},null,8,["lang","page-config"])]),_:1})]))]),default:h(()=>[p(Ht,{value:o(s),class:"prose max-w-none prose-primary dark:prose-invert lg:prose-lg"},null,8,["value"])]),_:1})}}});export{ps as default};
