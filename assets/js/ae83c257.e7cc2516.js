"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6489],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={id:"core_types.ObservationConstraints",title:"Interface: ObservationConstraints",sidebar_label:"ObservationConstraints",custom_edit_url:null},p=void 0,l={unversionedId:"types/interfaces/core_types.ObservationConstraints",id:"types/interfaces/core_types.ObservationConstraints",title:"Interface: ObservationConstraints",description:"core/types.ObservationConstraints",source:"@site/docs/types/interfaces/core_types.ObservationConstraints.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/core_types.ObservationConstraints",permalink:"/docs/types/interfaces/core_types.ObservationConstraints",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_types.ObservationConstraints",title:"Interface: ObservationConstraints",sidebar_label:"ObservationConstraints",custom_edit_url:null},sidebar:"docs",previous:{title:"ObservationComponent",permalink:"/docs/types/interfaces/core_types.ObservationComponent"},next:{title:"Occurrence",permalink:"/docs/types/interfaces/core_types.Occurrence"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3},{value:"step",id:"step",level:3},{value:"text",id:"text",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core_types"},"core/types"),".ObservationConstraints"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"code"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"min"},"min"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"min"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"step"},"step"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"step"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"text"},"text"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"text"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0}}]);