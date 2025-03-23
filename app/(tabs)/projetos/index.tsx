import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjetosScreen from './ProjetosScreen';
import ProjetoFicha from './projetoFicha';
import Header from '@/app/components/Header';

const Stack = createNativeStackNavigator();

export default function ProjetosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjetosMain"
        component={ProjetosScreen}
        options={{
          // Header personalizado (ou reutilize seu componente <Header /> se quiser)
          header: () => null,
          animation: 'slide_from_left',
        }}
      />

      <Stack.Screen
        name="projetoFicha"
        component={ProjetoFicha}
        options={{
          // Aqui você define um layout COMPLETAMENTE diferente
          // Pode ter outro header ou nenhum:
          header: () => null,
          // ou um header customizado específico para ficha:
          // header: () => <Header title="Ficha do Projeto" />,

          // Se quiser remover a tab bar especificamente nessa tela:
          presentation: 'modal',
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
