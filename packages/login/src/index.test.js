import { mount } from 'enzyme';
import * as React from 'react';

// eslint-disable-next-line import/no-relative-packages
import { changeVal, nextTick } from '@unleashit/configs';
import LoginContainer from '.';

describe('<LoginContainer />', () => {
  let wrapper;
  const props = {
    loginHandler: () => jest.fn({ errors: {} }),
    onSuccess: () => jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<LoginContainer {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.unl-login__container')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    it('fields can be updated and validated', () => {
      wrapper
        .find('input[name="email"]')
        .simulate('change', changeVal('email', 'test@test.com'));
      wrapper
        .find('input[name="password"]')
        .simulate('change', changeVal('password', '12345678'));

      expect(wrapper.find('input[name="email"]').props().value).toEqual('test@test.com');
      const errors = wrapper.find('.unl-login__error-message');
      expect(errors).toHaveLength(0);
    });

    it('displays correct email validation errors', async () => {
      const emailInput = wrapper.find('input[name="email"]');
      const passwordInput = wrapper.find('input[name="password"]');
      const form = wrapper.find('form');

      // email can't be empty
      passwordInput.simulate('change', changeVal('password', 'goodpassword'));
      form.simulate('submit', { preventDefault: () => undefined });
      await nextTick();
      wrapper.update();
      let emailError = wrapper.find('.unl-login__error-message').at(0);
      expect(emailError.text()).toEqual('email is a required field');

      // email must be a valid email
      emailInput.simulate('change', changeVal('email', 'bademail'));
      passwordInput.simulate('change', changeVal('password', 'goodpassword'));
      form.simulate('submit', { preventDefault: () => undefined });
      await nextTick();
      wrapper.update();
      emailError = wrapper.find('.unl-login__error-message').at(0);
      expect(emailError.text()).toEqual('email must be a valid email');
    });

    it('displays correct password validation errors', async () => {
      const emailInput = wrapper.find('input[name="email"]');
      const passwordInput = wrapper.find('input[name="password"]');
      const form = wrapper.find('form');

      // password field can't be empty
      emailInput.simulate('change', changeVal('email', 'good@email.com'));
      form.simulate('submit', { preventDefault: () => undefined });
      await nextTick();
      wrapper.update();
      let passwordError = wrapper.find('.unl-login__error-message').at(0);
      expect(passwordError.text()).toEqual('password is a required field');

      // password must be at least 8 chars
      emailInput.simulate('change', changeVal('email', 'good@email.com'));
      passwordInput.simulate('change', changeVal('password', '123'));
      form.simulate('submit', { preventDefault: () => undefined });
      await nextTick();
      wrapper.update();
      passwordError = wrapper.find('.unl-login__error-message').at(0);
      expect(passwordError.text()).toEqual('password must be at least 8 characters');
    });
  });
});
