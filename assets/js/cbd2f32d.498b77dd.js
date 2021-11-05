"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6044],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19386:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],a={title:"Conversational Assessment"},c=void 0,l={unversionedId:"blocks/conversational-assessment",id:"blocks/conversational-assessment",isDocsHomePage:!1,title:"Conversational Assessment",description:"Prerequisites",source:"@site/docs/blocks/conversational-assessment.md",sourceDirName:"blocks",slug:"/blocks/conversational-assessment",permalink:"/docs/blocks/conversational-assessment",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/blocks/conversational-assessment.md",tags:[],version:"current",frontMatter:{title:"Conversational Assessment"},sidebar:"docs",previous:{title:"Content Suggestions",permalink:"/docs/blocks/content-suggestions"},next:{title:"Health Profile",permalink:"/docs/blocks/health-profile"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a questionaire in the questionnaire builder.")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Verify that your app is Wrapped inside ",(0,s.kt)("inlineCode",{parentName:"p"},"<AuthProvider>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<ProjectProvider>"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ProjectProvider } from '@healthblocks/core/project'\nimport { AuthProvider, useAuth, useUser } from '@healthblocks/core/auth'\n\nconst App = () => {\n  return (\n    <ProjectProvider pid=\"example\">\n      <AuthProvider>\n        <Screens />\n      </AuthProvider>\n    </ProjectProvider>\n  )\n}\n\nconst Screens = () => {\n  const user = useUser()\n  if (!user) {\n    return <SignInScreen />\n  }\n  return <div>Logged in as {user.sub}</div>\n}\n\nconst SignInScreen = () => {\n  const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = useAuth()\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  return (\n    <div>\n      <input\n        placeholder=\"email\"\n        onChange={(evt) => setEmail(evt.target.value)}\n      />\n      <input\n        placeholder=\"password\"\n        onChange={(evt) => setPassword(evt.target.value)}\n      />\n      <button onClick={() => signInWithEmailAndPassword(email, password)}>Sign in</button>\n      <button onClick={() => createUserWithEmailAndPassword(email, password)}>Register</button>\n    </div>\n  )\n}\n")))}d.isMDXComponent=!0}}]);