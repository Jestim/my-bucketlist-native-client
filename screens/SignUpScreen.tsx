import { View, Text } from 'react-native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';

function SignUpScreen() {
  return (
    <>
      <HeaderComponent title="Sign Up" />
      <MainComponent>
        <Text>This is the sign up screen</Text>
      </MainComponent>
    </>
  );
}

export default SignUpScreen;
