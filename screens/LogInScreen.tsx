import { Text, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';

function LogInScreen() {
  return (
    <>
      <HeaderComponent title="Log In" />
      <MainComponent>
        <View>
          <Text>This is the login screen</Text>
        </View>
      </MainComponent>
    </>
  );
}

export default LogInScreen;
