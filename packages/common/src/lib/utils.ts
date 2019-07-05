interface CSSModule {
  [key: string]: string;
}

const isCSSModule = (theme: CSSModule | undefined, prop: string, fallback: string): string => {
  return (theme && theme[prop]) ? `${theme[prop]}` : fallback;
};

export {
  isCSSModule
}
