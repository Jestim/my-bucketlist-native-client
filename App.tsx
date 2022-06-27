import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import LogInScreen from './screens/LogInScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {isLoggedIn ? <BottomTabNavigator /> : <LogInScreen />}
    </NavigationContainer>
  );
}
