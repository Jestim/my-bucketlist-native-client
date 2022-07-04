import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import IGoal from '../types/GoalType';
import { GoalsScreenProps } from '../types/NavigationTypes';

// interface IProp {
//   goal: IGoal;
//   navigation: GoalsScreenNavigationProp;
// }

function GoalCardComponent({ goal, navigation }: GoalsScreenProps) {
  const { title, description, location, id } = goal;

  const handleOnPress = () => {
    navigation.navigate('GoalDetails', { goalId: id });
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.goalContainer, styles.pressed] : styles.goalContainer
      }
      onPress={handleOnPress}
    >
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.goalDetailsContainer}>
        <Text style={styles.detailsText}>{description}</Text>
        <Text style={styles.detailsText}>{location}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    alignItems: 'center',
    width: '75%',
    marginVertical: 16,
    padding: 8,
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
  pressed: {
    opacity: 0.5,
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
  },
});

export default GoalCardComponent;
