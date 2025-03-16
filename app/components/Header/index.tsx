// components/Header/index.tsx
import theme from '@/app/styles/theme';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Image
        source={require('../../../assets/images/embrapii-logo.png')}
        resizeMode="contain"
        style={styles.headerLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: theme.colors.backHeaderFooter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    height: 80, // altura fixa para o header
    width: '100%',
  },
  headerText: {
    color: theme.colors.verdePii,
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  headerLogo: {
    width: 80,
    height: 50,
  },
});
