"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8921],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"core_types.LocalData",title:"Interface: LocalData",sidebar_label:"LocalData",custom_edit_url:null},p=void 0,s={unversionedId:"types/interfaces/core_types.LocalData",id:"types/interfaces/core_types.LocalData",title:"Interface: LocalData",description:"core/types.LocalData",source:"@site/docs/types/interfaces/core_types.LocalData.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/core_types.LocalData",permalink:"/docs/types/interfaces/core_types.LocalData",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_types.LocalData",title:"Interface: LocalData",sidebar_label:"LocalData",custom_edit_url:null},sidebar:"docs",previous:{title:"LanguageExtensionOptions",permalink:"/docs/types/interfaces/core_types.LanguageExtensionOptions"},next:{title:"Member",permalink:"/docs/types/interfaces/core_types.Member"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"api",id:"api",level:3},{value:"authScreen",id:"authscreen",level:3},{value:"consent",id:"consent",level:3},{value:"debug",id:"debug",level:3},{value:"language",id:"language",level:3},{value:"onboarding",id:"onboarding",level:3},{value:"permissions",id:"permissions",level:3},{value:"pid",id:"pid",level:3},{value:"requests",id:"requests",level:3},{value:"userHints",id:"userhints",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core_types"},"core/types"),".LocalData"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"api"},"api"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"api"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Override api"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"authscreen"},"authScreen"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"authScreen"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"SignIn"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Register"')),(0,i.kt)("p",null,"Which screen to shown on app start"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"consent"},"consent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"consent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"debug"},"debug"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"debug"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Enable debugging tools"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"language"},"language"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"language"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onboarding"},"onboarding"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onboarding"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"permissions"},"permissions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"permissions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Which permissions were accepted"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pid"},"pid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"pid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Override pid"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requests"},"requests"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"requests"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"at"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,i.kt)("p",null,"Which permission modals were shown before"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userhints"},"userHints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"userHints"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"at?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"email?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"uid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,i.kt)("p",null,"Remembered user account"))}m.isMDXComponent=!0}}]);