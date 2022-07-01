import { Feather } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import colors from '../styles/colors';
import { GoalsScreenProps } from '../types/NavigationTypes';
import host from '../helpers/host';
import UserDetailsContext from '../context/UserContext';
import { UserDetailsContextType } from '../types/ContextTypes';
import IGoal from '../types/GoalType';
import GoalCardComponent from '../components/GoalCardComponent';
import StandardTextComponent from '../components/StandardTextComponent';

function MyBucketlistScreen({ navigation }: GoalsScreenProps) {
  const { userState } = useContext(
    UserDetailsContext,
  ) as UserDetailsContextType;

  const [userGoals, setUserGoals] = useState<IGoal[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch(
        `${host}/api/users/${userState.userId}/goals`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${userState.jwtToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setUserGoals(data);
      }
    };
    fetchGoals().catch((err) => {
      console.log(err);
    });
  }, [isFocused]);

  return (
    <>
      <HeaderComponent title="My Bucketlist" />
      <MainComponent>
        <ScrollView
          style={styles.goalsContainer}
          contentContainerStyle={styles.scrollView}
        >
          {userGoals.length > 0 ? (
            userGoals.map((goal) => (
              <GoalCardComponent goal={goal} key={goal.id} />
            ))
          ) : (
            <StandardTextComponent text="Add a goal to see it here" />
          )}
        </ScrollView>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.addGoal, styles.pressed] : styles.addGoal
          }
          pressRetentionOffset={{ bottom: 20, left: 20, right: 20, top: 20 }}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
          onPress={() => {
            navigation.navigate('AddGoal');
          }}
        >
          <Feather name="plus-circle" size={42} color={colors.light} />
        </Pressable>
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  addGoal: {
    position: 'absolute',
    bottom: 36,
    right: 36,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default MyBucketlistScreen;
