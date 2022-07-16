export type CurrentUser = {
  userId: string | null;
  jwtToken: string | null;
  jwtExp: string | null;
  isLoggedIn: boolean;
};

export type CurrentUserDetailsContextType = {
  currentUserState: CurrentUser;
  setCurrentUserState: React.Dispatch<React.SetStateAction<CurrentUser>>;
};
