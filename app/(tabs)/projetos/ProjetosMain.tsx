import { View, Text, StyleSheet, Pressable } from 'react-native';
import theme from '../../styles/theme';
import { BodyIndex } from '../../components/BodyIndex';
import { dataProjeto } from '../../data/dataProjeto';
import { useNavigation } from 'expo-router';

export default function Projetos() {
  const navigation = useNavigation();
  return (
    <BodyIndex>
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('projetoFicha')}
      >
        <Text style={styles.cardText}>
          {dataProjeto.status === 'Ativo' ? '🟢' : '🔴'} {dataProjeto.id}
        </Text>
        <Text style={styles.cardTitulo}>{dataProjeto.titulo}</Text>
        <Text style={styles.cardText}>Unidade: {dataProjeto.unidade}</Text>
        <Text style={styles.cardText}>Fonte: {dataProjeto.programa}</Text>
      </Pressable>
    </BodyIndex>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  card: {
    backgroundColor: theme.colors.backHeaderFooter,
    padding: 20,
    borderRadius: 10,
  },
  cardTitulo: {
    // fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.colors.verdePii,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  cardText: {
    color: theme.colors.white,
    fontSize: 14,
  },
  cardStatus: {
    textAlign: 'right',
  },
});
