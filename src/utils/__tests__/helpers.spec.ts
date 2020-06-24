import { calculateLanguages } from '../helpers';
import { mockUserRepos } from '../../__mocks__/mockUserRepos';

describe('calculateLanguages', () => {
  const languages = calculateLanguages([...mockUserRepos, ...mockUserRepos]);
  const expected = {
    totalCount: 2,
    list: [{ title: 'JavaScript', count: 2 }]
  };
  it('successfully defines user languages from given repositories list', () => {
    expect(languages).toStrictEqual(expected);
  });

  it('takes null values into account and subtracts those from totalCount ', () => {
    mockUserRepos[0].language = null as any;
    const expected = {
      totalCount: 0,
      list: []
    };
    const languages = calculateLanguages(mockUserRepos);
    expect(languages).toStrictEqual(expected);
  });
});
