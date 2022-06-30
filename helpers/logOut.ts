import { deleteJWT } from './secureStore';
import jwtSecureStoreKey from './variables';
import { initialUserState } from '../context/UserContext';
import { User } from '../types/ContextTypes';

const logout = async (
  setUserState: React.Dispatch<React.SetStateAction<User>>,
) => {
  // Remove JWT from secure store
  await deleteJWT(jwtSecureStoreKey);

  // Update UserState
  setUserState(initialUserState);
};

export default logout;
