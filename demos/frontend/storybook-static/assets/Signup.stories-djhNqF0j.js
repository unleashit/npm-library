import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as he,R as Fe}from"./index-CBqU2yxZ.js";import{w as Oe,u as q,b as Me}from"./index-py9pzQbV.js";import{a as x}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as Le}from"./index-Dce-FHL1.js";import{e as Ee,u as ze,t as Re,a as Ae,f as _e,b as De,S as D,C as K,D as Ke,c as Be,d as He}from"./backendDemoHandler-Dv1-GY2V.js";import{u as we,z as s,b as Ze,m as N}from"./Notes-CLPFxSgn.js";import{m as Ie,v as Ge}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import{d as B}from"./index-CtL5feC2.js";/* empty css              */import{u as ve}from"./useUpdateDarkMode-a49ee7yZ.js";import{a as We}from"./modal-CdN5Y-fw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-C-I6vmrZ.js";const{normalizeComponentProp:Ue}=we,be=({title:a="Signup",loginLink:r,clsName:t})=>e.jsx(Ee,{title:a,clsName:t,children:e.jsxs("p",{children:["Already have an account? ",Ue(r)]})});be.__docgenInfo={description:"",methods:[],displayName:"DefaultSignupHeader",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Signup'",computed:!1}},loginLink:{required:!0,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:""},clsName:{required:!0,tsType:{name:"signature",type:"function",raw:"(camelCaseClassName: string) => string",signature:{arguments:[{type:{name:"string"},name:"camelCaseClassName"}],return:{name:"string"}}},description:""}}};const $e=s.object({email:s.string({required_error:"Please enter your email"}).nonempty({message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}).default(""),password:s.string({required_error:"Please enter a password"}).nonempty({message:"Please enter a password"}).min(8).max(56).default(""),passwordConfirm:s.string({required_error:"Please enter the password again"}).nonempty({message:"Please enter the password again"}).min(8).max(56).default("")}).refine(a=>a.password===a.passwordConfirm,{message:"Passwords must match",path:["passwordConfirm"]}),Je=$e,Qe=[{element:"input",name:"email",type:"text",label:"Email",focus:!0},{element:"input",name:"password",type:"password",label:"Password",clearOnServerError:!0},{element:"input",name:"passwordConfirm",type:"password",label:"Password confirm",clearOnServerError:!0}],Xe=Qe,{genClassNames:Ye,getDefaultsFromZodObject:ea,clearOnError:aa,normalizeComponentProp:ra}=we,na=[...Ge,"orlineColor","orlineMargin"],i=({handler:a,onSuccess:r,headerText:t="Signup",header:o=be,loader:V=Ke,buttonText:u="Signup",orLine:p=!0,childrenPosition:c="bottom",loginLink:Te=e.jsx("a",{href:"/login",children:"Login"}),customFields:l=Xe,customSchema:f=Je,toast:k,failMsg:O=Ze,successMessage:m=!1,darkMode:Ce=!1,cssVars:xe,isFocused:Ve=!0,cssModule:M={},children:L})=>{const{register:E,handleSubmit:ke,reset:j,setValue:z,setError:R,setFocus:je,formState:{errors:g,isSubmitting:A,isSubmitSuccessful:qe}}=ze({resolver:Re(f),mode:"onBlur",defaultValues:ea(f)});Ae(l,je,Ve);const Ne=he.useMemo(()=>_e({schema:f,handler:a,onSuccess:r,toast:k,failMsg:O,setValue:z,setError:R,reset:j,clearOnError:aa(l)}),[f,a,r,k,O,z,R,j,l]),{clsName:n}=Fe.useMemo(()=>Ye(i.displayName,M),[M]),[_]=De({isSubmitSuccessful:qe,successMessage:m,reset:j});return m&&_?e.jsx(D,{successMessage:m,clsName:n}):A?e.jsx(V,{clsName:n}):e.jsx("div",{className:n("container"),"data-theme":Ce?"dark":"light",style:Ie({cssVars:xe,varNames:na}),children:m&&_?e.jsx(D,{successMessage:m,clsName:n}):e.jsxs(e.Fragment,{children:[o?ra(o,{headerText:t,loginLink:Te,clsName:n}):null,g.root&&!k&&e.jsx("div",{className:n("serverAuthError"),children:g.root.message}),e.jsxs("form",{onSubmit:ke(Ne),style:{display:A?"none":"block"},className:n("form"),children:[c==="bottom"&&e.jsxs(e.Fragment,{children:[e.jsx(K,{componentName:i.displayName,fields:l,register:E,errors:g,clsName:n}),e.jsx("button",{type:"submit",className:n("button"),children:u})]}),L&&e.jsxs("div",{className:n("socialButtons"),children:[p&&c==="bottom"&&e.jsx("div",{className:n("orLine"),children:e.jsx("span",{children:"or"})}),L,p&&c==="top"&&e.jsx("div",{className:n("orLine"),children:e.jsx("span",{children:"or"})})]}),c==="top"&&e.jsxs(e.Fragment,{children:[e.jsx(K,{componentName:i.displayName,fields:l,register:E,errors:g,clsName:n}),e.jsx("button",{type:"submit",className:n("button"),children:u})]})]})]})})};i.displayName="signup";const d=i;i.__docgenInfo={description:"",methods:[],displayName:"signup",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  title = 'Signup',
  loginLink,
  clsName,
}: DefaultSignupHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Already have an account? {normalizeComponentProp(loginLink)}</p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Signup'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Signup'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    name: 'email',
    type: 'text',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    name: 'password',
    type: 'password',
    label: 'Password',
    clearOnServerError: true,
  },
  {
    element: 'input',
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password confirm',
    clearOnServerError: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z
.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  password: z
    .string({ required_error: 'Please enter a password' })
    .nonempty({ message: 'Please enter a password' })
    .min(8)
    .max(56)
    .default(''),
  passwordConfirm: z
    .string({ required_error: 'Please enter the password again' })
    .nonempty({ message: 'Please enter the password again' })
    .min(8)
    .max(56)
    .default(''),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: 'Passwords must match',
  path: ['passwordConfirm'],
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"false",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},loginLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:`Override the login link inside the default header
Note: if you provide a header prop, the login link will not appear`,defaultValue:{value:'<a href="/login">Login</a>',computed:!1}},orLine:{required:!1,tsType:{name:"boolean"},description:`Add a separator between email and
social logins  (children required)`,defaultValue:{value:"true",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},children:{required:!1,tsType:{name:"ReactNode"},description:"Position of children"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Social logins or other content to display",defaultValue:{value:"'bottom'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"signup",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  title = 'Signup',
  loginLink,
  clsName,
}: DefaultSignupHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Already have an account? {normalizeComponentProp(loginLink)}</p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Signup'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Signup'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    name: 'email',
    type: 'text',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    name: 'password',
    type: 'password',
    label: 'Password',
    clearOnServerError: true,
  },
  {
    element: 'input',
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password confirm',
    clearOnServerError: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z
.object({
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  password: z
    .string({ required_error: 'Please enter a password' })
    .nonempty({ message: 'Please enter a password' })
    .min(8)
    .max(56)
    .default(''),
  passwordConfirm: z
    .string({ required_error: 'Please enter the password again' })
    .nonempty({ message: 'Please enter the password again' })
    .min(8)
    .max(56)
    .default(''),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: 'Passwords must match',
  path: ['passwordConfirm'],
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"false",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},loginLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:`Override the login link inside the default header
Note: if you provide a header prop, the login link will not appear`,defaultValue:{value:'<a href="/login">Login</a>',computed:!1}},orLine:{required:!1,tsType:{name:"boolean"},description:`Add a separator between email and
social logins  (children required)`,defaultValue:{value:"true",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},children:{required:!1,tsType:{name:"ReactNode"},description:"Position of children"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Social logins or other content to display",defaultValue:{value:"'bottom'",computed:!1}}}};const H=[{element:"input",type:"email",name:"name",label:"Name",focus:!0},{element:"input",type:"email",name:"email",label:"Email"},{element:"input",type:"password",name:"password",label:"Password"},{element:"input",type:"password",name:"passwordConfirm",label:"Confirm Password"},{element:"input",type:"checkbox",name:"newsletter",label:"Subscribe to our newsletter?"}],sa=s.object({name:s.string().max(50,{message:"Name is too long"}).default(""),email:s.string({required_error:"Please enter your email"}).nonempty({message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}).default(""),password:s.string({required_error:"Please enter a password"}).nonempty({message:"Please enter a password"}).min(8).max(56).default(""),passwordConfirm:s.string({required_error:"Please enter the password again"}).nonempty({message:"Please enter the password again"}).min(8).max(56).default(""),newsletter:s.boolean().default(!0)}).refine(a=>a.password===a.passwordConfirm,{message:"Passwords must match",path:["passwordConfirm"]}),Pe=(a,r)=>(ve(r),e.jsxs(d,{...a,isFocused:r.viewMode!=="docs",...r.viewMode==="docs"?{darkMode:r.globals.scheme==="dark mode"}:{},children:[e.jsx(B.TwitterLoginButton,{onClick:x("twitterLogin"),style:{width:"100%",margin:"0 0 .7rem 0"}}),e.jsx(B.GithubLoginButton,{onClick:x("githubLogin"),style:{width:"100%",margin:"0"}})]})),Se={title:"forms/Signup",component:d,tags:["autodocs"],argTypes:{header:{table:{type:{summary:"ComponentType | ReactNode | false"},defaultValue:{summary:"Default Header"}}},successMessage:{control:"null",table:{type:{summary:"ComponentType | string | false"}}},loginLink:{control:"null",table:{type:{summary:"ComponentType | ReactNode | false"}}},loader:{table:{defaultValue:{summary:"Default Spinner"}}},customFields:{table:{defaultValue:{summary:"Default Fields"}}},customSchema:{table:{type:{summary:"AnyZodSchema"},defaultValue:{summary:"Default Zod Schema"}}}},args:{handler:Be({route:"/signup"}),onSuccess:a=>{x("onSuccess")(a)},successMessage:()=>e.jsxs("div",{className:"success-message",children:[e.jsx("p",{children:"Welcome! Thanks for signing up."}),e.jsxs("p",{children:["This message has been set by the ",e.jsx("i",{children:"successMessage"})," prop. When"," ",e.jsx("i",{children:"successMessage"})," isn't provided or is set to false, be sure to provide an ",e.jsx("i",{children:"onSuccess"})," prop with a redirect or other behavior."]})]}),loginLink:()=>e.jsx(Le,{name:"basic",title:"forms-login",children:"Login"})},parameters:{notes:[He,...N(e.jsxs(e.Fragment,{children:["To test the UI for an already existing user you may use:"," ",e.jsx("b",{children:"test@test.com"}),". All other emails that otherwise pass validations should succeed."]}))]},decorators:[a=>e.jsx("div",{className:"max-width-container",children:a()})],render:(a,r)=>(ve(r),e.jsx(d,{...a,isFocused:r.viewMode==="docs"?!1:a.isFocused,...r.viewMode==="docs"?{darkMode:r.globals.scheme==="dark mode"}:{}}))},y={args:{}},h={args:{},render:Pe},w={args:{childrenPosition:"top"},render:Pe},v={args:{customFields:H,customSchema:sa},parameters:{notes:[Se.parameters.notes,...N([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(H,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z
  .object({
    name: z.string().max(50, { message: 'Name is too long' }).default(''),
    email: z
      .string({ required_error: 'Please enter your email' })
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please enter a valid email' })
      .max(50, { message: 'Email is too long' })
      .default(''),
    password: z
      .string({ required_error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .min(8)
      .max(56)
      .default(''),
    passwordConfirm: z
      .string({ required_error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .min(8)
      .max(56)
      .default(''),
    newsletter: z.boolean().default(true),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });
          `})})]})],"div")]}},b={args:{buttonText:"Next",header:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Create Account"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dicta distinctio dolore eius optio vero."})]})}},F=(a=!0)=>async({canvasElement:r,step:t})=>{const o=Oe(r);await t("Enter credentials",async()=>{const V=o.getByLabelText("Email",{selector:"input"});await q.type(V,a?"new@user.com":"test@test.com",{delay:150});const u=o.getByLabelText("Password",{selector:"input"});await q.type(u,"12345678",{delay:150});const p=o.getByLabelText("Password confirm",{selector:"input"});await q.type(p,"12345678",{delay:150})}),await t("Submit form",async()=>{await Me.click(o.getByRole("button"))})},P={args:{},play:F()},S={args:{},play:F(!1)},T={args:{handler:()=>{const a=new Error("User unfriendly error");return x("rejected")(a),Promise.reject(a)},failMsg:"Problem connecting to the network. Are you online?"},play:F(),parameters:{notes:[...Se.parameters.notes,...N("If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop")]}},C={args:{isFocused:!0},parameters:{docs:{disable:!0}},render:a=>{const[r,t]=he.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!0),style:{display:"flex",margin:"auto",padding:".7rem 1rem"},children:"Login"}),e.jsx(We,{isOpen:r,onClose:()=>t(!1),cssVars:{modalPadding:"2.2rem"},children:e.jsx(d,{...a})})]})}};var Z,I,G;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {}
}`,...(G=(I=y.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var W,U,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: SignupWithChildren
}`,...($=(U=h.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,Q,X;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    childrenPosition: 'top'
  },
  render: SignupWithChildren
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    customFields: signupFields,
    customSchema: signupSchema
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(signupFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z
  .object({
    name: z.string().max(50, { message: 'Name is too long' }).default(''),
    email: z
      .string({ required_error: 'Please enter your email' })
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please enter a valid email' })
      .max(50, { message: 'Email is too long' })
      .default(''),
    password: z
      .string({ required_error: 'Please enter a password' })
      .nonempty({ message: 'Please enter a password' })
      .min(8)
      .max(56)
      .default(''),
    passwordConfirm: z
      .string({ required_error: 'Please enter the password again' })
      .nonempty({ message: 'Please enter the password again' })
      .min(8)
      .max(56)
      .default(''),
    newsletter: z.boolean().default(true),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });
          \`}</code>
            </pre>
          </>], 'div')]
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    buttonText: 'Next',
    header: <>
        <h2>Create Account</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
  }
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,oe,ie;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay()
}`,...(ie=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,me,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay(false)
}`,...(de=(me=S.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,pe,ce;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    notes: [...meta.parameters.notes, ...makeNotes('If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop')]
  }
}`,...(ce=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var fe,ge,ye;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    isFocused: true
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  render: args => {
    const [modalOpen, setModalOpen] = useState(false);
    return <div>
        <button onClick={() => setModalOpen(true)} style={{
        display: 'flex',
        margin: 'auto',
        padding: '.7rem 1rem'
      }}>
          Login
        </button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} cssVars={{
        modalPadding: '2.2rem'
      }}>
          <Signup {...args} />
        </Modal>
      </div>;
  }
}`,...(ye=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const ba=["Basic","SocialLoginsBelow","SocialLoginsAbove","CustomFields","CustomHeader","GoodCredentials","BadCredentials","Catch","InAModal"];export{S as BadCredentials,y as Basic,T as Catch,v as CustomFields,b as CustomHeader,P as GoodCredentials,C as InAModal,w as SocialLoginsAbove,h as SocialLoginsBelow,ba as __namedExportsOrder,Se as default};
