import { resolveAny } from "dns";

export const nextTick = (time: number = 0): Promise<void> => {
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
  }
}

// derive options for Enzyme simulate
export const changeVal = (name: string, value: string): SimulateOptions => {
  return {
    persist: (): void => {}, // Formik calls e.persist() internally
    target: {
      name,
      value,
    },
  };
};
