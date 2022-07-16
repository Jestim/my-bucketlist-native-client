import { Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';
import { SearchScreenNavigationProps } from '../types/NavigationTypes';

type Props = {
  navigation: SearchScreenNavigationProps;
};

function GoBackButton({ navigation }: Props) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.backButton, styles.pressed] : styles.backButton
      }
      pressRetentionOffset={{ bottom: 20, left: 20, right: 20, top: 20 }}
      hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="arrowleft" size={42} color={colors.light} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    bottom: 36,
    left: 36,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default GoBackButton;
