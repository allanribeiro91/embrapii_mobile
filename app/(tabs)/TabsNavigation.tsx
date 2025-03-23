import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// suas imports...
import {
  IconProjetos,
  IconUnidades,
  IconEmpresas,
  IconNumeros,
} from '../components/Icons';

import theme from '../styles/theme';

import Unidades from './unidades';
import Header from '../components/Header';
import Empresas from './empresas';
import Numeros from './numeros';
import { tabMapping } from './tabMapping';
import ProjetosStack from './projetos';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header title={tabMapping[route.name] || route.name} />,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Projetos':
              return <IconProjetos color={color} size={size} />;
            case 'Unidades':
              return <IconUnidades color={color} size={size} />;
            case 'Empresas':
              return <IconEmpresas color={color} size={size} />;
            case 'Números':
              return <IconNumeros color={color} size={size} />;
            default:
              return null;
          }
        },
        tabBarStyle: {
          backgroundColor: theme.colors.backHeaderFooter,
          height: 70,
          paddingTop: 5,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
        // tabBarStyle: false,
        tabBarLabelStyle: {
          fontFamily: 'TitilliumWeb-Regular',
        },
        tabBarActiveTintColor: theme.colors.verdePii,
        tabBarInactiveTintColor: theme.colors.white,
      })}
    >


      <Tab.Screen name="Projetos" component={ProjetosStack} />
      <Tab.Screen name="Unidades" component={Unidades} />
      <Tab.Screen name="Empresas" component={Empresas} />
      <Tab.Screen name="Números" component={Numeros} />
    </Tab.Navigator>
  );
}
