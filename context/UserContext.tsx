import { createContext } from 'react';
import {
  CurrentUser,
  CurrentUserDetailsContextType,
} from '../types/ContextTypes';

export const initialUserState: CurrentUser = {
  userId: null,
  jwtToken: null,
  jwtExp: null,
  isLoggedIn: false,
};

const initialState: CurrentUserDetailsContextType = {
  userState: initialUserState,
  setUserState: () => {},
};

const CurrentUserDetailsContext =
  createContext<CurrentUserDetailsContextType>(initialState);

export default CurrentUserDetailsContext;
