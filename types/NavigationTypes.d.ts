import { Route } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IGoal from './GoalType';
import IUser from './userType';

export type BottomStackParamList = {
  HomeTab: undefined;
  GoalsTab: undefined;
  FriendsTab: undefined;
  SearchTab: undefined;
  ProfileTab: undefined;
};

// AUTH
export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

// LOG IN
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

// SIGN UP
export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'LogIn'
>;

export type SignUpScreenProps = {
  navigation: LoginScreenNavigationProp;
};

// GOALS
export type GoalsStackParamList = {
  MyBucketlist: undefined;
  AddGoal: undefined;
  GoalDetails: {
    goalId: string;
  };
  EditGoal: {
    goalId: string;
  };
};

export type GoalsScreenNavigationProps = NativeStackNavigationProp<
  GoalsStackParamList,
  'AddGoal',
  'MyBucketlist',
  'GoalDetails',
  'EditGoal'
>;

export type GoalsScreenProps = {
  navigation: GoalsScreenNavigationProps;
  goal: IGoal;
};

// GOAL DETAILS
export type GoalDetailsScreenProps = {
  navigation: GoalsScreenNavigationProps;
  route: Route;
};

// SEARCH
export type SearchStackParamList = {
  Search: undefined;
  UserDetails: {
    userId: string;
  };
};

export type SearchScreenNavigationProps = NativeStackNavigationProp<
  SearchStackParamList,
  'Search',
  'UserDetails'
>;

export type SearchScreenProps = {
  navigation: SearchScreenNavigationProps;
};

// USER DETAILS
export type UserDetailsNavigationProps = NativeStackNavigationProp<
  SearchStackParamList,
  'Search',
  'Friends',
  'UserDetails'
>;

export type UserDetailsScreenProps = {
  navigation: UserDetailsNavigationProps;
  route: Route;
};

// FRIENDS
export type FriendStackParamList = {
  Friends: undefined;
  UserDetails: {
    userId: string;
  };
};

export type FriendsScreenNavigationProps = NativeStackNavigationProp<
  FriendStackParamList,
  'Friends',
  'UserDetails'
>;

export type FriendsScreenProps = {
  navigation: FriendsScreenNavigationProps;
  friend: IUser;
};
