import { View, Text, Button } from 'react-native';

import { HomeScreenProps } from '../types';

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View>
      <Text>This is the home screen</Text>
      <Button
        title="My List"
        onPress={() => navigation.navigate('MyBucketlist')}
      />
    </View>
  );
}

export default HomeScreen;
