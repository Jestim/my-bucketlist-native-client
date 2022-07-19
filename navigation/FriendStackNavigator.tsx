import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';
import UserDetailsScreen from '../screens/UserDetilsScreen';
import { FriendStackParamList } from '../types/NavigationTypes';

const Stack = createStackNavigator<FriendStackParamList>();

export default function FriendStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Friends"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}
