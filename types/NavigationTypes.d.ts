import { Route } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IGoal from './GoalType';

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
  GoalDetails: {
    goalId: string;
  };
  EditGoal: {
    goalId: string;
  };
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
