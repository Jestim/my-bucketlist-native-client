import { View, Text, Button } from 'react-native';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';

function HomeScreen() {
  return (
    <>
      <HeaderComponent title="Home" />
      <MainComponent>
        <Text>This is the home screen</Text>
        <Text>another text</Text>
        <Button title="Click me" />
      </MainComponent>
    </>
  );
}

export default HomeScreen;
