"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{2252:function(t,e,n){n.d(e,{ZP:function(){return C}});var r=n(2265);function l(t){let{width:e,height:n}=t;return e/n}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=10**e;return Math.round((t+Number.EPSILON)*n)/n}class i{greater(t,e){return 0>this.comparator(this.heap[t],this.heap[e])}swap(t,e){let n=this.heap[t];this.heap[t]=this.heap[e],this.heap[e]=n}swim(t){let e=t,n=Math.floor(e/2);for(;e>1&&this.greater(n,e);)this.swap(n,e),n=Math.floor((e=n)/2)}sink(t){let e=t,n=2*e;for(;n<=this.n&&(n<this.n&&this.greater(n,n+1)&&(n+=1),this.greater(e,n));)this.swap(e,n),n=2*(e=n)}push(t){this.n+=1,this.heap[this.n]=t,this.swim(this.n)}pop(){if(0===this.n)return;this.swap(1,this.n),this.n-=1;let t=this.heap.pop();return this.sink(1),t}size(){return this.n}constructor(t){this.comparator=t,this.heap=[],this.n=0}}function c(t,e,n,r){return(e-(t.length-1)*n-2*r*t.length)/t.reduce((t,e)=>t+l(e),0)}function u(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return[...e].filter(t=>!!t).join(" ")}function a(t,e,n){let{width:r,photosCount:l}=e,{spacing:i,padding:c,containerWidth:u}=n,a=i*(l-1)+2*c*l;return"calc((".concat(t," - ").concat(a,"px) / ").concat(o((u-a)/r,5),")")}function s(t,e,n){var r,l;return a(null!=(l=null==(r=t.match(/^\s*calc\((.*)\)\s*$/))?void 0:r[1])?l:t,e,n)}function h(t){var e,n;let{photo:l,layout:o,layoutOptions:i,imageProps:{style:c,className:h,...p}={},renderPhoto:d}=t,{onClick:f}=i,m={display:"block",boxSizing:"content-box",width:"rows"!==i.layout?"calc(100% - ".concat(2*i.padding,"px)"):a("100%",o,i),height:"auto",aspectRatio:"".concat(l.width," / ").concat(l.height),...i.padding?{padding:"".concat(i.padding,"px")}:null,...("columns"===i.layout||"masonry"===i.layout)&&o.photoIndex<o.photosCount-1?{marginBottom:"".concat(i.spacing,"px")}:null,...f?{cursor:"pointer"}:null,...c},g=f?t=>{f({event:t,photo:l,index:o.index})}:void 0,w={src:l.src,alt:null!=(e=l.alt)?e:"",title:l.title,onClick:g,style:m,className:u("react-photo-album--photo",h),loading:"lazy",decoding:"async",...function(t,e,n){let r,l;let o=t.srcSet||t.images;return o&&o.length>0&&(r=o.concat(o.find(e=>{let{width:n}=e;return n===t.width})?[]:[{src:t.src,width:t.width,height:t.height}]).sort((t,e)=>t.width-e.width).map(t=>"".concat(t.src," ").concat(t.width,"w")).join(", ")),n.sizes?l=(n.sizes.sizes||[]).map(t=>{let{viewport:r,size:l}=t;return"".concat(r," ").concat(s(l,e,n))}).concat(s(n.sizes.size,e,n)).join(", "):r&&(l="".concat(Math.ceil(e.width/n.containerWidth*100),"vw")),{srcSet:r,sizes:l}}(l,o,i),...p},y=t=>{let{src:e,alt:n,srcSet:l,sizes:o,style:i,...c}=w;return r.createElement("img",{alt:n,...l?{srcSet:l,sizes:o}:null,src:e,style:(null==t?void 0:t.wrapped)?{display:"block",width:"100%",height:"100%"}:i,...c})},v=(t=>{let{display:e,boxSizing:n,width:r,aspectRatio:l,padding:o,marginBottom:i,cursor:c}=t;return{display:e,boxSizing:n,width:r,aspectRatio:l,padding:o,marginBottom:i,cursor:c}})(m);return r.createElement(r.Fragment,null,null!=(n=null==d?void 0:d({photo:l,layout:o,layoutOptions:i,imageProps:w,renderDefaultPhoto:y,wrapperStyle:v}))?n:y())}function p(t){let{layoutOptions:e,rowIndex:n,rowsCount:l,renderRowContainer:o,rowContainerProps:{style:i,className:c,...a}={},children:s}=t,h={className:u("react-photo-album--row",c),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...n<l-1?{marginBottom:"".concat(e.spacing,"px")}:null,...i},...a};return r.createElement(r.Fragment,null,(null!=o?o:function(t){let{rowContainerProps:e,children:n}=t;return r.createElement("div",{...e},n)})({layoutOptions:e,rowIndex:n,rowsCount:l,rowContainerProps:h,children:s}))}function d(t){let{photos:e,layoutOptions:n,renderPhoto:u,renderRowContainer:a,componentsProps:{imageProps:s,rowContainerProps:d}}=t,f=function(t){let{photos:e,layoutOptions:n}=t,{spacing:r,padding:u,containerWidth:a,targetRowHeight:s,rowConstraints:h}=n,p=function(t){let{photos:e,targetRowHeight:n,containerWidth:r}=t;return o(r/n/e.reduce((t,e)=>Math.min(l(e),t),Number.MAX_VALUE))+2}({photos:e,containerWidth:a,targetRowHeight:s}),d=function(t,e,n){let r=function(t,e,n){var r;let l=new Map,o=new Set,c=new Map;c.set(0,0);let u=new i((r=t=>t.weight,(t,e)=>r(e)-r(t)));for(u.push({id:0,weight:0});u.size()>0;){let{id:e,weight:n}=u.pop();if(!o.has(e)){let r=t(e);o.add(e),r.forEach((t,r)=>{let o=n+t,i=l.get(r),a=c.get(r);(void 0===a||a>o&&(a/o>1.005||void 0!==i&&i<e))&&(c.set(r,o),u.push({id:r,weight:o}),l.set(r,e))})}}return c.has(n)?l:void 0}(t,0,n);return r?function(t,e){let n=[];for(let r=e;void 0!==r;r=t.get(r))n.push(r);return n.reverse()}(r,n):void 0}(function(t){let{photos:e,layoutOptions:n,targetRowHeight:r,limitNodeSearch:l,rowConstraints:o}=t;return t=>{var i,u;let{containerWidth:a,spacing:s,padding:h}=n,p=new Map;p.set(t,0);let d=null!=(i=null==o?void 0:o.minPhotos)?i:1,f=Math.min(l,null!=(u=null==o?void 0:o.maxPhotos)?u:1/0);for(let n=t+d;n<e.length+1&&!(n-t>f);n+=1){let l=function(t,e,n,r,l,o,i){let u=t.slice(e,n),a=c(u,r,o,i);return a>0?(a-l)**2*u.length:void 0}(e,t,n,a,r,s,h);if(void 0===l)break;p.set(n,l)}return p}}({photos:e,layoutOptions:n,targetRowHeight:s,limitNodeSearch:p,rowConstraints:h}),0,e.length);if(void 0===d)return;let f=[];for(let t=1;t<d.length;t+=1){let n=e.map((t,e)=>({photo:t,index:e})).slice(d[t-1],d[t]),o=c(n.map(t=>{let{photo:e}=t;return e}),a,r,u);f.push(n.map((t,e)=>{let{photo:r,index:i}=t;return{photo:r,layout:{height:o,width:o*l(r),index:i,photoIndex:e,photosCount:n.length}}}))}return f}({photos:e,layoutOptions:n});return f?r.createElement(r.Fragment,null,f.map((t,e)=>r.createElement(p,{key:"row-".concat(e),layoutOptions:n,rowIndex:e,rowsCount:f.length,renderRowContainer:a,rowContainerProps:d},t.map(t=>{let{photo:e,layout:l}=t;return r.createElement(h,{key:e.key||e.src,photo:e,layout:l,layoutOptions:n,renderPhoto:u,imageProps:s})})))):null}function f(t){let{path:e,photos:n,containerWidth:r,columnsGaps:o,columnsRatios:i,spacing:c,padding:u}=t,a=[],s=i.reduce((t,e)=>t+e,0);for(let t=0;t<e.length-1;t+=1){let h=n.map((t,e)=>({photo:t,index:e})).slice(e[t],e[t+1]),p=i.reduce((e,n,r)=>e+(o[t]-o[r])*n,0),d=(r-(e.length-2)*c-2*(e.length-1)*u-p)*i[t]/s;a.push(h.map((t,e)=>{let{photo:n,index:r}=t;return{photo:n,layout:{width:d,height:d/l(n),index:r,photoIndex:e,photosCount:h.length}}}))}return a}function m(t){let{layoutOptions:e,renderColumnContainer:n,children:l,columnContainerProps:{style:i,className:c,...a}={},...s}=t,h={className:u("react-photo-album--column",c),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:function(t){let{layoutOptions:e,columnIndex:n,columnsCount:r,columnsGaps:l,columnsRatios:i}=t,{layout:c,spacing:u,padding:a}=e;if("masonry"===c||!l||!i)return"calc((100% - ".concat(u*(r-1),"px) / ").concat(r,")");let s=i.reduce((t,e)=>t+e,0),h=i.reduce((t,e,r)=>t+(l[n]-l[r])*e,0);return"calc((100% - ".concat(o((r-1)*u+2*r*a+h,3),"px) * ").concat(o(i[n]/s,5)," + ").concat(2*a,"px)")}(t),justifyContent:"columns"===e.layout?"space-between":"flex-start",...i},...a};return r.createElement(r.Fragment,null,(null!=n?n:function(t){let{columnContainerProps:e,children:n}=t;return r.createElement("div",{...e},n)})({layoutOptions:e,columnContainerProps:h,children:l,...s}))}function g(t){let{photos:e,layoutOptions:n,renderPhoto:o,renderColumnContainer:i,componentsProps:{imageProps:c,columnContainerProps:u}}=t,a=function(t){let{photos:e,layoutOptions:n}=t;return function t(e){let{photos:n,layoutOptions:r}=e,{columns:o,spacing:i,padding:c,containerWidth:u}=r,{columnsGaps:a,columnsRatios:s,columnsModel:h}=function(t){var e;let{photos:n,layoutOptions:r,targetColumnWidth:o}=t,{columns:i,spacing:c,padding:u,containerWidth:a}=r,s=[],h=[];if(n.length<=i){let t=n.length>0?n.reduce((t,e)=>t+l(e),0)/n.length:1;for(let e=0;e<i;e+=1)s[e]=2*u,h[e]=e<n.length?l(n[e]):t;let e=f({path:Array.from({length:i+1}).map((t,e)=>Math.min(e,n.length)),photos:n,columnsRatios:h,columnsGaps:s,containerWidth:a,spacing:c,padding:u});return{columnsGaps:s,columnsRatios:h,columnsModel:e}}let p=(n.reduce((t,e)=>t+o/l(e),0)+c*(n.length-i)+2*u*n.length)/i,d=function(t,e,n){let r=[n];for(let l=n,o=e;o>0;o-=1)r.push(l=t.get(l)[o].node);return r.reverse()}(function(t,e,n,r){let l=new Map,o=new Set;o.add(0);for(let n=0;n<e;n+=1){let i=[...o.keys()];o.clear(),i.forEach(i=>{let c=n>0?l.get(i)[n].weight:0;t(i).forEach(t=>{let{neighbor:u,weight:a}=t,s=l.get(u);s||(s=[],l.set(u,s));let h=c+a,p=s[n+1];(!p||p.weight>h&&(p.weight/h>1.0001||i<p.node))&&(s[n+1]={node:i,weight:h}),n<e-1&&u!==r&&o.add(u)})})}return l}(function(t){let{photos:e,spacing:n,padding:r,targetColumnWidth:o,targetColumnHeight:i}=t;return t=>{let c=[],u=1.5*i,a=o/l(e[t])+2*r;for(let s=t+1;s<e.length+1&&(c.push({neighbor:s,weight:(i-a)**2}),!(a>u)&&s!==e.length);s+=1)a+=o/l(e[s])+n+2*r;return c}}({photos:n,targetColumnWidth:o,targetColumnHeight:p,spacing:c,padding:u}),i,0,e=n.length),i,e);for(let t=0;t<d.length-1;t+=1){let e=n.slice(d[t],d[t+1]);s[t]=c*(e.length-1)+2*u*e.length,h[t]=1/e.reduce((t,e)=>t+1/l(e),0)}let m=f({path:d,photos:n,columnsRatios:h,columnsGaps:s,containerWidth:a,spacing:c,padding:u});return{columnsGaps:s,columnsRatios:h,columnsModel:m}}({photos:n,layoutOptions:r,targetColumnWidth:(u-i*(o-1)-2*c*o)/o});return h.findIndex(t=>t.findIndex(t=>{let{layout:{width:e,height:n}}=t;return e<0||n<0})>=0)>=0?o>1?t({photos:n,layoutOptions:{...r,columns:o-1}}):void 0:{columnsModel:h,columnsGaps:a,columnsRatios:s}}({photos:e,layoutOptions:n})}({photos:e,layoutOptions:n});if(!a)return null;let{columnsModel:s,columnsRatios:p,columnsGaps:d}=a;return r.createElement(r.Fragment,null,s.map((t,e)=>r.createElement(m,{key:"column-".concat(e),layoutOptions:n,columnIndex:e,columnsCount:s.length,columnsGaps:d,columnsRatios:p,renderColumnContainer:i,columnContainerProps:u},t.map(t=>{let{photo:e,layout:l}=t;return r.createElement(h,{key:e.key||e.src,photo:e,layout:l,layoutOptions:n,renderPhoto:o,imageProps:c})}))))}function w(t){let{photos:e,layoutOptions:n,renderPhoto:o,renderColumnContainer:i,componentsProps:{imageProps:c,columnContainerProps:u}}=t,a=function t(e){let{photos:n,layoutOptions:r}=e,{columns:o,spacing:i,padding:c,containerWidth:u}=r,a=(u-i*(o-1)-2*c*o)/o;if(a<=0)return o>1?t({...e,layoutOptions:{...r,columns:o-1}}):void 0;let s=[];for(let t=0;t<o;t+=1)s[t]=0;return n.reduce((t,e,n)=>{let r=s.reduce((t,e,n)=>e<s[t]-1?n:t,0);return s[r]=s[r]+a/l(e)+i+2*c,t[r].push({photo:e,index:n}),t},Array.from({length:o}).map(()=>[])).map(t=>t.map((e,n)=>{let{photo:r,index:o}=e;return{photo:r,layout:{width:a,height:a/l(r),index:o,photoIndex:n,photosCount:t.length}}}))}({photos:e,layoutOptions:n});return a?r.createElement(r.Fragment,null,a.map((t,e)=>r.createElement(m,{key:"masonry-column-".concat(e),layoutOptions:n,columnsCount:a.length,columnIndex:e,renderColumnContainer:i,columnContainerProps:u},t.map(t=>{let{photo:e,layout:l}=t;return r.createElement(h,{key:e.key||e.src,photo:e,layout:l,layoutOptions:n,renderPhoto:o,imageProps:c})})))):null}function y(t){let{layout:e,renderContainer:n,children:l,containerRef:o,containerProps:{style:i,className:c,...a}={}}=t,s={className:u("react-photo-album","react-photo-album--".concat(e),c),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:"rows"===e?"column":"row",...i},...a};return r.createElement(r.Fragment,null,(null!=n?n:function(t){let{containerProps:e,children:n,containerRef:l}=t;return r.createElement("div",{ref:l,...e},n)})({containerProps:s,containerRef:o,layout:e,children:l}))}function v(t,e){let{newContainerWidth:n,newScrollbarWidth:r}=e,{containerWidth:l,scrollbarWidth:o}=t;return void 0!==l&&void 0!==o&&void 0!==n&&void 0!==r&&n>l&&n-l<=20&&r<o?{containerWidth:l,scrollbarWidth:r}:l!==n||o!==r?{containerWidth:n,scrollbarWidth:r}:t}let x=Object.freeze([1200,600,300,0]);function E(t,e){return"function"==typeof t?t(e):t}function b(t,e){return void 0!==t?E(t,e):void 0}function k(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=b(t,e);return Math.round(Math.max(void 0===l?function(t,e){let n=x.findIndex(t=>t<=e);return E(t[n>=0?n:0],e)}(n,e):l,r))}function C(t){let{photos:e,layout:n,renderContainer:l,defaultContainerWidth:o,breakpoints:i}=t,{containerRef:c,containerWidth:u}=function(t,e){let[{containerWidth:n},l]=r.useReducer(v,{containerWidth:e}),o=r.useRef(null),i=r.useRef();return{containerRef:r.useCallback(e=>{var n;null==(n=i.current)||n.disconnect(),i.current=void 0,o.current=e;let r=()=>l({newContainerWidth:function(t,e){let n=null==t?void 0:t.clientWidth;if(void 0!==n&&e&&e.length>0){let t=[...e.filter(t=>t>0)].sort((t,e)=>e-t);t.push(Math.floor(t[t.length-1]/2));let r=n;n=t.find((e,n)=>e<=r||n===t.length-1)}return n}(o.current,t),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});r(),e&&"undefined"!=typeof ResizeObserver&&(i.current=new ResizeObserver(r),i.current.observe(e))},[t]),containerWidth:n}}(function(t){let e=r.useRef(t);return t&&e.current&&t.join()===e.current.join()||(e.current=t),e.current}(i),o);if(!n||!["rows","columns","masonry"].includes(n)||!Array.isArray(e))return null;let a=u?function(t){let{layout:e,onClick:n,containerWidth:r,targetRowHeight:l,rowConstraints:o,columns:i,spacing:c,padding:u,sizes:a}=t;return{layout:e,onClick:n,containerWidth:r,columns:k(i,r,[5,4,3,2],1),spacing:k(c,r,[20,15,10,5]),padding:k(u,r,[0,0,0,0,0]),targetRowHeight:k(l,r,[t=>t/5,t=>t/4,t=>t/3,t=>t/2]),rowConstraints:b(o,r),sizes:a}}({containerWidth:u,...t}):void 0,s=function(t,e,n){let{photos:r,componentsProps:l}=t,o=E(l,e)||{};if(n){let{layout:t,spacing:e,padding:l,rowConstraints:i}=n;if("rows"===t){let{singleRowMaxHeight:t}=i||{};if(t){let n=Math.floor(r.reduce((e,n)=>{let{width:r,height:o}=n;return e+r/o*t-2*l},l*r.length*2+e*(r.length-1)));n>0&&(o.containerProps=o.containerProps||{},o.containerProps.style={maxWidth:n,...o.containerProps.style})}}}return o}(t,u,a);return r.createElement(y,{layout:n,containerRef:c,renderContainer:l,containerProps:s.containerProps},a&&function(t,e,n){let{photos:l,layout:o,renderPhoto:i,renderRowContainer:c,renderColumnContainer:u}=t,a={photos:l,renderPhoto:i,componentsProps:e};return"rows"===o?r.createElement(d,{layoutOptions:n,renderRowContainer:c,...a}):"columns"===o?r.createElement(g,{layoutOptions:n,renderColumnContainer:u,...a}):r.createElement(w,{layoutOptions:n,renderColumnContainer:u,...a})}(t,s,a))}}}]);