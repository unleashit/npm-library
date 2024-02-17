"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[423],{5745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(7458),i=n(8751);const l={title:"Custom Fields",slug:"/custom-fields",sidebar_position:3},a=void 0,o={id:"custom-fields",title:"Custom Fields",description:"It's possible to replace the default fields with custom fields by adding customFields and customSchema props. On submission and after passing validation, the handler will be called with the field values.",source:"@site/docs/custom-fields.mdx",sourceDirName:".",slug:"/custom-fields",permalink:"/npm-library/custom-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/custom-fields.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Custom Fields",slug:"/custom-fields",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Signup",permalink:"/npm-library/components/signup"},next:{title:"Styling and Theming",permalink:"/npm-library/styling-and-theming"}},r={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["It's possible to replace the default fields with custom fields by adding ",(0,s.jsx)(t.code,{children:"customFields"})," and ",(0,s.jsx)(t.code,{children:"customSchema"})," props. On submission and after passing validation, the handler will be called with the field values."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"customFields"})," is an array of field objects where ",(0,s.jsx)(t.code,{children:"element"})," is the type of field. Currently input, select, checkbox and textarea fields are supported."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"interface CustomField {\n  element: 'input' | 'select' | 'textarea';\n  type: string; // html `type` attribute\n  name: string; // html `name` attribute\n  label?: string; // label to display in an html <label>\n  focus?: boolean; // sets the focus to this element (only the first is used)\n  options?: Array<[string, string, OptionHTMLAttributes<any>?]>; // select options: [title, value, {attribute: value}]\n  attrs?: InputHTMLAttributes<any> & SelectHTMLAttributes<any>;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that supplying a ",(0,s.jsx)(t.code,{children:"customFields"})," object completely replaces the defaults, so don't forget to add all needed fields. ",(0,s.jsx)(t.code,{children:"customSchema"})," should be a Zod schema with matching name attributes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"jsx",children:"<Signup\n  handler={signupHandler}\n  successMessage={() => <div>Welcome! You have successfully registered.</div>}\n  customFields={[\n    {\n      element: 'input',\n      type: 'text',\n      name: 'email',\n      label: 'Email',\n      focus: true, // sets the form focus\n    },\n    {\n      element: 'input',\n      type: 'password',\n      name: 'password',\n      label: 'Password',\n    },\n    {\n      element: 'input',\n      type: 'password',\n      name: 'passwordConfirm',\n      label: 'Type password again',\n    },\n    {\n      element: 'select',\n      name: 'color',\n      label: 'Choose a color',\n      options: [\n        ['', '- select -'],\n        ['red', 'red'],\n        ['green', 'green'],\n        ['blue', 'blue'],\n        ['yellow', 'yellow'],\n      ],\n    },\n    {\n      element: 'input',\n      type: 'checkbox',\n      name: 'newsletterOptIn',\n      label: 'Subscribe to our newsletter?',\n      attrs: {\n        defaultChecked: true,\n      },\n    },\n  ]}\n  customSchema={schema}\n/>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(2983);const i={},l=s.createContext(i);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);