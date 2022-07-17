import { deleteJWT } from './secureStore';
import jwtSecureStoreKey from './variables';
import { initialUserState } from '../context/UserContext';
import { CurrentUser } from '../types/ContextTypes';

const logout = async (
  setCurrentUserState: React.Dispatch<React.SetStateAction<CurrentUser>>,
) => {
  // Remove JWT from secure store
  await deleteJWT(jwtSecureStoreKey);

  // Update UserState
  setCurrentUserState(initialUserState);
};

export default logout;
