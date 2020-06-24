import React from 'react';
import { shallow } from 'enzyme';
import LanguageList from './LanguageList';
import Language from './Language/Language';
import { mockUserLanguages } from '../../__mocks__/mockUserLanguages';

describe('LanguageList Component', () => {
  const wrapper = shallow(<LanguageList languages={mockUserLanguages} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays languages', () => {
    expect(wrapper.find(Language)).toHaveLength(mockUserLanguages.list.length);
  });
});
