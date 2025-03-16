import {
  IconEmpresas,
  IconNumeros,
  IconProjetos,
  IconUnidades,
} from './components/Icons';
import theme from './styles/theme';

export const tabs = [
  {
    tab: 'Projetos',
    icon: <IconProjetos color={theme.colors.verdePii} size={24} />,
  },
  {
    tab: 'Unidades',
    icon: <IconUnidades color={theme.colors.verdePii} size={24} />,
  },
  {
    tab: 'Empresas',
    icon: <IconEmpresas color={theme.colors.verdePii} size={24} />,
  },
  {
    tab: 'Números',
    icon: <IconNumeros color={theme.colors.verdePii} size={24} />,
  },
];
