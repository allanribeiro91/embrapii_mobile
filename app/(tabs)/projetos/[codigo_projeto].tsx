import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import rawProjetos from '../../data/all_projetos.json';
import theme from '../../styles/theme';
import { IconArrowLeft } from '@/app/components/Icons';
import { router } from 'expo-router';
import { BodyIndex } from '@/app/components/BodyIndex';
import Accordion from '@/app/components/Accordion';

export default function ProjetoDetalhes() {
  const { codigo_projeto } = useLocalSearchParams();

  const projetos = rawProjetos as any[];

  const projeto = projetos.find(
    (p) => String(p.codigo_projeto) === String(codigo_projeto)
  );

  if (!projeto) {
    return <Text>Projeto não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
    <Pressable onPress={() => router.back()}>
        <IconArrowLeft color={theme.colors.verdePii} />
      </Pressable>
      <Text style={styles.headerText}>Detalhes do Projeto</Text>
    </View>

      <BodyIndex>
              <View style={styles.conteudo}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                        {projeto.status === 'Em andamento' ? '🟢' : '🔴'} {projeto.codigo_projeto}
                    </Text>
                    <Text style={styles.cardTitulo}>{projeto.titulo.toUpperCase()}</Text>
                    <Text style={styles.cardText}>
                    Data do Contrato: {new Date(projeto.data_contrato).toLocaleDateString('pt-BR')}
                    </Text>
                    <Text style={styles.cardText}>Unidade: {projeto.unidade_embrapii}</Text>
                    <Text style={styles.cardText}>Fonte: {projeto._fonte_recurso}</Text>
                    <Text style={styles.cardText}>Sebrae: {projeto._sebrae}</Text>
                </View>
      
                <Accordion title="Status">
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Status</Text>
                    <Text style={styles.cardText}>{projeto.status}</Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Data do Contrato</Text>
                    <Text style={styles.cardText}>{new Date(projeto.data_contrato).toLocaleDateString('pt-BR')}</Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Data de Início</Text>
                    <Text style={styles.cardText}>{new Date(projeto.data_inicio).toLocaleDateString('pt-BR')}</Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Data de Término</Text>
                    <Text style={styles.cardText}>{new Date(projeto.data_termino).toLocaleDateString('pt-BR')}</Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Dias de Execução</Text>
                    <Text style={styles.cardText}>
                      {(() => {
                        const hoje = new Date();
                        const inicio = new Date(projeto.data_inicio);
                        const termino = new Date(projeto.data_termino);

                        const diasPassados = Math.floor((hoje.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
                        const diasTotais = Math.floor((termino.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));

                        const percentual = diasTotais > 0 ? (diasPassados / diasTotais) * 100 : 0;

                        return `${diasPassados} (${percentual.toFixed(1).replace('.', ',')}%) de ${diasTotais}`;
                      })()}
                    </Text>
                  </View>

                  {/* <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Expectativa</Text>
                    <Text style={styles.cardText}>{detalheProjeto.situacao}</Text>
                  </View> */}
                </Accordion>
      
                <Accordion title="Sobre o projeto">
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Título</Text>
                    <Text style={styles.accordionText}>{projeto.titulo}</Text>
                  </View>
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Título Público</Text>
                    <Text style={styles.accordionText}>
                      {projeto.titulo_publico}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Objetivo</Text>
                    <Text style={styles.accordionText}>
                      {projeto.objetivo}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Descrição Pública</Text>
                    <Text style={styles.accordionText}>
                      {projeto.descricao_publica}
                    </Text>
                  </View>
                </Accordion>
      
                <Accordion title="Classificação do Projeto">
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>TRL Inicial/Final</Text>
                    <Text style={styles.accordionText}>
                      {projeto.trl_inicial}
                      {'\n'}
                      {projeto.trl_final}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Tecnologia Habilitadora</Text>
                    <Text style={styles.accordionText}>
                      {projeto.tecnologia_habilitadora}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.accordionTextSubtitulo}>Área de Aplicação</Text>
                    <Text style={styles.accordionText}>
                      {projeto.area_aplicacao}
                    </Text>
                  </View>
                </Accordion>
      
                <Accordion title="Valores R$">
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Embrapii</Text>
                    <Text style={styles.cardText}>
                      {Number(projeto.valor_embrapii).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ({(projeto._perc_valor_embrapii * 100).toFixed(2).replace('.', ',')}%)
                    </Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Empresa</Text>
                    <Text style={styles.cardText}>
                      {Number(projeto.valor_empresa).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ({(projeto._perc_valor_empresa * 100).toFixed(2).replace('.', ',')}%)
                    </Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Sebrae</Text>
                    <Text style={styles.cardText}>
                      {Number(projeto.valor_sebrae).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ({(projeto._perc_valor_sebrae * 100).toFixed(2).replace('.', ',')}%)
                    </Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Unidade</Text>
                    <Text style={styles.cardText}>
                      {Number(projeto.valor_unidade_embrapii).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} ({(projeto._perc_valor_unidade_embrapii * 100).toFixed(2).replace('.', ',')}%)
                    </Text>
                  </View>
                  <View style={styles.AccordionStatus}>
                    <Text style={styles.cardText}>Valor Total</Text>
                    <Text style={styles.cardText}>
                      {Number(projeto._valor_total).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Text>
                  </View>

                </Accordion>
      
                {/* <Accordion title="Empresas">
                  <View>
                    <Text style={styles.accordionTextSubtitulo}></Text>
                  </View>
                </Accordion>
      
                <Accordion title="Macroentregas">
                  <View>
                    <Text style={styles.accordionTextSubtitulo}></Text>
                  </View>
                </Accordion> */}
              </View>
            </BodyIndex>
    </View>
  );
}


const styles = StyleSheet.create({
  AccordionStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#dddddd32',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  conteudo: {
    marginBottom: 5,
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bodyText: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 16,
    color: theme.colors.white,
  },
  /////////////////////////////
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
  },
  card: {
    backgroundColor: theme.colors.verdeFundoEscuro,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitulo: {
    // fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
    fontWeight: 'bold',
  },
  cardText: {
    color: theme.colors.white,
    fontSize: 14,
  },
  cardStatus: {
    textAlign: 'right',
  },

  accordionText: {
    color: theme.colors.white,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
  },
  accordionTextSubtitulo: {
    color: theme.colors.verdePiiClaro,
  },
  footerCustom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // Ajuste conforme seu design
    backgroundColor: theme.colors.backHeaderFooter,
    alignItems: 'center',
    justifyContent: 'center',
    // Se quiser sombrear acima do tab bar
    // elevation: 4, // Android
    // shadowColor: '#000', // iOS
    // shadowOffset: { width: 0, height: -2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
  },
  footerText: {
    color: theme.colors.white,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
