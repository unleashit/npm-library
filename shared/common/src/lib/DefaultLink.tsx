import * as React from 'react';

export const DefaultLinkComponent = ({
  children,
  ...rest
}: {
  children?: React.ReactNode;
} & React.LinkHTMLAttributes<HTMLAnchorElement>) => <a {...rest}>{children}</a>;
