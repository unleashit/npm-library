"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[414],{297:(e,s,n)=>{n.d(s,{Ay:()=>i,RM:()=>t});var r=n(5723),o=n(1373);const t=[];function a(e){const s={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(s.p,{children:["You can easily customize the form fields, attribute, behavior and more my supplying a custom fields object and a zod schema to match. See ",(0,r.jsx)(s.a,{href:"/custom-fields",children:"Custom Fields"})," for more info."]})}function i(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4977:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var r=n(5723),o=n(1373),t=n(6196),a=n(7867),i=n(297),l=n(6810),c=n(4950),d=n(6132);const m={title:"Quick Form",description:"Customizable React forgot password component"},u=void 0,h={id:"components/quickForm",title:"Quick Form",description:"Customizable React forgot password component",source:"@site/docs/components/quickForm.mdx",sourceDirName:"components",slug:"/components/quickForm",permalink:"/npm-library/components/quickForm",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/quickForm.mdx",tags:[],version:"current",frontMatter:{title:"Quick Form",description:"Customizable React forgot password component"},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/npm-library/components/pagination"},next:{title:"Recursive Data Lister",permalink:"/npm-library/components/recursiveDataLister"}},p={},f=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Basic Example with contact form",id:"basic-example-with-contact-form",level:3},{value:"With some features",id:"with-some-features",level:3},{value:"Custom Fields",id:"custom-fields",level:3},...i.RM,{value:"CSS",id:"css",level:3},...l.RM,{value:"CSS Custom Properties",id:"css-custom-properties",level:3},...c.RM,{value:"Dark mode",id:"dark-mode",level:3},...d.RM,{value:"API",id:"api",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Quick Form is a form builder that lets you crank out simple forms fast. It's a wrapper for React Hook Form that handles much of the manual setup while still providing enough customization for typical needs. It produces the form based on a configuration, handles both client and server* validation and comes with basic styling."}),"\n",(0,r.jsx)(s.p,{children:"* When no config or schema are provided, Quick Form defaults as a standard contact form."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/unleashit/npm-library/master/packages/quickForm/quick-form.png",alt:"quick form"})}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Simple form builder. Contact form by default."}),"\n",(0,r.jsx)(s.li,{children:"Custom fields: input, checkbox, textarea and select (more will be added)"}),"\n",(0,r.jsx)(s.li,{children:"Validation with Zod schemas"}),"\n",(0,r.jsx)(s.li,{children:"Handles server validation errors (response must be expected type)"}),"\n",(0,r.jsx)(s.li,{children:"Shows a success component on success and/or fires your onSuccess() function"}),"\n",(0,r.jsx)(s.li,{children:"Toast support"}),"\n",(0,r.jsx)(s.li,{children:"Error handling"}),"\n",(0,r.jsx)(s.li,{children:"Custom header and footer"}),"\n",(0,r.jsx)(s.li,{children:"Shows a default or custom loader"}),"\n",(0,r.jsx)(s.li,{children:"Basic CSS provided in both namespaced BEM and CSS module formats"}),"\n",(0,r.jsx)(s.li,{children:"Unique CSS module support: can provide your own css module styles to internal components without having to write global CSS."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://npm-library-demo.vercel.app/quick-form",children:"https://npm-library-demo.vercel.app/quick-form"})}),"\n",(0,r.jsx)(s.h3,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(t.A,{groupId:"npm2yarn",children:[(0,r.jsx)(a.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm install @unleashit/quick-form\n"})})}),(0,r.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yarn add @unleashit/quick-form\n"})})}),(0,r.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pnpm add @unleashit/quick-form\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Peer dependencies:"})," react, react-hook-form, @hookform/resolvers and zod."]}),"\n",(0,r.jsx)(s.h3,{id:"basic-example-with-contact-form",children:"Basic Example with contact form"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"jsx",children:"import QuickForm, {\n  type FormValues,\n  type ServerResponse,\n} from '@unleashit/quick-form';\n\n// Assuming you have a bundler that handles css imports and you want to use the provided CSS\n// Alternatively, you can import the CSS Module version (see next example)\nimport '@unleashit/quick-form/dist/quick-form.css';\n\nfunction ContactUs() {\n  const quickFormHandler = async (\n    values: FormValues,\n  ): Promise<ServerResponse> => {\n    // should return an object with at least a success property of boolean\n    return fetch('https://example.com/api/contact', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(values),\n    }).then((resp) => resp.json());\n  };\n\n  return <QuickForm handler={quickFormHandler} showPhone />;\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["By default, the form is a standard contact form with ",(0,r.jsx)(s.code,{children:"name"}),", ",(0,r.jsx)(s.code,{children:"email"})," and ",(0,r.jsx)(s.code,{children:"message"})," fields. Adding a ",(0,r.jsx)(s.code,{children:"showPhone"})," prop will add a phone field."]}),"\n",(0,r.jsxs)(s.p,{children:["The only required prop is ",(0,r.jsx)(s.code,{children:"handler"}),", which is a function that is called with the form values when the user submits the form. The handler should at a minimum return a promise with a success property of boolean. If there are serverside validation errors, an ",(0,r.jsx)(s.code,{children:"errors"})," property can be returned as an object with keys as the field names and values as the message to display. ",(0,r.jsx)(s.code,{children:"errors.root"})," is special. When set, it will either display prominently above the form or in a toast if a toast function is provided."]}),"\n",(0,r.jsx)(s.p,{children:"By default, if the form submits and received a successful response from the server, a default success component will display for several seconds before returning to a reset version of the form. There are various ways to customize or override the behavior:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Providing a custom ",(0,r.jsx)(s.code,{children:"successMessage"})," component overrides the default."]}),"\n",(0,r.jsxs)(s.li,{children:["Setting ",(0,r.jsx)(s.code,{children:"successMessageTimeout"})," to false will prevent the transition back to the empty form."]}),"\n",(0,r.jsxs)(s.li,{children:["By supplying an ",(0,r.jsx)(s.code,{children:"onSuccess"})," function, you can redirect or do anything you like."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"with-some-features",children:"With some features"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"jsx",children:"import defaultStyles from '@unleashit/quick-form/dist/quick-form.module.css';\n\n// optional, but with this technique you can selectively override the default\n// css module classes with your own without having to resort to global style.\n// See main readme of the repo for more detail.\nimport customStyles from './styles/quick-form-overrides.module.scss';\nconst combinedStyles = { ...defaultStyles, ...customStyles };\n\nfunction ContactUs() {\n  const Header = () => {\n    return <h2>Contact Us</h2>;\n  };\n\n  const onSuccess = (resp: ServerResponse) => {\n    console.log('Success. Server responded with:', resp);\n    window.location.href = '/thank-you';\n  };\n\n  // called when a `root` error is returned from the server,\n  // or when contactHandler catches, for example a network error\n  const toastErrorHandler = (msg: string) => myToast.error(msg);\n\n  return (\n    <QuickForm\n      handler={contactHandler}\n      onSuccess={onSuccess}\n      // prevent default transition back to blank form since onSuccess includes a redirect\n      successMessageTimeout={false}\n      header={header}\n      cssModule={combinedStyles}\n      toast={toastErrorHandler}\n      // optional override to promise rejection message\n      failMsg=\"Something went wrong. Are you online?\"\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"custom-fields",children:"Custom Fields"}),"\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(s.h3,{id:"css",children:"CSS"}),"\n",(0,r.jsx)(l.Ay,{name:m.title}),"\n",(0,r.jsx)(s.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(s.h3,{id:"dark-mode",children:"Dark mode"}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(s.h3,{id:"api",children:"API"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"QuickFormProps"})})," (extends ",(0,r.jsx)(s.code,{children:"BaseFormProps"}),")"]}),"\n",(0,r.jsxs)(s.p,{children:["Props for the QuickForm component. QuickFormProps extends BaseFormProps. The only required prop is ",(0,r.jsx)(s.code,{children:"handler"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"file=./packages/quickForm/src/quickForm.tsx start=mdx_quickForm_props_start end=mdx_quickForm_props_end",children:"export type QuickFormProps = BaseFormProps & {\n  /** show phone field (ignored when using custom fields) */\n  showPhone?: boolean;\n  /** Custom footer component */\n  footer?: ComponentType | ReactNode;\n  /**\n   * Show success message for x ms, then toggle back to blank form.\n   * Use 0 or false to disable the toggle and keep message\n   */\n  successMessageTimeout?: number | false | null;\n  /** CSS custom property overrides */\n  cssVars?: CSSVars<typeof varNames>;\n};\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_base_form_start end=mdx_base_form_end",children:"export type BaseFormProps = {\n  /** Handler to submit form. Receives form values and returns Promise with ServerResponse */\n  handler: <T extends ZodTypeAny>(\n    values: FormValues<T>,\n    event?: Event,\n  ) => Promise<BaseServerResponse<FormValues<T>>>;\n  /** Handler that fires upon successful server validation */\n  onSuccess?: <T extends ZodTypeAny, Meta extends Record<string, any>>(\n    resp: BaseServerResponse<FormValues<T>, Meta>,\n  ) => void;\n  /**\n   * Custom header component or\n   * false to disable the default header\n   */\n  header?: ComponentType<any> | ReactNode | false;\n  /** Header text for default header */\n  headerText?: string;\n  /** Custom loader component */\n  loader?: ComponentType<DefaultLoaderProps>;\n  /** Label for form submit button */\n  buttonText?: string;\n  /** Custom fields to override default fields */\n  customFields?: CustomField[];\n  /** Custom schema to override default schema */\n  customSchema?: z.ZodType<any, any, any>;\n  /**\n   * Optionally send root server error message and/or\n   * handler exceptions to toast\n   */\n  toast?: (msg: string) => void;\n  /** Override the default catch error shown to user */\n  failMsg?: string;\n  /** Override or remove the default success message */\n  successMessage?: ComponentType<any> | string | false;\n  /** Disable/override initial form focus if set */\n  isFocused?: boolean;\n  /**\n   * Boolean to toggle component's data-theme attribute\n   * between light and dark mode\n   */\n  darkMode?: boolean;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"ServerResponse"})})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"handler"})," function's promise should resolve a ",(0,r.jsx)(s.code,{children:"ServerResponse"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"file=./packages/quickForm/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type ServerResponse<\n  TFormValues extends Record<string, any> = FormValues,\n  Meta extends Record<string, any> = Record<string, any>,\n> = BaseServerResponse<TFormValues, Meta>;\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"file=./shared/common/src/types.ts start=mdx_server_response_start end=mdx_server_response_end",children:"export type BaseServerResponse<\n  TFormValues extends Record<string, string | string[]> = Record<string, any>,\n  Meta extends Record<string, any> = Record<string, any>,\n> = {\n  /* success key informs client whether server validation passed or failed */\n  success: boolean;\n  /* errors only display if success=false */\n  errors?: {\n    /* Optional error msg to print in header\n     * or send to toast when server validation fails\n     */\n    root?: string | string[];\n    /*\n     * pass any failing formValues\n     * as key=name of field, value=message or array of messages to print\n     */\n  } & Partial<TFormValues>;\n} & Meta;\n"})})]})}function g(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);