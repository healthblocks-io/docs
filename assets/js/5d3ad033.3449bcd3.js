"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7057],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"Getting started with Next.js"},l=void 0,p={unversionedId:"guides/next-template-app",id:"guides/next-template-app",title:"Getting started with Next.js",description:"Use cases:",source:"@site/docs/guides/next-template-app.md",sourceDirName:"guides",slug:"/guides/next-template-app",permalink:"/docs/guides/next-template-app",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/next-template-app.md",tags:[],version:"current",frontMatter:{title:"Getting started with Next.js"},sidebar:"docs",previous:{title:"Getting started using Expo template app",permalink:"/docs/guides/expo-template-app"},next:{title:"Local setup",permalink:"/docs/deploy/local"}},c={},u=[{value:"Use cases:",id:"use-cases",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"use-cases"},"Use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let's make a web app that allows the user to fill in a questionnaire.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install node.js 12.22+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/project"},"Create a project")," and note down the ",(0,i.kt)("inlineCode",{parentName:"li"},"pid")," (project id)")),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("p",null,"Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"healthblocks-template-app")," as the project name."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install next.js and healthblocks"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --typescript\n# Change directory to project folder\ncd healthblocks-template-app\nnpm install --save @healthblocks-io/core @healthblocks-io/apollo\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Healthblocks providers in ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/_app.tsx"),". This will enable the use of hooks throughout your whole app."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LocalProvider")," - Required: where in localStorage should data be saved",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectProvider")," Required: which project to load",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"AuthProvider")," - Required: handle sign in state",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"AnalyticsProvider")," - Optional: captures tracking events and sends them to API",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MixpanelProvider")," - Optional: captures tracking events and sends them to Mixpanel"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<LocalProvider scope="example/local">\n  <ProjectProvider api="https://api.healthblocks.io" pid="example">\n    <AuthProvider>\n      <AnalyticsProvider>\n        <MixpanelProvider>\n          <Component {...pageProps} />\n        </MixpanelProvider>\n      </AnalyticsProvider>\n    </AuthProvider>\n  </ProjectProvider>\n</LocalProvider>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's create a sign in page in ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/index.tsx")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAuth, useUser } from '@healthblocks-io/core/auth'\nimport { useProjectFallback } from '@healthblocks-io/core/project'\n\nconst Home: NextPage = () => {\n  const fallback = useProjectFallback()\n  const { signOut, signInAnonymously } = useAuth()\n  const user = useUser()\n  return (\n    <div className={styles.container}>\n      <main className={styles.main}>\n        {fallback ? (\n          'Project is not loaded...'\n        ) : !user ? (\n          <button onClick={signInAnonymously}>Sign in anonymously</button>\n        ) : (\n          <div>\n            Signed in as {user.sub}!\n            <br />\n            <button onClick={signOut}>Sign out</button>\n          </div>\n        )}\n      </main>\n    </div>\n  )\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now let's show the questionnaire to logged in users"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuestionnaireByName } from \'@healthblocks-io/core/content\'\n\nconst Questionnaire = () => {\n  const [questionnaire] = useQuestionnaireByName(\'intake\')\n  return (\n    <div className="questionnaire">\n      {questionnaire?.questions.map((question, key) => (\n        <div className="question" key={key}>\n          #{key + 1}: {question.text}\n          {question.config?.replies?.map((reply, key) => (\n            <div className="reply" key={key}>\n              #{key + 1}: {reply.title}\n            </div>\n          ))}\n        </div>\n      ))}\n    </div>\n  )\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We won't go into keeping the state of the questionnaire response while the user is filling it in. Let's immediately go to the final step of a questionnaire: submitting the response."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQuestionnaireByName } from '@healthblocks-io/core/content'\nimport { useFHIR } from '@healthblocks-io/core/fhir'\n\nconst Questionnaire = () => {\n  const [questionnaire] = useQuestionnaireByName('intake')\n  const [answers] = useState([{ text: 'Good', question_id: 'abc' }])\n  const { create } = useFHIR()\n  const submit = async () => {\n    await create({\n      resourceType: 'QuestionnaireResponse',\n      answers,\n      questionnaire_id: questionnaire!.id,\n    })\n    alert('Success!')\n  }\n  return (\n    <div className=\"questionnaire\">\n      ...\n      <button onClick={submit}>Submit my response</button>\n    </div>\n  )\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's see if the response was actually saved by creating a page that shows all responses."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSearch } from \'@healthblocks-io/core/fhir\'\n\nconst Responses = () => {\n  const { data, error, loading } = useSearch<QuestionnaireResponse>({\n    type: \'QuestionnaireResponse\',\n  })\n\n  return (\n    <div className="responses">\n      {data?.entry.map((response, key) => (\n        <div className="response" key={key}>\n          {response.questionnaire.title}\n          {response.answers.map(answer => (\n            <div className="response" key={key}>\n              {answer.text}\n            </div>\n          ))}\n        </div>\n      ))}\n    </div>\n  )\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"That's it! Every questionnaire response should show up in the list of responses."))))}d.isMDXComponent=!0}}]);