import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useContext, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import MainComponent from '../components/MainComponent';
import HeaderComponent from '../components/HeaderComponent';
import { GoalDetailsScreenProps } from '../types/NavigationTypes';
import CurrentUserDetailsContext from '../context/UserContext';
import { CurrentUserDetailsContextType } from '../types/ContextTypes';
import host from '../helpers/host';
import IGoal from '../types/GoalType';
import { initialGoalState } from '../helpers/initialValues';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import GoBackButton from '../components/GoBackButton';

function GoalDetailsScreen(props: GoalDetailsScreenProps) {
  const {
    route: {
      params: { goalId },
    },
    navigation,
  } = props;

  const { currentUserState } = useContext(
    CurrentUserDetailsContext,
  ) as CurrentUserDetailsContextType;

  const [goalData, setGoalData] = useState<IGoal>(initialGoalState);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchGoalDetails = async () => {
      try {
        const response = await fetch(
          `${host}/api/users/${currentUserState.userId}/goals/${goalId}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${currentUserState.jwtToken}`,
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setGoalData(data);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isFocused) {
      fetchGoalDetails().catch((err: any) => console.log(err));
    }
  }, [isFocused]);

  return (
    <>
      <HeaderComponent title="Goal Details" />
      <MainComponent>
        <View style={styles.goalContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{goalData.title}</Text>
          </View>
          <View style={styles.goalDetailsContainer}>
            <Text style={styles.detailsText}>{goalData.description}</Text>
            <Text style={styles.detailsText}>{goalData.location}</Text>
          </View>
        </View>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.editGoal, styles.pressed] : styles.editGoal
          }
          pressRetentionOffset={{ bottom: 20, left: 20, right: 20, top: 20 }}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
          onPress={() => {
            navigation.navigate('EditGoal', { goalId });
          }}
        >
          <Feather name="edit" size={42} color={colors.light} />
        </Pressable>
        <GoBackButton navigation={navigation} />
      </MainComponent>
    </>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    alignItems: 'center',
    width: '75%',
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingTop: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.light,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  headerTextContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  headerText: {
    color: colors.light,
    fontSize: fontSizes.medium,
  },
  goalDetailsContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailsText: {
    color: colors.light,
    fontSize: fontSizes.small,
    marginBottom: 8,
  },
  editGoal: {
    position: 'absolute',
    bottom: 36,
    right: 36,
  },
  backButton: {
    position: 'absolute',
    bottom: 36,
    left: 36,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default GoalDetailsScreen;
