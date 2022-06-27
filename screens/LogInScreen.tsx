import { View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function LogInScreen() {
  return (
    <>
      <HeaderComponent title="Log In" />
      <MainComponent>
        <View>
          <StandardTextComponent text="This is the login screen" />
        </View>
      </MainComponent>
    </>
  );
}

export default LogInScreen;
