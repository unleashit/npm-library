import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as x,a as I,m as h}from"./Notes-CLPFxSgn.js";/* empty css              */import{W as O}from"./WithUseArgsDecorator-DA0TTXMr.js";import{r as W}from"./index-CBqU2yxZ.js";import{W as L}from"./WithMaxWidthDecorator-Blw6KwIO.js";import"./_commonjsHelpers-BosuxZz1.js";const{isCSSModule:d}=x,T=({cssModule:n={}})=>e.jsx("div",{className:d(n.loader,"unl-async-handler__loader"),children:e.jsx("div",{className:d(n.loaderChild,"unl-async-handler__loader-child"),children:"Loading..."})}),b=({cssModule:n={}})=>e.jsx("div",{className:d(n.nothingFound,"unl-async-handler__nothing-found"),children:"Nothing found."}),k=({cssModule:n={},error:a})=>e.jsxs("div",{className:d(n.errorMessage,"unl-async-handler__error-message"),children:[e.jsx("p",{children:"Sorry, we have encountered a problem."}),a?e.jsx("p",{children:a.message?a.message:a}):""]});T.__docgenInfo={description:"",methods:[],displayName:"DefaultLoader",props:{cssModule:{required:!1,tsType:{name:"AsyncHandlerProps['cssModule']",raw:"AsyncHandlerProps['cssModule']"},description:"",defaultValue:{value:"{}",computed:!1}}}};b.__docgenInfo={description:"",methods:[],displayName:"DefaultNoResults",props:{cssModule:{required:!1,tsType:{name:"AsyncHandlerProps['cssModule']",raw:"AsyncHandlerProps['cssModule']"},description:"",defaultValue:{value:"{}",computed:!1}}}};k.__docgenInfo={description:"",methods:[],displayName:"DefaultError",props:{cssModule:{required:!1,tsType:{name:"AsyncHandlerProps['cssModule']",raw:"AsyncHandlerProps['cssModule']"},description:"",defaultValue:{value:"{}",computed:!1}},error:{required:!1,tsType:{name:"any"},description:""}}};const J=n=>Array.isArray(n)?!n.length:typeof n=="object"?!Object.keys(n).length:!n,{normalizeComponentProp:y}=x,R=class R extends W.Component{constructor(){super(...arguments),this.state={data:null,loading:!0,error:null}}async componentDidMount(){await this.makeRequest()}async makeRequest(){const{request:a,cache:t}=this.props,o=t();if(o){this.setState({data:o,loading:!1,error:null});return}this.setState({loading:!0,error:null});try{const r=await a();this.setState({loading:!1,data:r,error:null})}catch(r){console.error(r),this.setState({loading:!1,error:r})}}render(){const{data:a,error:t,loading:o}=this.state,{loaderComponent:r,noResultsComponent:H,errorComponent:V,cssModule:p={},children:F}=this.props;return t?y(V,{cssModule:p,error:t}):o?y(r,{cssModule:p}):J(a)?y(H,{cssModule:p}):F(a)}};R.defaultProps={loaderComponent:T,noResultsComponent:b,errorComponent:k,cache:()=>null};let s=R;s.__docgenInfo={description:"",methods:[{name:"makeRequest",docblock:null,modifiers:["async"],params:[],returns:{type:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}}],displayName:"AsyncHandler",props:{request:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any> | Promise<any>[]",signature:{arguments:[],return:{name:"union",raw:"Promise<any> | Promise<any>[]",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"Array",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}],raw:"Promise<any>[]"}]}}},description:"Async function that returns a promise or an array of promises"},cache:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Record<string, any> | any[] | false | null",signature:{arguments:[],return:{name:"union",raw:"Record<string, any> | any[] | false | null",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},{name:"Array",elements:[{name:"any"}],raw:"any[]"},{name:"literal",value:"false"},{name:"null"}]}}},description:"Optional cache function will be called before making the request",defaultValue:{value:"(): null => null",computed:!1}},loaderComponent:{required:!1,tsType:{name:"union",raw:"DefaultComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:"(props: DefaultComponentProps) => React.ReactElement",signature:{arguments:[{type:{name:"DefaultComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default loader component",defaultValue:{value:`({
  cssModule: theme = {},
}): JSX.Element => (
  <div className={isCSSModule(theme.loader, \`unl-async-handler__loader\`)}>
    <div
      className={isCSSModule(
        theme.loaderChild,
        \`unl-async-handler__loader-child\`,
      )}
    >
      Loading...
    </div>
  </div>
)`,computed:!1}},noResultsComponent:{required:!1,tsType:{name:"union",raw:"DefaultComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:"(props: DefaultComponentProps) => React.ReactElement",signature:{arguments:[{type:{name:"DefaultComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default no results component",defaultValue:{value:`({
  cssModule: theme = {},
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.nothingFound,
      \`unl-async-handler__nothing-found\`,
    )}
  >
    Nothing found.
  </div>
)`,computed:!1}},errorComponent:{required:!1,tsType:{name:"union",raw:"DefaultErrorComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:`(
  props: DefaultErrorComponentProps,
) => React.ReactElement`,signature:{arguments:[{type:{name:"DefaultErrorComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default error component",defaultValue:{value:`({
  cssModule: theme = {},
  error,
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.errorMessage,
      \`unl-async-handler__error-message\`,
    )}
  >
    <p>Sorry, we have encountered a problem.</p>
    {error ? <p>{error.message ? error.message : error}</p> : ''}
  </div>
)`,computed:!1}},cssModule:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:"CSS module to target internal styles"},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};s.__docgenInfo={description:"",methods:[{name:"makeRequest",docblock:null,modifiers:["async"],params:[],returns:{type:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}}],displayName:"AsyncHandler",props:{request:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<any> | Promise<any>[]",signature:{arguments:[],return:{name:"union",raw:"Promise<any> | Promise<any>[]",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"Array",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}],raw:"Promise<any>[]"}]}}},description:"Async function that returns a promise or an array of promises"},cache:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Record<string, any> | any[] | false | null",signature:{arguments:[],return:{name:"union",raw:"Record<string, any> | any[] | false | null",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},{name:"Array",elements:[{name:"any"}],raw:"any[]"},{name:"literal",value:"false"},{name:"null"}]}}},description:"Optional cache function will be called before making the request",defaultValue:{value:"(): null => null",computed:!1}},loaderComponent:{required:!1,tsType:{name:"union",raw:"DefaultComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:"(props: DefaultComponentProps) => React.ReactElement",signature:{arguments:[{type:{name:"DefaultComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default loader component",defaultValue:{value:`({
  cssModule: theme = {},
}): JSX.Element => (
  <div className={isCSSModule(theme.loader, \`unl-async-handler__loader\`)}>
    <div
      className={isCSSModule(
        theme.loaderChild,
        \`unl-async-handler__loader-child\`,
      )}
    >
      Loading...
    </div>
  </div>
)`,computed:!1}},noResultsComponent:{required:!1,tsType:{name:"union",raw:"DefaultComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:"(props: DefaultComponentProps) => React.ReactElement",signature:{arguments:[{type:{name:"DefaultComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default no results component",defaultValue:{value:`({
  cssModule: theme = {},
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.nothingFound,
      \`unl-async-handler__nothing-found\`,
    )}
  >
    Nothing found.
  </div>
)`,computed:!1}},errorComponent:{required:!1,tsType:{name:"union",raw:"DefaultErrorComponent | React.ReactElement",elements:[{name:"signature",type:"function",raw:`(
  props: DefaultErrorComponentProps,
) => React.ReactElement`,signature:{arguments:[{type:{name:"DefaultErrorComponentProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:"Replace the default error component",defaultValue:{value:`({
  cssModule: theme = {},
  error,
}): JSX.Element => (
  <div
    className={isCSSModule(
      theme.errorMessage,
      \`unl-async-handler__error-message\`,
    )}
  >
    <p>Sorry, we have encountered a problem.</p>
    {error ? <p>{error.message ? error.message : error}</p> : ''}
  </div>
)`,computed:!1}},cssModule:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:"CSS module to target internal styles"},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const A=[{id:1,name:"Dorothy Perkins",age:19,favoriteColor:"green"},{id:2,name:"Paul Brown",age:20,favoriteColor:"purple"}];function X({data:n}){return e.jsxs("div",{className:"theme-aware-text",children:[e.jsx("h3",{children:"This component is wrapped in an AsyncHandler"}),e.jsx("p",{children:"When given an async request, it handles the loading, error and no result (empty object or array) states. It can also optionally check a cache."}),e.jsx("p",{children:"Async data:"}),n.map(a=>e.jsxs("div",{children:[a.name," is ",a.age," years old."]},a.id))]})}let i=null;const B=()=>i&&new Date().getTime()-i.cacheDate<=10*1e3?i.students:null,f=(n,a=!1)=>()=>new Promise(t=>{setTimeout(()=>{a&&(i={students:n,cacheDate:new Date}),t(n)},1500)}),g={title:"other/Async Handler",component:s,tags:["autodocs"],argTypes:{loaderComponent:{table:{type:{summary:"ComponentType | ReactElement"},defaultValue:{summary:"<div>Loading...</div>"}}},noResultsComponent:{table:{type:{summary:"ComponentType | ReactElement"},defaultValue:{summary:"<div>Nothing found.</div>"}}},errorComponent:{table:{type:{summary:"ComponentType | ReactElement"},defaultValue:{summary:"Default error component"}}}},args:{request:f(A)},parameters:{notes:I([e.jsx(e.Fragment,{children:e.jsx("b",{children:e.jsx("i",{children:"Async Handler is deprecated. Tanstack Query is a good alternative."})})}),e.jsx(e.Fragment,{children:"Async Handler is an HOC wraps a component with an asynchronous job. It handles loading, error, and no result (empty object or array) states. It can also optionally check a cache before calling its handler."}),e.jsx(e.Fragment,{children:"Comes in two flavors, HOC and render prop."})])},decorators:[O,L],render:n=>e.jsx(s,{...n,children:a=>e.jsx(X,{data:a})})},l={args:{}},m={args:{request:f([])},parameters:{notes:[g.parameters.notes,...h([e.jsx(e.Fragment,{children:"Default no results state."})])]}},c={args:{request:()=>new Promise((n,a)=>a("Bad request."))},parameters:{notes:[g.parameters.notes,...h([e.jsx(e.Fragment,{children:"Default error state after a promise rejection."})])]}},u={args:{request:f(A,!0),cache:B},parameters:{notes:[g.parameters.notes,...h([e.jsx(e.Fragment,{children:"This example uses a simple 10 second cache."}),e.jsxs(e.Fragment,{children:["The ",e.jsx("code",{children:"cache"})," function is user supplied. Async Handler will call it each time before the ",e.jsx("code",{children:"request"})," handler is run. If it returns ",e.jsx("b",{children:"false"}),", the ",e.jsx("code",{children:"request"})," handler will fire. Otherwise, the cached data will be supplied to the wrapped component"]})])]}};var w,C,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: ({} as any)
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var v,P,q;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ({
    request: mockRequest([])
  } as any),
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>Default no results state.</>])]
  }
}`,...(q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var S,j,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ({
    request: () => new Promise((_, reject) => reject('Bad request.'))
  } as any),
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>Default error state after a promise rejection.</>])]
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var M,N,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: ({
    request: mockRequest(students, true),
    cache
  } as any),
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>This example uses a simple 10 second cache.</>, <>
          The <code>cache</code> function is user supplied. Async Handler will
          call it each time before the <code>request</code> handler is run. If
          it returns <b>false</b>, the <code>request</code> handler will fire.
          Otherwise, the cached data will be supplied to the wrapped component
        </>])]
  }
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const $=["Basic","NoResults","ErrorState","With10SecCache"];export{l as Basic,c as ErrorState,m as NoResults,u as With10SecCache,$ as __namedExportsOrder,g as default};
