"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[322],{3541:(e,n,s)=>{s.d(n,{Ay:()=>a});var r=s(3159),t=s(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can get pretty far without having to write any custom CSS. By supplying a ",(0,r.jsx)(n.code,{children:"cssVars"})," prop, you can override any of the CSS variables of the default css."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1065:(e,n,s)=>{s.d(n,{Ay:()=>i});var r=s(3159),t=s(4913);s(1855);const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/\s/,"-").toLowerCase();function a(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"By default, all components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version."}),"\n",(0,r.jsxs)(n.p,{children:["To use the standard version, import it like: ",(0,r.jsxs)("code",{children:["import '@unleashit/",o(e.name),"/dist/",o(e.name),".css'"]}),". Or if you are using CSS Modules you can ",(0,r.jsxs)("code",{children:["import css from '@unleashit/",o(e.name),"/dist/",o(e.name),".module.css'"]})," and provide to the ",(0,r.jsx)(n.code,{children:"cssModule"})," prop and/or use your own custom module targeting the internal class names."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},9820:(e,n,s)=>{s.d(n,{Ay:()=>a});var r=s(3159),t=s(4913);function o(e){const n={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["You can easily customize the form fields, attribute, behavior and more my supplying a custom fields object and a zod schema to match. See ",(0,r.jsx)(n.a,{href:"/custom-fields",children:"Custom Fields"})," for more info."]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},5953:(e,n,s)=>{s.d(n,{Ay:()=>a});var r=s(3159),t=s(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Setting the ",(0,r.jsx)(n.code,{children:"darkMode"})," prop activates dark mode."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/dark-mode",children:"Dark Mode"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var r=s(3159),t=s(4913),o=s(9624),a=s(1708),i=s(9820),l=s(1065),c=s(3541),d=s(5953);const u={title:"Signup",description:"Customizable React signup component"},p=void 0,m={id:"components/signup",title:"Signup",description:"Customizable React signup component",source:"@site/docs/components/signup.mdx",sourceDirName:"components",slug:"/components/signup",permalink:"/npm-library/components/signup",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/signup.mdx",tags:[],version:"current",frontMatter:{title:"Signup",description:"Customizable React signup component"},sidebar:"tutorialSidebar",previous:{title:"Recursive Data Lister",permalink:"/npm-library/components/recursiveDataLister"},next:{title:"Custom Fields",permalink:"/npm-library/custom-fields"}},h={},g=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"Social Sign up",id:"social-sign-up",level:3},{value:"Custom Fields",id:"custom-fields",level:3},{value:"CSS",id:"css",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:3},{value:"Dark mode",id:"dark-mode",level:3},{value:"API",id:"api",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Customizable React signup component that validates against a default or custom Zod schema."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/unleashit/npm-library/master/packages/signup/signup.png",alt:"signup component"})}),"\n",(0,r.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Displays and handles client and serverside errors"}),"\n",(0,r.jsx)(n.li,{children:"Custom fields and schema"}),"\n",(0,r.jsx)(n.li,{children:"Show a success component and/or provide an onSuccess function to redirect, set state, etc."}),"\n",(0,r.jsx)(n.li,{children:"Show social logins either above or below email signup with optional separator"}),"\n",(0,r.jsx)(n.li,{children:"Custom header/footer"}),"\n",(0,r.jsx)(n.li,{children:"Loader (default or custom)"}),"\n",(0,r.jsx)(n.li,{children:"Show a link to login"}),"\n",(0,r.jsx)(n.li,{children:"Client router support for links"}),"\n",(0,r.jsx)(n.li,{children:"Toast support"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://npm-library-demo.vercel.app/signup",children:"https://npm-library-demo.vercel.app/signup"})}),"\n",(0,r.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,r.jsx)(a.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @unleashit/signup\n"})})}),(0,r.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @unleashit/signup\n"})})}),(0,r.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @unleashit/signup\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Peer dependencies:"})," react, react-hook-form, @hookform/resolvers and zod."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import Signup, { FormValues, ServerResponse } from '@unleashit/signup';\nimport { useNavigate } from 'react-router-dom';\n\nfunction SignupDemo() {\n  const navigate = useNavigate();\n\n  const signupHandler = async (values: FormValues): Promise<ServerResponse> => {\n    // server should return a ServerResponse\n    // success property of true indicates all validations pass\n    // errors named after field names will display with fields\n    // error with property of \"root\" will display at the top or sent to toast\n    return await fetch('https://api.example.com/signup', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(values),\n    }).then((resp) => resp.json());\n  };\n\n  const onSuccess = (resp: ServerResponse) => {\n    // Redirect or set auth state, etc.\n    // resp has full server response from signupHandler()\n    navigate('/');\n  };\n\n  return (\n    <Signup handler={signupHandler} onSuccess={onSuccess} />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"social-sign-up",children:"Social Sign up"}),"\n",(0,r.jsx)(n.p,{children:"Adding social sign up buttons is easy. Simply include them as children and they will display (by default) under the main login with a nice separator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import { GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';\n\n<Signup handler={/* ... */}>\n  <TwitterLoginButton onClick={() => alert('Hello')}>\n    Sign up with Twitter\n  </TwitterLoginButton>\n  <GithubLoginButton onClick={() => alert('Hello')}>\n    Sign up with Github\n  </GithubLoginButton>\n</Signup>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,r.jsx)(l.Ay,{name:u.title}),"\n",(0,r.jsx)(n.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"dark-mode",children:"Dark mode"}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"SignupProps"})})," (extends ",(0,r.jsx)(n.code,{children:"BaseFormProps"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Props for the Signup component. SignupFormProps extends BaseFormProps. The only required prop is ",(0,r.jsx)(n.code,{children:"handler"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/signup/src/signup.tsx start=mdx_signup_props_start end=mdx_signup_props_end",children:"export type SignupProps = BaseFormProps & {\n  /**\n   * Custom header component or\n   * false to disable the default header\n   */\n  header?: ComponentType<DefaultSignupHeaderProps> | ReactNode | false;\n  /**\n   * Override the login link inside the default header\n   * Note: if you provide a header prop, the login link will not appear\n   */\n  loginLink?: ComponentType | ReactNode;\n  /**\n   * Add a separator between email and\n   * social logins  (children required)\n   */\n  orLine?: boolean;\n  /** CSS custom property overrides */\n  cssVars?: CSSVars<typeof varNames>;\n  /** Position of children */\n  children?: ReactNode;\n  /** Social logins or other content to display */\n  childrenPosition?: 'top' | 'bottom';\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_base_form_start end=mdx_base_form_end",children:"export type BaseFormProps = {\n  /** Handler to submit form. Receives form values and returns Promise with ServerResponse */\n  handler: <T extends ZodTypeAny>(\n    values: FormValues<T>,\n    event?: Event,\n  ) => Promise<BaseServerResponse<FormValues<T>>>;\n  /** Handler that fires upon successful server validation */\n  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(\n    resp: BaseServerResponse<FormValues<T>, Meta>,\n  ) => void;\n  /** Header text for default header */\n  headerText?: string;\n  /** Custom loader component */\n  loader?: ComponentType<DefaultLoaderProps>;\n  /** Label for form submit button */\n  buttonText?: string;\n  /** Custom fields to override default fields */\n  customFields?: CustomField[];\n  /** Custom schema to override default schema */\n  customSchema?: z.AnyZodObject | z.ZodEffects<any>;\n  /**\n   * optionally send root server error message and/or\n   * handler exceptions to toast\n   */\n  toast?: (msg: string) => void;\n  /** override the default catch error shown to user */\n  failMsg?: string;\n  /** override or remove the default success message */\n  successMessage?: ComponentType<any> | string | false | null;\n  /**\n   * Link component for client side routing\n   *\n   */\n  // linkComponent?: ComponentType<any>;\n  /** Link component's href attribute */\n  // linkComponentHrefAttr?: string;\n  /**\n   * Props to pass to Link component\n   * If you include a linkComponent, you must include linkComponentProps\n   * with a minimum of href or its equivalent\n   */\n  // linkComponentProps?: Record<string, any>;\n  /** Should the first field in the form be focused on page load */\n  isFocused?: boolean;\n  /**\n   * setting auto or undefined will honor prefers-color-scheme\n   * light or dark will force light or dark mode\n   */\n  darkMode?: boolean;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ServerResponse"})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"handler"})," function's promise should resolve a ",(0,r.jsx)(n.code,{children:"ServerResponse"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/signup/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type ServerResponse<\n  TFormValues extends Record<string, any> = FormValues,\n  Meta extends Record<string, any> = Record<string, any>,\n> = BaseServerResponse<TFormValues, Meta>;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type BaseServerResponse<\n  TFormValues extends Record<string, string | string[]> = Record<string, any>,\n  Meta extends Record<string, any> = Record<string, any>,\n> = {\n  /* success key informs client whether server validation passed or failed */\n  success: boolean;\n  /* errors only display if success=false */\n  errors?: {\n    /* Optional error msg to print in header\n     * or send to toast when server validation fails\n     */\n    root?: string | string[];\n    /*\n     * pass any failing formValues\n     * as key=name of field, value=message or array of messages to print\n     */\n  } & Partial<TFormValues>;\n} & Meta;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},1708:(e,n,s)=>{s.d(n,{A:()=>a});s(1855);var r=s(1038);const t={tabItem:"tabItem_XEw_"};var o=s(3159);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:s,children:n})}},9624:(e,n,s)=>{s.d(n,{A:()=>S});var r=s(1855),t=s(1038),o=s(4125),a=s(3178),i=s(9545),l=s(5142),c=s(9527),d=s(6253);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=h({queryString:s,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:t}),x=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=s(1275);const x={tabList:"tabList_wwcN",tabItem:"tabItem_EopO"};var v=s(3159);function y(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=i[s].value;t!==r&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:t}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function S(e){const n=(0,f.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},4913:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(1855);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);