import axios from 'axios';
import { getUserDetails } from './githubUser';
import { mockUserDetails } from '../__mocks__/mockUserDetails';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getUserDetails', () => {
  it('fetches successfully data from an API', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockUserDetails });
    const result = await getUserDetails('sampolahtinen');

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.data).toBe(mockUserDetails);

    mockedAxios.get.mockReset();
  });
});
