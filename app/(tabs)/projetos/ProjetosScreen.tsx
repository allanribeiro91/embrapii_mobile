import { View, Text, StyleSheet, Pressable } from 'react-native';
import theme from '../../styles/theme';
import { BodyIndex } from '../../components/BodyIndex';
import listaProjetos from '../../data/listagem_projetos.json';
import { useNavigation, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

export default function ProjetosScreen() {
  const navigation = useNavigation();


  const [search, setSearch] = useState("");
  const [filteredProjetos, setFilteredProjetos] = useState(listaProjetos);

  useEffect(() => {
    const newFilteredProjetos = listaProjetos.filter((projeto) => {
      return Object.values(projeto).some((valor) => 
        String(valor).toLowerCase().includes(search.toLowerCase())
      );
    });
  
    setFilteredProjetos(newFilteredProjetos);
  }, [search]);


  return (
    <BodyIndex>

          <View style={styles.filterContainer}>
            
            <View style={styles.filterInputContainer}>
              <TextInput
                    placeholder=''
                    placeholderTextColor={'#fff'}
                    style={styles.filterInput}
                    value={search}
                    onChangeText={(value) => setSearch(value)} 
              />
 
            </View>
            <View style={styles.filterMore}>
              <MaterialIcons name='search' size={18} color={'#fff'} />
            </View>
              
          </View>


      {filteredProjetos.slice(0, 50).map(projeto => (
        <Pressable
          style={styles.card}
          // onPress={() => navigation.navigate('ProjetoFicha' as never)}
          onPress={() => router.push(`/projetos/${projeto.codigo_projeto}`)}
          key={projeto.codigo_projeto}
        >
          <Text style={styles.cardText}>
            {projeto.status === 'Em andamento' ? '🟢' : '🔴'} {projeto.codigo_projeto}
          </Text>
          <Text style={styles.cardTitulo}>{projeto.titulo.toUpperCase()}</Text>
          <Text style={styles.cardText}>Valor total (nominal): R$ {' '}
            {Number(projeto._valor_total).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
          </Text>
          <Text style={styles.cardText}>Participação por parceiro: {' '}
            {(projeto._perc_valor_embrapii * 100).toFixed(0).replace('.', ',')}-
            {(projeto._perc_valor_empresa_sebrae * 100).toFixed(0).replace('.', ',')}-
            {(projeto._perc_valor_unidade_embrapii * 100).toFixed(0).replace('.', ',')}
          </Text>
          <Text style={styles.cardText}>
            Data do Contrato:{' '} {new Date(projeto.data_contrato).toLocaleDateString('pt-BR')}
          </Text>
          <Text style={styles.cardText}>Unidade:{' '} {projeto.unidade_embrapii}</Text>
          <Text style={styles.cardText}>Fonte:{' '} {projeto._fonte_recurso}</Text>
          <Text style={styles.cardText}>Sebrae:{' '} {projeto._sebrae}</Text>
        </Pressable>
      ))}

      
    </BodyIndex>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    height: 42,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterMore: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '12%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterInputContainer: {
    backgroundColor: theme.colors.backHeaderFooter,
    width: '85%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
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
