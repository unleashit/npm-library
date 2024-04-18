import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as q,R}from"./index-CBqU2yxZ.js";import{m as Ne}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import{u as Ce,a as Te,m as s}from"./Notes-CLPFxSgn.js";import{u as xe}from"./useUpdateDarkMode-a49ee7yZ.js";/* empty css                   */import"./_commonjsHelpers-BosuxZz1.js";const V=({children:t,...a})=>e.jsx("a",{...a,children:t});V.__docgenInfo={description:"",methods:[],displayName:"DefaultLinkComponent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Le=(t,a)=>t==="vert"||t==="vertical"?` ${a("vertical")}`:"",je=(t,a)=>{let n="";switch(t){case"clean":n=` ${a("clean")}`;break;case"dark-buttons":n=` ${a("darkButtons")}`;break;case"light-buttons":n=` ${a("lightButtons")}`;break;case"none":n=` ${a("none")}`;break;default:n=""}return n},Ae=(t,a,n)=>`${je(t,n)}${Le(a,n)}`,_e=(t,a)=>t&&["login","logout","signup"].includes(t)?` ${a(`${t}Link`)}`:"",fe=t=>t&&t.length?` ${t.join(" ")}`:"",ke=q.createContext({linkComponent:V,linkComponentHrefAttr:"href",clsName:()=>""});ke.displayName="Navigation";const ve=ke,ye=({href:t,title:a,active:n,classes:i,display:l=!0,attrs:p,icon:u,iconPosition:m="left",authLink:d=null})=>{const{linkComponent:A,linkComponentHrefAttr:g,clsName:o}=q.useContext(ve);return l?e.jsx("li",{className:`${o("linkItem")} ${fe(i)} ${n?o("active"):""}`,children:e.jsxs(A,{[g]:t,className:`${o("link")}${d?_e(d,o):""}`,...p,children:[u&&m==="left"&&e.jsx("span",{className:o("iconSpanLeft"),children:e.jsx("img",{src:u,alt:"",className:o("icon")})}),e.jsx("span",{children:a}),u&&m==="right"&&e.jsx("span",{className:o("iconSpanRight"),children:e.jsx("img",{src:u,alt:"",className:o("icon")})})]})}):null},L=ye;ye.__docgenInfo={description:"",methods:[],displayName:"NavLink",props:{authLink:{required:!1,tsType:{name:"union",raw:"'login' | 'logout' | 'signup' | null",elements:[{name:"literal",value:"'login'"},{name:"literal",value:"'logout'"},{name:"literal",value:"'signup'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},href:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},classes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},display:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},attrs:{required:!1,tsType:{name:"ReactAllHTMLAttributes",raw:"React.AllHTMLAttributes<any>",elements:[{name:"any"}]},description:""}}};const be=({links:t,clsName:a})=>{const{login:n,logout:i,signup:l}=t;return e.jsxs("ul",{className:a("authLinks"),children:[n&&n.display&&e.jsx(L,{...n,authLink:"login"}),i&&i.display&&e.jsx(L,{...i,authLink:"logout"}),l&&l.display&&e.jsx(L,{...l,authLink:"signup"})]})},qe=be;be.__docgenInfo={description:"",methods:[],displayName:"AuthLinks",props:{links:{required:!0,tsType:{name:"AuthLinkTypes"},description:""},clsName:{required:!0,tsType:{name:"signature",type:"function",raw:"(camelCaseClassName: string) => string",signature:{arguments:[{type:{name:"string"},name:"camelCaseClassName"}],return:{name:"string"}}},description:""}}};const we=({links:t,clsName:a})=>e.jsx("ul",{className:a("navList"),children:t.map(n=>q.createElement(L,{...n,key:n.title}))}),Ve=we;we.__docgenInfo={description:"",methods:[],displayName:"NavLinks",props:{links:{required:!0,tsType:{name:"Required",elements:[{name:"NavigationProps['links']",raw:"NavigationProps['links']"}],raw:"Required<NavigationProps['links']>"},description:""},clsName:{required:!0,tsType:{name:"signature",type:"function",raw:"(camelCaseClassName: string) => string",signature:{arguments:[{type:{name:"string"},name:"camelCaseClassName"}],return:{name:"string"}}},description:""}}};const{genClassNames:Re}=Ce,Pe=["light","dark","textLight","textDark","lightDarker5","lightDarker10","lightDarker15","darkLighter5","darkLighter10","darkLighter15"],$e=(t,a={})=>{const n={login:{title:"Login",href:"/login",display:!t},logout:{title:"Logout",href:"/logout",display:t},signup:{title:"Signup",href:"/signup",display:!t}};return{login:{...n.login,...a.login},logout:{...n.logout,...a.logout},signup:{...n.signup,...a.signup}}},j=({links:t,direction:a="horizontal",template:n="clean",cssVars:i,classes:l,isAuth:p,authLinks:u,linkComponent:m=V,linkComponentHrefAttr:d="href",darkMode:A=!1,cssModule:g={}})=>{const o=p!==void 0?$e(p,u):u||null,{clsName:c}=R.useMemo(()=>Re(j.displayName,g),[g]),Se=R.useMemo(()=>({linkComponent:m,linkComponentHrefAttr:d,clsName:c}),[m,d,c]);return e.jsx(ve.Provider,{value:Se,children:e.jsxs("nav",{className:`${c("container")}${Ae(n,a,c)}${fe(l)}`,"data-theme":A?"dark":"light",style:Ne({cssVars:i,varNames:Pe}),children:[e.jsx(Ve,{links:t,clsName:c}),o&&e.jsx(qe,{links:o,clsName:c})]})})};j.displayName="navigation";const _=j;j.__docgenInfo={description:"",methods:[],displayName:"navigation",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"NavigationLink"}],raw:"NavigationLink[]"},description:"Object with links configuration"},linkComponent:{required:!1,tsType:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},description:`Optional client router component.
When supplied, links will be constructed with it.
By default, links will be HTML anchor tags.`,defaultValue:{value:`({
  children,
  ...rest
}: {
  children?: React.ReactNode;
} & React.LinkHTMLAttributes<HTMLAnchorElement>) => <a {...rest}>{children}</a>`,computed:!1}},linkComponentHrefAttr:{required:!1,tsType:{name:"string"},description:`Designate a non-standard href prop if the Router
uses one. Example: React Router Link uses "to"`,defaultValue:{value:"'href'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'horz' | 'vert'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'horz'"},{name:"literal",value:"'vert'"}]},description:"Vertical or horizontal links",defaultValue:{value:"'horizontal'",computed:!1}},template:{required:!1,tsType:{name:"union",raw:"'clean' | 'light-buttons' | 'dark-buttons' | 'none'",elements:[{name:"literal",value:"'clean'"},{name:"literal",value:"'light-buttons'"},{name:"literal",value:"'dark-buttons'"},{name:"literal",value:"'none'"}]},description:"Choice of template",defaultValue:{value:"'clean'",computed:!1}},classes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Optional CSS classes to add to Navigation container"},isAuth:{required:!1,tsType:{name:"boolean"},description:`Show the auth sidecar. When set to true, a logged in state
false logged out. Omit or set undefined to not display`},authLinks:{required:!1,tsType:{name:"AuthLinkTypes"},description:"Customize the auth sidecar"},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}}}};_.__docgenInfo={description:"",methods:[],displayName:"navigation",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"NavigationLink"}],raw:"NavigationLink[]"},description:"Object with links configuration"},linkComponent:{required:!1,tsType:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},description:`Optional client router component.
When supplied, links will be constructed with it.
By default, links will be HTML anchor tags.`,defaultValue:{value:`({
  children,
  ...rest
}: {
  children?: React.ReactNode;
} & React.LinkHTMLAttributes<HTMLAnchorElement>) => <a {...rest}>{children}</a>`,computed:!1}},linkComponentHrefAttr:{required:!1,tsType:{name:"string"},description:`Designate a non-standard href prop if the Router
uses one. Example: React Router Link uses "to"`,defaultValue:{value:"'href'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'horz' | 'vert'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'horz'"},{name:"literal",value:"'vert'"}]},description:"Vertical or horizontal links",defaultValue:{value:"'horizontal'",computed:!1}},template:{required:!1,tsType:{name:"union",raw:"'clean' | 'light-buttons' | 'dark-buttons' | 'none'",elements:[{name:"literal",value:"'clean'"},{name:"literal",value:"'light-buttons'"},{name:"literal",value:"'dark-buttons'"},{name:"literal",value:"'none'"}]},description:"Choice of template",defaultValue:{value:"'clean'",computed:!1}},classes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Optional CSS classes to add to Navigation container"},isAuth:{required:!1,tsType:{name:"boolean"},description:`Show the auth sidecar. When set to true, a logged in state
false logged out. Omit or set undefined to not display`},authLinks:{required:!1,tsType:{name:"AuthLinkTypes"},description:"Customize the auth sidecar"},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}}}};const Be=[{title:"Home",href:"/",icon:"https://img.icons8.com/material/420/home-page.png"},{title:"Products",href:"/products"},{title:"Services",href:"/services"},{title:"About",href:"/about",attrs:{target:"_blank",rel:"noopener noreferrer"}},{title:"Contact",href:"/contact"}],r={title:"UI Widgets/Navigation",component:_,tags:["autodocs"],argTypes:{linkComponent:{table:{defaultValue:null}},template:{table:{type:{summary:"clean | light-buttons | dark-buttons | none"}}},direction:{table:{type:{summary:"horizontal | horz | vertical | vert"}}}},args:{links:Be},parameters:{notes:Te([e.jsxs(e.Fragment,{children:["Navigation links are configured as a javascript object via the"," ",e.jsx("strong",{children:"links"})," prop."]}),e.jsxs(e.Fragment,{children:["The optional auth sidecar can be customized with an"," ",e.jsx("strong",{children:"authLinks"})," prop. Or for quick prototypes, you may simply provide a boolean value via the ",e.jsx("strong",{children:"isAuth"})," prop."]}),e.jsxs(e.Fragment,{children:["If both ",e.jsx("strong",{children:"isAuth"})," and ",e.jsx("strong",{children:"authLinks"})," are absent, the auth sidecar won't appear."]})])},render:(t,a)=>(xe(a),e.jsx(_,{...t,...a.viewMode==="docs"?{darkMode:a.globals.scheme==="dark mode"}:{}}))},h={args:{},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"clean"})," (default) template, no auth sidecar"]}))]}},f={args:{template:"light-buttons"},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"light-buttons"})," template, no auth sidecar"]}))]}},k={args:{template:"dark-buttons"},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"dark-buttons"})," template, no auth sidecar"]}))]}},v={args:{isAuth:!1,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"clean"})," template with auth sidecar (logged out)"]}))]}},y={args:{isAuth:!0,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"clean"})," template with auth sidecar (logged in)"]}))]}},b={args:{template:"light-buttons",isAuth:!1,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"light-buttons"})," template with auth sidecar (logged out)"]}))]}},w={args:{template:"light-buttons",isAuth:!0,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"light-buttons"})," template with auth sidecar (logged in)"]}))]}},S={args:{template:"dark-buttons",isAuth:!1,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"dark-buttons"})," template with auth sidecar (logged out)"]}))]}},N={args:{template:"dark-buttons",isAuth:!0,classes:["unl-navigation__container--wide"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"dark-buttons"})," template with auth sidecar (logged in)"]}))]}},C={args:{template:"light-buttons",direction:"vertical",isAuth:!1,classes:["unl-navigation__container--narrow"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"light-buttons"})," template with"," ",e.jsx("strong",{children:"direction"})," prop set to ",e.jsx("strong",{children:"vertical"})," and"," ",e.jsx("strong",{children:"isAuth"})," set to true"]}))]}},T={args:{template:"dark-buttons",direction:"vertical",isAuth:!1,classes:["unl-navigation__container--narrow"]},parameters:{notes:[r.parameters.notes,...s(e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"dark-buttons"})," template with ",e.jsx("strong",{children:"direction"})," ","prop set to ",e.jsx("strong",{children:"vertical"})," and ",e.jsx("strong",{children:"isAuth"})," set to true"]}))]}},x={args:{template:"none"},parameters:{notes:[r.parameters.notes,...s(e.jsx(e.Fragment,{children:"Plain template, default CSS is ignored. Useful in the case of importing classic CSS but wish to have a version of the component with a custom theme that won't clash with the default CSS. Note that if you use CSS modules and/or never import the default CSS globally, you won't need this."}))]}};var P,$,B;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>clean</strong> (default) template, no auth sidecar
        </>)]
  }
}`,...(B=($=h.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,D,F;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    template: 'light-buttons'
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>light-buttons</strong> template, no auth sidecar
        </>)]
  }
}`,...(F=(D=f.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,O,I;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    template: 'dark-buttons'
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>dark-buttons</strong> template, no auth sidecar
        </>)]
  }
}`,...(I=(O=k.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var H,E,W;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isAuth: false,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>clean</strong> template with auth sidecar (logged out)
        </>)]
  }
}`,...(W=(E=v.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var U,G,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isAuth: true,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>clean</strong> template with auth sidecar (logged in)
        </>)]
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    template: 'light-buttons',
    isAuth: false,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>light-buttons</strong> template with auth sidecar (logged out)
        </>)]
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    template: 'light-buttons',
    isAuth: true,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>light-buttons</strong> template with auth sidecar (logged in)
        </>)]
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    template: 'dark-buttons',
    isAuth: false,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>dark-buttons</strong> template with auth sidecar (logged out)
        </>)]
  }
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,oe;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    template: 'dark-buttons',
    isAuth: true,
    classes: ['unl-navigation__container--wide']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>dark-buttons</strong> template with auth sidecar (logged in)
        </>)]
  }
}`,...(oe=(re=N.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    template: 'light-buttons',
    direction: 'vertical',
    isAuth: false,
    classes: ['unl-navigation__container--narrow']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>light-buttons</strong> template with{' '}
          <strong>direction</strong> prop set to <strong>vertical</strong> and{' '}
          <strong>isAuth</strong> set to true
        </>)]
  }
}`,...(ue=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,me,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    template: 'dark-buttons',
    direction: 'vertical',
    isAuth: false,
    classes: ['unl-navigation__container--narrow']
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          <strong>dark-buttons</strong> template with <strong>direction</strong>{' '}
          prop set to <strong>vertical</strong> and <strong>isAuth</strong> set
          to true
        </>)]
  }
}`,...(de=(me=T.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,he;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    template: 'none'
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes(<>
          Plain template, default CSS is ignored. Useful in the case of
          importing classic CSS but wish to have a version of the component with
          a custom theme that won't clash with the default CSS. Note that if you
          use CSS modules and/or never import the default CSS globally, you
          won't need this.
        </>)]
  }
}`,...(he=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Ee=["CleanTemplate","LightButtonsTemplate","DarkButtonsTemplate","CleanLoggedOut","CleanLoggedIn","LightButtonsLoggedOut","LightButtonsLoggedIn","DarkButtonsLoggedOut","DarkButtonsLoggedIn","LightButtonsVertical","DarkButtonsVertical","PlainTemplate"];export{y as CleanLoggedIn,v as CleanLoggedOut,h as CleanTemplate,N as DarkButtonsLoggedIn,S as DarkButtonsLoggedOut,k as DarkButtonsTemplate,T as DarkButtonsVertical,w as LightButtonsLoggedIn,b as LightButtonsLoggedOut,f as LightButtonsTemplate,C as LightButtonsVertical,x as PlainTemplate,Ee as __namedExportsOrder,r as default};
