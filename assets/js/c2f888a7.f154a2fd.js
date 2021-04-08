(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(114)),i={title:"Analytics tracking events"},c={unversionedId:"guides/analytics-tracking-events",id:"guides/analytics-tracking-events",isDocsHomePage:!1,title:"Analytics tracking events",description:"These events are configured in @healthblocks-io/native",source:"@site/docs/guides/analytics-tracking-events.md",slug:"/guides/analytics-tracking-events",permalink:"/docs/guides/analytics-tracking-events",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/analytics-tracking-events.md",version:"current",sidebar:"docs",previous:{title:"Initial project setup",permalink:"/docs/guides/initial-project-setup"},next:{title:"Manage translations",permalink:"/docs/guides/translations"}},o=[{value:"template-app",id:"template-app",children:[]},{value:"@healthblocks-io/native",id:"healthblocks-ionative",children:[{value:"Conversation component",id:"conversation-component",children:[]}]}],u={toc:o};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These events are configured in ",Object(r.b)("inlineCode",{parentName:"p"},"@healthblocks-io/native")),Object(r.b)("h2",{id:"template-app"},"template-app"),Object(r.b)("p",null,"App Started"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user starts the app")),Object(r.b)("h2",{id:"healthblocks-ionative"},"@healthblocks-io/native"),Object(r.b)("p",null,"Onboarding Completed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When going through the 3 introductory screens (or skipping), this is always anonymous")),Object(r.b)("p",null,"Navigate { route }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user changes the tab or opens an article")),Object(r.b)("p",null,"Profile Updated \u21d2 profile_key = name, email, birthdate, language, timezone, ..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user profile is updated")),Object(r.b)("p",null,"Question Answered { question_id, value }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user answers a question, fid is the custom field id, value is the answer")),Object(r.b)("p",null,"Article Opened"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user navigates to an article")),Object(r.b)("p",null,"Article Expanded"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'When the user clicks "Read more" at the bottom of a article')),Object(r.b)("p",null,"Article Collapsed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user navigates away from an article")),Object(r.b)("p",null,"Article Page In"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user opens a page of an expanded article")),Object(r.b)("p",null,"Article Page Out"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user leaves a page of an expanded article")),Object(r.b)("p",null,"Article Link Opened"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'When the user clicks "Learn more" to open a URL on an article')),Object(r.b)("p",null,"Article Flow Started"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user starts an assessment from a CTA on an article")),Object(r.b)("p",null,"Medication Created"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user confirms the creation of a medication reminder")),Object(r.b)("p",null,"Medication Updated"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user changes a medication reminder")),Object(r.b)("p",null,"Medication Removed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user removes a medication remineer")),Object(r.b)("p",null,"Medication Statement Created { medication_name, planned_time }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user toggles a medication statement")),Object(r.b)("p",null,"Medication Statement Removed { medication_name, planned_time }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user undoes a medication statement")),Object(r.b)("p",null,"Reminder Sent"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the backend sends a reminder notification, typically for the daily checkin")),Object(r.b)("p",null,"Notification Sent"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the backend sends a notification, typically for a HITL message")),Object(r.b)("p",null,"Notification Received"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the app is opened while a notification is received")),Object(r.b)("p",null,"Notification Opened"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user interacts with a received notification")),Object(r.b)("h3",{id:"conversation-component"},"Conversation component"),Object(r.b)("p",null,"Flow Started"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user starts a new flow")),Object(r.b)("p",null,"Flow Completed { flow }"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the user answers the last question of a flow")),Object(r.b)("p",null,"Flow Opened"),Object(r.b)("p",null,"Flow Closed"))}b.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),b=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,O=s["".concat(i,".").concat(d)]||s[d]||p[d]||r;return n?l.a.createElement(O,c(c({ref:t},u),{},{components:n})):l.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);