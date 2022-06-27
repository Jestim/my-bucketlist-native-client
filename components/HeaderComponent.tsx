import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';
import { screenWidth, statusBarHeight } from '../styles/shared';

function HeaderComponent(props: { title: string }) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    padding: 12,
    width: screenWidth,
    backgroundColor: colors.secondary,
    alignItems: 'center'
  },
  headerText: {
    color: colors.light,
    fontSize: fontSizes.large
  }
});

export default HeaderComponent;
