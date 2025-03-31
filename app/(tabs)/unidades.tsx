import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import theme from '@/styles/theme';
import { BodyIndex } from '../../components/BodyIndex';
// import listaProjetos from '../../data/listagem_projetos.json';
import { useNavigation, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useEffect, useMemo, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataUnidade from '../../data/dataUnidade.json';
import listaProjetosOriginal from '../../data/listagem_projetos.json'

type Projeto = {
  codigo_projeto: string;
  unidade_embrapii: string;
  data_contrato: string | number; // pode ser Date ou timestamp
  status: string;
  uso_recurso_obrigatorio: string;
  titulo: string;
  _fonte_recurso: string;
  _sebrae: string;
  _valor_total: number;
  _perc_valor_embrapii: number;
  _perc_valor_empresa_sebrae: number;
  _perc_valor_unidade_embrapii: number;
};

export default function UnidadesScreen() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 50;
  const [visibleProjetos, setVisibleProjetos] = useState<Projeto[]>([]);
  const [listaProjetos, setListaProjetos] = useState<Projeto[]>([]);

  const filteredProjetos = useMemo(() => {
    return listaProjetos.filter((projeto) => {
      return Object.values(projeto).some((valor) =>
        String(valor).toLowerCase().includes(search.toLowerCase()),
      );
    });
  }, [search, listaProjetos]);

  useEffect(() => {
    const start = 0;
    const end = ITEMS_PER_PAGE * page;
    setVisibleProjetos(filteredProjetos.slice(start, end));
  }, [filteredProjetos, page]);

  useEffect(() => {
    const carregarProjetos = async () => {
      if (listaProjetos.length > 0) return;

      const cache = await AsyncStorage.getItem('listaProjetos');
      const dados = cache ? JSON.parse(cache) : listaProjetosOriginal;

      setListaProjetos((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(dados)) {
          return dados;
        }
        return prev;
      });
    };

    carregarProjetos();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 10,
      }}
    >
      {/* 🔍 Barra de Pesquisa Fixa */}
      <View style={styles.filterContainer}>
        <View style={styles.filterInputContainer}>
          <TextInput
            placeholder="Buscar"
            placeholderTextColor="#fff"
            style={styles.filterInput}
            value={search}
            onChangeText={(value) => setSearch(value)}
          />
        </View>
        <View style={styles.filterMore}>
          <MaterialIcons name="search" size={18} color="#fff" />
        </View>
      </View>

      {/* 📋 Lista Scrollável */}
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={dataUnidade}
        keyExtractor={(item) => item.unidade}
        renderItem={({ item: unidade }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/unidades/[unidade]/identificacao',
                params: { unidade: unidade.unidade },
              })
            }
          >
            <Text style={styles.cardTitulo}>
              {unidade.status === 'Ativo' ? '🟢  ' : '🔴  '}
              {unidade.unidade.toUpperCase()}
            </Text>

            <View style={styles.cardBox}>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Ano de credenciamento: </Text>
                <Text style={styles.cardText}>
                  {unidade.ano_credenciamento}
                </Text>
              </View>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Tipo de instituição: </Text>
                <Text style={styles.cardText}>{unidade.tipo_instituicao}</Text>
              </View>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Município-UF: </Text>
                <Text style={styles.cardText}>{unidade.uf_municipio}</Text>
              </View>
            </View>

            <View style={styles.cardBox}>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>PEO: </Text>
                <Text style={styles.cardText}>{unidade.peo}</Text>
              </View>
            </View>

            <View style={styles.cardBox}>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Nº de Projetos: </Text>
                <Text style={styles.cardText}>{unidade.n_projetos}</Text>
              </View>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Nº de Empresas: </Text>
                <Text style={styles.cardText}>{unidade.n_empresas}</Text>
              </View>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Satisfação das empresas: </Text>
                <Text style={styles.cardText}>{unidade.satisfacao_projetos}</Text>
              </View>
              <View style={styles.cardValor}>
                <Text style={styles.cardText}>Valor Total R$ (IPCA): </Text>
                <Text style={styles.cardText}>{unidade.valor_total_ipca}</Text>
              </View>
            </View>
          </Pressable>
        )}
        onEndReached={() => {
          if (visibleProjetos.length < filteredProjetos.length) {
            setPage((prev) => prev + 1);
          }
        }}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  areaScroll: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    gap: 20,
  },
  filterContainer: {
    height: 42,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterMore: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '12%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterInputContainer: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '85%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  filterInput: {
    color: '#fff',
    width: '100%',
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  card: {
    backgroundColor: theme.colors.backHeaderFooter,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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
  cardBox: {
    marginBottom: 7,
    borderBottomColor: '#ffffff61',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    gap: 1.5,
  },
  cardValor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
