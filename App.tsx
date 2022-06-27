import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#266a31',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
