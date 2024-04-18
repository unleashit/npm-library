import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as l}from"./modal-CdN5Y-fw.js";import{a as q,m as i}from"./Notes-CLPFxSgn.js";/* empty css              */import{W as x}from"./WithUseArgsDecorator-DA0TTXMr.js";import{W as j}from"./WithDarkModeStoryDecorator-C5eRwcOp.js";import{W as S}from"./WithMaxWidthDecorator-Blw6KwIO.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapCSSVarsToStyles-Cs2nQxcE.js";import"./useUpdateDarkMode-a49ee7yZ.js";l.__docgenInfo={description:"",methods:[],displayName:"modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"Modal state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"| 'small'\n| 'medium'\n| 'large'\n| 'full'\n| `${number}${(typeof cssUnits)[number]}`",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'full'"},{name:"literal",value:"`${number}${(typeof cssUnits)[number]}`"}]},description:"Size of the modal, either as a preset or a custom CSS size",defaultValue:{value:"'medium'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:"Handler to close the modal. Use to set the modal state",defaultValue:{value:"() => undefined",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"CLose modal on overlay click",defaultValue:{value:"true",computed:!1}},animationSupport:{required:!1,tsType:{name:"boolean"},description:`When the modal opens/closes, add animation classes and
preserve the modal in the DOM for the length of a timeout`,defaultValue:{value:"true",computed:!1}},animationCloseTimeout:{required:!1,tsType:{name:"number"},description:"Time in milliseconds to keep the modal in the DOM and animation classes active",defaultValue:{value:"300",computed:!1}},header:{required:!1,tsType:{name:"union",raw:"React.FC<any> | string",elements:[{name:"ReactFC",raw:"React.FC<any>",elements:[{name:"any"}]},{name:"string"}]},description:"Custom header component"},footer:{required:!1,tsType:{name:"union",raw:"React.FC<any> | string",elements:[{name:"ReactFC",raw:"React.FC<any>",elements:[{name:"any"}]},{name:"string"}]},description:"Custom footer component"},overlayColor:{required:!1,tsType:{name:"union",raw:`| {
    light: string;
    dark: string;
  }
/** One overlay color regardless of light/dark mode */
| string
/** Transparent overlay */
| false`,elements:[{name:"signature",type:"object",raw:`{
  light: string;
  dark: string;
}`,signature:{properties:[{key:"light",value:{name:"string",required:!0}},{key:"dark",value:{name:"string",required:!0}}]}},{name:"string"},{name:"literal",value:"false"}]},description:"Color of the overlay"},closeBtn:{required:!1,tsType:{name:"boolean"},description:"Add a close button to the header",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main content of the modal"}}};const R=({toggleModal:a})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam praesentium quisquam repudiandae impedit architecto sapiente consequatur voluptate vitae quis?"}),e.jsx("p",{children:"Pariatur ad fuga fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores harum hic illum ipsa magnam officiis quia quibusdam recusandae, sed?"}),e.jsx("div",{children:e.jsx("button",{className:"story-button",type:"button",onClick:a,children:"OK"})})]}),d={title:"UI Widgets/Modal",component:l,tags:["autodocs"],argTypes:{size:{table:{type:{summary:"small | medium | large | full | ${number}${(typeof cssUnits)[number]}"}}},header:{table:{type:{summary:"React.FC<any> | string"}}},footer:{table:{type:{summary:"React.FC<any> | string"}}},overlayColor:{table:{type:{summary:"{light: string, dark: string} | string | false"}}}},args:{isOpen:!1,onClose:()=>{}},parameters:{notes:q([e.jsxs(e.Fragment,{children:["The ",e.jsx("code",{children:"isOpen"})," prop determines the modal state. An"," ",e.jsx("code",{children:"onClose"})," handler should also be provided to set the"," ",e.jsx("code",{children:"isOpen"}),"state."]})]),docs:{disable:!0}},decorators:[x,j,S],render:(a,r)=>{const m=()=>r.updateArgs({isOpen:!a.isOpen});return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"theme-aware-text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam praesentium quisquam repudiandae impedit architecto sapiente consequatur voluptate vitae quis? Pariatur ad fuga fugiat, nostrum ipsa officia eveniet debitis ipsum assumenda labore maiores aspernatur soluta mollitia fugit itaque."}),e.jsx("div",{children:e.jsx("button",{className:"story-button",type:"button",onClick:m,children:"Open modal"})}),e.jsx(l,{...a,...r.viewMode==="docs"?{darkMode:r.globals.scheme==="dark mode"}:{},onClose:()=>r.updateArgs({isOpen:!1}),children:e.jsx(R,{toggleModal:m})})]})}},t={args:{},parameters:{notes:[d.parameters.notes,...i([e.jsx(e.Fragment,{children:"Basic example with defaults and no header or footer."})])]}},s={args:{header:"Important Message",footer:()=>e.jsx("div",{children:"Important! Please Read!"})},parameters:{notes:[d.parameters.notes,...i([e.jsx(e.Fragment,{children:"This example has a header and footer."})])]}},o={args:{header:"Important Message",footer:()=>e.jsx("div",{children:"Important! Please Read!"}),cssVars:{lightModeBackgroundColor:"#029cfd",lightModeHeaderColor:"#ccc",lightModeBorderColor:"transparent",darkModeBackgroundColor:"#029cfd",darkModeHeaderColor:"#555",darkModeBorderColor:"transparent"}},parameters:{notes:[d.parameters.notes,...i([e.jsxs(e.Fragment,{children:["With some theming customization using the ",e.jsx("code",{children:"cssVars"})," prop."]})])]}},n={args:{header:"Important Message",footer:()=>e.jsx("div",{children:"Important! Please Read!"}),overlayColor:"transparent"},parameters:{notes:[d.parameters.notes,...i([e.jsx(e.Fragment,{children:"With a transparent overlay."})])]}};var u,p,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>Basic example with defaults and no header or footer.</>])]
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>This example has a header and footer.</>])]
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,v,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>,
    cssVars: {
      lightModeBackgroundColor: '#029cfd',
      lightModeHeaderColor: '#ccc',
      lightModeBorderColor: 'transparent',
      darkModeBackgroundColor: '#029cfd',
      darkModeHeaderColor: '#555',
      darkModeBorderColor: 'transparent'
    }
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>
          With some theming customization using the <code>cssVars</code> prop.
        </>])]
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,k,M;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    header: 'Important Message',
    footer: () => <div>Important! Please Read!</div>,
    overlayColor: 'transparent'
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>With a transparent overlay.</>])]
  }
}`,...(M=(k=n.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const D=["Basic","HeaderAndFooter","Styled","NoOverlay"];export{t as Basic,s as HeaderAndFooter,n as NoOverlay,o as Styled,D as __namedExportsOrder,d as default};
