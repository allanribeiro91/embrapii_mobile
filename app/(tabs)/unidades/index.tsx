import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UnidadesScreen from './UnidadesScreen';

const Stack = createNativeStackNavigator();

export default function UnidadesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UnidadesMain"
        component={UnidadesScreen}
        options={{
          // Header personalizado (ou reutilize seu componente <Header /> se quiser)
          header: () => null,
          animation: 'slide_from_left',
        }}
      />

      
    </Stack.Navigator>
  );
}
