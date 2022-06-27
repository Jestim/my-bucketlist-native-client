import { Text } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';

function SearchScreen() {
  return (
    <>
      <HeaderComponent title="Search" />
      <MainComponent>
        <Text>This is the search screen</Text>
      </MainComponent>
    </>
  );
}

export default SearchScreen;
