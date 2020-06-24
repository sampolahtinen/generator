import React from 'react';
import { mount } from 'enzyme';
import Layout from './Layout';

describe('NavBar Component', () => {
  const wrapper = mount(
    <Layout>
      <div className="test">test</div>
      <div className="test">test</div>
      <div className="test">test</div>
    </Layout>
  );

  it('displays children', () => {
    expect(wrapper.find('.test')).toHaveLength(3);
  });
});
