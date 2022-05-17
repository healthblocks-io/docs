"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7181],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81622:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){e.children;var t=e.expo,n=void 0!==t&&t,o=e.web,a=e.rn,c=e.react;return r.createElement("div",{style:{margin:"1em 0"}},"Platforms:",o&&r.createElement("span",{style:{backgroundColor:"#4a4",borderRadius:"2px",color:"#fff",padding:"0.2rem .4rem",marginLeft:4}},"\u2713 Web"),c&&r.createElement("span",{style:{backgroundColor:"#4a4",borderRadius:"2px",color:"#fff",padding:"0.2rem .4rem",marginLeft:4}},"\u2713 React"),a&&r.createElement("span",{style:{backgroundColor:"#4a4",borderRadius:"2px",color:"#fff",padding:"0.2rem .4rem",marginLeft:4}},"\u2713 React Native"),n&&r.createElement("span",{style:{backgroundColor:"#4a4",borderRadius:"2px",color:"#fff",padding:"0.2rem .4rem",marginLeft:4}},"\u2713 Expo"))}},55917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=n(81622),i=["components"],u={title:"useAsyncToken"},s=void 0,l={unversionedId:"react/hooks/useAsyncToken",id:"react/hooks/useAsyncToken",title:"useAsyncToken",description:"If you want to send authenticated request, you can get the required tokens from useAuthState().",source:"@site/docs/react/hooks/useAsyncToken.md",sourceDirName:"react/hooks",slug:"/react/hooks/useAsyncToken",permalink:"/docs/react/hooks/useAsyncToken",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/react/hooks/useAsyncToken.md",tags:[],version:"current",frontMatter:{title:"useAsyncToken"},sidebar:"docs",previous:{title:"Hooks",permalink:"/docs/react"},next:{title:"useAuth",permalink:"/docs/react/hooks/useAuth"}},f={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{web:!0,rn:!0,expo:!0,mdxType:"Platforms"}),(0,a.kt)("p",null,"If you want to send authenticated request, you can get the required tokens from ",(0,a.kt)("inlineCode",{parentName:"p"},"useAuthState()"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a fresh token is optional, you can simply get the current id token from ",(0,a.kt)("inlineCode",{parentName:"li"},"useToken()"),"."),(0,a.kt)("li",{parentName:"ul"},"If you must have a fresh token, request one from ",(0,a.kt)("inlineCode",{parentName:"li"},"useAsyncToken()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAuth } from '@healthblocks-io/core/auth'\n\nfunction Page() {\n  // Read current token data\n  const id_token = useToken()\n  const submit = () =>\n    fetch('/api', { headers: { Authorization: 'Bearer ' + id_token } })\n\n  // Callback that will refresh the token if needed => better\n  const token = useAsyncToken()\n  const submit = async () =>\n    fetch('/api', { headers: { Authorization: 'Bearer ' + (await token()) } })\n}\n")))}m.isMDXComponent=!0}}]);