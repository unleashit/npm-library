import * as React from 'react';

// mdx_navigation_link_start
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
// mdx_navigation_link_end

// mdx_navigation_authlink_start
export interface AuthLinkTypes {
  login?: NavigationLink;
  logout?: NavigationLink;
  signup?: NavigationLink;
}
// mdx_navigation_authlink_end
