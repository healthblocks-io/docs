"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8124],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56973:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],c={title:"Error (ErrorBoundary)"},s=void 0,i={unversionedId:"examples/@healthblocks-io/native/Error",id:"examples/@healthblocks-io/native/Error",isDocsHomePage:!1,title:"Error (ErrorBoundary)",description:"This error boundary displays the caught error message.",source:"@site/docs/examples/@healthblocks-io/native/Error.md",sourceDirName:"examples/@healthblocks-io/native",slug:"/examples/@healthblocks-io/native/Error",permalink:"/docs/examples/@healthblocks-io/native/Error",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/examples/@healthblocks-io/native/Error.md",tags:[],version:"current",frontMatter:{title:"Error (ErrorBoundary)"},sidebar:"docs",previous:{title:"Custom Icon",permalink:"/docs/examples/@healthblocks-io/native/Icon"},next:{title:"Serverside integration",permalink:"/docs/examples/@healthblocks-io/server"}},u=[],p={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This error boundary displays the caught error message."),(0,a.kt)("p",null,"Enable Sentry error logging (recommended)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary sentry>\n  <App />\n</ErrorBoundary>\n")),(0,a.kt)("p",null,"Use custom Sentry configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary sentry={{ dsn: 'https://...ingest.sentry.io/...' }}>\n")),(0,a.kt)("p",null,"Show a custom error screen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const FallbackScreen = ({ error }) => <Text>{error.message}</Text>\n<ErrorBoundary screen={FallbackScreen}>\n")),(0,a.kt)("p",null,"Handle clicks on the default error screen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<ErrorBoundary onPress={() => alert('Restart the app')}>\n")),(0,a.kt)("p",null,"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"https://reactjs.org/docs/error-boundaries.html")))}m.isMDXComponent=!0}}]);