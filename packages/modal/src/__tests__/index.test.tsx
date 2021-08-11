import { mount, shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';

import Modal from '../index';

interface BaseProps {
  isOpen: boolean;
  onClose: any;
}

const baseProps = (): BaseProps => ({
  onClose: jest.fn(),
  isOpen: true,
});

const modalContent = <div>Test text for modal.</div>;

describe('<Modal />', () => {
  let wrapper: any;
  let props: BaseProps & { [key: string]: any };

  beforeEach(() => {
    props = baseProps();
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
  });

  it('renders when isOpen property is true', () => {
    // default for isOpen is false
    // but should find since it's set to true in test props
    expect(wrapper.find('.unl-modal__overlay')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    // won't render when isOpen is omitted or set to false
    delete props.isOpen;
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    expect(wrapper.find('.unl-modal__overlay')).toHaveLength(0);
  });

  it('renders its children', () => {
    const children = wrapper.find('.unl-modal__body').children();
    expect(children.matchesElement(modalContent)).toEqual(true);
  });

  it('renders the correct size class according to size prop', () => {
    // default (no size prop provided) is medium
    expect(wrapper.find('.unl-modal__child--medium')).toHaveLength(1);
    expect(wrapper.find('.unl-modal__child--large')).toHaveLength(0);

    props = { ...baseProps(), size: 'large' };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);

    expect(wrapper.find('.unl-modal__child--large')).toHaveLength(1);
    expect(wrapper.find('.unl-modal__child--medium')).toHaveLength(0);
  });

  it('displays custom header component when provided', async () => {
    props = { ...baseProps(), header: () => <div>Test Header</div> };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    const header = wrapper.find('header').dive();

    expect(header.text()).toEqual('Test Header');
  });

  it('displays default header component when string is provided', async () => {
    props = { ...baseProps(), header: 'Test Header' };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    const header = wrapper.find('ModalHeader').dive();

    expect(header.find('h3').text()).toEqual('Test Header');
  });

  it('displays custom footer component when provided', async () => {
    props = { ...baseProps(), footer: () => <div>Test Footer</div> };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    const footer = wrapper.find('footer').dive();

    expect(footer.text()).toEqual('Test Footer');
  });

  it('displays default footer component when string is provided', async () => {
    props = { ...baseProps(), footer: 'Test Footer' };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    const footer = wrapper.find('ModalFooter').dive();

    expect(footer.text()).toEqual('Test Footer');
  });

  it('executes the onClose prop when closed', async () => {
    const closeBtn = wrapper.find('.unl-modal__close-btn');
    closeBtn.simulate('click');
    expect(props.onClose).toHaveBeenCalledTimes(1);

    // when leaving out onClose(), noop is called
    wrapper = shallow(<Modal isOpen>{modalContent}</Modal>);
    const closeBtn2 = wrapper.find('.unl-modal__close-btn');
    closeBtn2.simulate('click');
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('executes the onClose prop when overlay is clicked', async () => {
    const overlay = wrapper.find('.unl-modal__overlay');
    const modalBody = wrapper.find('.unl-modal__body');
    const eventProps = {
      stopPropagation: () => undefined,
      target: {
        getAttribute: () => 'data-modal',
      },
    };
    overlay.simulate('click', eventProps);
    modalBody.simulate('click', eventProps); // this shouldn't call it
    // only clicking on the close btn or overlay should trigger onClose()
    expect(props.onClose).toHaveBeenCalledTimes(1);

    // if closeOverlayClick prop is false, don't execute onClose()
    props = { ...baseProps(), closeOnOverlayClick: false };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    wrapper.find('.unl-modal__overlay').simulate('click', eventProps);
    expect(props.onClose).toHaveBeenCalledTimes(0);
  });

  it('executes the onClose prop when escape key is pressed', async () => {
    const mockListener = (type: string, callback: any) =>
      type === 'keyup' && callback({ key: 'Escape' });
    jest.spyOn(document, 'addEventListener').mockImplementation(mockListener);

    wrapper = mount(<Modal {...props}>{modalContent}</Modal>);

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('adds overlay color when provided', async () => {
    props = { ...baseProps(), overlayColor: 'red' };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    const overlay = wrapper.find('.unl-modal__overlay');

    expect(overlay.prop('style').backgroundColor).toEqual('red');
  });

  it('show/hide the close button', async () => {
    // default is to show it
    let closeBtn = wrapper.find('.unl-modal__close-btn');
    expect(closeBtn).toHaveLength(1);

    // hide it
    props = { ...baseProps(), closeBtn: false };
    wrapper = shallow(<Modal {...props}>{modalContent}</Modal>);
    closeBtn = wrapper.find('.unl-modal__close-btn');

    expect(closeBtn).toHaveLength(0);
  });

  it('displays animation classes after timeouts', async () => {
    jest.useFakeTimers();
    const inClass = wrapper.find('.unl-modal__child--in');

    expect(inClass).toHaveLength(1);
    // act(() => {
    wrapper = mount(<Modal {...props}>{modalContent}</Modal>);
    // });

    // act(() => {
    wrapper.setProps({ isOpen: false });
    // });
    expect(wrapper.find('.unl-modal__child')).toHaveLength(1);
    expect(wrapper.find('.unl-modal__child--in')).toHaveLength(1);

    act(() => {
      jest.runAllTimers();
    });
    wrapper.update();

    expect(wrapper.find('.unl-modal__child')).toHaveLength(0);
    expect(wrapper.find('.unl-modal__child--in')).toHaveLength(0);
  });

  it('with animationSupport set to false', async () => {
    props = { ...baseProps(), animationSupport: false };
    wrapper = mount(<Modal {...props}>{modalContent}</Modal>);
    expect(wrapper.find('.unl-modal__child')).toHaveLength(1);
    expect(wrapper.find('.unl-modal__child--in')).toHaveLength(0);

    // should close synchronously, no timer mock needed
    act(() => {
      wrapper.setProps({ isOpen: false });
    });
    wrapper.update();
    expect(wrapper.find('.unl-modal__child')).toHaveLength(0);
  });

  it('clears timeouts on unmount', () => {
    jest.useFakeTimers();
    wrapper = mount(<Modal {...props}>{modalContent}</Modal>);
    act(() => {
      jest.runAllTimers();
    });
    act(() => {
      wrapper.setProps({ isOpen: false });
    });

    act(() => {
      jest.runAllTimers();
    });
    wrapper.update();
    act(() => {
      wrapper.unmount();
    });
    wrapper.update();
    expect(window.clearTimeout).toHaveBeenCalledWith(expect.any(Number));
  });
});
