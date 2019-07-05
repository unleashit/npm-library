declare module '*.svg' {
  const value: React.FC<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const scssClassNames: ClassNames;
  export = scssClassNames;
}

declare module '*.css' {
  interface CSSClassNames {
    [className: string]: string;
  }
  const cssClassNames: CSSClassNames;
  export = cssClassNames;
}
