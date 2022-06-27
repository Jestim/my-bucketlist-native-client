import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons
} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MyBucketlistScreen from '../screens/MyBucketlistScreen';

import { RootStackParamList } from '../types';
import FriendsScreen from '../screens/FriendsScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false
      }}
      backBehavior='history'
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="MyBucketlist"
        component={MyBucketlistScreen}
        options={{
          tabBarIcon: () => <Entypo name="bucket" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="heart" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="search" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="human" size={24} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  );
}
