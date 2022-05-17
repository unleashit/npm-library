import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { act } from 'react-dom/test-utils';

// eslint-disable-next-line import/no-relative-packages
import { changeVal, nextTick } from '../../../testConfig/utils';
import SignupContainer, { mapDefaultValues, Props } from '.';

describe('<SignupContainer />', () => {
  let wrapper: ReactWrapper;
  let props: Props;

  beforeEach(() => {
    props = {
      signupHandler: () => Promise.resolve({ success: true }),
      onSuccess: () => jest.fn(),
    };

    wrapper = mount(<SignupContainer {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.unl-signup__container')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    it('fields can be updated and validated', async () => {
      await act(async () => {
        wrapper
          .find('input[name="email"]')
          .simulate('change', changeVal('email', 'test@test.com'));
        wrapper
          .find('input[name="password"]')
          .simulate('change', changeVal('password', '12345678'));
      });
      wrapper.update();
      expect(wrapper.find('input[name="email"]').props().value).toEqual('test@test.com');
      const errors = wrapper.find('.errorMessage');
      expect(errors).toHaveLength(0);
    });

    it('displays correct email validation errors', async () => {
      const emailInput = wrapper.find('input[name="email"]');
      const passwordInput = wrapper.find('input[name="password"]');
      const passwordConfirmInput = wrapper.find('input[name="passwordConfirm"]');
      const form = wrapper.find('form');

      // email can't be empty
      await act(async () => {
        passwordInput.simulate('change', changeVal('password', 'goodpassword'));
        form.simulate('submit', { preventDefault: () => undefined });
      });
      wrapper.update();
      let emailError = wrapper.find('.unl-signup__error-message').at(0);
      expect(emailError.text()).toEqual('email is a required field');

      // email must be a valid email
      await act(async () => {
        emailInput.simulate('change', changeVal('email', 'bad email'));
        passwordInput.simulate('change', changeVal('password', 'goodpassword'));
        passwordConfirmInput.simulate('change', changeVal('password', 'goodpassword'));
        await nextTick();
        form.simulate('submit', { preventDefault: () => undefined });
      });
      wrapper.update();
      emailError = wrapper.find('.unl-signup__error-message').at(0);
      expect(emailError.text()).toEqual('email must be a valid email');
    });

    it('displays correct password validation errors', async () => {
      const emailInput = wrapper.find('input[name="email"]');
      const passwordInput = wrapper.find('input[name="password"]');
      const form = wrapper.find('form');

      // password field can't be empty
      await act(async () => {
        emailInput.simulate('change', changeVal('email', 'good@email.com'));
        await nextTick();
        form.simulate('submit', { preventDefault: () => undefined });
      });
      wrapper.update();
      let passwordError = wrapper.find('.unl-signup__error-message').at(0);
      expect(passwordError.text()).toEqual('password is a required field');

      // password must be at least 8 chars
      await act(async () => {
        emailInput.simulate('change', changeVal('email', 'good@email.com'));
        passwordInput.simulate('change', changeVal('password', '123'));
        await nextTick();
        form.simulate('submit', { preventDefault: () => undefined });
      });
      wrapper.update();
      passwordError = wrapper.find('.unl-signup__error-message').at(0);
      expect(passwordError.text()).toEqual('password must be at least 8 characters');
    });
  });

  describe('helper functions', () => {
    it('mapDefaultValues() returns the right object', () => {
      const fields: any = [
        {
          element: 'input',
          type: 'text',
          name: 'email',
          label: 'Email',
          defaultValue: 'something',
        },
        {
          element: 'input',
          type: 'password',
          name: 'password',
          label: 'Password',
        },
      ];
      /*
       *  return shape of mapDefaultValues()
       *   {
       *     [name]: defaultValue || ''
       *   }
       * */
      const { email, password } = mapDefaultValues(fields);

      expect(email).toEqual('something');
      expect(password).toEqual('');
    });
  });
});
