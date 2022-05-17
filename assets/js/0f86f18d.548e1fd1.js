"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6833],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,h=f["".concat(s,".").concat(d)]||f[d]||l[d]||c;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1461:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),a=["components"],i={title:"useProject"},s=void 0,u={unversionedId:"react/hooks/useProject",id:"react/hooks/useProject",title:"useProject",description:"This hook provides the project (tenant) data.",source:"@site/docs/react/hooks/useProject.md",sourceDirName:"react/hooks",slug:"/react/hooks/useProject",permalink:"/docs/react/hooks/useProject",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/react/hooks/useProject.md",tags:[],version:"current",frontMatter:{title:"useProject"},sidebar:"docs",previous:{title:"useAuth",permalink:"/docs/react/hooks/useAuth"},next:{title:"useUser",permalink:"/docs/react/hooks/useUser"}},p={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This hook provides the ",(0,c.kt)("a",{parentName:"p",href:"/docs/concepts/project"},"project")," (tenant) data."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"function Page() {\n  const project = useProject()\n  return (\n    <div>\n      Env: {project.api.includes('localhost') ? 'Localhost' : 'Production'}\n      Fetched at: {project.data.fetchedAt}\n    </div>\n  )\n}\n\nexport interface ProjectState {\n  /** Unique project identifier */\n  pid: string\n  /** Origin of the API server\n   * @example https://eu.healthblocks.io\n   */\n  api: string\n  /** App key: app/dashboard */\n  app: string\n  /** GraphQL endpoint\n   * @example https://eu.healthblocks.io/v1/graphql\n   */\n  graph?: string\n  /** Project data */\n  data: PublicProject | null\n  /** Project error state */\n  error: Error | null\n  /** Project loading state */\n  loading: boolean\n  /** Refresh the project data */\n  refetch: (options?: FetchProjectOptions) => void\n}\n")))}d.isMDXComponent=!0}}]);