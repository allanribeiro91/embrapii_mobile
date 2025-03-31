import { View, Text, StyleSheet } from 'react-native';
import theme from '@/styles/theme'; // ajuste conforme seu projeto

export default function TabelaProjetosStatus({ dados }: { dados: { status: string, total: number, percentual: string }[] }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da Tabela */}
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText, { flex: 2 }]}>Status</Text>
        <Text style={[styles.cellValue, styles.headerText]}>Total</Text>
        <Text style={[styles.cellValue, styles.headerText]}>%</Text>
      </View>

      {/* Dados */}
      {dados.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.cell, { flex: 2 }]}>{item.status}</Text>
          <Text style={styles.cellValue}>{item.total.toLocaleString('pt-BR')}</Text>
          <Text style={styles.cellValue}>{item.percentual}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: theme.colors.backHeaderFooter,
    padding: 10,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffff33',
  },
  cell: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    textAlign: 'left',
  },
  cellValue: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff77',
  },
  headerText: {
    color: theme.colors.verdePiiClaro,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
