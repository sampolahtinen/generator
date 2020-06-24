import React from 'react';
import { shallow } from 'enzyme';
import ResumeGenerator from './ResumeGenerator';

describe('ResumeGenerator Component', () => {
  const mockFunc = jest.fn();
  const mockedEvent = { preventDefault: () => {} };
  const wrapper = shallow(<ResumeGenerator onSubmit={mockFunc} />);
  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('changes input fields value on change', () => {
    const event = { currentTarget: { value: 'test' } };
    const input = wrapper.find('input');

    input.simulate('change', event);
    expect(wrapper.find('input').prop('value')).toBe('test');
  });

  it('handles button clicks ', () => {
    wrapper.find('button').simulate('click', mockedEvent);
    expect(mockFunc).toHaveBeenCalled();
  });
});
