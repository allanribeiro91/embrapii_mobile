import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import theme from '@/styles/theme';
import { router } from 'expo-router';
import { IconArrowLeft } from '@/components/Icons';
import { BodyIndex } from '@/components/BodyIndex';
import helptext from '../../data/helptext.json';
import { OffCanvas } from '@/components/Offcanvas';
import { BarChart } from 'react-native-chart-kit';
import { useState } from 'react';
import HelpText from '@/components/Helptext';
import TabelaProjetosStatus from '@/components/Tabela';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ],
  datasets: [
    {
      data: [9, 70, 107, 212, 256, 215, 249, 375, 442, 481, 645, 89],
    },
  ],
};

const dataAcumulado = {
  labels: [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ],
  datasets: [
    {
      data: [9, 79, 186, 398, 654, 869, 1118, 1493, 1935, 2416, 3061, 3150],
    },
  ],
};

const dataProjetosStatus = {
  labels: [
    'Em execução',
    'Finalizado',
    'Suspenso',
    'Cancelado',
  ],
  datasets: [
    {
      data: [1065, 1954, 9, 122],
    },
  ],
};

const totalGeral = dataProjetosStatus.datasets[0].data.reduce((a, b) => a + b, 0);

const tabelaProjetosStatus = dataProjetosStatus.labels.map((status, index) => {
  const total = dataProjetosStatus.datasets[0].data[index];
  const percentual = (total / totalGeral) * 100;
  return {
    status,
    total,
    percentual: percentual.toFixed(1).replace('.', ',') + '%',
  };
});

export default function NumerosProjetosContratados() {
  const [isOpen, setIsOpen] = useState(false);
  const [offCanvasContent, setOffCanvasContent] =
    useState<React.ReactNode>(null);

  function abrirAjuda(title: string, description: string) {
    setOffCanvasContent(<HelpText title={title} description={description} />);
    setIsOpen(true);
  }

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
            {[
              {
                title: 'Últ. 30 dias',
                value: '29',
                sub: '+2,3%',
                help: helptext[0],
              },
              {
                title: 'Últ. 90 dias',
                value: '84',
                sub: '+1,1%',
                help: helptext[1],
              },
              {
                title: 'Últ. 180 dias',
                value: '145',
                sub: '+0,5%',
                help: helptext[2],
              },
            ].map((item, index) => (
              <View style={styles.card} key={index}>
                <Pressable
                  onPress={() =>
                    abrirAjuda(item.help.title, item.help.description)
                  }
                >
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardValue}>{item.value}</Text>
                  <Text style={styles.cardValueSub}>{item.sub}</Text>
                </Pressable>
              </View>
            ))}
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
          <Text style={styles.boxCardsTitle}>Evolução do Números de Projetos Contratado{'\n'}<Text style={{fontStyle:'italic', fontSize: 12}}>Total por Ano</Text></Text>
          <View
            style={{
              backgroundColor: theme.colors.backHeaderFooter,
              borderRadius: 16,
              paddingTop: 10,
              height: 250,
              marginTop: 5,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BarChart
                data={data}
                width={data.labels.length * 60}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                fromZero={true}
                segments={4}
                yAxisInterval={150}
                chartConfig={{
                  backgroundGradientFrom: theme.colors.backHeaderFooter,
                  backgroundGradientTo: theme.colors.backHeaderFooter,
                  decimalPlaces: 0,
                  color: (opacity = 1) =>
                    `${theme.colors.verdePii}${Math.round(opacity * 255)
                      .toString(16)
                      .padStart(2, '0')}`,

                  labelColor: () => '#fff',
                  style: {
                    borderRadius: 15,
                  },
                }}
                showValuesOnTopOfBars={true}
                withInnerLines={false}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: -10,
                }}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>Evolução do Números de Projetos Contratado {'\n'}<Text style={{fontStyle:'italic', fontSize: 12}}>Total Acumulado</Text></Text>
          <View
            style={{
              backgroundColor: theme.colors.backHeaderFooter,
              borderRadius: 16,
              paddingTop: 10,
              height: 250,
              marginTop: 5,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BarChart
                data={dataAcumulado}
                width={dataAcumulado.labels.length * 60}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                fromZero={true}
                segments={4}
                yAxisInterval={150}
                chartConfig={{
                  backgroundGradientFrom: theme.colors.backHeaderFooter,
                  backgroundGradientTo: theme.colors.backHeaderFooter,
                  decimalPlaces: 0,
                  color: (opacity = 1) =>
                    `${theme.colors.verdePii}${Math.round(opacity * 255)
                      .toString(16)
                      .padStart(2, '0')}`,

                  labelColor: () => '#fff',
                  style: {
                    borderRadius: 15,
                  },
                }}
                showValuesOnTopOfBars={true}
                withInnerLines={false}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: -10,
                }}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.boxCards}>
          <Text style={styles.boxCardsTitle}>
            Projetos por Status de Execução{'\n'}
          </Text>
          <TabelaProjetosStatus dados={tabelaProjetosStatus} />

        </View>

        <OffCanvas
          visible={isOpen}
          onClose={() => setIsOpen(false)}
          position="down"
          heightPercentage={0.4}
        >
          {offCanvasContent}
        </OffCanvas>
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
    width: '100%',
    gap: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
    textAlign: 'center',
  },
  cardValueSub: {
    fontFamily: 'TitilliumWeb-Regular',
    color: '#a6dac2dd',
    fontSize: 12,
    textAlign: 'center',
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
