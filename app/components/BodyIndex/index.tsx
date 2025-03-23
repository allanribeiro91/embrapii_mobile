import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import theme from '@/app/styles/theme';

interface BodyIndexProps {
  children?: React.ReactNode;
}

export const BodyIndex: React.FC<BodyIndexProps> = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    gap: 20
  },
});
