import React from 'react';
// import { genClassNames } from '@unleashit/common';

export type BaseSuccessMessageProps = {
  // componentName: string;
  clsName: (title: string) => string;
  // cssModule?: Record<string, string>;
};

type DefaultSuccessMessageProps = BaseSuccessMessageProps & {
  message: string;
};

export type ShowSuccessProps = BaseSuccessMessageProps & {
  successMessage: React.FC<BaseSuccessMessageProps> | string;
};

export const DefaultSuccessMessage = ({
  // componentName,
  message,
  clsName,
}: DefaultSuccessMessageProps) => (
  // const { clsName } = React.useMemo(
  //   () => genClassNames(componentName, cssModule),
  //   [componentName, cssModule],
  // );
  <div className={clsName('success')}>
    <p>{message}</p>
  </div>
);

export const ShowSuccess = ({
  // componentName,
  successMessage: SuccessMessage,
  clsName,
}: ShowSuccessProps) =>
  typeof SuccessMessage === 'string' ? (
    <DefaultSuccessMessage
      // componentName={componentName}
      message={SuccessMessage}
      clsName={clsName}
    />
  ) : (
    <SuccessMessage clsName={clsName} />
  );
