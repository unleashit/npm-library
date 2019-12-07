import * as React from 'react';
import { isCSSModule } from '@unleashit/common';
import { ModalHeaderFooterProps } from './defaults/components';

interface Props {
  header?: React.FC<ModalHeaderFooterProps>;
  footer?: React.FC<ModalHeaderFooterProps>;
  closeBtn?: boolean;
  cssModuleStyles?: { [key: string]: string };
  children?: React.ReactNode;
}

export const Modal = ({
  closeBtn = true,
  header: Header = undefined,
  footer: Footer = undefined,
  cssModuleStyles: theme = {},
  children,
}: Props): React.ReactElement => {

  return (
    <div className={isCSSModule(theme.modalContainer, 'unl-modal__container')}>
      <div>
        {Header && <Header theme={theme} />}
        {closeBtn && (
          <div className="close">
            <button type="button">X</button>
          </div>
        )}
        {children}
        {Footer && <Footer theme={theme} />}
      </div>
    </div>
  );
};

export default Modal;
