(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),c=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,c=function(e,n){if(null==e)return{};var t,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||r;return t?c.a.createElement(d,i(i({ref:n},l),{},{components:t})):c.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(3),c=t(7),r=(t(0),t(106)),a={title:"Icon"},i={unversionedId:"@healthblocks-io/native/Icon",id:"@healthblocks-io/native/Icon",isDocsHomePage:!1,title:"Icon",description:"The Icon component receives the name of icon as prop. The name can be any of the 28 built-in icons. The Button component accepts the same icon names, also the custom ones.",source:"@site/docs/@healthblocks-io/native/Icon.md",slug:"/@healthblocks-io/native/Icon",permalink:"/docs/@healthblocks-io/native/Icon",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/@healthblocks-io/native/Icon.md",version:"current",sidebar:"docs",previous:{title:"Error (ErrorBoundary)",permalink:"/docs/@healthblocks-io/native/Error"},next:{title:"Examples",permalink:"/docs/@healthblocks-io/apollo/examples"}},s=[{value:"Adding custom icons",id:"adding-custom-icons",children:[]},{value:"Recommended",id:"recommended",children:[]},{value:"Custom icon viewBox",id:"custom-icon-viewbox",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Icon component receives the name of icon as prop. The name can be any of the 28 built-in icons. The Button component accepts the same icon names, also the custom ones."),Object(r.b)("h3",{id:"adding-custom-icons"},"Adding custom icons"),Object(r.b)("p",null,"The starting template already contains some examples of custom icons. Check out src/components/CustomIcon, that is also the place to add more."),Object(r.b)("p",null,"The idea is that you reuse the same Icon component, but at the start of the app, add/replace icons in the underlying icon set: ",Object(r.b)("inlineCode",{parentName:"p"},"icons"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'// src/components/CustomIcon.tsx\n\n// icons is an object where every value contains the contents of an SVG element\nimport { icons } from \'@healthblocks-io/native/Icon\'\n\n// mutate the object\nicons.myCustomIcon = (\n  <Path\n    d="M20 6L9 17l-5-5"\n    stroke="currentColor"\n    strokeWidth="3"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  />\n)\n')),Object(r.b)("p",null,"You can import ",Object(r.b)("inlineCode",{parentName:"p"},"src/components/Icon")," once in App.tsx and ",Object(r.b)("inlineCode",{parentName:"p"},"myCustomIcon")," is now available in all places that show icons."),Object(r.b)("h3",{id:"recommended"},"Recommended"),Object(r.b)("p",null,"To make the dependency on custom icons clearer, it's also possible to re-export the Icon component like this:"),Object(r.b)("p",null,"This way, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"@healthblocks-io/native/Icon")," and ",Object(r.b)("inlineCode",{parentName:"p"},"src/components/Icon")," interchangeably, just don't forget to import src/components/Icon at least once!"),Object(r.b)("h3",{id:"custom-icon-viewbox"},"Custom icon viewBox"),Object(r.b)("p",null,"The icon viewBox is expected to be 24x24, if that doesn't work for you icon, you can override the viewBox for an icon like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"// src/components/CustomIcon.tsx\nimport { viewBoxes } from '@healthblocks-io/native/Icon'\nviewBoxes.add('myCustomIcon', '0 0 18 18')\n")),Object(r.b)("p",null,"Alternatively you can apply it case per case:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'<Icon icon="myCustomIcon" viewBox="0 0 18 18" />\n')))}p.isMDXComponent=!0}}]);