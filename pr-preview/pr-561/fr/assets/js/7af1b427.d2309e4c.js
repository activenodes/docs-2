"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},l="Deploy A Light Node",a={unversionedId:"nodes/itn-deploy-light",id:"nodes/itn-deploy-light",title:"Deploy A Light Node",description:"Description",source:"@site/docs/nodes/itn-deploy-light.md",sourceDirName:"nodes",slug:"/nodes/itn-deploy-light",permalink:"/pr-preview/pr-561/fr/nodes/itn-deploy-light",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-deploy-light.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-light-node"},"Deploy A Light Node"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Deploy a Celestia Light Node and Perform Data Availability\nSampling (DAS)."),(0,o.kt)("p",null,"You can find resources on doing this by following the\ntutorial ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/light-node"},"here"),"."),(0,o.kt)("p",null,"For an RPC endpoint to connect to, please see the list ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/blockspace-race/#rpc-endpoints"},"here"),"."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup Your Celestia Light Node"),(0,o.kt)("li",{parentName:"ol"},"Perform Data Availability Sampling (DAS)."),(0,o.kt)("li",{parentName:"ol"},"How to find your light node id is found ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/developers/node-api/#post-p2pinfo"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Make sure that the wallet address the node uses is funded."),(0,o.kt)("li",{parentName:"ol"},"The keys directory under ",(0,o.kt)("inlineCode",{parentName:"li"},".celestia-light-blockspacerace-0/keys")," contains your ",(0,o.kt)("inlineCode",{parentName:"li"},"pubkey")," for both DA and Tendermint networks. In the leaderboard your pubkey for DA nodes looks similar to this '12D3KooWSJoAF9pF7AkyEAhQCtNF9TA8JrAujWdqoPJ11uojuKZb'\nPlease do a backup of the keys directory in order to not lose your progress.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points for submitting node id and wallet address."),(0,o.kt)("li",{parentName:"ol"},"No points for not submitting both.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Please submit your Light Node ID and your wallet address."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"celestia1vsvx8n7f8dh5udesqqhgrjutyun7zqrgehdq2l")))}u.isMDXComponent=!0}}]);