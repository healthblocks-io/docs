(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(106)),i={title:"Examples"},s={unversionedId:"@healthblocks-io/apollo/examples",id:"@healthblocks-io/apollo/examples",isDocsHomePage:!1,title:"Examples",description:"@healthblocks-io/apollo",source:"@site/docs/@healthblocks-io/apollo/examples.md",slug:"/@healthblocks-io/apollo/examples",permalink:"/docs/@healthblocks-io/apollo/examples",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/@healthblocks-io/apollo/examples.md",version:"current",sidebar:"docs",previous:{title:"Icon",permalink:"/docs/@healthblocks-io/native/Icon"},next:{title:"Examples",permalink:"/docs/@healthblocks-io/core/examples"}},l=[{value:"@healthblocks-io/apollo",id:"healthblocks-ioapollo",children:[]},{value:"useSubscription",id:"usesubscription",children:[]},{value:"useProfile",id:"useprofile",children:[]},{value:"useQuestionnaires",id:"usequestionnaires",children:[]},{value:"useQuestionnaireByName",id:"usequestionnairebyname",children:[]},{value:"saveQuestionnaireResponse",id:"savequestionnaireresponse",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"healthblocks-ioapollo"},"@healthblocks-io/apollo"),Object(a.b)("p",null,"This package has several hooks to easily access and update user data."),Object(a.b)("h1",{id:"general-utilities"},"General utilities"),Object(a.b)("h3",{id:"usesubscription"},"useSubscription"),Object(a.b)("p",null,"A shorthand to use a subscription with a ready to the Apollo Client."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { gql, useSubscription } from '@healthblocks-io/apollo'\n\nconst Greeting = () => {\n  const { data, error } = useSubscription(\n    gql`\n      subscription Profile($uid: uuid!) {\n        users_by_pk(uid: $uid) {\n          name\n        }\n      }\n    `\n  )\n  return <Text>Welcome {data?.users_by_pk?.name || '...'}</Text>\n}\n")),Object(a.b)("h3",{id:"useprofile"},"useProfile"),Object(a.b)("p",null,"Even though this hook may fetch more data than you need, it is optimised to only run once while being used in several components."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { useProfile } from '@healthblocks-io/apollo'\n\nconst Greeting = () => {\n  const { loading, name, doc } = useProfile()\n  return <Text>Welcome {loading ? '...' : name || doc.name}</Text>\n}\n")),Object(a.b)("h1",{id:"questionnaires"},"Questionnaires"),Object(a.b)("h3",{id:"usequestionnaires"},"useQuestionnaires"),Object(a.b)("p",null,"Only the latest version of published questionnaires are returned"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { useQuestionnaires } from '@healthblocks-io/apollo'\n\nconst Greeting = () => {\n  const { data } = useQuestionnaires()\n  return <Text>There are {data?.questionnaires.length} questionnaires</Text>\n}\n")),Object(a.b)("h3",{id:"usequestionnairebyname"},"useQuestionnaireByName"),Object(a.b)("p",null,"Only the latest version of a published questionnaire is returned"),Object(a.b)("p",null,"name === machine/developer readable identifier"),Object(a.b)("p",null,"title === human readable title"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { useQuestionnaireByName } from '@healthblocks-io/apollo'\n\nconst Greeting = () => {\n  const { data } = useQuestionnaireByName('onboarding')\n  return <Text>Title {data?.questionnaires[0]?.title}</Text>\n}\n")),Object(a.b)("h3",{id:"savequestionnaireresponse"},"saveQuestionnaireResponse"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { saveQuestionnaireResponse } from '@healthblocks-io/apollo'\n\nconst Greeting = () => {\n  const send = () => saveQuestionnaireResponse({ questionnaire_id, answers })\n  return <Button onPress={send}>Send</Button>\n}\n")))}u.isMDXComponent=!0}}]);