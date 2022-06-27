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
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name="MyBucketlist"
        component={MyBucketlistScreen}
        options={{
          title: 'My Bucketlist',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bucket" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: 'Friend',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human" size={24} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  );
}
