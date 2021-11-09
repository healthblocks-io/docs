"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5082],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,f=m["".concat(c,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13632:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Components overview"},c=void 0,p={unversionedId:"@healthblocks-io/native/components",id:"@healthblocks-io/native/components",isDocsHomePage:!1,title:"Components overview",description:"This package has several components for Expo apps:",source:"@site/docs/@healthblocks-io/native/components.md",sourceDirName:"@healthblocks-io/native",slug:"/@healthblocks-io/native/components",permalink:"/docs/@healthblocks-io/native/components",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/@healthblocks-io/native/components.md",tags:[],version:"current",frontMatter:{title:"Components overview"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This package has several components for Expo apps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Article (screen)"),(0,o.kt)("li",{parentName:"ul"},"Auth (screen for login with email/password)"),(0,o.kt)("li",{parentName:"ul"},"Avatar"),(0,o.kt)("li",{parentName:"ul"},"Badge"),(0,o.kt)("li",{parentName:"ul"},"Button"),(0,o.kt)("li",{parentName:"ul"},"Card (+ Carousel)"),(0,o.kt)("li",{parentName:"ul"},"Chip"),(0,o.kt)("li",{parentName:"ul"},"ClosedBeta (screen for invite code)"),(0,o.kt)("li",{parentName:"ul"},"Consent (screen with toggle for terms)"),(0,o.kt)("li",{parentName:"ul"},"DatePicker"),(0,o.kt)("li",{parentName:"ul"},"DeleteUser (screen)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Error"},"Error (ErrorBoundary)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Icon"},"Icon (28 built-in icons)")),(0,o.kt)("li",{parentName:"ul"},"Input (theme only)"),(0,o.kt)("li",{parentName:"ul"},"Language (select from en/fr/nl)"),(0,o.kt)("li",{parentName:"ul"},"Loading (screen + indicator)"),(0,o.kt)("li",{parentName:"ul"},"Markdown"),(0,o.kt)("li",{parentName:"ul"},"NotificationSettings (debugging)"),(0,o.kt)("li",{parentName:"ul"},"Onboarding"),(0,o.kt)("li",{parentName:"ul"},"Pages (embedded in multi-page Article)"),(0,o.kt)("li",{parentName:"ul"},"Passwordless (screen for sms code)"),(0,o.kt)("li",{parentName:"ul"},"push (helpers for notifications)"),(0,o.kt)("li",{parentName:"ul"},"Reminder (reminder card, reminder overview, detail for editing)"),(0,o.kt)("li",{parentName:"ul"},"TimePicker"),(0,o.kt)("li",{parentName:"ul"},"Version (debugging)")),(0,o.kt)("p",null,"Complex components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Conversation (screen)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Composer"),(0,o.kt)("li",{parentName:"ul"},"FullscreenImage"),(0,o.kt)("li",{parentName:"ul"},"Message"),(0,o.kt)("li",{parentName:"ul"},"MessageList"))),(0,o.kt)("li",{parentName:"ul"},"Questionnaire (screen)"),(0,o.kt)("li",{parentName:"ul"},"Shopify",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AddProductBottomSheet"),(0,o.kt)("li",{parentName:"ul"},"CartSummary"),(0,o.kt)("li",{parentName:"ul"},"LineItem"),(0,o.kt)("li",{parentName:"ul"},"OrderDetail (screen)"),(0,o.kt)("li",{parentName:"ul"},"Orders (screen)"),(0,o.kt)("li",{parentName:"ul"},"OrderSummary"),(0,o.kt)("li",{parentName:"ul"},"ProductDetail (screen)"),(0,o.kt)("li",{parentName:"ul"},"ProductCard"),(0,o.kt)("li",{parentName:"ul"},"Shop (screen)"),(0,o.kt)("li",{parentName:"ul"},"ShoppingCart (screen)")))))}m.isMDXComponent=!0}}]);