(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(193)),p={id:"apollo_questionnaire.namedquestionnaireproviderprops",title:"Interface: NamedQuestionnaireProviderProps",sidebar_label:"NamedQuestionnaireProviderProps",custom_edit_url:null,hide_title:!0},i={unversionedId:"types/interfaces/apollo_questionnaire.namedquestionnaireproviderprops",id:"types/interfaces/apollo_questionnaire.namedquestionnaireproviderprops",isDocsHomePage:!1,title:"Interface: NamedQuestionnaireProviderProps",description:"Interface: NamedQuestionnaireProviderProps",source:"@site/docs/types/interfaces/apollo_questionnaire.namedquestionnaireproviderprops.md",slug:"/types/interfaces/apollo_questionnaire.namedquestionnaireproviderprops",permalink:"/docs/types/interfaces/apollo_questionnaire.namedquestionnaireproviderprops",editUrl:null,version:"current",sidebar_label:"NamedQuestionnaireProviderProps",sidebar:"docs",previous:{title:"Interface: CustomComponents",permalink:"/docs/types/interfaces/apollo_questionnaire.customcomponents"},next:{title:"Interface: PostSubmitHook",permalink:"/docs/types/interfaces/apollo_questionnaire.postsubmithook"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"children",id:"children",children:[]},{value:"customComponents",id:"customcomponents",children:[]},{value:"name",id:"name",children:[]},{value:"onClose",id:"onclose",children:[]},{value:"onSubmit",id:"onsubmit",children:[]},{value:"transform",id:"transform",children:[]}]}],b={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-namedquestionnaireproviderprops"},"Interface: NamedQuestionnaireProviderProps"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/types/modules/apollo_questionnaire"},"apollo/questionnaire"),".NamedQuestionnaireProviderProps"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},Object(o.b)("em",{parentName:"a"},"BaseQuestionnaireProviderProps"))),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"NamedQuestionnaireProviderProps")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"children"},"children"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"children"),": ReactNode"),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},"BaseQuestionnaireProviderProps"),".",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops#children"},"children")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"customcomponents"},"customComponents"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"customComponents"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.customcomponents"},Object(o.b)("em",{parentName:"a"},"CustomComponents"))),Object(o.b)("p",null,"Map of custom components that will replace or add existing composers"),Object(o.b)("p",null,"Examples:"),Object(o.b)("p",null,"Add component for custom reply type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onClose={{ Smiley }}\n")),Object(o.b)("p",null,"Replace component for Text reply type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onClose={{ Text }}\n")),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},"BaseQuestionnaireProviderProps"),".",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops#customcomponents"},"customComponents")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onclose"},"onClose"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onClose"),": (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.closecontext"},Object(o.b)("em",{parentName:"a"},"CloseContext")),") => ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Called when the user tries to close the questionnaire"),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onClose={navigate.goBack}\n")),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.closecontext"},Object(o.b)("em",{parentName:"a"},"CloseContext")),"): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ctx")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/docs/types/interfaces/apollo_questionnaire.closecontext"},Object(o.b)("em",{parentName:"a"},"CloseContext")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},"BaseQuestionnaireProviderProps"),".",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops#onclose"},"onClose")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onsubmit"},"onSubmit"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onSubmit"),": (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")),") => ",Object(o.b)("em",{parentName:"p"},"null")," ","|"," ",Object(o.b)("em",{parentName:"p"},"void")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.postsubmithook"},Object(o.b)("em",{parentName:"a"},"PostSubmitHook"))),Object(o.b)("p",null,"Called before submitting questionnaire, this allows you to enable/disable saving the response"),Object(o.b)("p",null,"Examples:"),Object(o.b)("p",null,"Don't save the response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onSubmit={() => ({ save: false })}\n")),Object(o.b)("p",null,"Verify the answers before saving"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onSubmit={async ({ answers }) => {\n  const ok = await postJSON('/verify', { answers })\n  if (!ok.valid) {\n    return { save: false }\n  }\n}}\n")),Object(o.b)("p",null,"Transform the answers before saving"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"onSubmit={({ answers }) => ({\n  answers: answers.map(a => ({ ...a, text: a.text ||\xa0'Empty' }))\n})}\n")),Object(o.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")),"): ",Object(o.b)("em",{parentName:"p"},"null")," ","|"," ",Object(o.b)("em",{parentName:"p"},"void")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.postsubmithook"},Object(o.b)("em",{parentName:"a"},"PostSubmitHook"))),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ctx")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"null")," ","|"," ",Object(o.b)("em",{parentName:"p"},"void")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.postsubmithook"},Object(o.b)("em",{parentName:"a"},"PostSubmitHook"))),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},"BaseQuestionnaireProviderProps"),".",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops#onsubmit"},"onSubmit")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"transform"},"transform"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"transform"),": (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")),") => ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.questionnaire"},Object(o.b)("em",{parentName:"a"},"Questionnaire"))),Object(o.b)("p",null,"Change the questionnaire based on the answers"),Object(o.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")),"): ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.questionnaire"},Object(o.b)("em",{parentName:"a"},"Questionnaire"))),Object(o.b)("h4",{id:"parameters-2"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"ctx")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/docs/types/interfaces/apollo_questionnaire.progresscontext"},Object(o.b)("em",{parentName:"a"},"ProgressContext")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.questionnaire"},Object(o.b)("em",{parentName:"a"},"Questionnaire"))),Object(o.b)("p",null,"Inherited from: ",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops"},"BaseQuestionnaireProviderProps"),".",Object(o.b)("a",{parentName:"p",href:"/docs/types/interfaces/apollo_questionnaire.basequestionnaireproviderprops#transform"},"transform")))}c.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=c(n),u=r,d=l["".concat(p,".").concat(u)]||l[u]||m[u]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var b=2;b<o;b++)p[b]=n[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);