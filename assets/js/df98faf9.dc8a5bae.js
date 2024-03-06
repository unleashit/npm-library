"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[606],{3541:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can get pretty far without having to write any custom CSS. By supplying a ",(0,s.jsx)(n.code,{children:"cssVars"})," prop, you can override any of the CSS variables of the default css."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},7983:(e,n,r)=>{r.d(n,{Ay:()=>i});var s=r(3159),t=r(4913);r(1855);const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/\s/,"-").toLowerCase();function a(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"By default, all components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version."}),"\n",(0,s.jsxs)(n.p,{children:["To use the standard version, import it like: ",(0,s.jsxs)("code",{children:["import '@unleashit/",o(e.name),"/dist/",o(e.name),".css'"]}),". Or if you are using CSS Modules you can ",(0,s.jsxs)("code",{children:["import css from '@unleashit/",o(e.name),"/dist/",o(e.name),".module.css'"]})," and provide to the ",(0,s.jsx)(n.code,{children:"cssModule"})," prop and/or use your own custom module targeting the internal class names."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9820:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.p,{children:["You can easily customize the form fields, attribute, behavior and more my supplying a custom fields object and a zod schema to match. See ",(0,s.jsx)(n.a,{href:"/custom-fields",children:"Custom Fields"})," for more info."]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5953:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Setting the ",(0,s.jsx)(n.code,{children:"darkMode"})," prop activates dark mode."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/dark-mode",children:"Dark Mode"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2956:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var s=r(3159),t=r(4913),o=r(3478),a=r(4125),i=r(9820),l=r(7983),c=r(3541),d=r(5953);const u={title:"Login",description:"Customizable React login component"},p=void 0,m={id:"components/login",title:"Login",description:"Customizable React login component",source:"@site/docs/components/login.mdx",sourceDirName:"components",slug:"/components/login",permalink:"/npm-library/components/login",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/login.mdx",tags:[],version:"current",frontMatter:{title:"Login",description:"Customizable React login component"},sidebar:"tutorialSidebar",previous:{title:"Forgot Password",permalink:"/npm-library/components/forgotPassword"},next:{title:"Modal",permalink:"/npm-library/components/modal"}},h={},g=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"With Social Logins",id:"with-social-logins",level:3},{value:"Custom Fields",id:"custom-fields",level:3},{value:"CSS",id:"css",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:3},{value:"Dark mode",id:"dark-mode",level:3},{value:"API",id:"api",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Customizable React login component that validates against a default or custom Zod schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/unleashit/npm-library/master/packages/login/login.png",alt:"login component"})}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Displays and handles client and serverside errors"}),"\n",(0,s.jsx)(n.li,{children:"Custom fields and schema"}),"\n",(0,s.jsx)(n.li,{children:"Show a success component and/or provide an onSuccess function to redirect, set state, etc."}),"\n",(0,s.jsx)(n.li,{children:"Show social logins either above or below email login with optional separator"}),"\n",(0,s.jsx)(n.li,{children:"Custom header/footer"}),"\n",(0,s.jsx)(n.li,{children:"Loader (default or custom)"}),"\n",(0,s.jsx)(n.li,{children:"Show a link to registration"}),"\n",(0,s.jsx)(n.li,{children:"Show a forgot password link"}),"\n",(0,s.jsx)(n.li,{children:"Client router support for links"}),"\n",(0,s.jsx)(n.li,{children:"Toast support"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://npm-library-demo.vercel.app/login",children:"https://npm-library-demo.vercel.app/login"})}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @unleashit/login\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @unleashit/login\n"})})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @unleashit/login\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Peer dependencies:"})," react, react-hook-form, @hookform/resolvers and zod."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import Login, { FormValues, ServerResponse } from '@unleashit/login';\nimport { useNavigate } from 'react-router-dom';\n\nfunction LoginDemo() {\n  const navigate = useNavigate();\n\n  const loginHandler = async (values: FormValues): Promise<ServerResponse> => {\n    // server should return a ServerResponse\n    // success property of true indicates all validations pass\n    // errors named after field names will display with fields\n    // error with property of \"root\" will display at the top or sent to toast\n    return await fetch('https://api.example.com/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(values),\n    }).then((resp) => resp.json());\n  };\n\n  const onSuccess = (resp: ServerResponse) => {\n    // Redirect or set auth state, etc.\n    // resp has full server response from loginHandler()\n    navigate('/');\n  };\n\n  return <Login handler={loginHandler} onSuccess={onSuccess} />;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"with-social-logins",children:"With Social Logins"}),"\n",(0,s.jsx)(n.p,{children:"Adding social logins is easy. Simply include them as children and they will display (by default) under the main login with a nice separator."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import {\n  GithubLoginButton,\n  TwitterLoginButton,\n} from 'react-social-login-buttons';\n\n<Login handler={/* ... */}>\n  <TwitterLoginButton onClick={() => alert('Hello')}>\n    Sign in with Twitter\n  </TwitterLoginButton>\n  <GithubLoginButton onClick={() => alert('Hello')}>\n    Sign in with Github\n  </GithubLoginButton>\n</Login>\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,s.jsx)(l.Ay,{name:u.title}),"\n",(0,s.jsx)(n.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"dark-mode",children:"Dark mode"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"LoginProps"})})," (extends ",(0,s.jsx)(n.code,{children:"BaseFormProps"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Props for the Login component. LoginFormProps extends BaseFormProps. The only required prop is ",(0,s.jsx)(n.code,{children:"handler"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/login/src/login.tsx start=mdx_login_props_start end=mdx_login_props_end",children:"export type LoginProps = BaseFormProps & {\n  /** Custom header component */\n  header?: ComponentType<DefaultLoginHeaderProps> | false | null;\n  /** Route or URL for link to signup component */\n  signupUrl?: string;\n  /** Add a seperator between email and social logins */\n  orLine?: boolean;\n  /** Route or URL for link to forgot password component */\n  forgotPasswordLink?: string | false | null;\n  /** Text for forgot password link */\n  forgotPasswordLinkText?: string;\n  /** CSS custom property overrides */\n  cssVars?: CSSVars<typeof varNames>;\n  /** Position of children */\n  childrenPosition?: 'top' | 'bottom';\n  /** Social logins or other content to display */\n  children?: React.ReactNode;\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_base_form_start end=mdx_base_form_end",children:"export type BaseFormProps = {\n  /** Async handler to submit form. Receives form values and returns Promise with ServerResponse */\n  handler: <T extends ZodTypeAny>(\n    values: FormValues<T>,\n  ) => Promise<BaseServerResponse<FormValues<T>>>;\n  /** Handler that fires upon successful server validation */\n  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(\n    resp: BaseServerResponse<FormValues<T>, Meta>,\n  ) => void;\n  /** Header text for default header */\n  headerText?: string;\n  // /** Custom header component */\n  // header?: React.FC<DefaultHeaderProps> | null;\n  /** Custom footer component */\n  footer?: ComponentType<any>;\n  /** Custom loader component */\n  loader?: ComponentType<DefaultLoaderProps>;\n  /** Custom fields to override default fields */\n  customFields?: CustomField[];\n  /** Custom schema to override default schema */\n  customSchema?: z.AnyZodObject | z.ZodEffects<any>;\n  /**\n   * optionally send root server error message and/or\n   * handler exceptions to toast\n   */\n  toast?: (msg: string) => void;\n  /** override the default catch error shown to user */\n  failMsg?: string;\n  /** override or remove the default success message */\n  successMessage?: ComponentType<any> | string | false | null;\n  /** Link component for client side routing */\n  linkComponent?: ComponentType<any>;\n  /** Link component's href attribute */\n  linkComponentHrefAttr?: string;\n  /** Should the first field in the form be focused on page load */\n  isFocused?: boolean;\n  /**\n   * setting auto or undefined will honor prefers-color-scheme\n   * light or dark will force light or dark mode\n   */\n  darkMode?: boolean;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ServerResponse"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handler"})," function's promise should resolve a ",(0,s.jsx)(n.code,{children:"ServerResponse"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/login/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type ServerResponse<\n  TFormValues extends Record<string, any> = FormValues,\n  Meta extends Record<string, any> = Record<string, any>,\n> = BaseServerResponse<TFormValues, Meta>;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type BaseServerResponse<\n  TFormValues extends Record<string, string | string[]> = Record<string, any>,\n  Meta extends Record<string, any> = Record<string, any>,\n> = {\n  // success key informs client whether server validation passed or failed\n  success: boolean;\n  // errors only display if success=false\n  errors?: {\n    // Optional error msg to print in header\n    // or send to toast when server validation fails\n    root?: string | string[];\n    // pass any failing formValues\n    // as key=name of field, value=message or array of messages to print\n  } & Partial<TFormValues>;\n} & Meta;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},4125:(e,n,r)=>{r.d(n,{A:()=>a});r(1855);var s=r(1038);const t={tabItem:"tabItem_XEw_"};var o=r(3159);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:r,children:n})}},3478:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(1855),t=r(1038),o=r(5358),a=r(3178),i=r(5608),l=r(403),c=r(4688),d=r(5860);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=h({queryString:r,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),x=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=r(2308);const x={tabList:"tabList_wwcN",tabItem:"tabItem_EopO"};var v=r(3159);function y(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==s&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},4913:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(1855);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);