"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7120],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),u=r,c=s["".concat(d,".").concat(u)]||s[u]||k[u]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},20141:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],p={id:"core_activity",title:"Module: core/activity",sidebar_label:"core/activity",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"types/modules/core_activity",id:"types/modules/core_activity",title:"Module: core/activity",description:"Interfaces",source:"@site/docs/types/modules/core_activity.md",sourceDirName:"types/modules",slug:"/types/modules/core_activity",permalink:"/docs/types/modules/core_activity",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"core_activity",title:"Module: core/activity",sidebar_label:"core/activity",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"core",permalink:"/docs/types/modules/core"},next:{title:"core/actor",permalink:"/docs/types/modules/core_actor"}},m={},k=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"getNextReminder",id:"getnextreminder",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"groupByDay",id:"groupbyday",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"groupByDayInterval",id:"groupbydayinterval",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"renderDays",id:"renderdays",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"useActivityEditor",id:"useactivityeditor",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"useActivityKindOptions",id:"useactivitykindoptions",level:3},{value:"Returns",id:"returns-5",level:4},{value:"withRepetitions",id:"withrepetitions",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"withRepetitionsOne",id:"withrepetitionsone",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4}],s={toc:k};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/core_activity.DayChunk"},"DayChunk"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getnextreminder"},"getNextReminder"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getNextReminder"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"at"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"at")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupbyday"},"groupByDay"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"groupByDay"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activities"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("p",null,"Group by day and insert empty days and month starts in between"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activities")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupbydayinterval"},"groupByDayInterval"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"groupByDayInterval"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activities")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"end")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderdays"},"renderDays"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"renderDays"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"end?"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activities")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"end?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_activity.DayChunk"},(0,i.kt)("inlineCode",{parentName:"a"},"DayChunk")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useactivityeditor"},"useActivityEditor"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useActivityEditor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activity"),"): ","[",(0,i.kt)("inlineCode",{parentName:"p"},"PatchState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">]"),(0,i.kt)("p",null,"Used in admin dashboard to edit activities"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"PatchState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useactivitykindoptions"},"useActivityKindOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useActivityKindOptions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"withrepetitions"},"withRepetitions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"withRepetitions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"activities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"until"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"now?"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"activities")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"until")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"now?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"withrepetitionsone"},"withRepetitionsOne"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"withRepetitionsOne"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"until"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"now?"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"until")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"now?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Date"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core_types.Activity"},(0,i.kt)("inlineCode",{parentName:"a"},"Activity")),"[]"))}u.isMDXComponent=!0}}]);