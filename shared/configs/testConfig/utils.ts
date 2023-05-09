// import { resolveAny } from 'dns';

export const nextTick = (time = 0): Promise<void> => {
  jest.useRealTimers();
  return new Promise((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, time);
  });
};

interface SimulateOptions {
  persist: () => void;
  target: {
    name: string;
    value: string;
  };
}

// derive options for Enzyme simulate
export const changeVal = (name: string, value: string): SimulateOptions => ({
  persist: (): void => {}, // Formik calls e.persist() internally
  target: {
    name,
    value,
  },
});
