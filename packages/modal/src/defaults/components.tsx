import * as React from 'react';
// import { isCSSModule } from '@unleashit/common';

export interface ModalProps {
  // theme: CSSModule;
  title?: string;
}

export const ModalHeader: React.FC<ModalProps> = ({ title }): JSX.Element => (
  <h3>{title}</h3>
);

ModalHeader.displayName = 'ModalHeader';

export const ModalFooter: React.FC<ModalProps> = ({ title }): JSX.Element => (
  <span>{title}</span>
);

ModalFooter.displayName = 'ModalFooter';
