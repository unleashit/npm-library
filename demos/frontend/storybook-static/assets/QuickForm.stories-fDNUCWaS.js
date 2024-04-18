import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as oe,R as be}from"./index-CBqU2yxZ.js";import{w as we,u as V,b as Se}from"./index-py9pzQbV.js";import{a as ie}from"./chunk-MZXVCX43-DWuJqIWT.js";import{u as Te,t as Pe,a as xe,b as ke,f as Ce,S as Ve,C as Fe,e as je,D as qe,c as F,d as Ne}from"./backendDemoHandler-Dv1-GY2V.js";import{z as s,b as Me,u as ze,m as w}from"./Notes-CLPFxSgn.js";import{m as Re,v as Oe}from"./mapCSSVarsToStyles-Cs2nQxcE.js";import{u as De}from"./useUpdateDarkMode-a49ee7yZ.js";/* empty css              */import{a as Ee}from"./modal-CdN5Y-fw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";const le={name:s.string({required_error:"Please enter your name"}).max(50,{message:"Name is too long"}).nonempty({message:"Please enter your name"}).default(""),email:s.string({required_error:"Please enter your email"}).nonempty({message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}).default(""),message:s.string({required_error:"Please enter a message"}).max(3e3,{message:"Message is too long"}).nonempty({message:"Please enter a message"}).refine(a=>a.trim().split(" ").length>5,{message:"Message is too short"}).default("")},Ke={phone:s.string().max(25,{message:"Phone is too long"})},_e=s.object(le),Ie=s.object({...le,...Ke}),b=[{element:"input",type:"text",name:"name",label:"Name",focus:!0},{element:"input",type:"email",name:"email",label:"Email"},{element:"textarea",type:"text",name:"message",label:"Message"}],Ae=[...b.slice(0,2),{element:"input",type:"text",name:"phone",label:"Phone"},...b.slice(2)],{genClassNames:Le,getDefaultsFromZodObject:He,clearOnError:Ze,normalizeComponentProp:D}=ze,Be=[...Oe];function t({handler:a,onSuccess:n,headerText:o="Contact Us",header:i=je,footer:m,loader:S=qe,buttonText:T="Send Message",successMessage:l="Thanks for your message!",successMessageTimeout:me=5e3,showPhone:N=!1,customFields:u=N?Ae:b,customSchema:d=N?Ie:_e,toast:P,failMsg:M=Me,darkMode:ue=!1,isFocused:de=!0,cssVars:ce,cssModule:z={}}){const{register:pe,handleSubmit:fe,reset:x,setValue:R,setError:O,setFocus:ge,formState:{errors:k,isSubmitting:C,isSubmitSuccessful:ye}}=Te({resolver:Pe(d),mode:"onBlur",defaultValues:He(d)});xe(u,ge,de);const[he]=ke({isSubmitSuccessful:ye,successMessage:l,successMessageTimeout:me,reset:x}),ve=oe.useMemo(()=>Ce({schema:d,handler:a,onSuccess:n,toast:P,failMsg:M,setValue:R,setError:O,reset:x,clearOnError:Ze(u)}),[d,a,n,P,M,R,O,x,u]),{clsName:r}=be.useMemo(()=>Le(t.displayName,z),[z]);return C?e.jsx(S,{clsName:r}):e.jsx("div",{className:r("container"),"data-theme":ue?"dark":"light",style:Re({cssVars:ce,varNames:Be}),children:l&&he?e.jsx(Ve,{successMessage:l,clsName:r}):e.jsxs(e.Fragment,{children:[i?D(i,{title:o,clsName:r}):null,k.root&&!P&&e.jsx("div",{className:r("serverAuthError"),children:k.root.message}),e.jsxs("form",{onSubmit:fe(ve),style:{display:C?"none":"block"},className:r("form"),children:[e.jsx(Fe,{componentName:t.displayName,fields:u,register:pe,errors:k,clsName:r}),e.jsx("button",{type:"submit",disabled:C,className:r("button"),children:T})]}),!!m&&D(m)]})})}t.displayName="quickForm";t.__docgenInfo={description:"",methods:[],displayName:"quickForm",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  children,
  clsName,
}: DefaultHeaderProps) => (
  <div className={clsName('header')}>
    <h2>{title}</h2>
    {children && children}
  </div>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Contact Us'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Send Message'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`showPhone
? defaultContactFieldsWithPhone
: defaultContactFields`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`showPhone
? defaultContactSchemaWithPhone
: defaultContactSchema`,computed:!1}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"'Thanks for your message!'",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},showPhone:{required:!1,tsType:{name:"boolean"},description:"show phone field (ignored when using custom fields)",defaultValue:{value:"false",computed:!1}},footer:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:"Custom footer component"},successMessageTimeout:{required:!1,tsType:{name:"union",raw:"number | false | null",elements:[{name:"number"},{name:"literal",value:"false"},{name:"null"}]},description:`Show success message for x ms, then toggle back to blank form.
Use 0 or false to disable the toggle and keep message`,defaultValue:{value:"5000",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"}}};t.__docgenInfo={description:"",methods:[],displayName:"quickForm",props:{handler:{required:!0,tsType:{name:"signature",type:"function",raw:`<T extends ZodTypeAny>(
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
  children,
  clsName,
}: DefaultHeaderProps) => (
  <div className={clsName('header')}>
    <h2>{title}</h2>
    {children && children}
  </div>
)`,computed:!1}},headerText:{required:!1,tsType:{name:"string"},description:"Header text for default header",defaultValue:{value:"'Contact Us'",computed:!1}},loader:{required:!1,tsType:{name:"ComponentType",elements:[{name:"DefaultLoaderProps"}],raw:"ComponentType<DefaultLoaderProps>"},description:"Custom loader component",defaultValue:{value:`({
  clsName,
  width,
  height,
  color,
  opacity,
}: DefaultLoaderProps) => (
  <div className={clsName('loader')}>
    <SpinnerSVG color={color} opacity={opacity} width={width} height={height} />
  </div>
)`,computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Label for form submit button",defaultValue:{value:"'Send Message'",computed:!1}},customFields:{required:!1,tsType:{name:"Array",elements:[{name:"CustomField"}],raw:"CustomField[]"},description:"Custom fields to override default fields",defaultValue:{value:`showPhone
? defaultContactFieldsWithPhone
: defaultContactFields`,computed:!1}},customSchema:{required:!1,tsType:{name:"union",raw:"z.AnyZodObject | z.ZodEffects<any>",elements:[{name:"z.AnyZodObject"},{name:"z.ZodEffects",elements:[{name:"any"}],raw:"z.ZodEffects<any>"}]},description:"Custom schema to override default schema",defaultValue:{value:`showPhone
? defaultContactSchemaWithPhone
: defaultContactSchema`,computed:!1}},toast:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:`Optionally send root server error message and/or
handler exceptions to toast`},failMsg:{required:!1,tsType:{name:"string"},description:"Override the default catch error shown to user",defaultValue:{value:"constants.baseFailMsg",computed:!0}},successMessage:{required:!1,tsType:{name:"union",raw:"ComponentType<any> | string | false",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"},{name:"literal",value:"false"}]},description:"Override or remove the default success message",defaultValue:{value:"'Thanks for your message!'",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Disable/override initial form focus if set",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:`Boolean to toggle component's data-theme attribute
between light and dark mode`,defaultValue:{value:"false",computed:!1}},cssModule:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"CSS module to target internal styles",defaultValue:{value:"{}",computed:!1}},showPhone:{required:!1,tsType:{name:"boolean"},description:"show phone field (ignored when using custom fields)",defaultValue:{value:"false",computed:!1}},footer:{required:!1,tsType:{name:"union",raw:"ComponentType | ReactNode",elements:[{name:"ComponentType"},{name:"ReactNode"}]},description:"Custom footer component"},successMessageTimeout:{required:!1,tsType:{name:"union",raw:"number | false | null",elements:[{name:"number"},{name:"literal",value:"false"},{name:"null"}]},description:`Show success message for x ms, then toggle back to blank form.
Use 0 or false to disable the toggle and keep message`,defaultValue:{value:"5000",computed:!1}},cssVars:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [name in TVarNames[number]]?: CSSProperties[keyof CSSProperties];
}`,signature:{properties:[{key:{name:"varNames[number]",raw:"TVarNames[number]",required:!1},value:{name:"CSSProperties[CSSProperties]",raw:"CSSProperties[keyof CSSProperties]"}}]}},description:"CSS custom property overrides"}}};const E=[{element:"input",type:"text",name:"first_name",label:"First Name",focus:!0},{element:"input",type:"text",name:"last_name",label:"Last Name"},{element:"input",type:"email",name:"email",label:"Email"},{element:"select",type:"text",name:"favorite_author",label:"Who is your favorite author?",options:[["-- select --",""],["James Joyce","James Joyce"],["Mary Shelly","Mary Shelly"],["Herman Melville","Herman Melville"],["Ursula Leguin","Ursula Leguin"],["JK Rowling","JK Rowling"],["Leo Tolstoy","Leo Tolstoy"],["Lewis Caroll","Lewis Caroll"],["Other","Other"]]},{element:"input",type:"checkbox",name:"timezone",label:"Please confirm you are in the UTC-12:00 time zone?"},{element:"input",type:"checkbox",name:"chocolate",label:"Do you like chocolate?"},{element:"input",type:"text",name:"feel",label:"How do you feel?"}],Je=s.object({first_name:s.string().max(50,{message:"Name is too long"}).default(""),last_name:s.string().max(50,{message:"Name is too long"}).default(""),email:s.string({required_error:"Please enter your email"}).nonempty({message:"Please enter your email"}).email({message:"Please enter a valid email"}).max(50,{message:"Email is too long"}).default(""),favorite_author:s.string().nonempty({message:"Please select an author"}),timezone:s.boolean(),chocolate:s.boolean(),feel:s.string().nonempty({message:"How do you feel?"}).max(50)}),K=[{element:"input",type:"text",name:"title",label:"Title",focus:!0},{element:"select",type:"text",name:"category",label:"Category",options:[["-- select --",""],["Appetizer","Appetizer"],["Soup","soup"],["Salad","salad"],["Entree","entree"],["Dessert","dessert"]]},{element:"textarea",type:"text",name:"description",label:"Short description of the dish"},{element:"textarea",type:"text",name:"ingredients",label:"Ingredients"},{element:"textarea",type:"text",name:"instructions",label:"Preparation Instructions"}],Ue=s.object({title:s.string().min(1,{message:"Please enter a title"}).min(5,{message:"Title is too short"}).max(50,{message:"Title is too long"}).default(""),category:s.string().nonempty({message:"Please select a category"}),description:s.string().min(10,{message:"Description is too short"}).max(500,{message:"Description is too long"}).default(""),ingredients:s.string().min(10,{message:"Ingredients is too short"}).max(800,{message:"Ingredients is too long"}).default(""),instructions:s.string().min(10,{message:"Preparation instructions is too short"}).max(800,{message:"Preparation instructions is too long"}).default("")}),j={title:"forms/Quick Form",component:t,tags:["autodocs"],argTypes:{header:{table:{type:{summary:"ComponentType | ReactNode | false"},defaultValue:{summary:"Default Header"}}},successMessage:{control:"null",table:{type:{summary:"ComponentType | string | false"}}},footer:{table:{type:{summary:"ComponentType | ReactNode"}}},loader:{table:{defaultValue:{summary:"Default Spinner"}}},customFields:{table:{defaultValue:{summary:"Default Fields",detail:JSON.stringify(b,null,2)}}},customSchema:{table:{type:{summary:"AnyZodSchema"},defaultValue:{summary:"Default Zod Schema"}}},successMessageTimeout:{table:{type:{summary:"number | false"}}}},args:{handler:F({route:"/quickform"}),onSuccess:a=>{ie("onSuccess")(a)}},parameters:{notes:[Ne,...w(e.jsxs(e.Fragment,{children:["To test the UI for a server side validation, include the word"," ",e.jsx("b",{children:"dinosaur"})," somewhere in the message. This will pass client validation, but the server will respond with an error, which will then display in the form."]}))]},decorators:[a=>e.jsx("div",{className:"max-width-container",children:a()})],render:(a,n)=>(De(n),e.jsx(t,{...a,isFocused:n.viewMode==="docs"?!1:a.isFocused,...n.viewMode==="docs"?{darkMode:n.globals.scheme==="dark mode"}:{}}))},c={args:{}},p={args:{handler:F({route:"/quickform?type=survey"}),customFields:E,customSchema:Je,buttonText:"Submit",header:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Survey"}),e.jsx("p",{children:"Take our survey and you'll make our day!"})]}),successMessage:()=>e.jsxs("div",{className:"success-message",children:[e.jsx("p",{children:"Thanks for taking the survey."}),e.jsxs("p",{children:["This message has been set by the ",e.jsx("i",{children:"successMessage"})," prop. When"," ",e.jsx("i",{children:"successMessage"})," isn't provided or is set to false, be sure to provide an ",e.jsx("i",{children:"onSuccess"})," prop with a redirect or other behavior."]})]})},parameters:{notes:[j.parameters.notes,...w([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(E,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z.object({
  first_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  last_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  favorite_author: z.string().nonempty({ message: 'Please select an author' }),
  timezone: z.boolean(),
  chocolate: z.boolean(),
  feel: z.string().nonempty({ message: 'How do you feel?' }).max(50),
})`})})]})],"div")]}},f={args:{handler:F({route:"/quickform?type=recipe"}),customFields:K,customSchema:Ue,buttonText:"Submit",header:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Submit your Recipe"}),e.jsx("p",{children:"Send us a sample of your best cookin'!"})]})},parameters:{notes:[...j.parameters.notes,...w([e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customFields prop:"}),e.jsx("pre",{children:e.jsx("code",{children:JSON.stringify(K,null,2)})})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"customSchema prop:"}),e.jsx("pre",{children:e.jsx("code",{children:`z.object({
  title: z
    .string()
    .min(1, { message: 'Please enter a title' })
    .min(5, { message: 'Title is too short' })
    .max(50, { message: 'Title is too long' })
    .default(''),
  category: z.string().nonempty({ message: 'Please select a category' }),
  description: z
    .string()
    .min(10, { message: 'Description is too short' })
    .max(500, { message: 'Description is too long' })
    .default(''),
  ingredients: z
    .string()
    .min(10, { message: 'Ingredients is too short' })
    .max(800, { message: 'Ingredients is too long' })
    .default(''),
  instructions: z
    .string()
    .min(10, { message: 'Preparation instructions is too short' })
    .max(800, { message: 'Preparation instructions is too long' })
    .default(''),
});`})})]})],"div")]}},q=(a=!0)=>async({canvasElement:n,step:o})=>{const i=we(n);await o("Fill out form",async()=>{const m=i.getByLabelText("Name",{selector:"input"});await V.type(m,"John Doe",{delay:150});const S=i.getByLabelText("Email",{selector:"input"});await V.type(S,"example@example.com",{delay:150});const T=i.getByLabelText("Message",{selector:"textarea"}),l=a?"Just wanted to let you that I'm really enjoying working with your React components. Please let me know where I can contribute and submit some PRs. Cheers!":"I would like to buy 4 tickets to the dinosaur exhibit next Saturday. Thank you.";await V.type(T,l,{delay:35})}),await o("Submit form",async()=>{await Se.click(i.getByRole("button"))})},g={args:{isFocused:!1},play:q()},y={args:{isFocused:!1},play:q(!1)},h={args:{handler:()=>{const a=new Error("User unfriendly error");return ie("rejected")(a),Promise.reject(a)},failMsg:"Problem connecting to the network. Are you online?"},play:q(),parameters:{notes:[...j.parameters.notes,...w("If you prefer not to show the system message to the user if the handler catches, you can customize it with a failMsg prop.")]}},v={args:{},parameters:{docs:{disable:!0}},render:a=>{const[n,o]=oe.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>o(!0),style:{display:"flex",margin:"auto",padding:".7rem 1rem"},children:"Login"}),e.jsx(Ee,{isOpen:n,onClose:()=>o(!1),cssVars:{modalPadding:"2.2rem"},children:e.jsx(t,{...a})})]})}};var _,I,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {}
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var L,H,Z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    handler: backendDemoHandler({
      route: '/quickform?type=survey'
    }),
    customFields: qfSurveyFields,
    customSchema: qfSurveySchema,
    buttonText: 'Submit',
    header: <>
        <h3>Survey</h3>
        <p>Take our survey and you'll make our day!</p>
      </>,
    successMessage: () => <div className="success-message">
        <p>Thanks for taking the survey.</p>
        <p>
          This message has been set by the <i>successMessage</i> prop. When{' '}
          <i>successMessage</i> isn't provided or is set to false, be sure to
          provide an <i>onSuccess</i> prop with a redirect or other behavior.
        </p>
      </div>
  },
  parameters: {
    notes: [meta.parameters.notes, ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(qfSurveyFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z.object({
  first_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  last_name: z.string().max(50, { message: 'Name is too long' }).default(''),
  email: z
    .string({ required_error: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email' })
    .max(50, { message: 'Email is too long' })
    .default(''),
  favorite_author: z.string().nonempty({ message: 'Please select an author' }),
  timezone: z.boolean(),
  chocolate: z.boolean(),
  feel: z.string().nonempty({ message: 'How do you feel?' }).max(50),
})\`}</code>
            </pre>
          </>], 'div')]
  }
}`,...(Z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var B,J,U;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    handler: backendDemoHandler({
      route: '/quickform?type=recipe'
    }),
    customFields: qfRecipeFields,
    customSchema: qfRecipeSchema,
    buttonText: 'Submit',
    header: () => <>
        <h3>Submit your Recipe</h3>
        <p>Send us a sample of your best cookin'!</p>
      </>
  },
  parameters: {
    notes: [...meta.parameters.notes, ...makeNotes([<>
            <span>customFields prop:</span>
            <pre>
              <code>{JSON.stringify(qfRecipeFields, null, 2)}</code>
            </pre>
          </>, <>
            <span>customSchema prop:</span>
            <pre>
              <code>{\`z.object({
  title: z
    .string()
    .min(1, { message: 'Please enter a title' })
    .min(5, { message: 'Title is too short' })
    .max(50, { message: 'Title is too long' })
    .default(''),
  category: z.string().nonempty({ message: 'Please select a category' }),
  description: z
    .string()
    .min(10, { message: 'Description is too short' })
    .max(500, { message: 'Description is too long' })
    .default(''),
  ingredients: z
    .string()
    .min(10, { message: 'Ingredients is too short' })
    .max(800, { message: 'Ingredients is too long' })
    .default(''),
  instructions: z
    .string()
    .min(10, { message: 'Preparation instructions is too short' })
    .max(800, { message: 'Preparation instructions is too long' })
    .default(''),
});\`}</code>
            </pre>
          </>], 'div')]
  }
}`,...(U=(J=f.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var W,Q,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isFocused: false
  },
  play: SubmitPlay()
}`,...(G=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var X,Y,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    isFocused: false
  },
  play: SubmitPlay(false)
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,se,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,re,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {},
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
          <QuickForm {...args} />
        </Modal>
      </div>;
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const os=["Contact","Survey","SubmitRecipe","ValidSubmission","InvalidSubmission","Catch","InAModal"];export{h as Catch,c as Contact,v as InAModal,y as InvalidSubmission,f as SubmitRecipe,p as Survey,g as ValidSubmission,os as __namedExportsOrder,j as default};
