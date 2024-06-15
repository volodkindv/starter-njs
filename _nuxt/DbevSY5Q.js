import{b as P,a as B,c as S,u as A,o as T,ab as E,ac as U,L as I,ad as j,I as R,a4 as _,ae as O,af as V,S as h,ag as L,a2 as D,ah as F,x as H,H as z,a3 as M}from"./fCw9tLWR.js";async function k(a,n=P()){const{path:s,matched:f}=n.resolve(a);if(!f.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(s)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>k(a,n));n._routePreloaded.add(s);const r=f.map(i=>{var t;return(t=i.components)==null?void 0:t.default}).filter(i=>typeof i=="function");for(const i of r){const t=Promise.resolve(i()).catch(()=>{}).finally(()=>e.splice(e.indexOf(t)));e.push(t)}await Promise.all(e)}const $=(...a)=>a.find(n=>n!==void 0);function Q(a){const n=a.componentName||"NuxtLink";function s(e,r){if(!e||a.trailingSlash!=="append"&&a.trailingSlash!=="remove")return e;if(typeof e=="string")return q(e,a.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:q(i,a.trailingSlash)}}function f(e){const r=P(),i=H(),t=h(()=>{const p=e.to||e.href||"";return s(p,r.resolve)}),u=h(()=>typeof t.value=="string"&&L(t.value,{acceptRelative:!0})),g=h(()=>{var p;return typeof t.value=="object"?((p=r.resolve(t.value))==null?void 0:p.href)??null:t.value&&!e.external&&!u.value?s(D(i.app.baseURL,t.value),r.resolve):t.value}),v=_("RouterLink"),b=v&&typeof v!="string"?v.useLink:void 0,o=b==null?void 0:b({...e,to:t.value}),x=h(()=>e.target&&e.target!=="_self"),d=h(()=>e.external||x.value?!0:typeof t.value=="object"?!1:t.value===""||u.value);return{to:t,hasTarget:x,isAbsoluteUrl:u,isExternal:d,href:g,isActive:(o==null?void 0:o.isActive)??h(()=>t.value===r.currentRoute.value.path),isExactActive:(o==null?void 0:o.isExactActive)??h(()=>t.value===r.currentRoute.value.path),route:(o==null?void 0:o.route)??h(()=>r.resolve(t.value)),async navigate(){await F(g.value,{replace:e.replace,external:e.external})}}}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:f,setup(e,{slots:r}){const i=P(),{to:t,href:u,navigate:g,isExternal:v,hasTarget:b,isAbsoluteUrl:o}=f(e),x=S(!1),d=S(null),p=c=>{var m;d.value=e.custom?(m=c==null?void 0:c.$el)==null?void 0:m.nextElementSibling:c==null?void 0:c.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!G()){const m=A();let y,l=null;T(()=>{const w=W();E(()=>{y=U(()=>{var C;(C=d==null?void 0:d.value)!=null&&C.tagName&&(l=w.observe(d.value,async()=>{l==null||l(),l=null;const N=typeof t.value=="string"?t.value:i.resolve(t.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",N).catch(()=>{}),!v.value&&k(t.value,i).catch(()=>{})]),x.value=!0}))})})}),I(()=>{y&&j(y),l==null||l(),l=null})}return()=>{var y;if(!v.value){const l={ref:p,to:t.value,activeClass:e.activeClass||a.activeClass,exactActiveClass:e.exactActiveClass||a.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(l.class=e.prefetchedClass||a.prefetchedClass),l.rel=e.rel||void 0),R(_("RouterLink"),l,r.default)}const c=e.target||null,m=$(e.noRel?"":e.rel,a.externalRelAttribute,o.value||b.value?"noopener noreferrer":"")||null;return e.custom?r.default?r.default({href:u.value,navigate:g,get route(){if(!u.value)return;const l=new URL(u.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return O(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:m,target:c,isExternal:v.value,isActive:!1,isExactActive:!1}):null:R("a",{ref:d,href:u.value||null,rel:m,target:c},(y=r.default)==null?void 0:y.call(r))}}})}const K=Q(V);function q(a,n){const s=n==="append"?z:M;return L(a)&&!a.startsWith("http")?a:s(a,!0)}function W(){const a=A();if(a._observer)return a._observer;let n=null;const s=new Map,f=(r,i)=>(n||(n=new IntersectionObserver(t=>{for(const u of t){const g=s.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&g&&g()}})),s.set(r,i),n.observe(r),()=>{s.delete(r),n.unobserve(r),s.size===0&&(n.disconnect(),n=null)});return a._observer={observe:f}}function G(){const a=navigator.connection;return!!(a&&(a.saveData||/2g/.test(a.effectiveType)))}export{K as _};
