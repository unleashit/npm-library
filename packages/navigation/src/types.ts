import * as React from 'react';

export interface NavigationLink {
  href: string;
  title: string;
  active?: boolean;
  classes?: string[];
  style?: React.CSSProperties;
  icon?: string;
  iconPosition?: 'left' | 'right';
  display?: boolean;
  attrs?: React.AllHTMLAttributes<any>;
}

export interface AuthLinkTypes {
  login?: NavigationLink;
  logout?: NavigationLink;
  signup?: NavigationLink;
}
