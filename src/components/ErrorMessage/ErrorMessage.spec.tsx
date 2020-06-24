import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './ErrorMessage';
import styles from './ErrorMessage.module.scss';

describe('ErrorMessage Component', () => {
  const wrapper = shallow(<ErrorMessage message="test" />);

  it('renders', () => {
    expect(wrapper.find('div').exists()).toEqual(true);
  });

  it('renders a given message', () => {
    expect(wrapper.find('span').text()).toBe('test');
  });
});
