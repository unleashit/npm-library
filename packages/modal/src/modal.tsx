import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
} from 'react';
import {
  utils,
  useHandleEscapeKey,
  useHighestZindex,
  useToggleBodyStyleProp,
  CSSVars,
  mapCSSVarsToStyles,
} from '@unleashit/common';
import { closeIcon } from './images/icons';

const cssUnits = ['px', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax'] as const;

export interface ModalProps {
  isOpen: boolean;
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'full'
    | `${number}${(typeof cssUnits)[number]}`;
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
  animationSupport?: boolean;
  animationCloseTimeout?: number;
  header?: React.FC<any> | string;
  footer?: React.FC<any> | string;
  overlayColor?: string | false | null;
  closeBtn?: boolean;
  cssVars?: CSSVars<typeof varNames>;
  cssModule?: Record<string, string>;
  children?: React.ReactNode;
}

const { genClassNames } = utils;

const varNames = [
  'modalPadding',
  'overlayColor',
  'headerColor',
  'borderColor',
  'smallWidth',
  'mediumWidth',
  'largeWidth',
  'fullWidth',
  'modalY',
  'breakXs',
  'breakSm',
  'breakMd',
  'breakLg',
] as const;

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
  overlayColor = 'rgba(0,0,0,.8)',
  cssVars,
  cssModule = {},
  children,
}: ModalProps) => {
  const [isHidden, setIsHidden] = useState(!isOpen);
  const [isAnimated, setIsAnimated] = useState(isOpen);
  const timeoutRef = useRef<number>();

  // allow time for animation after modal is opened/closed
  useLayoutEffect(() => {
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

    // clear the above timeout on unmount
    return () => window.clearTimeout(timeoutRef.current);
  }, [animationCloseTimeout, animationSupport, isOpen]);

  // add overflow: hidden to <body> when modal is active
  useToggleBodyStyleProp('overflow', 'hidden', isOpen);

  // returns highest z-index in use + 1 or 'auto'
  const modalZindex = useHighestZindex();

  // close the modal when user clicks esc key
  useHandleEscapeKey(isOpen, onClose);

  const { clsName } = React.useMemo(
    () => genClassNames(Modal.displayName, cssModule),
    [cssModule],
  );

  // close the modal when user clicks on the overlay
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent): any => {
      if (!closeOnOverlayClick) return;

      e.stopPropagation();
      const isContainer = (e.target as HTMLDivElement).getAttribute(
        'data-modal',
      );
      if (isContainer) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose],
  );

  const customWidth = useMemo(
    () =>
      cssUnits.some((unit) => size.endsWith(unit))
        ? { maxWidth: size }
        : undefined,
    [size],
  );

  return !isHidden ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      data-modal="true"
      className={clsName('overlay')}
      style={{
        backgroundColor: !overlayColor ? 'transparent' : overlayColor,
        zIndex: modalZindex,
        ...mapCSSVarsToStyles<typeof varNames>({
          cssVars,
          varNames,
        }),
      }}
    >
      <div
        className={`${clsName('child')}${
          customWidth ? '' : ` ${clsName(`child--${size}`)}`
        } ${animationSupport && isAnimated ? `${clsName('child--in')}` : ''}`}
        style={customWidth}
      >
        {closeBtn && (
          <div className={clsName('close')}>
            <button
              onClick={onClose}
              type="button"
              className={clsName('closeBtn')}
            >
              {closeIcon}
            </button>
          </div>
        )}
        {Header && (
          <header className={clsName('header')}>
            {typeof Header === 'string' ? Header : <Header />}
          </header>
        )}
        <div className={clsName('body')}>{children}</div>
        {Footer && (
          <footer className={clsName('footer')}>
            {typeof Footer === 'string' ? Footer : <Footer />}
          </footer>
        )}
      </div>
    </div>
  ) : null;
};

Modal.displayName = 'modal';
export default Modal;
