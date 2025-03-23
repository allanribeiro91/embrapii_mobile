import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from './styles/theme';

import { useFonts } from 'expo-font';
import TabsNavigation from './(tabs)/TabsNavigation';
import ProjetoFicha from './(tabs)/projetos/projetoFicha';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export type RootStackParamList = {
  MainTabs: undefined;
  ProjetoFicha: { codigo_projeto: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  const [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('../assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
    'TitilliumWeb-Bold': require('../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou algum componente de carregamento
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right', 
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        >
        
          {/* Tela inicial: as Tabs */}
          <Stack.Screen name="MainTabs" component={TabsNavigation} />

          {/* Tela de detalhe: ProjetoFicha, fora das Tabs */}
          <Stack.Screen name="ProjetoFicha" component={ProjetoFicha} />

        </Stack.Navigator>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
