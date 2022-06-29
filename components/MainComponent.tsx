import { ReactChild } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';

function MainComponent(props: { children: ReactChild }) {
  // eslint-disable-next-line react/destructuring-assignment
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});

export default MainComponent;
