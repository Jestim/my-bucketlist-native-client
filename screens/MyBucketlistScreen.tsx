import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MainComponent from '../components/MainComponent';
import StandardTextComponent from '../components/StandardTextComponent';
import colors from '../styles/colors';
import { GoalsScreenProps } from '../types/NavigationTypes';

function MyBucketlistScreen({ navigation }: GoalsScreenProps) {
  return (
    <>
      <HeaderComponent title="My Bucketlist" />
      <MainComponent>
        <StandardTextComponent text="Here is my list" />
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
