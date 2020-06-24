import React from 'react';
import { shallow } from 'enzyme';
import Language from './Language';

describe('Language Component', () => {
  const wrapper = shallow(<Language title="JavaScript" percentage={50} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays a title', () => {
    expect(wrapper.find('.highlighted-text').text()).toEqual('JavaScript');
  });

  it('displays a percentage', () => {
    expect(wrapper.find('.percentage').text()).toEqual('50%');
  });
});
