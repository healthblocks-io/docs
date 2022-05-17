"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9450],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||c;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94908:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=t(83117),r=t(80102),c=(t(67294),t(3905)),a=["components"],i={title:"Custom Icon"},s=void 0,l={unversionedId:"examples/@healthblocks-io/native/Icon",id:"examples/@healthblocks-io/native/Icon",title:"Custom Icon",description:"The Icon component receives the name of icon as prop. The name can be any of the 28 built-in icons. The Button component accepts the same icon names, also the custom ones.",source:"@site/docs/examples/@healthblocks-io/native/Icon.md",sourceDirName:"examples/@healthblocks-io/native",slug:"/examples/@healthblocks-io/native/Icon",permalink:"/docs/examples/@healthblocks-io/native/Icon",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/examples/@healthblocks-io/native/Icon.md",tags:[],version:"current",frontMatter:{title:"Custom Icon"}},u={},p=[{value:"Adding custom icons",id:"adding-custom-icons",level:3},{value:"Recommended",id:"recommended",level:3},{value:"Custom icon viewBox",id:"custom-icon-viewbox",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The Icon component receives the name of icon as prop. The name can be any of the 28 built-in icons. The Button component accepts the same icon names, also the custom ones."),(0,c.kt)("h3",{id:"adding-custom-icons"},"Adding custom icons"),(0,c.kt)("p",null,"The starting template already contains some examples of custom icons. Check out src/components/CustomIcon, that is also the place to add more."),(0,c.kt)("p",null,"The idea is that you reuse the same Icon component, but at the start of the app, add/replace icons in the underlying icon set: ",(0,c.kt)("inlineCode",{parentName:"p"},"icons"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'// src/components/CustomIcon.tsx\n\n// icons is an object where every value contains the contents of an SVG element\nimport { icons } from \'@healthblocks-io/native/Icon\'\n\n// mutate the object\nicons.myCustomIcon = (\n  <Path\n    d="M20 6L9 17l-5-5"\n    stroke="currentColor"\n    strokeWidth="3"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  />\n)\n')),(0,c.kt)("p",null,"You can import ",(0,c.kt)("inlineCode",{parentName:"p"},"src/components/Icon")," once in App.tsx and ",(0,c.kt)("inlineCode",{parentName:"p"},"myCustomIcon")," is now available in all places that show icons."),(0,c.kt)("h3",{id:"recommended"},"Recommended"),(0,c.kt)("p",null,"To make the dependency on custom icons clearer, it's also possible to re-export the Icon component like this:"),(0,c.kt)("p",null,"This way, you can use ",(0,c.kt)("inlineCode",{parentName:"p"},"@healthblocks-io/native/Icon")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"src/components/Icon")," interchangeably, just don't forget to import src/components/Icon at least once!"),(0,c.kt)("h3",{id:"custom-icon-viewbox"},"Custom icon viewBox"),(0,c.kt)("p",null,"The icon viewBox is expected to be 24x24, if that doesn't work for you icon, you can override the viewBox for an icon like this:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/components/CustomIcon.tsx\nimport { viewBoxes } from '@healthblocks-io/native/Icon'\nviewBoxes.add('myCustomIcon', '0 0 18 18')\n")),(0,c.kt)("p",null,"Alternatively you can apply it case per case:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'<Icon icon="myCustomIcon" viewBox="0 0 18 18" />\n')))}d.isMDXComponent=!0}}]);