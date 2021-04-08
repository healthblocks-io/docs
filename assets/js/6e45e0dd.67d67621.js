(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var i=a(0),o=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=d(a),g=i,b=h["".concat(r,".").concat(g)]||h[g]||p[g]||n;return a?o.a.createElement(b,l(l({ref:t},s),{},{components:a})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<n;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),o=a(7),n=(a(0),a(114)),r={title:"Upgrade SDK"},l={unversionedId:"guides/upgrade",id:"guides/upgrade",isDocsHomePage:!1,title:"Upgrade SDK",description:"Upgrading @healthblocks-io libraries",source:"@site/docs/guides/upgrade.md",slug:"/guides/upgrade",permalink:"/docs/guides/upgrade",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/upgrade.md",version:"current",sidebar:"docs",previous:{title:"End-to-end testing with Detox",permalink:"/docs/guides/e2e-testing-with-detox"},next:{title:"Components overview",permalink:"/docs/@healthblocks-io/native/components"}},c=[{value:"Upgrading @healthblocks-io libraries",id:"upgrading-healthblocks-io-libraries",children:[{value:"Healthblocks versioning",id:"healthblocks-versioning",children:[]},{value:"Release mode",id:"release-mode",children:[]},{value:"Safe upgrade",id:"safe-upgrade",children:[]},{value:"Semi-safe full upgrade",id:"semi-safe-full-upgrade",children:[]},{value:"Dangerous upgrade",id:"dangerous-upgrade",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Upgrade while keeping modifications",id:"upgrade-while-keeping-modifications",children:[]},{value:"Upgrade to latest version while resetting modifications",id:"upgrade-to-latest-version-while-resetting-modifications",children:[]},{value:"Handy commands",id:"handy-commands",children:[]}]}],s={toc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"upgrading-healthblocks-io-libraries"},"Upgrading @healthblocks-io libraries"),Object(n.b)("h3",{id:"healthblocks-versioning"},"Healthblocks versioning"),Object(n.b)("p",null,"Major versions match with Expo versions."),Object(n.b)("p",null,"Version 3.x is compatible with Expo 40"),Object(n.b)("p",null,"Version 4.x is compatible with Expo 41"),Object(n.b)("h3",{id:"release-mode"},"Release mode"),Object(n.b)("p",null,"Add the ",Object(n.b)("inlineCode",{parentName:"p"},".npmrc")," with the authToken."),Object(n.b)("p",null,"Start with the following dependencies in package.json. The major version numbers should all match."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@healthblocks-io/apollo": "3",\n  "@healthblocks-io/core": "3",\n  "@healthblocks-io/native": "3",\n}\n')),Object(n.b)("h3",{id:"safe-upgrade"},"Safe upgrade"),Object(n.b)("p",null,"To safely upgrade, use the upgrade-interactive command and select the @healthblocks-io libraries specifically. This will make changes in ",Object(n.b)("inlineCode",{parentName:"p"},"yarn.lock")," and not in ",Object(n.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade-interactive\n")),Object(n.b)("p",null,"The lockfile dictates what will be installed on your machine, your teammates machines and CI, so new package updates are never automatically applied behind your back."),Object(n.b)("h3",{id:"semi-safe-full-upgrade"},"Semi-safe full upgrade"),Object(n.b)("p",null,"If all dependencies are well-defined in your package.json, you can also do a full upgrade. This will safely upgrade all dependencies. As it's harder to know what going on in this case, it can be interesting to review yarn.lock to see which packages were upgraded."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade\n")),Object(n.b)("h3",{id:"dangerous-upgrade"},"Dangerous upgrade"),Object(n.b)("p",null,"Using the \u2014latest flag will ignore the version ranges in package.json. This is useful when upgrading from Expo 40 to Expo 41, but lots of things might change/break. Use ",Object(n.b)("inlineCode",{parentName:"p"},"expo upgrade")," instead."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# Not recommended\nyarn upgrade-interactive --latest\n")),Object(n.b)("h1",{id:"library-development-workspace-mode"},"Library development workspace mode"),Object(n.b)("h3",{id:"getting-started"},"Getting started"),Object(n.b)("p",null,"Healthblocks is distributed through Github Packages. The current packages may contain breaking changes regularly. On the other hand, you may want to customize or play around with the components. That's why it may make sense to use the package source instead of the officially released versions. Each package has a corresponding git repo. Start by initializing a git repo for each healthblocks-io/folder. Then you can pull in the latest changes, or switch between branches."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},'# Initialize git repos in @healthblocks-io\n[ -d "@healthblocks-io/core" ] && cd @healthblocks-io/core && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-js-core.git && git fetch && git reset --mixed origin/expo40 && cd ../..\n[ ! -d "@healthblocks-io/core" ] && mkdir -p @healthblocks-io/core && cd @healthblocks-io/core && git clone git@github.com:healthblocks-io/healthblocks-js-core.git . && git checkout -b expo40 origin/expo40 && cd ../..\n[ -d "@healthblocks-io/apollo" ] && cd @healthblocks-io/apollo && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-apollo.git && git fetch && git reset --mixed origin/expo40 && cd ../..\n[ ! -d "@healthblocks-io/apollo" ] && mkdir -p @healthblocks-io/apollo && cd @healthblocks-io/apollo && git clone git@github.com:healthblocks-io/healthblocks-apollo.git . && git checkout -b expo40 origin/expo40 && cd ../..\n[ -d "@healthblocks-io/native" ] && cd @healthblocks-io/native && git init && git checkout expo40 && git remote add origin git@github.com:healthblocks-io/healthblocks-js-native.git && git fetch && git reset --mixed origin/expo40 && cd ../..\n[ ! -d "@healthblocks-io/native" ] && mkdir -p @healthblocks-io/native && cd @healthblocks-io/native && git clone git@github.com:healthblocks-io/healthblocks-js-native.git . && git checkout -b expo40 origin/expo40 && cd ../..\n')),Object(n.b)("p",null,"The commands above will create a ",Object(n.b)("inlineCode",{parentName:"p"},".git")," but won't affect your working directory.\nLet's see how to upgrade:"),Object(n.b)("h3",{id:"upgrade-while-keeping-modifications"},"Upgrade while keeping modifications"),Object(n.b)("p",null,"This is the standard way to upgrade Healthblocks whilst keeping modifications:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-tsx"},"# Pull in changes\ncd @healthblocks-io/core   && git pull --autostash --rebase; cd ../..\ncd @healthblocks-io/apollo && git pull --autostash --rebase; cd ../..\ncd @healthblocks-io/native && git pull --autostash --rebase; cd ../..\n")),Object(n.b)("h3",{id:"upgrade-to-latest-version-while-resetting-modifications"},"Upgrade to latest version while resetting modifications"),Object(n.b)("p",null,'By "force upgrading", you will be up-to-date with the latest changes. Make sure to FIRST commit your changes in your app repo. All upgrades will show as changes in your app repo.'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# Force upgrade to latest (lose your library customizations)\ncd @healthblocks-io/core && git fetch; git reset --hard origin/expo40;cd ../..\ncd @healthblocks-io/apollo && git fetch; git reset --hard origin/expo40;cd ../..\ncd @healthblocks-io/native && git fetch; git reset --hard origin/expo40;cd ../..\n")),Object(n.b)("h3",{id:"handy-commands"},"Handy commands"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# Check for diff\ncd @healthblocks-io/core && git --no-pager diff ;cd ../..\ncd @healthblocks-io/apollo && git --no-pager diff ;cd ../..\ncd @healthblocks-io/native && git --no-pager diff ;cd ../..\n\n# Upgrade to latest\ncd @healthblocks-io/core && git pull;cd ../..\ncd @healthblocks-io/apollo && git pull;cd ../..\ncd @healthblocks-io/native && git pull;cd ../..\n\n# Status\ncd @healthblocks-io/core && git status;cd ../..\ncd @healthblocks-io/apollo && git status;cd ../..\ncd @healthblocks-io/native && git status;cd ../..\n")))}d.isMDXComponent=!0}}]);