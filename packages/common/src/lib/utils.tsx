const isCSSModule = (themeProp: string | undefined, fallback: string): string => {
  return themeProp || fallback;
};

const sentenceCase = (str: string): string => {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(' ')
  );
};

export { isCSSModule, sentenceCase };
