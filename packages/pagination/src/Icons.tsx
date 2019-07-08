import * as React from 'react';

export const ChevronLeft = (props: { [key: string]: string }): React.ReactElement => (
  <svg viewBox="0 0 24 32" {...props}>
    <path d="M20.911 5.375l-9.482 9.482 9.482 9.482a1.132 1.132 0 0 1 0 1.607l-2.964 2.964a1.132 1.132 0 0 1-1.607 0L3.09 15.66a1.132 1.132 0 0 1 0-1.607L16.34.803a1.132 1.132 0 0 1 1.607 0l2.964 2.964a1.132 1.132 0 0 1 0 1.607z" />
  </svg>
);

export const ChevronRight = (props: { [key: string]: string }): React.ReactElement => (
  <svg viewBox="0 0 22 32" {...props}>
    <path d="M19.768 15.661l-13.25 13.25a1.132 1.132 0 0 1-1.607 0l-2.964-2.964a1.132 1.132 0 0 1 0-1.607l9.482-9.482-9.482-9.482a1.132 1.132 0 0 1 0-1.607L4.911.805a1.132 1.132 0 0 1 1.607 0l13.25 13.25a1.132 1.132 0 0 1 0 1.607z" />
  </svg>
);
