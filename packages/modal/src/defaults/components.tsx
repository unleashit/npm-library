import * as React from 'react';
// import { isCSSModule } from '@unleashit/common';

interface CSSModule {
  [key: string]: string;
}

export interface ModalProps {
  // theme: CSSModule;
  title?: string;
}

export const ModalHeader: React.FC<ModalProps> = ({ title }): JSX.Element => (
  <>
    <h3>{title}</h3>
  </>
);

ModalHeader.displayName = 'ModalHeader';

export const ModalFooter: React.FC<ModalProps> = ({ title }): JSX.Element => <>{title}</>;

ModalFooter.displayName = 'ModalFooter';
