"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7057],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68399:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Next.js questionnaire"},l=void 0,p={unversionedId:"guides/next-template-app",id:"guides/next-template-app",isDocsHomePage:!1,title:"Next.js questionnaire",description:"Use cases:",source:"@site/docs/guides/next-template-app.md",sourceDirName:"guides",slug:"/guides/next-template-app",permalink:"/docs/guides/next-template-app",editUrl:"https://github.com/healthblocks-io/docs/edit/main/docs/guides/next-template-app.md",tags:[],version:"current",frontMatter:{title:"Next.js questionnaire"},sidebar:"docs",previous:{title:"Expo template app with Github Actions",permalink:"/docs/guides/expo-template-app"},next:{title:"Express",permalink:"/docs/guides/express"}},c=[{value:"Use cases:",id:"use-cases",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Steps",id:"steps",children:[],level:3}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"use-cases"},"Use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let's make a web app that allows the user to fill in a questionnaire.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install node.js 12.22+"),(0,i.kt)("li",{parentName:"ul"},"Create a project and note down the ",(0,i.kt)("inlineCode",{parentName:"li"},"pid")," (project id)")),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("p",null,"Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"healthblocks-template-app")," as the project name."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install next.js and healthblocks"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --typescript\n# Change directory to project folder\ncd healthblocks-template-app\nnpm install --save @healthblocks-io/core @healthblocks-io/apollo\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Healthblocks providers in ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/_app.tsx"),". This will enable the use of hooks throughout your whole app."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LocalProvider")," - Required: where in localStorage should data be saved",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectProvider")," Required: which project to load",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"AuthProvider")," - Required: handle sign in state",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"AnalyticsProvider")," - Optional: captures tracking events and sends them to API",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MixpanelProvider")," - Optional: captures tracking events and sends them to Mixpanel  "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<LocalProvider scope="example/local">\n  <ProjectProvider api="https://api.healthblocks.io" pid="example">\n    <AuthProvider>\n      <AnalyticsProvider>\n        <MixpanelProvider>\n          <Component {...pageProps} />\n        </MixpanelProvider>\n      </AnalyticsProvider>\n    </AuthProvider>\n  </ProjectProvider>\n</LocalProvider>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's create a sign in page in ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/index.tsx")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAuth, useUser } from '@healthblocks-io/core/auth'\nimport { useProjectFallback } from '@healthblocks-io/core/project'\n\nconst Home: NextPage = () => {\n  const fallback = useProjectFallback()\n  const { signOut, signInAnonymously } = useAuth()\n  const user = useUser()\n  return (\n    <div className={styles.container}>\n      <main className={styles.main}>\n        {fallback ? (\n          'Project is not loaded...'\n        ) : !user ? (\n          <button onClick={signInAnonymously}>Sign in anonymously</button>\n        ) : (\n          <div>\n            Signed in as {user.sub}!\n            <br />\n            <button onClick={signOut}>Sign out</button>\n          </div>\n        )}\n      </main>\n    </div>\n  )\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now let's show the questionnaire to logged in users"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQuestionnaireByName } from \'@healthblocks-io/core/content\'\n\nconst Questionnaire = () => {\n  const [questionnaire] = useQuestionnaireByName(\'intake\')\n  return (\n    <div className="questionnaire">\n      {questionnaire?.questions.map((question, key) => (\n        <div className="question" key={key}>\n          #{key + 1}: {question.text}\n          {question.config?.replies?.map((reply, key) => (\n            <div className="reply" key={key}>\n              #{key + 1}: {reply.title}\n            </div>\n          ))}\n        </div>\n      ))}\n    </div>\n  )\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We won't go into keeping the state of the questionnaire response while the user is filling it in. Let's immediately go to the final step of a questionnaire: submitting the response."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQuestionnaireByName } from '@healthblocks-io/core/content'\nimport { useFHIR } from '@healthblocks-io/core/fhir'\n\nconst Questionnaire = () => {\n  const [questionnaire] = useQuestionnaireByName('intake')\n  const [answers] = useState([{ text: 'Good', question_id: 'abc' }])\n  const { create } = useFHIR()\n  const submit = async () => {\n    await create({\n      resourceType: 'QuestionnaireResponse',\n      answers,\n      questionnaire_id: questionnaire!.id,\n    })\n    alert('Success!')\n  }\n  return (\n    <div className=\"questionnaire\">\n      ...\n      <button onClick={submit}>Submit my response</button>\n    </div>\n  )\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's see if the response was actually saved by creating a page that shows all responses."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSearch } from \'@healthblocks-io/core/fhir\'\n\nconst Responses = () => {\n  const { data, error, loading } = useSearch<QuestionnaireResponse>({\n    type: \'QuestionnaireResponse\',\n  })\n\n  return (\n    <div className="responses">\n      {data?.entry.map((response, key) => (\n        <div className="response" key={key}>\n          {response.questionnaire.title}\n          {response.answers.map((answer) => (\n            <div className="response" key={key}>\n              {answer.text}\n            </div>\n          ))}\n        </div>\n      ))}\n    </div>\n  )\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"That's it! Every questionnaire response should show up in the list of responses."))))}m.isMDXComponent=!0}}]);