import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Modal, { ModalProps } from '../modal';

type TestProps = Partial<ModalProps> & Record<string, any>;

const modalContent = <div>Test text for modal.</div>;

const baseProps = () => ({
  onClose: jest.fn(),
  isOpen: true,
});

/**
 * React Testing Library renders the full tree into a real DOM, so these tests
 * assert against the class names and handlers the component emits rather than
 * Enzyme's shallow wrapper API.
 */
describe('<Modal />', () => {
  let props: TestProps;
  let utils: ReturnType<typeof render>;

  /** mount a modal, unmounting the previous one so DOM queries stay unambiguous */
  const mountModal = (next: TestProps = props) => {
    utils?.unmount();
    utils = render(<Modal {...(next as ModalProps)}>{modalContent}</Modal>);
    return utils;
  };

  /** re-render the same tree (used for open/close state transitions) */
  const setProps = (next: TestProps) => {
    utils.rerender(<Modal {...(next as ModalProps)}>{modalContent}</Modal>);
  };

  const query = (selector: string) => document.querySelector(selector);
  const get = (selector: string) => document.querySelector(selector) as Element;

  beforeEach(() => {
    props = baseProps();
    mountModal(props);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders when isOpen property is true', () => {
    // default for isOpen is false
    // but should find since it's set to true in test props
    expect(query('.unl-modal__overlay')).toBeInTheDocument();
    expect(utils.container.firstChild).toMatchSnapshot();

    // won't render when isOpen is omitted or set to false
    mountModal({ onClose: props.onClose });
    expect(query('.unl-modal__overlay')).not.toBeInTheDocument();
  });

  it('renders its children', () => {
    expect(query('.unl-modal__body')).toHaveTextContent('Test text for modal.');
  });

  it('renders the correct size class according to size prop', () => {
    // default (no size prop provided) is medium
    expect(query('.unl-modal__child--medium')).toBeInTheDocument();
    expect(query('.unl-modal__child--large')).not.toBeInTheDocument();

    mountModal({ ...baseProps(), size: 'large' });

    expect(query('.unl-modal__child--large')).toBeInTheDocument();
    expect(query('.unl-modal__child--medium')).not.toBeInTheDocument();
  });

  it('accepts a custom size expressed as a css unit', () => {
    mountModal({ ...baseProps(), size: '37.5rem' });

    expect((get('.unl-modal__child') as HTMLElement).style.maxWidth).toEqual(
      '37.5rem',
    );
  });

  it('displays custom header component when provided', () => {
    mountModal({ ...baseProps(), header: () => <div>Test Header</div> });

    expect(query('.unl-modal__header')).toHaveTextContent('Test Header');
  });

  it('displays header string when provided', () => {
    mountModal({ ...baseProps(), header: 'Test Header' });

    expect(query('.unl-modal__header')).toHaveTextContent('Test Header');
  });

  it('displays custom footer component when provided', () => {
    mountModal({ ...baseProps(), footer: () => <div>Test Footer</div> });

    expect(query('.unl-modal__footer')).toHaveTextContent('Test Footer');
  });

  it('displays footer string when provided', () => {
    mountModal({ ...baseProps(), footer: 'Test Footer' });

    expect(query('.unl-modal__footer')).toHaveTextContent('Test Footer');
  });

  it('executes the onClose prop when closed', () => {
    fireEvent.click(get('.unl-modal__close-btn'));
    expect(props.onClose).toHaveBeenCalledTimes(1);

    // when leaving out onClose(), the default noop keeps clicks from throwing
    mountModal({ isOpen: true });
    fireEvent.click(get('.unl-modal__close-btn'));
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('executes the onClose prop when overlay is clicked', () => {
    fireEvent.click(get('.unl-modal__overlay'));
    // only clicking on the close btn or overlay should trigger onClose()
    expect(props.onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(get('.unl-modal__body'));
    expect(props.onClose).toHaveBeenCalledTimes(1);

    // if closeOverlayClick prop is false, don't execute onClose()
    const onClose = jest.fn();
    mountModal({ ...baseProps(), onClose, closeOnOverlayClick: false });
    fireEvent.click(get('.unl-modal__overlay'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('executes the onClose prop when escape key is pressed', () => {
    fireEvent.keyUp(document, { key: 'Escape' });

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('ignores other keys', () => {
    fireEvent.keyUp(document, { key: 'Enter' });

    expect(props.onClose).not.toHaveBeenCalled();
  });

  it('adds overlay color when provided', () => {
    mountModal({ ...baseProps(), overlayColor: 'red' });
    const overlay = get('.unl-modal__overlay') as HTMLElement;

    expect(
      overlay.style.getPropertyValue('--unl-light-mode-overlay-color'),
    ).toEqual('red');
    expect(
      overlay.style.getPropertyValue('--unl-dark-mode-overlay-color'),
    ).toEqual('red');
  });

  it('adds separate light/dark overlay colors when provided as an object', () => {
    mountModal({
      ...baseProps(),
      overlayColor: { light: 'red', dark: 'blue' },
    });
    const overlay = get('.unl-modal__overlay') as HTMLElement;

    expect(
      overlay.style.getPropertyValue('--unl-light-mode-overlay-color'),
    ).toEqual('red');
    expect(
      overlay.style.getPropertyValue('--unl-dark-mode-overlay-color'),
    ).toEqual('blue');
  });

  it('toggles the data-theme attribute with darkMode', () => {
    expect(get('.unl-modal__overlay')).toHaveAttribute('data-theme', 'light');

    mountModal({ ...baseProps(), darkMode: true });

    expect(get('.unl-modal__overlay')).toHaveAttribute('data-theme', 'dark');
  });

  it('show/hide the close button', () => {
    // default is to show it
    expect(query('.unl-modal__close-btn')).toBeInTheDocument();

    // hide it
    mountModal({ ...baseProps(), closeBtn: false });

    expect(query('.unl-modal__close-btn')).not.toBeInTheDocument();
  });

  it('displays animation classes after timeouts', () => {
    jest.useFakeTimers();
    mountModal({ ...baseProps() });

    expect(query('.unl-modal__child')).toBeInTheDocument();
    expect(query('.unl-modal__child--in')).toBeInTheDocument();

    setProps({ ...baseProps(), isOpen: false });
    // the modal stays in the DOM until the close animation timeout elapses,
    // but the "in" class is dropped immediately
    expect(query('.unl-modal__child')).toBeInTheDocument();
    expect(query('.unl-modal__child--in')).not.toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(query('.unl-modal__child')).not.toBeInTheDocument();
    expect(query('.unl-modal__child--in')).not.toBeInTheDocument();
  });

  it('with animationSupport set to false', () => {
    mountModal({ ...baseProps(), animationSupport: false });

    expect(query('.unl-modal__child')).toBeInTheDocument();
    expect(query('.unl-modal__child--in')).not.toBeInTheDocument();

    // should close synchronously, no timer mock needed
    setProps({ ...baseProps(), animationSupport: false, isOpen: false });

    expect(query('.unl-modal__child')).not.toBeInTheDocument();
  });

  it('clears timeouts on unmount', () => {
    jest.useFakeTimers();
    mountModal({ ...baseProps() });
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');

    act(() => {
      jest.runAllTimers();
    });
    setProps({ ...baseProps(), isOpen: false });
    act(() => {
      jest.runAllTimers();
    });
    utils.unmount();

    expect(clearTimeoutSpy).toHaveBeenCalledWith(expect.any(Number));
    clearTimeoutSpy.mockRestore();
  });

  it('toggles the body overflow style while open', () => {
    expect(document.body.style.overflow).toEqual('hidden');

    utils.unmount();

    expect(document.body.style.overflow).not.toEqual('hidden');
  });

  it('exposes the close button to assistive tech', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
