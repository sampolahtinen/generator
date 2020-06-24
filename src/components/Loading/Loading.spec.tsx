import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading Component', () => {
  const wrapper = shallow(<Loading>Loading</Loading>);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text passed as children', () => {
    expect(wrapper.find('.loading').text()).toEqual('Loading');
  });
});
