import { createStackNavigator } from '@react-navigation/stack';
import AddGoalScreen from '../screens/AddGoalScreen';
import MyBucketlistScreen from '../screens/MyBucketlistScreen';
import GoalDetailsScreen from '../screens/GoalDetailsScreen';

import { GoalsStackParamList } from '../types/NavigationTypes';
import EditGoalScreen from '../screens/EditGoalScreen';

const Stack = createStackNavigator<GoalsStackParamList>();

export default function GoalStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MyBucketlist"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyBucketlist" component={MyBucketlistScreen} />
      <Stack.Screen name="AddGoal" component={AddGoalScreen} />
      <Stack.Screen name="GoalDetails" component={GoalDetailsScreen} />
      <Stack.Screen name="EditGoal" component={EditGoalScreen} />
    </Stack.Navigator>
  );
}
