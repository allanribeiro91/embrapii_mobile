import { View, Text, StyleSheet } from 'react-native';
import theme from '../../styles/theme';
import { BodyIndex } from '../../components/BodyIndex';

export default function Numeros() {
  return (
    <BodyIndex>
      <View style={styles.boxCards}>
        <Text style={styles.boxCardsTitle}>
          Principais Números{'\n'}
          <Text style={{ fontSize: 10 }}>29/03/2025</Text>
        </Text>

        <View style={styles.gridCards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Projetos Contratados</Text>
            <Text style={styles.cardValue}>3.124</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Empresas{'\n'}Apoiadas</Text>
            <Text style={styles.cardValue}>2.462</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Unidades{'\n'}Embrapii</Text>
            <Text style={styles.cardValue}>94</Text>
          </View>
        </View>

        <View style={styles.gridCards}>
          <View style={styles.cardTotalValue}>
            <Text style={styles.cardTitle}>Valor Total Contratado R$ (IPCA)</Text>
            <Text style={styles.cardValue}>1,136 Bi</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Avalavancagem R${'\n'}Fator K</Text>
            <Text style={styles.cardValue}>2.84</Text>
          </View>
        </View>
        <View style={styles.gridCards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Valor Embrapii</Text>
            <Text style={styles.cardValue}>35,3%</Text>
            <Text style={styles.cardValueSub}>400,2 mi</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Valor Empresas</Text>
            <Text style={styles.cardValue}>54,4%</Text>
            <Text style={styles.cardValueSub}>617,7 mi</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Valor Unidade</Text>
            <Text style={styles.cardValue}>10,4%</Text>
            <Text style={styles.cardValueSub}>118,1 mi</Text>
          </View>
        </View>

        <View style={styles.gridCards}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Projetos{'\n'}Concluídos</Text>
            <Text style={styles.cardValue}>2.405</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Satisfação{'\n'}Empresas</Text>
            <Text style={styles.cardValue}>8,79</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pedidos{'\n'}de PI</Text>
            <Text style={styles.cardValue}>506</Text>
          </View>
        </View>
      </View>
    </BodyIndex>
  );
}

const styles = StyleSheet.create({
  boxCards: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  boxCardsTitle: {
    color: '#fff',
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  gridCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '31%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: 'TitilliumWeb-Regular',
    color: theme.colors.verdePii,
    fontSize: 10,
    textAlign: 'center',
  },
  cardValue: {
    fontFamily: 'TitilliumWeb-Regular',
    color: '#fff',
    fontSize: 24,
  },
  cardValueSub: {
    fontFamily: 'TitilliumWeb-Regular',
    color: '#fff',
    fontSize: 14,
  },
  cardTotalValue: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '65%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
