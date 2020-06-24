import React from 'react';
import { mount } from 'enzyme';
import BarGauge from './BarGauge';

describe('BarGauge Component', () => {
  const wrapper = mount(
    <div style={{ width: '100px' }}>
      <BarGauge value={50} />
    </div>
  );

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
