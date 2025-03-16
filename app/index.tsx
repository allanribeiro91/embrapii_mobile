import { StyleSheet, Text, View } from 'react-native';

import theme from './styles/theme';

import { useFonts } from 'expo-font';
import { Footer } from './components/Footer';
import TabsNavigation from './(tabs)';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('../assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
    'TitilliumWeb-Bold': require('../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou algum componente de carregamento
  }
  return (
    <View style={styles.container}>
      <TabsNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
