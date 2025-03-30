// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import {
  IconProjetos,
  IconUnidades,
  IconEmpresas,
  IconNumeros,
} from '@/components/Icons';
import theme from '@/styles/theme';
import Header from '@/components/Header';
import { Pressable } from 'react-native';

const tabLabels: Record<string, string> = {
  projetos: 'Projetos PD&I',
  unidades: 'Unidades Embrapii',
  empresas: 'Empresas Apoiadas',
  numeros: 'Números Gerais',
};

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="numeros"
      screenOptions={({ route }) => ({
        header: () => <Header title={tabLabels[route.name] ?? route.name} />,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'projetos':
              return <IconProjetos color={color} size={size} />;
            case 'unidades':
              return <IconUnidades color={color} size={size} />;
            case 'empresas':
              return <IconEmpresas color={color} size={size} />;
            case 'numeros':
              return <IconNumeros color={color} size={size} />;
            default:
              return null;
          }
        },
        tabBarLabel: tabLabels[route.name] ?? route.name, // <- ISSO É FUNDAMENTAL
        tabBarStyle: {
          backgroundColor: theme.colors.backHeaderFooter,
          height: 70,
          paddingTop: 5,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontFamily: 'TitilliumWeb-Regular',
        },

        tabBarActiveTintColor: theme.colors.verdePii,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarPressOpacity: 1,
        tabBarButton: (props) => (
          <Pressable
            {...props}
            style={[props.style, { flex: 1 }]}
            android_ripple={null}
            pressed={() => false}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="numeros"
        options={{
          tabBarLabel: 'Números',
          title: 'Números',
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          tabBarLabel: 'Projetos',
          title: 'Projetos',
        }}
      />
      <Tabs.Screen
        name="unidades"
        options={{
          tabBarLabel: 'Unidades',
          title: 'Unidades',
        }}
      />

      <Tabs.Screen
        name="empresas"
        options={{
          tabBarLabel: 'Empresas',
          title: 'Empresas',
        }}
      />


    </Tabs>
  );
}
