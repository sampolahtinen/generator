import { UserRepo, UserLanguages } from '../store/user/types';
import { getUserRepos } from '../api/githubUser';

/**
 *
 * Utility that defines coding languages of a github user based on their repos
 */
export function calculateLanguages(repos: UserRepo[]) {
  const reposLength = repos.length;
  let nullCount = 0;
  const userLanguages: UserLanguages = {
    list: [],
    totalCount: reposLength
  };

  // Using traditional for - loop due to its performance
  for (let i = 0; i < reposLength; i++) {
    const lang = repos[i].language;

    // language can be null. Need to keep track of nulls in order to calculate proper percentages
    if (lang !== null) {
      const existingIndex = userLanguages.list.findIndex(
        elem => elem.title === lang
      );

      if (existingIndex > -1) {
        userLanguages.list[existingIndex].count += 1;
      } else {
        userLanguages.list.push({ title: lang, count: 1 });
      }
    } else {
      nullCount++;
    }
  }

  // Subtracting nulls in order to get proper language percentages
  userLanguages.totalCount = userLanguages.totalCount - nullCount;

  return userLanguages;
}

/**
 * Custom sortBy field utility
 */
export function sortBy(field: string) {
  return (a: any, b: any) => {
    if (a[field] > b[field]) {
      return -1;
    } else if (a[field] < b[field]) {
      return 1;
    }

    return 0;
  };
}

/**
 *
 * Function that returns current and last page number out of GitHub pagination Link
 */
export const getFirstLastPage = (link: string) => {
  const term = '&page=' as any;
  // Search all starting indexes that match with the 'term'
  // Spread the RegExpIterator into an array
  // Finally destructure found indexes and rename them as first and last
  const allMatches = link.matchAll(term);
  const [{ index: first }, { index: last }] = [...allMatches];

  // Return a number tuple
  return [+link[first + term.length], +link[last + term.length]];
};

/**
 * Utility for fetching all paginated user github repos
 * @param username
 * @param paginationLink
 */
export async function fetchMoreRepos(username: string, paginationLink: string) {
  const promises = [];
  const pageNumbers = getFirstLastPage(paginationLink);

  for (let page = pageNumbers[0]; page <= pageNumbers[1]; page++) {
    const moreData = getUserRepos(username, page);

    promises.push(moreData);
  }

  return await Promise.all(promises).then(resolved => {
    return resolved.reduce((acc, currentValue) => {
      return acc.concat(currentValue.data);
    }, []);
  });
}
