"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[414],{3541:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can get pretty far without having to write any custom CSS. By supplying a ",(0,s.jsx)(n.code,{children:"cssVars"})," prop, you can override any of the CSS variables of the default css."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},7983:(e,n,r)=>{r.d(n,{Ay:()=>i});var s=r(3159),t=r(4913);r(1855);const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/\s/,"-").toLowerCase();function a(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"By default, all components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version."}),"\n",(0,s.jsxs)(n.p,{children:["To use the standard version, import it like: ",(0,s.jsxs)("code",{children:["import '@unleashit/",o(e.name),"/dist/",o(e.name),".css'"]}),". Or if you are using CSS Modules you can ",(0,s.jsxs)("code",{children:["import css from '@unleashit/",o(e.name),"/dist/",o(e.name),".module.css'"]})," and provide to the ",(0,s.jsx)(n.code,{children:"cssModule"})," prop and/or use your own custom module targeting the internal class names."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9820:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.p,{children:["You can easily customize the form fields, attribute, behavior and more my supplying a custom fields object and a zod schema to match. See ",(0,s.jsx)(n.a,{href:"/custom-fields",children:"Custom Fields"})," for more info."]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5953:(e,n,r)=>{r.d(n,{Ay:()=>a});var s=r(3159),t=r(4913);function o(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Setting the ",(0,s.jsx)(n.code,{children:"darkMode"})," prop activates dark mode."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/dark-mode",children:"Dark Mode"})," for more info."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var s=r(3159),t=r(4913),o=r(3478),a=r(4125),i=r(9820),l=r(7983),c=r(3541),d=r(5953);const u={title:"Quick Form",description:"Customizable React forgot password component"},m=void 0,p={id:"components/quickForm",title:"Quick Form",description:"Customizable React forgot password component",source:"@site/docs/components/quickForm.mdx",sourceDirName:"components",slug:"/components/quickForm",permalink:"/npm-library/components/quickForm",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/quickForm.mdx",tags:[],version:"current",frontMatter:{title:"Quick Form",description:"Customizable React forgot password component"},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/npm-library/components/pagination"},next:{title:"Recursive Data Lister",permalink:"/npm-library/components/recursiveDataLister"}},h={},f=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Basic Example with contact form",id:"basic-example-with-contact-form",level:3},{value:"With some features",id:"with-some-features",level:3},{value:"Custom Fields",id:"custom-fields",level:3},{value:"CSS",id:"css",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:3},{value:"Dark mode",id:"dark-mode",level:3},{value:"API",id:"api",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Quick Form is a form builder that lets you crank out simple forms fast. It's a wrapper for React Hook Form that handles much of the manual setup while still providing enough customization for typical needs. It produces the form based on a configuration, handles both client and server* validation and comes with basic styling."}),"\n",(0,s.jsx)(n.p,{children:"* When no config or schema are provided, Quick Form defaults as a standard contact form."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/unleashit/npm-library/master/packages/quickForm/quick-form.png",alt:"quick form"})}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simple form builder. Contact form by default."}),"\n",(0,s.jsx)(n.li,{children:"Custom fields: input, checkbox, textarea and select (more will be added)"}),"\n",(0,s.jsx)(n.li,{children:"Validation with Zod schemas"}),"\n",(0,s.jsx)(n.li,{children:"Handles server validation errors (response must be expected type)"}),"\n",(0,s.jsx)(n.li,{children:"Shows a success component on success and/or fires your onSuccess() function"}),"\n",(0,s.jsx)(n.li,{children:"Toast support"}),"\n",(0,s.jsx)(n.li,{children:"Error handling"}),"\n",(0,s.jsx)(n.li,{children:"Custom header and footer"}),"\n",(0,s.jsx)(n.li,{children:"Shows a default or custom loader"}),"\n",(0,s.jsx)(n.li,{children:"Basic CSS provided in both namespaced BEM and CSS module formats"}),"\n",(0,s.jsx)(n.li,{children:"Unique CSS module support: can provide your own css module styles to internal components without having to write global CSS."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://npm-library-demo.vercel.app/quick-form",children:"https://npm-library-demo.vercel.app/quick-form"})}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @unleashit/quick-form\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @unleashit/quick-form\n"})})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @unleashit/quick-form\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Peer dependencies:"})," react, react-hook-form, @hookform/resolvers and zod."]}),"\n",(0,s.jsx)(n.h3,{id:"basic-example-with-contact-form",children:"Basic Example with contact form"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import QuickForm, {\n  type FormValues,\n  type ServerResponse,\n} from '@unleashit/quick-form';\n\n// Assuming you have a bundler that handles css imports and you want to use the provided CSS\n// Alternatively, you can import the CSS Module version (see next example)\nimport '@unleashit/quick-form/dist/quick-form.css';\n\nfunction ContactUs() {\n  const quickFormHandler = async (\n    values: FormValues,\n  ): Promise<ServerResponse> => {\n    // should return an object with at least a success property of boolean\n    return fetch('https://example.com/api/contact', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(values),\n    }).then((resp) => resp.json());\n  };\n\n  return <QuickForm handler={quickFormHandler} showPhone />;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the form is a standard contact form with ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"email"})," and ",(0,s.jsx)(n.code,{children:"message"})," fields. Adding a ",(0,s.jsx)(n.code,{children:"showPhone"})," prop will add a phone field."]}),"\n",(0,s.jsxs)(n.p,{children:["The only required prop is ",(0,s.jsx)(n.code,{children:"handler"}),", which is a function that is called with the form values when the user submits the form. The handler should at a minimum return a promise with a success property of boolean. If there are serverside validation errors, an ",(0,s.jsx)(n.code,{children:"errors"})," property can be returned as an object with keys as the field names and values as the message to display. ",(0,s.jsx)(n.code,{children:"errors.root"})," is special. When set, it will either display prominently above the form or in a toast if a toast function is provided."]}),"\n",(0,s.jsx)(n.p,{children:"By default, if the form submits and received a successful response from the server, a default success component will display for several seconds before returning to a reset version of the form. There are various ways to customize or override the behavior:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Providing a custom ",(0,s.jsx)(n.code,{children:"successMessage"})," component overrides the default."]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"successMessageTimeout"})," to false will prevent the transition back to the empty form."]}),"\n",(0,s.jsxs)(n.li,{children:["By supplying an ",(0,s.jsx)(n.code,{children:"onSuccess"})," function, you can redirect or do anything you like."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"with-some-features",children:"With some features"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"import defaultStyles from '@unleashit/quick-form/dist/quick-form.module.css';\n\n// optional, but with this technique you can selectively override the default\n// css module classes with your own without having to resort to global style.\n// See main readme of the repo for more detail.\nimport customStyles from './styles/quick-form-overrides.module.scss';\nconst combinedStyles = { ...defaultStyles, ...customStyles };\n\nfunction ContactUs() {\n  const Header = () => {\n    return <h2>Contact Us</h2>;\n  };\n\n  const onSuccess = (resp: ServerResponse) => {\n    console.log('Success. Server responded with:', resp);\n    window.location.href = '/thank-you';\n  };\n\n  // called when a `root` error is returned from the server,\n  // or when contactHandler catches, for example a network error\n  const toastErrorHandler = (msg: string) => myToast.error(msg);\n\n  return (\n    <QuickForm\n      handler={contactHandler}\n      onSuccess={onSuccess}\n      // prevent default transition back to blank form since onSuccess includes a redirect\n      successMessageTimeout={false}\n      header={header}\n      cssModule={combinedStyles}\n      toast={toastErrorHandler}\n      // optional override to promise rejection message\n      failMsg=\"Something went wrong. Are you online?\"\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,s.jsx)(l.Ay,{name:u.title}),"\n",(0,s.jsx)(n.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"dark-mode",children:"Dark mode"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"QuickFormProps"})})," (extends ",(0,s.jsx)(n.code,{children:"BaseFormProps"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Props for the QuickForm component. QuickFormProps extends BaseFormProps. The only required prop is ",(0,s.jsx)(n.code,{children:"handler"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/quickForm/src/quickForm.tsx start=mdx_quickForm_props_start end=mdx_quickForm_props_end",children:"export type QuickFormProps = Omit<\n  BaseFormProps,\n  'linkComponent' | 'linkComponentHrefAttr'\n> & {\n  // show phone field (ignored when using custom fields)\n  showPhone?: boolean;\n  // show success msg for x ms, then toggle back to blank form\n  // 0 or false to disable toggle and leave message\n  successMessageTimeout?: number | false | null;\n  cssVars?: CSSVars<typeof varNames>;\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_base_form_start end=mdx_base_form_end",children:"export type BaseFormProps = {\n  /** Async handler to submit form. Receives form values and returns Promise with ServerResponse */\n  handler: <T extends ZodTypeAny>(\n    values: FormValues<T>,\n  ) => Promise<BaseServerResponse<FormValues<T>>>;\n  /** Handler that fires upon successful server validation */\n  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(\n    resp: BaseServerResponse<FormValues<T>, Meta>,\n  ) => void;\n  /** Header text for default header */\n  headerText?: string;\n  // /** Custom header component */\n  // header?: React.FC<DefaultHeaderProps> | null;\n  /** Custom footer component */\n  footer?: ComponentType<any>;\n  /** Custom loader component */\n  loader?: ComponentType<DefaultLoaderProps>;\n  /** Custom fields to override default fields */\n  customFields?: CustomField[];\n  /** Custom schema to override default schema */\n  customSchema?: z.AnyZodObject | z.ZodEffects<any>;\n  /**\n   * optionally send root server error message and/or\n   * handler exceptions to toast\n   */\n  toast?: (msg: string) => void;\n  /** override the default catch error shown to user */\n  failMsg?: string;\n  /** override or remove the default success message */\n  successMessage?: ComponentType<any> | string | false | null;\n  /** Link component for client side routing */\n  linkComponent?: ComponentType<any>;\n  /** Link component's href attribute */\n  linkComponentHrefAttr?: string;\n  /** Should the first field in the form be focused on page load */\n  isFocused?: boolean;\n  /**\n   * setting auto or undefined will honor prefers-color-scheme\n   * light or dark will force light or dark mode\n   */\n  darkMode?: boolean;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ServerResponse"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handler"})," function's promise should resolve a ",(0,s.jsx)(n.code,{children:"ServerResponse"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./packages/quickForm/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type ServerResponse<\n  TFormValues extends Record<string, any> = FormValues,\n  Meta extends Record<string, any> = Record<string, any>,\n> = BaseServerResponse<TFormValues, Meta>;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type BaseServerResponse<\n  TFormValues extends Record<string, string | string[]> = Record<string, any>,\n  Meta extends Record<string, any> = Record<string, any>,\n> = {\n  // success key informs client whether server validation passed or failed\n  success: boolean;\n  // errors only display if success=false\n  errors?: {\n    // Optional error msg to print in header\n    // or send to toast when server validation fails\n    root?: string | string[];\n    // pass any failing formValues\n    // as key=name of field, value=message or array of messages to print\n  } & Partial<TFormValues>;\n} & Meta;\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},4125:(e,n,r)=>{r.d(n,{A:()=>a});r(1855);var s=r(1038);const t={tabItem:"tabItem_XEw_"};var o=r(3159);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:r,children:n})}},3478:(e,n,r)=>{r.d(n,{A:()=>k});var s=r(1855),t=r(1038),o=r(5358),a=r(3178),i=r(5608),l=r(403),c=r(4688),d=r(5860);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=m(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=h({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),g=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(2308);const g={tabList:"tabList_wwcN",tabItem:"tabItem_EopO"};var v=r(3159);function y(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==s&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function k(e){const n=(0,x.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},4913:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(1855);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);