import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as we,R as Me}from"./index-CBqU2yxZ.js";import{w as Re,u as _,b as Oe}from"./index-py9pzQbV.js";import{a as N}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as B}from"./index-Dce-FHL1.js";import{e as Ee,u as ze,t as De,a as Ae,f as Ke,b as _e,S as Be,C as H,D as He,c as Ze,d as Ie}from"./backendDemoHandler-Dv1-GY2V.js";import{z as t,u as be,b as We,m as q}from"./Notes-CLPFxSgn.js";import{m as Ge,v as Ue}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import{d as Z}from"./index-CtL5feC2.js";import{u as Pe}from"./useUpdateDarkMode-a49ee7yZ.js";/* empty css              */import{W as $e}from"./WithMaxWidthDecorator-Blw6KwIO.js";import{a as Je}from"./modal-CdN5Y-fw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-C-I6vmrZ.js";const Ye=t.object({email:t.string({required_error:"Please enter your email"}).nonempty({message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}).default(""),password:t.string({required_error:"Please enter a password"}).nonempty({message:"Please enter a password"}).min(8).max(56).default("")}),Qe=Ye,Xe=[{element:"input",type:"text",name:"email",label:"Email",focus:!0},{element:"input",type:"password",name:"password",label:"Password",clearOnServerError:!0}],ea=Xe,{normalizeComponentProp:aa}=be,Te=({title:n="Login",signupLink:a,clsName:s})=>e.jsx(Ee,{title:n,clsName:s,children:e.jsxs("p",{children:["Don't have an account yet? ",aa(a)]})});Te.__docgenInfo={description:"",methods:[],displayName:"DefaultLoginHeader",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Login'",computed:!1}},signupLink:{required:!0,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:""},clsName:{required:!0,tsType:{name:"signature",type:"function",raw:"(camelCaseClassName: string) => string",signature:{arguments:[{type:{name:"string"},name:"camelCaseClassName"}],return:{name:"string"}}},description:""}}};const{genClassNames:na,getDefaultsFromZodObject:ra,clearOnError:sa,normalizeComponentProp:j}=be,ta=[...Ue,"orlineColor","orlineMargin"],i=({handler:n,onSuccess:a,headerText:s="Login",header:o=Te,loader:S=He,signupLink:k=e.jsx("a",{href:"/signup",children:"Sign up"}),forgotPasswordLink:d=e.jsx("a",{href:"/forgot-password",children:"Forgot your password?"}),buttonText:L="Login",orLine:M=!0,childrenPosition:u="bottom",isFocused:xe=!0,customFields:m=ea,customSchema:p=Qe,toast:x,failMsg:R=We,successMessage:C=!1,darkMode:Ce=!1,cssVars:Ve,cssModule:O={},children:E})=>{const{register:z,handleSubmit:je,reset:V,setValue:D,setError:A,setFocus:Ne,formState:{errors:c,isSubmitting:K,isSubmitSuccessful:qe}}=ze({resolver:De(p),mode:"onBlur",defaultValues:ra(p)});Ae(m,Ne,xe);const Fe=we.useMemo(()=>Ke({schema:p,handler:n,onSuccess:a,toast:x,failMsg:R,setValue:D,setError:A,reset:V,clearOnError:sa(m)}),[p,n,a,x,R,D,A,V,m]),{clsName:r}=Me.useMemo(()=>na(i.displayName,O),[O]),[Le]=_e({isSubmitSuccessful:qe,successMessage:C,reset:V});return K?e.jsx(S,{clsName:r}):e.jsx("div",{className:r("container"),"data-theme":Ce?"dark":"light",style:Ge({cssVars:Ve,varNames:ta}),children:C&&Le?e.jsx(Be,{successMessage:C,clsName:r}):e.jsxs(e.Fragment,{children:[o?j(o,{headerText:s,signupLink:k,clsName:r}):null,c.root&&!x&&e.jsx("div",{className:r("serverAuthError"),children:c.root.message}),e.jsxs("form",{onSubmit:je(Fe),style:{display:K?"none":"block"},className:r("form"),children:[u==="bottom"&&e.jsxs(e.Fragment,{children:[e.jsx(H,{componentName:i.displayName,fields:m,register:z,errors:c,clsName:r}),e.jsx("button",{type:"submit",className:r("button"),children:L}),d?e.jsx("div",{className:r("forgotPasswordLink"),children:j(d)}):null]}),E&&e.jsxs("div",{className:r("socialButtons"),children:[M&&u==="bottom"&&e.jsx("div",{className:r("orLine"),children:e.jsx("span",{children:"or"})}),E,M&&u==="top"&&e.jsx("div",{className:r("orLine"),children:e.jsx("span",{children:"or"})})]}),u==="top"&&e.jsxs(e.Fragment,{children:[e.jsx(H,{componentName:i.displayName,fields:m,register:z,errors:c,clsName:r}),e.jsx("button",{type:"submit",className:r("button"),children:L}),d?e.jsx("div",{className:r("forgotPasswordLink"),children:j(d)}):null]})]})]})})};i.displayName="login";const l=i;i.__docgenInfo={description:"",methods:[],displayName:"login",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  title = 'Login',
  signupLink: SignupLink,
  clsName,
}: DefaultLoginHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Don't have an account yet? {normalizeComponentProp(SignupLink)}</p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Login'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Login'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'password',
    label: 'Password',
    clearOnServerError: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z.object({
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
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"false",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},signupLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:`Override the signup link inside the default header
Note: if you provide a header prop, the signup link will not appear`,defaultValue:{value:'<a href="/signup">Sign up</a>',computed:!1}},forgotPasswordLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode | false",elements:[{name:"ComponentType"},{name:"ReactNode"},{name:"literal",value:"false"}]},description:`Override default link to the forgot password route
or false to disable`,defaultValue:{value:'<a href="/forgot-password">Forgot your password?</a>',computed:!1}},orLine:{required:!1,tsType:{name:"boolean"},description:`Add a separator between email and
social logins  (children required)`,defaultValue:{value:"true",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of children",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Social logins or other content to display"}}};l.__docgenInfo={description:"",methods:[],displayName:"login",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  title = 'Login',
  signupLink: SignupLink,
  clsName,
}: DefaultLoginHeaderProps) => (
  <DefaultHeader title={title} clsName={clsName}>
    <p>Don't have an account yet? {normalizeComponentProp(SignupLink)}</p>
  </DefaultHeader>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Login'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Login'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`[
  {
    element: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    focus: true,
  },
  {
    element: 'input',
    type: 'password',
    name: 'password',
    label: 'Password',
    clearOnServerError: true,
  },
]`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`z.object({
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
})`,computed:!0}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"false",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},signupLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:`Override the signup link inside the default header
Note: if you provide a header prop, the signup link will not appear`,defaultValue:{value:'<a href="/signup">Sign up</a>',computed:!1}},forgotPasswordLink:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode | false",elements:[{name:"ComponentType"},{name:"ReactNode"},{name:"literal",value:"false"}]},description:`Override default link to the forgot password route
or false to disable`,defaultValue:{value:'<a href="/forgot-password">Forgot your password?</a>',computed:!1}},orLine:{required:!1,tsType:{name:"boolean"},description:`Add a separator between email and
social logins  (children required)`,defaultValue:{value:"true",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"},childrenPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of children",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Social logins or other content to display"}}};const I=[{element:"select",type:"text",name:"department",label:"Department",options:[["-- select --",""],["Administrative","administrative"],["Executive","executive"],["IT","IT"],["Marketing","marketing"],["Sales","sales"]]},{element:"input",type:"email",name:"email",label:"Email"},{element:"input",type:"password",name:"password",label:"Password"},{element:"input",type:"checkbox",name:"remember_me",label:"Remember Me"}],oa=t.object({department:t.string().min(1,{message:"Please select your department"}).max(50,{message:"Department name is too long"}),email:t.string().min(1,{message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}),password:t.string({required_error:"Please enter a password"}).min(1,{message:"Please enter a password"}).min(8).max(56),remember_me:t.boolean().default(!0)}),Se=(n,a)=>(Pe(a),e.jsxs(l,{...n,isFocused:a.viewMode!=="docs",...a.viewMode==="docs"?{darkMode:a.globals.scheme==="dark mode"}:{},children:[e.jsx(Z.TwitterLoginButton,{onClick:N("twitterLogin"),style:{width:"100%",margin:"0 0 .7rem 0"}}),e.jsx(Z.GithubLoginButton,{onClick:N("githubLogin"),style:{width:"100%",margin:"0"}})]})),ke={title:"forms/Login",component:l,tags:["autodocs"],argTypes:{header:{table:{type:{summary:"ComponentType | ReactNode | false"},defaultValue:{summary:"Default Header"}}},successMessage:{control:"null",table:{type:{summary:"ComponentType | string | false"}}},signupLink:{control:"null",table:{type:{summary:"ComponentType | ReactNode | false"}}},forgotPasswordLink:{control:"null",table:{type:{summary:"ComponentType | ReactNode | false"}}},loader:{table:{defaultValue:{summary:"Default Spinner"}}},customFields:{table:{defaultValue:{summary:"Default Fields"}}},customSchema:{table:{type:{summary:"AnyZodSchema"},defaultValue:{summary:"Default Zod Schema"}}}},args:{handler:Ze({route:"/login"}),successMessage:()=>e.jsxs("div",{className:"success-message",children:[e.jsx("p",{children:"You are now logged in."}),e.jsxs("p",{children:["This message has been set by the ",e.jsx("i",{children:"successMessage"})," prop. When"," ",e.jsx("i",{children:"successMessage"})," isn't provided or is set to false, be sure to provide an ",e.jsx("i",{children:"onSuccess"})," prop with a redirect or other behavior."]})]}),forgotPasswordLink:e.jsx(B,{name:"basic",title:"forms-forgot-password",children:"Forgot password?"}),signupLink:e.jsx(B,{name:"basic",title:"forms-signup",children:"Signup"})},parameters:{notes:[Ie,...q([e.jsxs(e.Fragment,{children:["To test the UI for a valid login, you may use:"," ",e.jsx("strong",{children:"test@test.com"})," (email) and ",e.jsx("strong",{children:"12345678"})," ","(password). All other users should fail."]})])]},decorators:[$e],render:(n,a)=>(Pe(a),e.jsx(l,{...n,isFocused:a.viewMode==="docs"?!1:n.isFocused,...a.viewMode==="docs"?{darkMode:a.globals.scheme==="dark mode"}:{}}))},g={args:{}},f={args:{},render:Se},y={args:{childrenPosition:"top"},render:Se},h={args:{customFields:I,customSchema:oa},parameters:{notes:[ke.parameters.notes,...q([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(I,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z.object({
  department: z
    .string()
    .min(1, { message: 'Please select your department' })
    .max(50, { message: 'Department name is too long' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(1, { message: 'Please enter a password' })
    .min(8)
    .max(56),
  remember_me: z.boolean().default(true),
});
          `})})]})],"div")]},render:(n,{globals:{scheme:a}})=>e.jsx(l,{...n,darkMode:a==="dark mode"})},v={args:{buttonText:"Next",header:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Sign in"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dicta distinctio dolore eius optio vero."})]})}},F=(n=!0)=>async({canvasElement:a,step:s})=>{const o=Re(a);await s("Enter credentials",async()=>{const S=o.getByLabelText("Email",{selector:"input"});await _.type(S,n?"test@test.com":"non@user.com",{delay:150});const k=o.getByLabelText("Password",{selector:"input"});await _.type(k,"12345678",{delay:150})}),await s("Submit form",async()=>{await Oe.click(o.getByRole("button"))})},w={args:{},play:F()},b={args:{},play:F(!1)},P={args:{handler:()=>{const n=new Error("User unfriendly error");return N("rejected")(n),Promise.reject(n)},failMsg:"Problem connecting to the network. Are you online?"},play:F(),parameters:{notes:[...ke.parameters.notes,...q("If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.")]}},T={args:{isFocused:!0},parameters:{docs:{disable:!0}},render:n=>{const[a,s]=we.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s(!0),style:{display:"flex",margin:"auto",padding:".7rem 1rem"},children:"Login"}),e.jsx(Je,{isOpen:a,onClose:()=>s(!1),cssVars:{modalPadding:"2.2rem"},children:e.jsx(l,{...n})})]})}};var W,G,U;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {}
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var $,J,Y;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: LoginWithChildren
}`,...(Y=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Q,X,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    childrenPosition: 'top'
  },
  render: LoginWithChildren
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,ne,re;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    customFields: loginFields,
    customSchema: loginSchema
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(loginFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z.object({
  department: z
    .string()
    .min(1, { message: 'Please select your department' })
    .max(50, { message: 'Department name is too long' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' }),
  password: z
    .string({ required_error: 'Please enter a password' })
    .min(1, { message: 'Please enter a password' })
    .min(8)
    .max(56),
  remember_me: z.boolean().default(true),
});
          \`}</code>
            </pre>
          </>], 'div')]
  },
  render: (args, {
    globals: {
      scheme
    }
  }) => <Login {...args} darkMode={scheme === 'dark mode'} />
}`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,te,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    buttonText: 'Next',
    header: () => <>
        <h2>Sign in</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dicta distinctio dolore eius optio vero.
        </p>
      </>
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,le,me;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay()
}`,...(me=(le=w.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,ue,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {},
  play: SubmitPlay(false)
}`,...(pe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,ge,fe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(fe=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,he,ve;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
          <Login {...args} />
        </Modal>
      </div>;
  }
}`,...(ve=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const Sa=["Basic","SocialLoginsBelow","SocialLoginsAbove","CustomFields","CustomHeader","GoodCredentials","BadCredentials","Catch","InAModal"];export{b as BadCredentials,g as Basic,P as Catch,h as CustomFields,v as CustomHeader,w as GoodCredentials,T as InAModal,y as SocialLoginsAbove,f as SocialLoginsBelow,Sa as __namedExportsOrder,ke as default};
