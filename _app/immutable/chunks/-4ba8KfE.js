import{S as x,L as Z,M as $,N as P,O as C,g as c,U as _,P as b,Q as D,J as G,R as K,T as V,V as z,W as J,X as Q,f as U,Y as W,Z as X,_ as F,b as Y,$ as H,a0 as k,l as p,a1 as ee,a2 as re,a3 as ne,a4 as te}from"./D4Z0EtDZ.js";function h(r,d=null,S){if(typeof r!="object"||r===null||x in r)return r;const I=V(r);if(I!==Z&&I!==$)return r;var f=new Map,g=z(r),y=P(0);g&&f.set("length",P(r.length));var m;return new Proxy(r,{defineProperty(a,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&K();var i=f.get(e);return i===void 0?(i=P(n.value),f.set(e,i)):b(i,h(n.value,m)),!0},deleteProperty(a,e){var n=f.get(e);if(n===void 0)e in a&&f.set(e,P(_));else{if(g&&typeof e=="string"){var i=f.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&b(i,t)}b(n,_),j(y)}return!0},get(a,e,n){var l;if(e===x)return r;var i=f.get(e),t=e in a;if(i===void 0&&(!t||(l=D(a,e))!=null&&l.writable)&&(i=P(h(t?a[e]:_,m)),f.set(e,i)),i!==void 0){var u=c(i);return u===_?void 0:u}return Reflect.get(a,e,n)},getOwnPropertyDescriptor(a,e){var n=Reflect.getOwnPropertyDescriptor(a,e);if(n&&"value"in n){var i=f.get(e);i&&(n.value=c(i))}else if(n===void 0){var t=f.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==_)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(a,e){var u;if(e===x)return!0;var n=f.get(e),i=n!==void 0&&n.v!==_||Reflect.has(a,e);if(n!==void 0||G!==null&&(!i||(u=D(a,e))!=null&&u.writable)){n===void 0&&(n=P(i?h(a[e],m):_),f.set(e,n));var t=c(n);if(t===_)return!1}return i},set(a,e,n,i){var w;var t=f.get(e),u=e in a;if(g&&e==="length")for(var l=n;l<t.v;l+=1){var R=f.get(l+"");R!==void 0?b(R,_):l in a&&(R=P(_),f.set(l+"",R))}t===void 0?(!u||(w=D(a,e))!=null&&w.writable)&&(t=P(void 0),b(t,h(n,m)),f.set(e,t)):(u=t.v!==_,b(t,h(n,m)));var v=Reflect.getOwnPropertyDescriptor(a,e);if(v!=null&&v.set&&v.set.call(i,n),!u){if(g&&typeof e=="string"){var E=f.get("length"),N=Number(e);Number.isInteger(N)&&N>=E.v&&b(E,N+1)}j(y)}return!0},ownKeys(a){c(y);var e=Reflect.ownKeys(a).filter(t=>{var u=f.get(t);return u===void 0||u.v!==_});for(var[n,i]of f)i.v!==_&&!(n in a)&&e.push(n);return e},setPrototypeOf(){C()}})}function j(r,d=1){b(r,r.v+d)}function q(r){return r!==null&&typeof r=="object"&&x in r?r[x]:r}function fe(r,d){return Object.is(q(r),q(d))}let A=!1;function ie(r){var d=A;try{return A=!1,[r(),A]}finally{A=d}}function B(r){var d;return((d=r.ctx)==null?void 0:d.d)??!1}function ue(r,d,S,I){var M;var f=(S&re)!==0,g=!p||(S&ee)!==0,y=(S&H)!==0,m=(S&te)!==0,a=!1,e;y?[e,a]=ie(()=>r[d]):e=r[d];var n=x in r||k in r,i=y&&(((M=D(r,d))==null?void 0:M.set)??(n&&d in r&&(s=>r[d]=s)))||void 0,t=I,u=!0,l=!1,R=()=>(l=!0,u&&(u=!1,m?t=Y(I):t=I),t);e===void 0&&I!==void 0&&(i&&g&&J(),e=R(),i&&i(e));var v;if(g)v=()=>{var s=r[d];return s===void 0?R():(u=!0,l=!1,s)};else{var E=(f?U:W)(()=>r[d]);E.f|=Q,v=()=>{var s=c(E);return s!==void 0&&(t=void 0),s===void 0?t:s}}if((S&X)===0)return v;if(i){var N=r.$$legacy;return function(s,O){return arguments.length>0?((!g||!O||N||a)&&i(O?v():s),s):v()}}var w=!1,L=ne(e),o=U(()=>{var s=v(),O=c(L);return w?(w=!1,O):L.v=s});return y&&c(o),f||(o.equals=F),function(s,O){if(arguments.length>0){const T=O?c(o):g&&y?h(s):s;if(!o.equals(T)){if(w=!0,b(L,T),l&&t!==void 0&&(t=T),B(o))return s;Y(()=>c(o))}return s}return B(o)?o.v:c(o)}}export{h as a,fe as i,ue as p};
