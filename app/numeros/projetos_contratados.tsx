import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import theme from '@/styles/theme';
import { router } from 'expo-router';
import { IconArrowLeft } from '@/components/Icons';
import { BodyIndex } from '@/components/BodyIndex';
import evolucaoProjetos from '../../data/evolucaoProjetos.json';

import { BarChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      data: [20, 30, 72, 101, 124, 167],
    },
  ],
};

export default function NumerosProjetosContratados() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.push('/numeros')}>
          <IconArrowLeft color={theme.colors.verdePii} />
        </Pressable>
        <Text style={styles.headerText}>Números: Projetos Contratados</Text>
      </View>

      <BodyIndex>
        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>
            Data de atualização dos dados: 29/03/2025{'\n'}
          </Text>

          <View style={styles.gridCards}>
            <View style={styles.cardTotalValue}>
              <Text style={styles.cardTitle}>
                Total de Projetos Contratados
              </Text>
              <Text style={styles.cardValue}>3.124</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Este ano</Text>
              <Text style={styles.cardValue}>321</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>
            Comparativo últimos dias{'\n'}
          </Text>
          <View style={styles.gridCards}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Últ. 30 dias</Text>
              <Text style={styles.cardValue}>29</Text>
              <Text style={styles.cardValueSub}>+2,3%</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Últ. 90 dias</Text>
              <Text style={styles.cardValue}>84</Text>
              <Text style={styles.cardValueSub}>+1,1%</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Últ. 180 dias</Text>
              <Text style={styles.cardValue}>145</Text>
              <Text style={styles.cardValueSub}>+0,5%</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>
            Comparativo com ano anterior{'\n'}
          </Text>
          <View style={styles.gridCards}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Este mês</Text>
              <Text style={styles.cardValue}>29</Text>
              <Text style={styles.cardValueSub}>+2,3%</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Este trimestre</Text>
              <Text style={styles.cardValue}>84</Text>
              <Text style={styles.cardValueSub}>+1,1%</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Este ano</Text>
              <Text style={styles.cardValue}>145</Text>
              <Text style={styles.cardValueSub}>+0,5%</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>Evolução{'\n'}</Text>
          <View style={{ marginTop: 20 }}>
          <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: '#1a1a1a',
          backgroundGradientTo: '#1a1a1a',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 204, 153, ${opacity})`,
          labelColor: () => '#fff',
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
          </View>
        </View>
      </BodyIndex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  header: {
    height: 80,
    backgroundColor: theme.colors.backHeaderFooter,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
    color: theme.colors.verdePii,
  },
  boxCards: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
    // borderBottomWidth: 1,
    // paddingBottom: 20,
    // borderBottomColor: '#ffffff42'
  },
  boxCardsTitle: {
    color: '#fff',
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'left',
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
    color: '#a6dac2dd',
    fontSize: 12,
  },
  cardTotalValue: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '65.5%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
