"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[471],{1661:(e,t,r)=>{r.d(t,{Ay:()=>l,RM:()=>a});var n=r(3159),s=r(4913);const a=[];function i(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["You can get pretty far without having to write any custom CSS. By supplying a ",(0,n.jsx)(t.code,{children:"cssVars"})," prop, you can override any of the CSS variables of the default css."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},6684:(e,t,r)=>{r.d(t,{Ay:()=>o,RM:()=>i});var n=r(3159),s=r(4913);r(1855);const a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/\s/,"-").toLowerCase();const i=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"By default, all components come with basic css styling in two formats: standard (BEM namespaced) and a CSS Module friendly version."}),"\n",(0,n.jsxs)(t.p,{children:["To use the standard version, import it like: ",(0,n.jsxs)("code",{children:["import '@unleashit/",a(e.name),"/dist/",a(e.name),".css'"]}),". Or if you are using CSS Modules you can ",(0,n.jsxs)("code",{children:["import css from '@unleashit/",a(e.name),"/dist/",a(e.name),".module.css'"]})," and provide to the ",(0,n.jsx)(t.code,{children:"cssModule"})," prop and/or use your own custom module targeting the internal class names."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/styling-and-theming",children:"styling-and-theming"})," for more info."]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3929:(e,t,r)=>{r.d(t,{Ay:()=>l,RM:()=>a});var n=r(3159),s=r(4913);const a=[];function i(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Setting the ",(0,n.jsx)(t.code,{children:"darkMode"})," prop activates dark mode."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/dark-mode",children:"Dark Mode"})," for more info."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},5720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(3159),s=r(4913),a=r(6594),i=r(5152),l=r(6684),o=r(1661);r(3929);const c={title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."},d=void 0,u={id:"components/recursiveDataLister",title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling.",source:"@site/docs/components/recursiveDataLister.mdx",sourceDirName:"components",slug:"/components/recursiveDataLister",permalink:"/npm-library/components/recursiveDataLister",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/recursiveDataLister.mdx",tags:[],version:"current",frontMatter:{title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."},sidebar:"tutorialSidebar",previous:{title:"Quick Form",permalink:"/npm-library/components/quickForm"},next:{title:"Signup",permalink:"/npm-library/components/signup"}},h={},p=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"CSS",id:"css",level:3},...l.RM,{value:"CSS Custom Properties",id:"css-custom-properties",level:3},...o.RM,{value:"API",id:"api",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/unleashit/npm-library/raw/master/packages/recursiveDataLister/recursive-data-lister.png",alt:"recursive data lister component"})}),"\n",(0,n.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Quickly display simple or complex nested lists and objects as html."}),"\n",(0,n.jsx)(t.li,{children:"Choice of html (ul, ol, div, etc.)."}),"\n",(0,n.jsx)(t.li,{children:"Display as a single list or separate lists per first level parent."}),"\n",(0,n.jsx)(t.li,{children:"For arrays of objects, the option to choose a property to use its value as the heading (replace the numerical index)."}),"\n",(0,n.jsx)(t.li,{children:"Handles dates. Either provide a formatter function, or by default will be displayed as strings. Also attempts to find and handle dates in string values."}),"\n",(0,n.jsx)(t.li,{children:"Basic default CSS available with easy customization through cssVars prop."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://npm-library-demo.vercel.app/recursive-data-lister",children:"https://npm-library-demo.vercel.app/recursive-data-lister"})}),"\n",(0,n.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install @unleashit/recursive-data-lister\n"})})}),(0,n.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @unleashit/recursive-data-lister\n"})})}),(0,n.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @unleashit/recursive-data-lister\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import React from 'react';\nimport RecursiveDataLister from '@unleashit/recursive-data-lister';\n\nconst users = [\n  {\n    id: 1,\n    name: 'joe',\n    booksRead: [\n      {\n        title: 'The Castle',\n        author: 'Franz Kafka',\n      },\n      {\n        title: 'Waynes World 2',\n        author: 'Mike Meyers IV',\n      },\n    ],\n  },\n  {\n    id: 2,\n    name: 'judy',\n    booksRead: [\n      {\n        title: 'The Overcoat',\n        author: 'Nikolai Gogol',\n        editions: ['first: 1842', 'second: 1844'],\n      },\n    ],\n  },\n];\n\nconst RecursiveDataListerDemo = () => (\n  <RecursiveDataLister\n    data={users}\n    multiList={true} // For top level array only: show first level children as separate lists. False is default (outputs as a single top level html list)\n    tag=\"ul\" // parent html tag. ul is default, you can also choose ol or div\n    arrayBranchProp=\"title\" // if set, this will use the property as node labels for arrays of objects (instead of the index). Careful with this, it only works with one property!\n    removeRepeatedProp={true} // false is default. If arrayBranchProp is set, this will remove the prop from the object so it isn't repeated\n  />\n);\n\nexport default RecursiveDataListerDemo;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"css",children:"CSS"}),"\n",(0,n.jsx)(l.Ay,{name:c.title}),"\n",(0,n.jsx)(t.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RecursiveDataListerProps"})})}),"\n",(0,n.jsx)(t.p,{children:"Props for Recursive Data Lister."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:"file=./packages/recursiveDataLister/src/recursiveDataLister.tsx start=mdx_recursive_dl_props_start end=mdx_recursive_dl_props_end",children:"export interface RecursiveDataListerProps {\n  /** Array or object of data to display */\n  data: Record<string, any> | any[];\n  /** Top level html tag for the list, like ul, ol or div */\n  tag?: keyof JSX.IntrinsicElements;\n  /**\n   * Display in multiple ul, ol, etc. lists per parent\n   * Data must be an array\n   */\n  multiList?: boolean;\n  /**\n   * When a branch is an array of objects, select an object property to be used as a label instead\n   * of the index. Note: this is a global setting, and applies to all child arrays\n   * If the key isn't found, the index will be used anyway\n   */\n  arrayBranchProp?: string | null;\n  /** By default, the arrayBranchProp will be repeated in the list */\n  removeRepeatedProp?: boolean;\n  /**\n   * Detect ISO 8601 date strings and convert into Date objects\n   * for the purpose of formatting with the dateFormat prop.\n   * Uses the parseISO function from date-fns\n   */\n  handleISOStringDates?: boolean;\n  /**\n   * Function to customize the printed output of date objects\n   * The default is toString()\n   */\n  dateFormat?: DateFormat;\n  /** CSS custom property overrides */\n  cssVars?: CSSVars<typeof varNames>;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"DateFormat"})})}),"\n",(0,n.jsx)(t.p,{children:"Function to format date objects. Should return a string or number of the formatted date. Note: the component attempts to find and transform stringified dates into date objects. These will then also be passed to this function if available."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:"file=./packages/recursiveDataLister/src/utils/index.ts start=mdx_recursive_dl_date_start end=mdx_recursive_dl_date_end",children:"export type DateFormat = (val: Date) => string | number;\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"object or array"}),(0,n.jsx)(t.td,{children:"object to display"}),(0,n.jsx)(t.td,{children:"required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multilist"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"For array only: show first level children as separate parents"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tag"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Parent HTML tag for a choice of ordered/unordered list or plain divs"}),(0,n.jsx)(t.td,{children:"ul"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"arrayBranchProp"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"if set, it will use the property as branch labels for arrays of objects (instead of the index)"}),(0,n.jsx)(t.td,{children:"null"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"removeRepeatedProp"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"If arrayBranchProp is set, this will remove the prop from the array so it isn't repeated"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dateFormat"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:"Callback to process Date objects or strings, receives the Date or Date like string"}),(0,n.jsx)(t.td,{children:"(elem) => elem.toString()"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cssVars"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"optional object to override css custom properties"}),(0,n.jsx)(t.td,{children:"undefined"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cssModule"}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"CSS Module object that optionally replaces default. Class names need to match expected names."}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},5152:(e,t,r)=>{r.d(t,{A:()=>i});r(1855);var n=r(1038);const s={tabItem:"tabItem_xTWW"};var a=r(3159);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},6594:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(1855),s=r(1038),a=r(731),i=r(3178),l=r(3115),o=r(3948),c=r(4485),d=r(8575);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(4841);const j={tabList:"tabList_ytZa",tabItem:"tabItem_x3JC"};var v=r(3159);function b(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(t))}},4913:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(1855);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);