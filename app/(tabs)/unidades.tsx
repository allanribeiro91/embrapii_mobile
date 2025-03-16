import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';
import { BodyIndex } from '../components/BodyIndex';

export default function Unidades() {
  return (
    <BodyIndex>
      <Text style={styles.text}>Tela Unidades</Text>
    </BodyIndex>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
