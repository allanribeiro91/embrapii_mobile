// app/unidades/[unidade]/identificacao.tsx
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function NumeroTab() {
  const { unidade } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#111' }}>
      <Text style={{ color: 'white' }}>
        Página de Números da unidade: {unidade}
      </Text>
    </View>
  );
}
