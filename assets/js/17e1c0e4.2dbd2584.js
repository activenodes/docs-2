"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Celestia Node",c={unversionedId:"developers/celestia-node",id:"developers/celestia-node",title:"Celestia Node",description:"This tutorial goes over installing and building Celestia Node. This",source:"@site/docs/developers/celestia-node.md",sourceDirName:"developers",slug:"/developers/celestia-node",permalink:"/developers/celestia-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/celestia-node.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Celestia Node",permalink:"/category/celestia-node"},next:{title:"Getting and Sending Transactions with Celestia Node",permalink:"/developers/node-tutorial"}},u={},d=[{value:"Install Celestia Node",id:"install-celestia-node",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,a.kt)("p",null,"This tutorial goes over installing and building Celestia Node. This\ntutorial presumes you completed the steps in setting up your own\nenvironment ",(0,a.kt)("a",{parentName:"p",href:"../developers/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,a.kt)("p",null,"Install the Celestia Node binary by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\nmake install\n")),(0,a.kt)("p",null,"Verify that the binary is working and check the version with ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia version")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.2.0\nCommit: 1fcf0c0bb5d5a4e18b51cf12440ce86a84cf7a72\nBuild Date: Fri 04 Mar 2022 01:15:07 AM CET\nSystem version: amd64/linux\nGolang version: go1.17.5\n")))}f.isMDXComponent=!0}}]);