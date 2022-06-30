import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type BottomStackParamList = {
  Home: undefined;
  MyBucketlist: undefined;
  Friends: undefined;
  Search: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'LogIn'
>;

export type SignUpScreenProps = {
  navigation: LoginScreenNavigationProp;
};
