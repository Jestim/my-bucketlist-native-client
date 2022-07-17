import IUser from '../../types/userType';
import { CurrentUser } from '../../types/ContextTypes';

export const userWithoutFriends: IUser = {
  id: '62c7f68014dda82355f1d31d',
  username: 'friend',
  email: 'f@test.com',
  password: '',
  firstName: 'f',
  lastName: 'f',
  name: 'f f',
  age: 100,
  friends: [],
  friendRequests: [],
};

export const currentUser: IUser = {
  id: '62c7f65714dda82355f1d319',
  username: 'friend',
  email: 'f@test.com',
  password: '',
  firstName: 'f',
  lastName: 'f',
  name: 'f f',
  age: 100,
  friends: [],
  friendRequests: [],
};

export const currentUserState: CurrentUser = {
  userId: '62c7f65714dda82355f1d319',
  jwtToken: '',
  jwtExp: '',
  isLoggedIn: true,
};
