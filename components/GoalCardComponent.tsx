import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import IGoal from '../types/GoalType';

interface IProp {
  goal: IGoal;
}

function GoalCardComponent({ goal }: IProp) {
  const { title, description, location } = goal;
  return (
    <View style={styles.goalContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.goalDetailsContainer}>
        <Text style={styles.detailsText}>{description}</Text>
        <Text style={styles.detailsText}>{location}</Text>
      </View>
    </View>
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
    alignItems: 'center',
    marginBottom: 8,
  },
  detailsText: {
    color: colors.light,
    fontSize: fontSizes.small,
  },
});

export default GoalCardComponent;
