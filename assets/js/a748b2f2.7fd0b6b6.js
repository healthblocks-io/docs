"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9057],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Local development setup"},s=void 0,p={unversionedId:"deploy/dev",id:"deploy/dev",title:"Local development setup",description:"Use cases:",source:"@site/docs/deploy/dev.md",sourceDirName:"deploy",slug:"/deploy/dev",permalink:"/docs/deploy/dev",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/deploy/dev.md",tags:[],version:"current",frontMatter:{title:"Local development setup"},sidebar:"docs",previous:{title:"Local setup",permalink:"/docs/deploy/local"},next:{title:"AWS Deployment",permalink:"/docs/deploy/aws"}},c={},u=[{value:"Use cases:",id:"use-cases",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Install Docker",id:"install-docker",level:3},{value:"Add your Healthblocks auth token to your terminal configuration",id:"add-your-healthblocks-auth-token-to-your-terminal-configuration",level:3},{value:"Clone the platform repo",id:"clone-the-platform-repo",level:3},{value:"Run a postgres database",id:"run-a-postgres-database",level:3},{value:"Configure .env",id:"configure-env",level:3},{value:"Run the migrations",id:"run-the-migrations",level:3},{value:"Run the API and Admin UI",id:"run-the-api-and-admin-ui",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"use-cases"},"Use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You would like to develop the platform APIs or the internal dashboard")),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js 12+ (LTS)"),(0,o.kt)("li",{parentName:"ul"},"yarn")),(0,o.kt)("h3",{id:"install-docker"},"Install Docker"),(0,o.kt)("p",null,"Easiest solution is to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"Docker Desktop for Mac")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop for Windows"),"."),(0,o.kt)("h3",{id:"add-your-healthblocks-auth-token-to-your-terminal-configuration"},"Add your Healthblocks auth token to your terminal configuration"),(0,o.kt)("p",null,"Using Bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export HEALTHBLOCKS_NODE_AUTH_TOKEN=<YOUR-TOKEN>' >> ~/.bash_profile\n")),(0,o.kt)("p",null,"Using Zsh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export HEALTHBLOCKS_NODE_AUTH_TOKEN=<YOUR-TOKEN>' >> ~/.zshenv\n")),(0,o.kt)("h3",{id:"clone-the-platform-repo"},"Clone the platform repo"),(0,o.kt)("p",null,"This repo contains two projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API: Nest project that connects to a postgres database"),(0,o.kt)("li",{parentName:"ul"},"Admin UI: Next.js project that connects to the API")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:healthblocks-io/nest.git\ncd nest\n")),(0,o.kt)("h3",{id:"run-a-postgres-database"},"Run a postgres database"),(0,o.kt)("p",null,"This Docker Compose contains just a basic postgres database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("h3",{id:"configure-env"},"Configure .env"),(0,o.kt)("p",null,"Create .env files from the .env.example files in the admin and api project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp api/.env.example api/.env\ncp integration-admin-ui/.env.example integration-admin-ui/.env\n")),(0,o.kt)("h3",{id:"run-the-migrations"},"Run the migrations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd api; npx prisma migrate deploy; cd ..\ncd integration-admin-ui; npx prisma migrate deploy; cd ..\n")),(0,o.kt)("h3",{id:"run-the-api-and-admin-ui"},"Run the API and Admin UI"),(0,o.kt)("p",null,"You will need two terminals for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd api; yarn dev\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd integration-admin-ui; yarn dev\n")),(0,o.kt)("p",null,"Start by visiting the API, it is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:21111"},"http://localhost:21111"),". After choosing an authenticator, you are redirected to the Admin UI which is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:21118"},"http://localhost:21118"),"."))}m.isMDXComponent=!0}}]);