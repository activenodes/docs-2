"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),h=o,f=s["".concat(c,".").concat(h)]||s[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Deciding which node to run"},a="Deciding which node to run",d={unversionedId:"nodes/decide-node",id:"nodes/decide-node",title:"Deciding which node to run",description:"Now that you have installed the basic dependencies,",source:"@site/docs/nodes/decide-node.md",sourceDirName:"nodes",slug:"/nodes/decide-node",permalink:"/pr-preview/pr-581/nodes/decide-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/decide-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deciding which node to run"},sidebar:"nodes",previous:{title:"Installing celestia-app",permalink:"/pr-preview/pr-581/nodes/celestia-app"},next:{title:"Types of nodes",permalink:"/pr-preview/pr-581/category/types-of-nodes"}},c={},l=[{value:"Beginner",id:"beginner",level:2},{value:"Advanced",id:"advanced",level:2}],p={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deciding-which-node-to-run"},"Deciding which node to run"),(0,o.kt)("p",null,"Now that you have installed the basic dependencies,\nyou can start exploring which nodes to run!"),(0,o.kt)("h2",{id:"beginner"},"Beginner"),(0,o.kt)("p",null,"It is highly recommended if you are a beginner to\nget started with running a Data-Availability Light Node."),(0,o.kt)("p",null,"In order to get started, you can proceed to the\nLight Node section ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-581/nodes/light-node"},"here"),"."),(0,o.kt)("p",null,"You can also play around with the Data Availability API\nin this tutorial for the Light Node ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-581/developers/node-tutorial"},"here"),"."),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"If you are looking to run a validator, please follow the tutorial\nfor running a validator ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-581/nodes/validator-node"},"here"),"."),(0,o.kt)("p",null,"Note that running a validator means you must also run a bridge node,\nwhich is covered ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-581/nodes/bridge-node"},"here"),"."))}u.isMDXComponent=!0}}]);