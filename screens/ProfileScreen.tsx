import { View, Text } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';

function ProfileScreen() {
  return (
    <>
      <HeaderComponent title="Profile" />
      <MainComponent>
        <Text>This is the profile screen</Text>
      </MainComponent>
    </>
  );
}

export default ProfileScreen;
