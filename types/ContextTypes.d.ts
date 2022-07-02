export type User = {
  userId: string | null;
  jwtToken: string | null;
  jwtExp: string | null;
  isLoggedIn: boolean;
};

export type UserDetailsContextType = {
  userState: User;
  setUserState: React.Dispatch<React.SetStateAction<User>>;
};
