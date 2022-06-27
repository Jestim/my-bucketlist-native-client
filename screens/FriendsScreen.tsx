import { Text } from 'react-native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';

function FriendsScreen() {
  return (
    <>
      <HeaderComponent title="Friends" />
      <MainComponent>
        <Text>This is the freinds screen</Text>
      </MainComponent>
    </>
  );
}

export default FriendsScreen;
