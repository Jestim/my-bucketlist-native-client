import { StyleSheet, View, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import colors from '../styles/colors';
import fontSizes from '../styles/fonts';

type Props = {
  messages: string[];
};

function ErrorCard({ messages }: Props) {
  if (messages.length <= 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {messages.map((message) => (
        <Text style={styles.text} key={uuidv4()}>
          {message}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '75%',
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
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
  text: {
    color: colors.light,
    fontSize: fontSizes.medium,
  },
});

export default ErrorCard;
