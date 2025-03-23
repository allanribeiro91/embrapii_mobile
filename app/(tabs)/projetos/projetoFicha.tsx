// tabs/projetos/projetoFicha.tsx
import React, { useCallback, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import theme from '../../styles/theme';
import { IconArrowLeft } from '@/app/components/Icons';
import { useFocusEffect, useNavigation } from 'expo-router';
import { dataProjeto, detalheProjeto } from '@/app/data/dataProjeto';
import { BodyIndex } from '@/app/components/BodyIndex';
import Accordion from '@/app/components/Accordion';
import { CommonActions } from '@react-navigation/native';

export default function ProjetoFicha() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <IconArrowLeft color={theme.colors.verdePii} />
        </Pressable>
        <Text style={styles.headerText}>Detalhes do Projeto</Text>
      </View>

      <BodyIndex>
        <View style={styles.conteudo}>
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {dataProjeto.status === 'Ativo' ? '🟢' : '🔴'} {dataProjeto.id}
            </Text>
            <Text style={styles.cardTitulo}>{dataProjeto.titulo}</Text>
            <Text style={styles.cardText}>Unidade: {dataProjeto.unidade}</Text>
            <Text style={styles.cardText}>Fonte: {dataProjeto.programa}</Text>
          </View>

          <Accordion title="Status">
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Status</Text>
              <Text style={styles.cardText}>{detalheProjeto.status}</Text>
            </View>
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Data do Contrato</Text>
              <Text style={styles.cardText}>{detalheProjeto.dataContrato}</Text>
            </View>
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Data de Início</Text>
              <Text style={styles.cardText}>{detalheProjeto.dataInicio}</Text>
            </View>
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Data de Término</Text>
              <Text style={styles.cardText}>{detalheProjeto.dataTermino}</Text>
            </View>
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Dias de Execução</Text>
              <Text style={styles.cardText}>{detalheProjeto.diasExecucao}</Text>
            </View>
            <View style={styles.AccordionStatus}>
              <Text style={styles.cardText}>Expectativa</Text>
              <Text style={styles.cardText}>{detalheProjeto.situacao}</Text>
            </View>
          </Accordion>

          <Accordion title="Sobre o projeto">
            <View>
              <Text style={styles.accordionTextSubtitulo}>Título</Text>
              <Text style={styles.accordionText}>{detalheProjeto.titulo}</Text>
            </View>
            <View>
              <Text style={styles.accordionTextSubtitulo}>Título Público</Text>
              <Text style={styles.accordionText}>
                {detalheProjeto.tituloPublico}
              </Text>
            </View>
            <View>
              <Text style={styles.accordionTextSubtitulo}>Objetivo</Text>
              <Text style={styles.accordionText}>
                {detalheProjeto.objetivo}
              </Text>
            </View>
            <View>
              <Text style={styles.accordionTextSubtitulo}>Descrição</Text>
              <Text style={styles.accordionText}>
                {detalheProjeto.descricao}
              </Text>
            </View>
          </Accordion>

          <Accordion title="Classificação do Projeto">
            <View>
              <Text style={styles.accordionTextSubtitulo}></Text>
            </View>
          </Accordion>

          <Accordion title="Valores R$">
            <View>
              <Text style={styles.accordionTextSubtitulo}></Text>
            </View>
          </Accordion>

          <Accordion title="Empresas">
            <View>
              <Text style={styles.accordionTextSubtitulo}></Text>
            </View>
          </Accordion>

          <Accordion title="Macroentregas">
            <View>
              <Text style={styles.accordionTextSubtitulo}></Text>
            </View>
          </Accordion>
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
