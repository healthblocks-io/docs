(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(106)),s={title:"End-to-end testing with Detox"},a={unversionedId:"guides/e2e-testing-with-detox",id:"guides/e2e-testing-with-detox",isDocsHomePage:!1,title:"End-to-end testing with Detox",description:"Detox documentation",source:"@site/docs/guides/e2e-testing-with-detox.md",slug:"/guides/e2e-testing-with-detox",permalink:"/docs/guides/e2e-testing-with-detox",editUrl:"https://github.com/healthblocks-io/docs/edit/master/website/docs/guides/e2e-testing-with-detox.md",version:"current",sidebar:"docs",previous:{title:"Initial project setup",permalink:"/docs/guides/initial-project-setup"},next:{title:"Accessing the GraphiQL console",permalink:"/docs/guides/graphiql-console"}},c=[{value:"Setup on Macbook",id:"setup-on-macbook",children:[]},{value:"Run tests",id:"run-tests",children:[]},{value:"Writing tests",id:"writing-tests",children:[{value:"Unit tests",id:"unit-tests",children:[]},{value:"Integration tests",id:"integration-tests",children:[]},{value:"End-to-end test",id:"end-to-end-test",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/docs/README.md"},"Detox documentation")),Object(o.b)("h2",{id:"setup-on-macbook"},"Setup on Macbook"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"./@healthblocks-io/native/cmd/enable-detox.sh"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Installs detox"),Object(o.b)("li",{parentName:"ul"},"Installs applesimutils (macOS only)"),Object(o.b)("li",{parentName:"ul"},"Downloads expo iOS apk"))),Object(o.b)("li",{parentName:"ul"},"Write tests in the ./e2e folder")),Object(o.b)("h2",{id:"run-tests"},"Run tests"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Start expo (",Object(o.b)("strong",{parentName:"li"},"expo start"),")"),Object(o.b)("li",{parentName:"ol"},"Open iOS simulator."),Object(o.b)("li",{parentName:"ol"},"Execute ",Object(o.b)("strong",{parentName:"li"},"yarn test"))),Object(o.b)("h2",{id:"writing-tests"},"Writing tests"),Object(o.b)("h3",{id:"unit-tests"},"Unit tests"),Object(o.b)("p",null,"These tests cover 1 function per test and don't hit API endpoints."),Object(o.b)("p",null,"Consider using Jest"),Object(o.b)("p",null,"Consider only testing pure functions inside ",Object(o.b)("inlineCode",{parentName:"p"},"src/lib/")),Object(o.b)("h3",{id:"integration-tests"},"Integration tests"),Object(o.b)("p",null,"These tests may hit API endpoints and test if several functions collaborate together."),Object(o.b)("p",null,"Consider using Jest"),Object(o.b)("h3",{id:"end-to-end-test"},"End-to-end test"),Object(o.b)("p",null,"These tests run the complete app and interact through the UI."),Object(o.b)("p",null,"Consider using Detox+Jest"))}u.isMDXComponent=!0}}]);