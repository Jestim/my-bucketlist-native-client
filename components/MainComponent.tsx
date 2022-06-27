import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import { statusBarHeight } from '../styles/shared';

function MainComponent(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  // eslint-disable-next-line react/destructuring-assignment
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: statusBarHeight,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MainComponent;
