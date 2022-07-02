import { createContext } from 'react';
import { User, UserDetailsContextType } from '../types/ContextTypes';

export const initialUserState: User = {
  userId: null,
  jwtToken: null,
  jwtExp: null,
  isLoggedIn: false,
};

const initialState: UserDetailsContextType = {
  userState: initialUserState,
  setUserState: () => {},
};

const UserDetailsContext = createContext<UserDetailsContextType>(initialState);

export default UserDetailsContext;
