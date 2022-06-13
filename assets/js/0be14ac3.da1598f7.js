"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3500],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={sidebar_position:8,title:"Records"},l=void 0,s={unversionedId:"concepts/record",id:"concepts/record",title:"Records",description:"A record is a piece of non-medical member information. The records API was inspired by FHIR and Airtable, but can be used for a broad range of usecases. Integrators can use records to share data between integrations.",source:"@site/docs/concepts/record.md",sourceDirName:"concepts",slug:"/concepts/record",permalink:"/docs/concepts/record",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/concepts/record.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Records"},sidebar:"docs",previous:{title:"Multi-tenancy",permalink:"/docs/concepts/multi-tenant"},next:{title:"Integration",permalink:"/docs/concepts/integration"}},d={},p=[{value:"Record types",id:"record-types",level:3},{value:"Example",id:"example",level:3},{value:"Filters",id:"filters",level:3},{value:"Example:",id:"example-1",level:4}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A record is a piece of non-medical member information. The records API was inspired by FHIR and Airtable, but can be used for a broad range of usecases. Integrators can use records to share data between integrations."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/api#operation/RecordController_create"},"OpenAPI docs"),"."),(0,a.kt)("h3",{id:"record-types"},"Record types"),(0,a.kt)("p",null,"Records are only readable by the admin role by default. To allow reading and manipulation by other roles, record types can be created. These types describe the permissions for a specific type. Integrations will typically create these types on installation."),(0,a.kt)("p",null,"A future version may also introduce record type schema which will reject invalid incoming data."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"If a user can buy credits, we can make the record type ",(0,a.kt)("inlineCode",{parentName:"p"},"Credit"),". The user should be able to know how much credits they have, but should not be able to grant themselves credits, so let's set the permissions to read only:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /record-type?projectId=1\n\n{ "type": "Credit", "permissions": { "user": { "read": true } } }\n')),(0,a.kt)("p",null,"As an admin, we can now create Credits:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /record/Credit?projectId=1\n\n{ "fields": { "value": 5, "orderedAt": "2022-12-12T12:12:12Z" }, "memberId": 1 }\n')),(0,a.kt)("p",null,"As a user, we can now read how much Credits we have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'GET /record/Credit?projectId=1&actorId=1\n\n[{ "fields": { "value": 5, "orderedAt": "2022-12-12T12:12:12Z" }, "memberId": 1 }]\n')),(0,a.kt)("h3",{id:"filters"},"Filters"),(0,a.kt)("p",null,"You can filter based on type and fields."),(0,a.kt)("p",null,"To filter based on fields, pass a valid json object to the fields query param.",(0,a.kt)("br",null),"\nDONT FORGET TO ENCODE YOUR URL!"),(0,a.kt)("h4",{id:"example-1"},"Example:"),(0,a.kt)("p",null,'{ "value": 44 }'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'GET /record?projectId=1&actorId=1&fields=%7B%20%22value%22%3A%2044%20%7D\n\n[{ "fields": { "value": 44, "orderedAt": "2022-12-12T12:12:12Z" }, "memberId": 1 }]\n')))}m.isMDXComponent=!0}}]);