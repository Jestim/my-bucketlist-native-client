import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
  Home: undefined;
  MyBucketlist: undefined;
  Friends: undefined;
  Search: undefined;
  Profile: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
