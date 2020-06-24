import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  const wrapper = shallow(<NavBar />);

  it('renders', () => {
    expect(wrapper.find('.navbar').exists()).toEqual(true);
  });
  it('a displays a generator text', () => {
    expect(wrapper.find('h1').text()).toEqual('GENERATOR');
  });
});
