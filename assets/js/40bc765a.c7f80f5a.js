"use strict";(self.webpackChunk_unleashit_docs=self.webpackChunk_unleashit_docs||[]).push([[471],{8963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var s=r(5723),n=r(1373),a=r(6196),i=r(7867),l=r(6810),o=r(4950);r(6132);const d={title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."},c=void 0,h={id:"components/recursiveDataLister",title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling.",source:"@site/docs/components/recursiveDataLister.mdx",sourceDirName:"components",slug:"/components/recursiveDataLister",permalink:"/npm-library/components/recursiveDataLister",draft:!1,unlisted:!1,editUrl:"https://github.com/unleashit/npm-library/tree/master/shared/docs/docs/components/recursiveDataLister.mdx",tags:[],version:"current",frontMatter:{title:"Recursive Data Lister",description:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."},sidebar:"tutorialSidebar",previous:{title:"Quick Form",permalink:"/npm-library/components/quickForm"},next:{title:"Signup",permalink:"/npm-library/components/signup"}},p={},u=[{value:"Features",id:"features",level:3},{value:"Demo",id:"demo",level:3},{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"CSS",id:"css",level:3},...l.RM,{value:"CSS Custom Properties",id:"css-custom-properties",level:3},...o.RM,{value:"API",id:"api",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"React component that recursively pretty prints nested lists or objects with various options for html markup and styling."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/unleashit/npm-library/raw/master/packages/recursiveDataLister/recursive-data-lister.png",alt:"recursive data lister component"})}),"\n",(0,s.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Quickly display simple or complex nested lists and objects as html."}),"\n",(0,s.jsx)(t.li,{children:"Choice of html (ul, ol, div, etc.)."}),"\n",(0,s.jsx)(t.li,{children:"Display as a single list or separate lists per first level parent."}),"\n",(0,s.jsx)(t.li,{children:"For arrays of objects, the option to choose a property to use its value as the heading (replace the numerical index)."}),"\n",(0,s.jsx)(t.li,{children:"Handles dates. Either provide a formatter function, or by default will be displayed as strings. Also attempts to find and handle dates in string values."}),"\n",(0,s.jsx)(t.li,{children:"Basic default CSS available with easy customization through cssVars prop."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://npm-library-demo.vercel.app/recursive-data-lister",children:"https://npm-library-demo.vercel.app/recursive-data-lister"})}),"\n",(0,s.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install @unleashit/recursive-data-lister\n"})})}),(0,s.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @unleashit/recursive-data-lister\n"})})}),(0,s.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @unleashit/recursive-data-lister\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import React from 'react';\nimport RecursiveDataLister from '@unleashit/recursive-data-lister';\n\nconst users = [\n  {\n    id: 1,\n    name: 'joe',\n    booksRead: [\n      {\n        title: 'The Castle',\n        author: 'Franz Kafka',\n      },\n      {\n        title: 'Waynes World 2',\n        author: 'Mike Meyers IV',\n      },\n    ],\n  },\n  {\n    id: 2,\n    name: 'judy',\n    booksRead: [\n      {\n        title: 'The Overcoat',\n        author: 'Nikolai Gogol',\n        editions: ['first: 1842', 'second: 1844'],\n      },\n    ],\n  },\n];\n\nconst RecursiveDataListerDemo = () => (\n  <RecursiveDataLister\n    data={users}\n    multiList={true} // For top level array only: show first level children as separate lists. False is default (outputs as a single top level html list)\n    tag=\"ul\" // parent html tag. ul is default, you can also choose ol or div\n    arrayBranchProp=\"title\" // if set, this will use the property as node labels for arrays of objects (instead of the index). Careful with this, it only works with one property!\n    removeRepeatedProp={true} // false is default. If arrayBranchProp is set, this will remove the prop from the object so it isn't repeated\n  />\n);\n\nexport default RecursiveDataListerDemo;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"css",children:"CSS"}),"\n",(0,s.jsx)(l.Ay,{name:d.title}),"\n",(0,s.jsx)(t.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"RecursiveDataListerProps"})})}),"\n",(0,s.jsx)(t.p,{children:"Props for Recursive Data Lister."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"file=./packages/recursiveDataLister/src/recursiveDataLister.tsx start=mdx_recursive_dl_props_start end=mdx_recursive_dl_props_end",children:"export interface RecursiveDataListerProps {\n  /** Array or object of data to display */\n  data: Record<string, any> | any[];\n  /** Top level html tag for the list, like ul, ol or div */\n  tag?: keyof JSX.IntrinsicElements;\n  /**\n   * Display in multiple ul, ol, etc. lists per parent\n   * Data must be an array\n   */\n  multiList?: boolean;\n  /**\n   * When a branch is an array of objects, select an object property to be used as a label instead\n   * of the index. Note: this is a global setting, and applies to all child arrays\n   * If the key isn't found, the index will be used anyway\n   */\n  arrayBranchProp?: string | null;\n  /** By default, the arrayBranchProp will be repeated in the list */\n  removeRepeatedProp?: boolean;\n  /**\n   * Detect ISO 8601 date strings and convert into Date objects\n   * for the purpose of formatting with the dateFormat prop.\n   * Uses the parseISO function from date-fns\n   */\n  handleISOStringDates?: boolean;\n  /**\n   * Function to customize the printed output of date objects\n   * The default is toString()\n   */\n  dateFormat?: DateFormat;\n  /** CSS custom property overrides */\n  cssVars?: CSSVars<typeof varNames>;\n  /** CSS module to target internal styles */\n  cssModule?: Record<string, string>;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"DateFormat"})})}),"\n",(0,s.jsx)(t.p,{children:"Function to format date objects. Should return a string or number of the formatted date. Note: the component attempts to find and transform stringified dates into date objects. These will then also be passed to this function if available."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"file=./packages/recursiveDataLister/src/utils/index.ts start=mdx_recursive_dl_date_start end=mdx_recursive_dl_date_end",children:"export type DateFormat = (val: Date) => string | number;\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"object or array"}),(0,s.jsx)(t.td,{children:"object to display"}),(0,s.jsx)(t.td,{children:"required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"multilist"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"For array only: show first level children as separate parents"}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tag"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Parent HTML tag for a choice of ordered/unordered list or plain divs"}),(0,s.jsx)(t.td,{children:"ul"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arrayBranchProp"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"if set, it will use the property as branch labels for arrays of objects (instead of the index)"}),(0,s.jsx)(t.td,{children:"null"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"removeRepeatedProp"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"If arrayBranchProp is set, this will remove the prop from the array so it isn't repeated"}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dateFormat"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"Callback to process Date objects or strings, receives the Date or Date like string"}),(0,s.jsx)(t.td,{children:"(elem) => elem.toString()"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cssVars"}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"optional object to override css custom properties"}),(0,s.jsx)(t.td,{children:"undefined"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cssModule"}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"CSS Module object that optionally replaces default. Class names need to match expected names."}),(0,s.jsx)(t.td,{children:"undefined"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);