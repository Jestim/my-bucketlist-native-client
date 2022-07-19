import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MyBucketlistScreen from '../screens/MyBucketlistScreen';

import { BottomStackParamList } from '../types/NavigationTypes';
import FriendsScreen from '../screens/FriendsScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../styles/colors';
import GoalStackNavigator from './GoalsStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import FriendStackNavigator from './FriendStackNavigator';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color={colors.light} />
          ),
        }}
      />
      <Tab.Screen
        name="GoalsTab"
        component={GoalStackNavigator}
        options={{
          tabBarIcon: () => (
            <Entypo name="bucket" size={24} color={colors.light} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendsTab"
        component={FriendStackNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="heart" size={24} color={colors.light} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="search" size={24} color={colors.light} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="human"
              size={24}
              color={colors.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
