(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(114)),i={title:"Accessing the GraphiQL console"},l={unversionedId:"guides/graphiql-console",id:"guides/graphiql-console",isDocsHomePage:!1,title:"Accessing the GraphiQL console",description:"Use dashboard GraphiQL with anonymous user",source:"@site/docs/guides/graphiql-console.md",slug:"/guides/graphiql-console",permalink:"/docs/guides/graphiql-console",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/graphiql-console.md",version:"current",sidebar:"docs",previous:{title:"Manage translations",permalink:"/docs/guides/translations"},next:{title:"End-to-end testing with Detox",permalink:"/docs/guides/e2e-testing-with-detox"}},c=[{value:"Use dashboard GraphiQL with anonymous user",id:"use-dashboard-graphiql-with-anonymous-user",children:[]},{value:"Use GraphiQL with anonymous user",id:"use-graphiql-with-anonymous-user",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"use-dashboard-graphiql-with-anonymous-user"},"Use dashboard GraphiQL with anonymous user"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign in to the dashboard ",Object(o.b)("inlineCode",{parentName:"li"},"https://dashboard.healthblocks.io")),Object(o.b)("li",{parentName:"ol"},"Visit Settings > GraphiQL")),Object(o.b)("h3",{id:"use-graphiql-with-anonymous-user"},"Use GraphiQL with anonymous user"),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",{parentName:"p",href:"https://www.electronjs.org/apps/graphiql"},"GraphiQL Electron app")," to connect:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set GraphQL endpoint: ",Object(o.b)("inlineCode",{parentName:"li"},"https://graph.healthblocks.io/v1/graphql")),Object(o.b)("li",{parentName:"ol"},"Create anonymous user: ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.healthblocks.io/api/auth?pid=<PID>")),Object(o.b)("li",{parentName:"ol"},"Note down the ",Object(o.b)("inlineCode",{parentName:"li"},"id_token")," it starts with ",Object(o.b)("inlineCode",{parentName:"li"},"eY")),Object(o.b)("li",{parentName:"ol"},"Add HTTP Header: ",Object(o.b)("inlineCode",{parentName:"li"},"Authorization")," with value ",Object(o.b)("inlineCode",{parentName:"li"},"Bearer eY.....")),Object(o.b)("li",{parentName:"ol"},"Keep the JSON headers (content-type)")),Object(o.b)("p",null,"The GraphQL API at ",Object(o.b)("a",{parentName:"p",href:"http://graph.healthblocks.io"},"graph.healthblocks.io")," has a built-in GraphiQL console, but it's not enabled today. We are looking into enabling it."))}p.isMDXComponent=!0}}]);