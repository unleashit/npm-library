import {
  isCSSModule,
  returnComponentFormat,
  useHandleEscapeKey,
  useHighestZindex,
  useToggleBodyStyleProp,
} from '@unleashit/common';
import * as React from 'react';

import { ModalFooter, ModalHeader, CustomHeaderFooterProps } from './defaults/components';
import { closeIcon } from './images/icons';

export interface ModalProps {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
  animationSupport?: boolean;
  animationCloseTimeout?: number;
  header?: React.FC<CustomHeaderFooterProps> | React.ReactElement | string;
  footer?: React.FC<CustomHeaderFooterProps> | string;
  overlayColor?: string;
  closeBtn?: boolean;
  cssModule?: { [key: string]: string };
}

export const Modal = ({
  isOpen = false,
  size = 'medium',
  onClose = () => undefined,
  closeBtn = true,
  closeOnOverlayClick = true,
  animationSupport = true,
  animationCloseTimeout = 300,
  header: Header,
  footer: Footer,
  overlayColor,
  cssModule: theme = {},
  children,
}: React.PropsWithChildren<ModalProps>) => {
  const [isHidden, setIsHidden] = React.useState(!isOpen);
  const [isAnimated, setIsAnimated] = React.useState(isOpen);
  const timeoutRef = React.useRef<number>();

  // allow time for animation after modal is opened/closed
  React.useLayoutEffect(() => {
    if (isOpen) {
      setIsHidden(false);
      if (animationSupport) {
        timeoutRef.current = window.setTimeout(() => {
          setIsAnimated(true);
        }, 0);
      }
      // window.clearTimeout(timeoutRef.current);
    } else if (animationSupport) {
      setIsAnimated(false);
      timeoutRef.current = window.setTimeout(() => {
        setIsHidden(true);
      }, animationCloseTimeout);
    } else {
      setIsHidden(true);
    }

    return () => window.clearTimeout(timeoutRef.current);
  }, [animationCloseTimeout, animationSupport, isOpen]);

  // clear the above timeout on unmount
  // React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  // add overflow: hidden to <body> when modal is active
  useToggleBodyStyleProp('overflow', 'hidden', isOpen);

  // returns highest z-index in use + 1 or 'auto'
  const modalZindex = useHighestZindex();

  // close the modal when user clicks on the overlay
  const handleOverlayClick = (e: React.MouseEvent): any => {
    if (!closeOnOverlayClick) return;

    e.stopPropagation();
    const isContainer = (e.target as HTMLDivElement).getAttribute('data-modal');
    if (isContainer) {
      onClose();
    }
  };

  // close the modal when user clicks esc key
  useHandleEscapeKey(isOpen, onClose);

  const userComponent = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    C: React.ReactElement | Function | string | undefined,
    Default: React.FC<any>,
  ) => {
    if (!C) return null;
    if (typeof C === 'string') {
      return <Default theme={theme} title={C} />;
    }

    return returnComponentFormat(C, { theme });
  };

  return !isHidden ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      data-modal="true"
      className={isCSSModule(theme.overlay, 'unl-modal__overlay')}
      style={{ backgroundColor: overlayColor, zIndex: modalZindex }}
    >
      <div
        className={`${isCSSModule(theme.child, `unl-modal__child`)} ${isCSSModule(
          theme[`child--${size}`],
          `unl-modal__child--${size}`,
        )} ${
          animationSupport && isAnimated
            ? `${isCSSModule(theme[`child--in`], 'unl-modal__child--in')}`
            : ''
        }`}
      >
        {closeBtn && (
          <div className={isCSSModule(theme.close, 'unl-modal__close')}>
            <button
              onClick={onClose}
              type="button"
              className={isCSSModule(theme.closeBtn, 'unl-modal__close-btn')}
            >
              {closeIcon}
            </button>
          </div>
        )}
        {Header && (
          <div className={isCSSModule(theme.header, 'unl-modal__header')}>
            {userComponent(Header, ModalHeader)}
          </div>
        )}
        <div className={isCSSModule(theme.body, 'unl-modal__body')}>{children}</div>
        {Footer && (
          <div className={isCSSModule(theme.footer, 'unl-modal__footer')}>
            {userComponent(Footer, ModalFooter)}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
