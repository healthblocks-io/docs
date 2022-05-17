"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,c=k["".concat(p,".").concat(u)]||k[u]||m[u]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"core_auth_context.AuthActions",title:"Interface: AuthActions",sidebar_label:"AuthActions",custom_edit_url:null},p=void 0,s={unversionedId:"types/interfaces/core_auth_context.AuthActions",id:"types/interfaces/core_auth_context.AuthActions",title:"Interface: AuthActions",description:"core/auth-context.AuthActions",source:"@site/docs/types/interfaces/core_auth_context.AuthActions.md",sourceDirName:"types/interfaces",slug:"/types/interfaces/core_auth_context.AuthActions",permalink:"/docs/types/interfaces/core_auth_context.AuthActions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core_auth_context.AuthActions",title:"Interface: AuthActions",sidebar_label:"AuthActions",custom_edit_url:null},sidebar:"docs",previous:{title:"TrackData",permalink:"/docs/types/interfaces/core_analytics.TrackData"},next:{title:"AuthContextType",permalink:"/docs/types/interfaces/core_auth_context.AuthContextType"}},d={},m=[{value:"Methods",id:"methods",level:2},{value:"createUserWithEmailAndPassword",id:"createuserwithemailandpassword",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"resetPassword",id:"resetpassword",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"sendPasswordResetEmail",id:"sendpasswordresetemail",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"signInAnonymously",id:"signinanonymously",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"signInWithEmailAndPassword",id:"signinwithemailandpassword",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"signInWithToken",id:"signinwithtoken",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core_auth_context"},"core/auth-context"),".AuthActions"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createuserwithemailandpassword"},"createUserWithEmailAndPassword"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createUserWithEmailAndPassword"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"code?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("p",null,'Also known as "register"'),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"code?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resetpassword"},"resetPassword"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resetPassword"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"created"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"created"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"updated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendpasswordresetemail"},"sendPasswordResetEmail"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendPasswordResetEmail"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"email"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"from?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"sent?"),": ","[",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"from?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"sent?"),": ","[",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signinanonymously"},"signInAnonymously"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"signInAnonymously"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.sub?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signinwithemailandpassword"},"signInWithEmailAndPassword"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"signInWithEmailAndPassword"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"core_auth_context.AuthState"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthState")),">"),(0,i.kt)("p",null,"Signs the user in with a random id"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"core_auth_context.AuthState"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthState")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signinwithtoken"},"signInWithToken"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"signInWithToken"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"access_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);