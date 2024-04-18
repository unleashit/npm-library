import{j as e}from"./jsx-runtime-CKrituN3.js";import{w as we,u as be,b as Pe}from"./index-py9pzQbV.js";import{a as ie}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as Se}from"./index-Dce-FHL1.js";import{u as le}from"./useUpdateDarkMode-a49ee7yZ.js";import{D as xe,d as Fe,a as ke,b as Te,f as O,c as je}from"./forgot-password-Cuf6ABkL.js";import{u as qe,t as Ce,a as Ne,f as Ve,b as Ee,S as Re,C as _,D as Me,c as Oe,d as _e}from"./backendDemoHandler-Dv1-GY2V.js";import{b as De,u as ze,m as F}from"./Notes-CLPFxSgn.js";import{r as Be,R as Ae}from"./index-CBqU2yxZ.js";import{m as Ke,v as He}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import"./v4-D8aEg3BZ.js";import"./index-C-I6vmrZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{genClassNames:Ze,getDefaultsFromZodObject:Le,clearOnError:Ie,normalizeComponentProp:x}=ze,Ge=[...He],n=({handler:r,onSuccess:a,headerText:l="Forgot Password",header:t=xe,loader:w=Me,buttonText:T="Next",childrenPosition:j="bottom",customFields:o=Fe,customSchema:m=ke,toast:b,failMsg:q=De,successMessage:P=Te,loginLink:i=e.jsx("a",{href:"/login",children:"Back to login"}),isFocused:ue=!0,darkMode:ce=!1,cssVars:pe,cssModule:C={},children:N})=>{const{register:V,handleSubmit:fe,reset:S,setValue:E,setError:R,setFocus:ge,formState:{errors:d,isSubmitting:M,isSubmitSuccessful:ye}}=qe({resolver:Ce(m),defaultValues:Le(m)});Ne(o,ge,ue);const he=Be.useMemo(()=>Ve({schema:m,handler:r,onSuccess:a,toast:b,failMsg:q,setValue:E,setError:R,reset:S,clearOnError:Ie(o)}),[m,r,a,b,q,E,R,S,o]),{clsName:s}=Ae.useMemo(()=>Ze(n.displayName,C),[C]),[ve]=Ee({isSubmitSuccessful:ye,successMessage:P,reset:S});return M?e.jsx(w,{clsName:s}):e.jsx("div",{className:s("container"),"data-theme":ce?"dark":"light",style:Ke({cssVars:pe,varNames:Ge}),children:P&&ve?e.jsx(Re,{successMessage:P,clsName:s}):e.jsxs(e.Fragment,{children:[t?x(t,{title:l,loginLink:i,clsName:s}):null,d.root&&!b&&e.jsx("div",{className:s("serverAuthError"),children:d.root.message}),e.jsxs("form",{onSubmit:fe(he),style:{display:M?"none":"block"},className:s("form"),children:[j==="bottom"&&e.jsxs(e.Fragment,{children:[e.jsx(_,{componentName:n.displayName,fields:o,register:V,errors:d,clsName:s}),e.jsx("button",{type:"submit",className:s("button"),children:T}),i?e.jsx("div",{className:s("forgotPasswordLink"),children:x(i)}):null]}),N&&N,j==="top"&&e.jsxs(e.Fragment,{children:[e.jsx(_,{componentName:n.displayName,fields:o,register:V,errors:d,clsName:s}),e.jsx("button",{type:"submit",className:s("button"),children:T}),i?e.jsx("div",{className:s("forgotPasswordLink"),children:x(i)}):null]})]})]})})};n.displayName="forgotPassword";n.__docgenInfo={description:"",methods:[],displayName:"forgotPassword",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
  values: FormValues<T>,
  event?: Event,
) => Promise<BaseServerResponse<FormValues<T>>>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  // [Prop in keyof K]: K[Prop] | K[Prop][];
  [Prop in keyof K]: K[Prop];
}`,signature:{properties:[{key:{name:"K",required:!0},value:{name:"K[Prop]",raw:"K[Prop]"}}]}},name:"values"},{type:{name:"Event"},name:"event"}],return:{name:"Promise",elements:[{name:"intersection",raw:`{
  /* success key informs client whether server validation passed or failed */
  success: boolean;
  /* errors only display if success=false */
  errors?: {
    /* Optional error msg to print in header
     * or send to toast when server validation fails
     */
    root?: string | string[];
    /*
     * pass any failing formValues
     * as key=name of field, value=message or array of messages to print
     */
  } & Partial<TFormValues>;
} & Meta`,elements:[{name:"signature",type:"object",raw:`{
  /* success key informs client whether server validation passed or failed */
  success: boolean;
  /* errors only display if success=false */
  errors?: {
    /* Optional error msg to print in header
     * or send to toast when server validation fails
     */
    root?: string | string[];
    /*
     * pass any failing formValues
     * as key=name of field, value=message or array of messages to print
     */
  } & Partial<TFormValues>;
}`,signature:{properties:[{key:"success",value:{name:"boolean",required:!0}},{key:"errors",value:{name:"intersection",raw:`{
  /* Optional error msg to print in header
   * or send to toast when server validation fails
   */
  root?: string | string[];
  /*
   * pass any failing formValues
   * as key=name of field, value=message or array of messages to print
   */
} & Partial<TFormValues>`,elements:[{name:"signature",type:"object",raw:`{
  /* Optional error msg to print in header
   * or send to toast when server validation fails
   */
  root?: string | string[];
  /*
   * pass any failing formValues
   * as key=name of field, value=message or array of messages to print
   */
}`,signature:{properties:[{key:"root",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1}}]}},{name:"Partial",elements:[{name:"K[Prop]",raw:"K[Prop]"}],raw:"Partial<TFormValues>"}],required:!1}}]}},{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}]}],raw:"Promise<BaseServerResponse<FormValues<T>>>"}}},description:"Handler to submit form. Receives form values and returns Promise with ServerResponse"},onSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny, Meta extends Record<string, any>>(
  resp: BaseServerResponse<FormValues<T>, Meta>,
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`{
  /* success key informs client whether server validation passed or failed */
  success: boolean;
  /* errors only display if success=false */
  errors?: {
    /* Optional error msg to print in header
     * or send to toast when server validation fails
     */
    root?: string | string[];
    /*
     * pass any failing formValues
     * as key=name of field, value=message or array of messages to print
     */
  } & Partial<TFormValues>;
} & Meta`,elements:[{name:"signature",type:"object",raw:`{
  /* success key informs client whether server validation passed or failed */
  success: boolean;
  /* errors only display if success=false */
  errors?: {
    /* Optional error msg to print in header
     * or send to toast when server validation fails
     */
    root?: string | string[];
    /*
     * pass any failing formValues
     * as key=name of field, value=message or array of messages to print
     */
  } & Partial<TFormValues>;
}`,signature:{properties:[{key:"success",value:{name:"boolean",required:!0}},{key:"errors",value:{name:"intersection",raw:`{
  /* Optional error msg to print in header
   * or send to toast when server validation fails
   */
  root?: string | string[];
  /*
   * pass any failing formValues
   * as key=name of field, value=message or array of messages to print
   */
} & Partial<TFormValues>`,elements:[{name:"signature",type:"object",raw:`{
  /* Optional error msg to print in header
   * or send to toast when server validation fails
   */
  root?: string | string[];
  /*
   * pass any failing formValues
   * as key=name of field, value=message or array of messages to print
   */
}`,signature:{properties:[{key:"root",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1}}]}},{name:"Partial",elements:[{name:"K[Prop]",raw:"K[Prop]"}],raw:"Partial<TFormValues>"}],required:!1}}]}},{name:"Meta"}]},name:"resp"}],return:{name:"void"}}},description:"Handler that fires upon successful server validation"},header:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | ReactNode | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"ReactNode"},{name:"literal",value:"false"}]},description:`Custom header component or
false to disable the default header`,defaultValue:{value:`({
  title,
  clsName,
}: DefaultForgotPasswordHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>
      Enter the email address for your account. We'll send an email with a link
      to reset your password.
    </p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Forgot Password'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Next'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    focus: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:`({
  clsName,
}: {
  clsName: ClsName;
}) => (
  <div className={clsName('confirmation')}>
    <h2>Verification Email Sent</h2>
    <p>
      Please check your inbox and click on the provided link. You will then be
      able to reset your password and login.
    </p>
  </div>
)`,computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},loginLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:`Override the login link inside the default header
Note: if you provide a header prop, the login link will not appear`,defaultValue:{value:'<a href="/login">Back to login</a>',computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of children",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Other content to display"}}};const me=(r,a)=>(le(a),e.jsx(n,{...r,isFocused:a.viewMode!=="docs",...a.viewMode==="docs"?{darkMode:a.globals.scheme==="dark mode"}:{},children:e.jsxs("div",{style:{margin:"2rem 0"},children:["If you're having trouble signing in, visit our ",e.jsx("a",{href:"#",children:"support"})," ","or ",e.jsx("a",{href:"#",children:"FAQ"})," pages."]})})),de={title:"forms/Forgot Password",component:n,tags:["autodocs"],argTypes:{header:{table:{type:{summary:"ComponentType | ReactNode | false"},defaultValue:{summary:"Default Header"}}},successMessage:{control:"null",table:{type:{summary:"ComponentType | string | false"},defaultValue:{summary:"<div><h2>Verification Email Sent</h2><p>Please check your inbox and click on the provided link. You will then be able to reset your password and login.</p></div>"}}},loginLink:{control:"null",table:{type:{summary:"ComponentType | ReactNode | false"}}},loader:{table:{defaultValue:{summary:"Default Spinner"}}},customFields:{table:{defaultValue:{summary:"Default Fields"}}},customSchema:{table:{type:{summary:"AnyZodSchema"},defaultValue:{summary:"Default Zod Schema"}}}},args:{handler:Oe({route:"/forgot-password"}),onSuccess:r=>{ie("onSuccess")(r)},loginLink:()=>e.jsx(Se,{name:"basic",title:"forms-login",children:"Back to login"})},parameters:{notes:[_e,...F([e.jsxs(e.Fragment,{children:["For demo purposes, any email except ",e.jsx("b",{children:"non@user.com"})," will be considered a valid user. If you enter a valid email you have access to, you should get an message with a reset link (which will take you back here, to the ",e.jsx("em",{children:"Forgot Password Reset"})," component)."]}),e.jsxs(e.Fragment,{children:["For security reasons, it's generally recommended not to notify the user whether their email is found in the database. That said, the component can display that (or any) error your server returns or call in a toast if configured. For testing, you can use ",e.jsx("b",{children:"non@user.com"})," ","to show the case where the backend responds with user not found."]})])]},decorators:[r=>e.jsx("div",{className:"max-width-container",children:r()})],render:(r,a)=>(le(a),e.jsx(n,{...r,isFocused:a.viewMode==="docs"?!1:r.isFocused,...a.viewMode==="docs"?{darkMode:a.globals.scheme==="dark mode"}:{}}))},u={args:{}},c={args:{},render:me},p={args:{childrenPosition:"top"},render:me},f={args:{customFields:O,customSchema:je},parameters:{notes:[...de.parameters.notes,...F([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(O,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  secret_question_1: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
  secret_question_2: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
})`})})]})],"div")]}},g={args:{buttonText:"Next",header:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Password Reset"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dicta distinctio dolore eius optio vero."})]})}},k=(r=!0)=>async({canvasElement:a,step:l})=>{const t=we(a);await l("Enter email",async()=>{const w=t.getByLabelText("Email",{selector:"input"});await be.type(w,r?"example@example.com":"non@user.com",{delay:150})}),await l("Submit form",async()=>{await Pe.click(t.getByRole("button"))})},y={args:{},play:k()},h={args:{},play:k(!1)},v={args:{handler:()=>{const r=new Error("User unfriendly error");return ie("rejected")(r),Promise.reject(r)},failMsg:"Problem connecting to the network. Are you online?"},play:k(),parameters:{notes:[...de.parameters.notes,...F("If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.")]}};var D,z,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var A,K,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: FPwithChildren
}`,...(H=(K=c.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var Z,L,I;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    childrenPosition: 'top'
  },
  render: FPwithChildren
}`,...(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var G,U,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    customFields: forgotPasswordFields,
    customSchema: forgotPasswordSchema
  },
  parameters: {
    notes: [...meta.parameters.notes, ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(forgotPasswordFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  secret_question_1: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
  secret_question_2: z
    .string({ required_error: 'Secret question is required' })
    .nonempty({ message: 'Secret question is required' })
    .max(56)
    .default(''),
})\`}</code>
            </pre>
          </>], 'div')]
  }
}`,...(J=(U=f.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Y,Q,W;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    buttonText: 'Next',
    header: <>
        <h2>Password Reset</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
  }
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var $,X,ee;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay()
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var re,ae,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay(false)
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,te,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    handler: () => {
      const err = new Error('User unfriendly error');
      action('rejected')(err);
      return Promise.reject(err);
    },
    failMsg: 'Problem connecting to the network. Are you online?'
  },
  play: SubmitPlay(),
  parameters: {
    notes: [...meta.parameters.notes, ...makeNotes('If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.')]
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const or=["Basic","ChildrenBelow","ChildrenAbove","CustomFields","CustomHeader","GoodCredentials","BadCredentials","Catch"];export{h as BadCredentials,u as Basic,v as Catch,p as ChildrenAbove,c as ChildrenBelow,f as CustomFields,g as CustomHeader,y as GoodCredentials,or as __namedExportsOrder,de as default};
