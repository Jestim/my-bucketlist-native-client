import { StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';

function StandardTextComponent(props: { text: string }) {
  // eslint-disable-next-line react/destructuring-assignment
  return <Text style={styles.container}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  container: {
    color: colors.light,
    fontSize: fontSizes.medium
  }
});

export default StandardTextComponent;
