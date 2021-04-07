(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(106)),o={title:"Manage translations"},l={unversionedId:"guides/translations",id:"guides/translations",isDocsHomePage:!1,title:"Manage translations",description:"Expo app",source:"@site/docs/guides/translations.md",slug:"/guides/translations",permalink:"/docs/guides/translations",editUrl:"https://github.com/healthblocks-io/docs/edit/master/website/docs/guides/translations.md",version:"current",sidebar:"docs",previous:{title:"Accessing the GraphiQL console",permalink:"/docs/guides/graphiql-console"},next:{title:"Upgrade SDK",permalink:"/docs/guides/upgrade"}},c=[{value:"Expo app",id:"expo-app",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"expo-app"},"Expo app"),Object(i.b)("p",null,"Translations are managed with i18next. Initializing i18next happens in custom code, currently that is in ",Object(i.b)("inlineCode",{parentName:"p"},"src/hooks/use-load-translations.tsx"),"."),Object(i.b)("p",null,"In the template-app, the load path is based on ",Object(i.b)("inlineCode",{parentName:"p"},"healthblocksConfig")," in ",Object(i.b)("inlineCode",{parentName:"p"},"src/config.ts")," you can keep this or change to a different translation provider:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Airtable translations (template-app)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Enable Airtable integration"),Object(i.b)("li",{parentName:"ul"},"Create Translations table, add the ",Object(i.b)("inlineCode",{parentName:"li"},"key")," field and 1 field per language (nl, fr, en, ...)"),Object(i.b)("li",{parentName:"ul"},"Translations are now available on ",Object(i.b)("inlineCode",{parentName:"li"},"<api>/api/projects/<pid>/tables/Translations")))),Object(i.b)("li",{parentName:"ul"},"Custom translation provider",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Checkout i18next docs \ud83e\uddd0")))))}s.isMDXComponent=!0},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);