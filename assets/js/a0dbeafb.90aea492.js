"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49089:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),s=["components"],a={title:"Theming"},l=void 0,c={unversionedId:"blocks/theming",id:"blocks/theming",title:"Theming",description:"The useTheme() hook returns all available design tokens. It's a subset of the tokens in the Figma Design system.",source:"@site/docs/blocks/theming.md",sourceDirName:"blocks",slug:"/blocks/theming",permalink:"/docs/blocks/theming",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/blocks/theming.md",tags:[],version:"current",frontMatter:{title:"Theming"},sidebar:"docs",previous:{title:"Mixpanel",permalink:"/docs/blocks/mixpanel"},next:{title:"Difference between integrations and extensions",permalink:"/docs/guides/integration-vs-extension"}},p={},m=[{value:"Custom themes",id:"custom-themes",level:3},{value:"Custom design tokens",id:"custom-design-tokens",level:3},{value:"More options",id:"more-options",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme()")," hook returns all available design tokens. It's a subset of the tokens in the Figma Design system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTheme } from '@healthblocks-io/core/theme'\n\nconst Example = () => (\n  <p style={{ color: useTheme().primary.color }}>Primary color</p>\n)\n")),(0,i.kt)("h3",{id:"custom-themes"},"Custom themes"),(0,i.kt)("p",null,"Optionally, one can override parts of the theme using a provider. It's also possible to do this in a part of the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, useTheme } from '@healthblocks-io/core/theme'\n\nconst App = () => (\n  <ThemeProvider overrides={{ primary: { color: 'red' } }}>\n    <Example />\n  </ThemeProvider>\n)\n\nconst Example = () => {\n  const theme = useTheme()\n  return (\n    <Button style={{ color: theme.primary.color }}>\n      Default theme primary\n    </Button>\n  )\n}\n")),(0,i.kt)("h3",{id:"custom-design-tokens"},"Custom design tokens"),(0,i.kt)("p",null,"Brands may use more semantic colors, in that case we can add more design tokens. The recommended way of handling this is by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".d.ts")," file and extend the Theme interface. It's not recommended to change the type of existing design tokens. This may interfere with future updates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import '@healthblocks-io/core/types'\n\ndeclare module '@healthblocks-io/core/types' {\n  export interface Theme {\n    customBrand: string\n  }\n}\n")),(0,i.kt)("p",null,"After declaring the extended Theme interface, let's use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<ThemeProvider overrides={{ customBrand: 'red' }}>\n")),(0,i.kt)("p",null,"Seeing this error? ",(0,i.kt)("inlineCode",{parentName:"p"},"Type '{ customBrand: string; }' is not assignable to type 'Partial<Theme>'")," that means Typescript is not picking up your declaration file. You may need to include it through ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Add the exact file path to ",(0,i.kt)("inlineCode",{parentName:"p"},"include"),". For example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"include": ["*.ts", "*.tsx", "pages/declare.d.ts"]'),"."),(0,i.kt)("h3",{id:"more-options"},"More options"),(0,i.kt)("p",null,"Find the ",(0,i.kt)("a",{parentName:"p",href:"/docs/types/modules/core_types#theme"},"full list of options")," in the types section."))}d.isMDXComponent=!0}}]);