import { shallow } from 'enzyme';
import * as React from 'react';

import { ModalFooter, ModalHeader } from '../defaults/components';

describe('<Modal />', () => {
  let wrapper: any;

  it('<ModalHeader/> renders with title prop', () => {
    wrapper = shallow(<ModalHeader title="Login" />);

    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('h3').text()).toEqual('Login');
  });

  it('<ModalFooter/> renders with title prop', () => {
    wrapper = shallow(<ModalFooter title={"I'm a footer"} />);

    expect(wrapper.text()).toEqual("I'm a footer");
  });
});
