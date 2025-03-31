// app/unidades/[unidade]/_layout.tsx
import { Tabs } from 'expo-router';

export default function UnidadeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1a1a1a' },
        tabBarLabelStyle: { color: '#00cc99' },
      }}
    >
      <Tabs.Screen name="identificacao" options={{ title: 'Identificação' }} />
      <Tabs.Screen name="numeros" options={{ title: 'Números' }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos' }} />
      <Tabs.Screen name="empresas" options={{ title: 'Empresas' }} />
    </Tabs>
  );
}
