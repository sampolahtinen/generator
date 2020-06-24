import userReducer, { initialState, getUserDetailsSuccess } from '../userSlice';
import { mockUser } from '../../../__mocks__/mockUser';

// Partial tests to demonstrate how I write unit tests.

/**
 * REDUCER TESTS
 */
describe('User reducer', () => {
  const mockState = initialState;
  it('successfully stores user details', () => {
    expect(
      userReducer(mockState, {
        type: getUserDetailsSuccess.type,
        payload: mockUser
      })
    ).toEqual({
      ...initialState,
      details: mockUser
    });
  });
});
