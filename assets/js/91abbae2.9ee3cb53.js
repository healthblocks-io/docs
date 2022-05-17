"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3443],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54599:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"core_types.PlanDefinition",title:"Interface: PlanDefinition",sidebar_label:"PlanDefinition",custom_edit_url:null},p=void 0,c={unversionedId:"types/interfaces/core_types.PlanDefinition",id:"types/interfaces/core_types.PlanDefinition",title:"Interface: PlanDefinition",description:"core/types.PlanDefinition",source:"@site/docs/types/interfaces/core_types.PlanDefinition.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/core_types.PlanDefinition",permalink:"/docs/types/interfaces/core_types.PlanDefinition",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_types.PlanDefinition",title:"Interface: PlanDefinition",sidebar_label:"PlanDefinition",custom_edit_url:null},sidebar:"docs",previous:{title:"Patch",permalink:"/docs/types/interfaces/core_types.Patch"},next:{title:"PlanDefinitionAction",permalink:"/docs/types/interfaces/core_types.PlanDefinitionAction"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"action",id:"action",level:3},{value:"contained",id:"contained",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"name",id:"name",level:3},{value:"resourceType",id:"resourcetype",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"status",id:"status",level:3},{value:"text",id:"text",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"title",id:"title",level:3},{value:"type",id:"type",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/core_types"},"core/types"),".PlanDefinition"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseResource"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PlanDefinition"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"action"},"action"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"action"),": ",(0,a.kt)("a",{parentName:"p",href:"core_types.PlanDefinitionAction"},(0,a.kt)("inlineCode",{parentName:"a"},"PlanDefinitionAction")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"contained"},"contained"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"contained"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core_types#resource"},(0,a.kt)("inlineCode",{parentName:"a"},"Resource")),"[]"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource"},"BaseResource"),".",(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource#contained"},"contained")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource"},"BaseResource"),".",(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource#id"},"id")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name for this plan definition (computer friendly)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resourcetype"},"resourceType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"resourceType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource"},"BaseResource"),".",(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource#resourcetype"},"resourceType")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"unknown"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"draft"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"active"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"retired"')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"text"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource"},"BaseResource"),".",(0,a.kt)("a",{parentName:"p",href:"core_types.BaseResource#text"},"text")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name for this plan definition (human friendly)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"careplan"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"order-set"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"clinical-protocol"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eca-rule"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"workflow-definition"')))}f.isMDXComponent=!0}}]);