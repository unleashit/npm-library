import * as React from 'react';

export const DefaultLinkComponent = ({
  children,
  ...rest
}: React.PropsWithChildren<any>) => <a {...rest}>{children}</a>;
