import * as React from 'react';

export const DefaultLinkComponent = ({
  children,
  ...rest
}: { children?: React.ReactNode } & Record<string, any>) => (
  <a {...rest}>{children}</a>
);
