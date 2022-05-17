"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"Project configuration"},l=void 0,p={unversionedId:"guides/project-configuration",id:"guides/project-configuration",title:"Project configuration",description:"It's recommended to store configuration at the project level. This is available in the Project Settings. Standard and default settings are merged in the project object. Warning: project settings are public, anyone downloading your app can look into it.",source:"@site/docs/guides/project-configuration.md",sourceDirName:"guides",slug:"/guides/project-configuration",permalink:"/docs/guides/project-configuration",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/project-configuration.md",tags:[],version:"current",frontMatter:{title:"Project configuration"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Example",id:"example",level:3},{value:"Preloaded configuration",id:"preloaded-configuration",level:2},{value:"Configuration reference (v1)",id:"configuration-reference-v1",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It's recommended to store configuration at the project level. This is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.healthblocks.io/dr-corona/general"},"Project Settings"),". Standard and default settings are merged in the project object. Warning: project settings are public, anyone downloading your app can look into it."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/project"},"Create a project")," in the Healthblocks dashboard.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"The API endpoint for this data is: ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/projects/example")," where you should replace dr-corona with your pid."),(0,i.kt)("p",null,"The recommended way to read project configuration is through the ",(0,i.kt)("inlineCode",{parentName:"p"},"useConfig()")," hook. You should pass a function that selects the specific configuration option. This will allow future optimization that reduces rerenders when the project configuration is reloaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ProjectProvider, useProject } from '@healthblocks-io/core/project'\n\nconst App = () => (\n  <ProjectProvider pid=\"example\" api=\"https://eu.healthblocks.io\">\n    <Screen />\n  </ProjectProvider>\n)\n\nconst Screen = () => {\n  const { data, loading, error, pid } = useProject()\n  return (\n    <div>\n      <h1>Welcome to {data?.name}</h1>\n      <div>Loading {loading && 'loading'}</div>\n      <div>pid: {pid}</div>\n\n      <div>projectId: {useProjectId()}</div>\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"preloaded-configuration"},"Preloaded configuration"),(0,i.kt)("p",null,"Currently not available!"),(0,i.kt)("p",null,"Using configuration preloading, it's possible to statically include a certain project configuration at build time. This speeds up the first app use."),(0,i.kt)("h2",{id:"configuration-reference-v1"},"Configuration reference (v1)"),(0,i.kt)("p",null,"Let's look at the project object: (this )"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"project = {\n  // Auth0 integration data\n  auth0: {\n    app: { domain: '', clientId: '' },\n    dashboard: { domain: '', clientId: '' }\n  },\n\n  // List of enabled blocks, may include custom blocks\n  blocks: ['airtable', 'articles', 'i18n', 'questionnaires', ...],\n\n  // General configuration, this can contain anything, some options are standardized\n  config: {\n    myCustomOption: ''\n  },\n\n  // These endpoints will be different when self hosting or developing locally\n  env: {\n    api: 'https://api.healthblocks.io'\n    dashboard: 'https://dashboard.healthblocks.io'\n    graph: 'https://graph.healthblocks.io'\n  },\n\n  // Response metadata\n  pid: 'example',\n  name: 'Example project',\n  fetchedAt: '2021-...'\n}\n")),(0,i.kt)("p",null,"More details? ",(0,i.kt)("a",{parentName:"p",href:"/api#operation/getProjectById"},"See project API reference"),"."))}f.isMDXComponent=!0}}]);