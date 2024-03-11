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

// mdx_modal_props_start
export type OverlayColor =
  /** Configure both light/dark mode colors */
  | {
      light: string;
      dark: string;
    }
  /** One overlay color regardless of light/dark mode */
  | string
  /** Transparent overlay */
  | false;

export interface ModalProps {
  isOpen: boolean;
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'full'
    | `${number}${(typeof cssUnits)[number]}`;
  onClose?: (e?: React.MouseEvent) => void;
  closeOnOverlayClick?: boolean;
  animationSupport?: boolean;
  animationCloseTimeout?: number;
  header?: React.FC<any> | string;
  footer?: React.FC<any> | string;
  overlayColor?: OverlayColor;
  closeBtn?: boolean;
  darkMode?: boolean;
  cssVars?: CSSVars<typeof varNames>;
  cssModule?: Record<string, string>;
  children?: React.ReactNode;
}
// mdx_modal_props_end

const { genClassNames } = utils;

const cssUnits = ['px', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax'] as const;

const varNames = [
  'modalPadding',
  'lightModeOverlayColor',
  'darkModeOverlayColor',
  'lightModeTextColor',
  'darkModeTextColor',
  'lightModeBackgroundColor',
  'darkModeBackgroundColor',
  'lightModeHeaderColor',
  'darkModeHeaderColor',
  'lightModeHeaderShadow',
  'darkModeHeaderShadow',
  'lightModeBorderColor',
  'darkModeBorderColor',
  'smallWidth',
  'mediumWidth',
  'largeWidth',
  'fullWidth',
  'modalYPosition',
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
  overlayColor,
  darkMode = false,
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

  // Get the styles for overlay colors
  const overlayColorStyle = useMemo(() => {
    if (typeof overlayColor === 'object' && 'light' in overlayColor)
      return {
        '--unl-light-mode-overlay-color': overlayColor.light,
        '--unl-dark-mode-overlay-color': overlayColor.dark,
      };

    if (typeof overlayColor === 'string')
      return {
        '--unl-light-mode-overlay-color': overlayColor,
        '--unl-dark-mode-overlay-color': overlayColor,
      };
    return false;
  }, [overlayColor]);

  return !isHidden ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      data-modal="true"
      data-theme={darkMode ? 'dark' : 'light'}
      className={clsName('overlay')}
      style={{
        ...(overlayColor && overlayColorStyle),
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
