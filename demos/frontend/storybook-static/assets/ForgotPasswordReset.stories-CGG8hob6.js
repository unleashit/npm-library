import{j as e}from"./jsx-runtime-CKrituN3.js";import{w as Pe,u as M,b as be}from"./index-py9pzQbV.js";import{a as ie}from"./chunk-MZXVCX43-DWuJqIWT.js";import{u as le}from"./useUpdateDarkMode-a49ee7yZ.js";import{u as ke,t as Se,a as qe,f as Ce,b as Te,S as Fe,C as O,D as je,c as xe,d as me}from"./backendDemoHandler-Dv1-GY2V.js";import{e as Ne,g as Re,h as Ve,i as De,j as E,k as Me}from"./forgot-password-Cuf6ABkL.js";import{r as T,R as Oe}from"./index-CBqU2yxZ.js";import{b as Ee,u as ze,m as S}from"./Notes-CLPFxSgn.js";import{m as Ie,v as _e}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{genClassNames:Ae,getDefaultsFromZodObject:Be,clearOnError:Ke,normalizeComponentProp:Le}=ze,He=[..._e],i=({handler:s,onSuccess:r,headerText:n="Reset Password",header:t=Ne,loader:m=je,buttonText:d="Update Password",childrenPosition:c="bottom",customFields:o=Re,customSchema:l=Ve,toast:u,failMsg:p=Ee,successMessage:q=De,darkMode:ce=!1,cssVars:pe,isFocused:fe=!0,cssModule:j={},children:x})=>{const{register:N,handleSubmit:ge,reset:C,setValue:R,setError:V,setFocus:ye,formState:{errors:f,isSubmitting:D,isSubmitSuccessful:he}}=ke({resolver:Se(l),defaultValues:Be(l)});qe(o,ye,fe);const we=T.useMemo(()=>Ce({schema:l,handler:s,onSuccess:r,toast:u,failMsg:p,setValue:R,setError:V,reset:C,clearOnError:Ke(o)}),[l,s,r,u,p,R,V,C,o]),{clsName:a}=Oe.useMemo(()=>Ae(i.displayName,j),[j]),[ve]=Te({isSubmitSuccessful:he,successMessage:q,reset:C});return D?e.jsx(m,{clsName:a}):e.jsx("div",{className:a("container"),"data-theme":ce?"dark":"light",style:Ie({cssVars:pe,varNames:He}),children:q&&ve?e.jsx(Fe,{successMessage:q,clsName:a}):e.jsxs(e.Fragment,{children:[t?Le(t,{title:n,clsName:a}):null,f.root&&!u&&e.jsx("div",{className:a("serverAuthError"),children:f.root.message}),e.jsxs("form",{onSubmit:ge(we),style:{display:D?"none":"block"},className:a("form"),children:[c==="bottom"&&e.jsxs(e.Fragment,{children:[e.jsx(O,{componentName:i.displayName,fields:o,register:N,errors:f,clsName:a}),e.jsx("button",{type:"submit",className:a("button"),children:d})]}),x&&x,c==="top"&&e.jsxs(e.Fragment,{children:[e.jsx(O,{componentName:i.displayName,fields:o,register:N,errors:f,clsName:a}),e.jsx("button",{type:"submit",className:a("button"),children:d})]})]})]})})};i.displayName="forgotPassword";i.__docgenInfo={description:"",methods:[],displayName:"forgotPassword",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
    <p>Please enter a new password and confirm.</p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Reset Password'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Update Password'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    type: 'password',
    name: 'newPassword',
    label: 'New password',
    focus: true,
    clearOnServerError: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'newPasswordConfirm',
    label: 'Password confirm',
    clearOnServerError: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z
.object({
  newPassword: z
    .string({ required_error: 'Please enter a password' })
    .nonempty({ message: 'Please enter a password' })
    .regex(
      passwordReg,
      'Password must have at least 8 characters and contain at least 1 letter and 1 number',
    )
    .min(8)
    .max(56)
    .default(''),
  newPasswordConfirm: z
    .string({ required_error: 'Please enter the password again' })
    .nonempty({ message: 'Please enter the password again' })
    .regex(
      passwordReg,
      'Password must have at least 8 characters and contain at least 1 letter and 1 number',
    )
    .min(8)
    .max(56)
    .default(''),
})
.refine((data) => data.newPassword === data.newPasswordConfirm, {
  message: 'Passwords must match',
  path: ['passwordConfirm'],
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:`({
  clsName,
}: {
  clsName: ClsName;
}) => (
  <div className={clsName('resetConfirmation')}>
    <h2>Thank you.</h2>
    <p>
      Your password has been updated. You may now login with the new password.
    </p>
  </div>
)`,computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of children",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Other content to display"}}};const de=(s,r)=>{var m;const[,n]=T.useState({}),t=(m=r==null?void 0:r.parameters)==null?void 0:m.query;return T.useLayoutEffect(()=>{var o,l;const d=(l=(o=parent.window)==null?void 0:o.location)==null?void 0:l.href;if(!t||!d)return;const c=new URL(d);for(const[u,p]of Object.entries(t))console.log({key:u,value:p}),c.searchParams.set(u,p);return parent.window.history.replaceState(parent.window.history.state,"",decodeURIComponent(c.href)),n({}),()=>{parent.window.history.replaceState(parent.window.history.state,"",d)}},[t]),e.jsx(s,{...r})};de.__docgenInfo={description:"Decorator checks for a parameter named `query` and if found\nupdates the query string of the main url with its key/value pairs",methods:[],displayName:"WithParamsDecorator"};const ue=(s,r)=>(le(r),e.jsx(i,{...s,isFocused:r.viewMode!=="docs",...r.viewMode==="docs"?{darkMode:r.globals.scheme==="dark mode"}:{},children:e.jsx("div",{style:{margin:"2rem 0"},children:"We recommend using a trusted password manager to generate a strong password."})})),Ze={title:"forms/Forgot Password Reset",component:i,tags:["autodocs"],argTypes:{header:{table:{type:{summary:"ComponentType | ReactNode | false"},defaultValue:{summary:"Default Header"}}},successMessage:{control:"null",table:{type:{summary:"ComponentType | string | false"},defaultValue:{summary:"<div><h2>Thank you.</h2><p>Your password has been updated. You may now login with the new password.</p></div>"}}},loader:{table:{defaultValue:{summary:"Default Spinner"}}},customFields:{table:{defaultValue:{summary:"Default Fields"}}},customSchema:{table:{type:{summary:"AnyZodSchema"},defaultValue:{summary:"Default Zod Schema"}}}},args:{handler:xe({route:s=>{const r=new URL(parent.window.location.href).searchParams,n=s.token?s.token:r.get("token");return`/forgot-password/${r.get("userid")}/${n}`}}),onSuccess:s=>{ie("onSuccess")(s)}},parameters:{query:{userid:"1"},notes:[me,...S("In this example, in the handler function, the user Id and token are taken from url and posted to the server for verification. If the either the id or token don't match, or the user input is wrong it will fail.")]},decorators:[(s,r)=>e.jsx("div",{className:"max-width-container",children:e.jsx(s,{...r})}),de],render:(s,r)=>(le(r),e.jsx(i,{...s,isFocused:r.viewMode==="docs"?!1:s.isFocused,...r.viewMode==="docs"?{darkMode:r.globals.scheme==="dark mode"}:{}}))},g={args:{},parameters:{query:{token:"1234567890"}}},y={args:{},parameters:{query:{token:"1234567890"}},render:ue},h={args:{childrenPosition:"top"},parameters:{query:{token:"1234567890"}},render:ue},w={args:{customFields:E,customSchema:Me},parameters:{notes:[me,...S([e.jsx(e.Fragment,{children:"In this example the user ID must still be present in the url, but a field was added to manually accept a token. If all is a match, the user can reset their password."}),e.jsxs(e.Fragment,{children:["For demo purposes, you can use ",e.jsx("strong",{children:"1234567890"})," as the token to test a successful response. If not successful, ensure"," ",e.jsx("strong",{children:"userid=1"})," is part of the query string."]})]),...S([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(E,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z.object({
  token: z
    .string({ required_error: 'Please enter the token from the email we sent' })
    .nonempty({ message: 'Please enter the token from the email we sent' })
    .max(50, { message: 'Token is too long' })
    .default(''),
  newPassword: z
    .string({ required_error: 'New Password is required' })
    .nonempty({ message: 'New Password is required' })
    .max(56)
    .default(''),
  newPasswordConfirm: z
    .string({ required_error: 'Password confirmation is required' })
    .nonempty({ message: 'Password confirmation is required' })
    .max(56)
    .default(''),
})`})})]})],"div")]}},v={args:{buttonText:"Next",header:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Reset Password"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dicta distinctio dolore eius optio vero."})]})},parameters:{query:{token:"1234567890"}}},F=()=>async({canvasElement:s,step:r})=>{const n=Pe(s);await r("Enter password",async()=>{const t=n.getByLabelText("New password",{selector:"input"});await M.type(t,"somepassword123",{delay:150});const m=n.getByLabelText("Password confirm",{selector:"input"});await M.type(m,"somepassword123",{delay:150})}),await r("Submit form",async()=>{await be.click(n.getByRole("button"))})},P={args:{},parameters:{query:{token:"1234567890"}},play:F()},b={args:{},parameters:{query:{token:"badtoken"}},play:F()},k={args:{handler:()=>{const s=new Error("User unfriendly error");return ie("rejected")(s),Promise.reject(s)},failMsg:"Problem connecting to the network. Are you online?"},play:F(),parameters:{notes:[...Ze.parameters.notes,...S("If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.")],query:{token:"1234567890"}}};var z,I,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  parameters: {
    query: {
      token: '1234567890'
    }
  }
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,B,K;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  parameters: {
    query: {
      token: '1234567890'
    }
  },
  render: FPRwithChildren
}`,...(K=(B=y.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var L,H,Z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    childrenPosition: 'top'
  },
  parameters: {
    query: {
      token: '1234567890'
    }
  },
  render: FPRwithChildren
}`,...(Z=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var U,Y,G;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    customFields: forgotPasswordResetFields,
    customSchema: forgotPasswordResetSchema
  },
  parameters: {
    notes: [formComponentNotes, ...makeNotes([<>
          In this example the user ID must still be present in the url, but a
          field was added to manually accept a token. If all is a match, the
          user can reset their password.
        </>, <>
          For demo purposes, you can use <strong>1234567890</strong> as the
          token to test a successful response. If not successful, ensure{' '}
          <strong>userid=1</strong> is part of the query string.
        </>]), ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(forgotPasswordResetFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z.object({
  token: z
    .string({ required_error: 'Please enter the token from the email we sent' })
    .nonempty({ message: 'Please enter the token from the email we sent' })
    .max(50, { message: 'Token is too long' })
    .default(''),
  newPassword: z
    .string({ required_error: 'New Password is required' })
    .nonempty({ message: 'New Password is required' })
    .max(56)
    .default(''),
  newPasswordConfirm: z
    .string({ required_error: 'Password confirmation is required' })
    .nonempty({ message: 'Password confirmation is required' })
    .max(56)
    .default(''),
})\`}</code>
            </pre>
          </>], 'div')]
  }
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var W,$,J;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    buttonText: 'Next',
    header: <>
        <h2>Reset Password</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
  },
  parameters: {
    query: {
      token: '1234567890'
    }
  }
}`,...(J=($=v.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,X,ee;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  parameters: {
    query: {
      token: '1234567890'
    }
  },
  play: SubmitPlay()
}`,...(ee=(X=P.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var re,se,ae;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {},
  parameters: {
    query: {
      token: 'badtoken'
    }
  },
  play: SubmitPlay(false)
}`,...(ae=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,te,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    notes: [...meta.parameters.notes, ...makeNotes('If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.')],
    query: {
      token: '1234567890'
    }
  }
}`,...(oe=(te=k.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ar=["Basic","ChildrenBelow","ChildrenAbove","CustomFields","CustomHeader","GoodCredentials","BadCredentials","Catch"];export{b as BadCredentials,g as Basic,k as Catch,h as ChildrenAbove,y as ChildrenBelow,w as CustomFields,v as CustomHeader,P as GoodCredentials,ar as __namedExportsOrder,Ze as default};
