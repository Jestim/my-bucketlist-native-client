import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import UserDetailsScreen from '../screens/UserDetilsScreen';
import { SearchStackParamList } from '../types/NavigationTypes';

const Stack = createStackNavigator<SearchStackParamList>();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SearchFriend"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchFriend" component={SearchScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}
