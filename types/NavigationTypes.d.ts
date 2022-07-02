import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type BottomStackParamList = {
  Home: undefined;
  Goals: undefined;
  Friends: undefined;
  Search: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type GoalsStackParamList = {
  MyBucketlist: undefined;
  AddGoal: undefined;
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
export type GoalsScreenNavigationProp = NativeStackNavigationProp<
  GoalsStackParamList,
  'AddGoalScreen',
  'MyBucketlist',
  'LogInScreen'
>;

export type GoalsScreenProps = {
  navigation: GoalsScreenNavigationProp;
};
