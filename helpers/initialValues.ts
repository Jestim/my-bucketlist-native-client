import IUser from '../types/userType';

export const initialSignUpInput = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  age: '',
};

export const initialErrorState = {
  isShown: false,
  messages: [],
};

export const initialGoalState = {
  id: '',
  title: '',
  description: '',
  location: '',
  sharedWith: [],
  isPrivate: false,
  isCrossedOff: false,
  crossedOffAt: '',
  creator: '',
  createdAt: '',
  updatedAt: '',
};

export const placeholderUser: IUser = {
  id: '',
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  name: '',
  age: 0,
  friends: [],
  friendRequests: [],
};
