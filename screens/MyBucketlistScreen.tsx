import { View, Text } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';

function MyBucketlistScreen() {
  return (
    <>
      <HeaderComponent title="My Bucketlist" />
      <MainComponent>
        <Text>Here is my list</Text>
      </MainComponent>
    </>
  );
}

export default MyBucketlistScreen;
