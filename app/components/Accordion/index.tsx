// components/Accordion.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import theme from '@/app/styles/theme';
import { IconKeyboardArrowDown, IconKeyboardArrowUp } from '../Icons';

// Ativa animação de layout no Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  fechado?: boolean;
}

export default function Accordion({
  title,
  children,
  fechado = false,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(!fechado);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleExpand} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {expanded ? (
          <IconKeyboardArrowUp color={theme.colors.verdePii} />
        ) : (
          <IconKeyboardArrowDown color={theme.colors.verdePii} />
        )}
      </Pressable>
      {expanded && <View style={styles.body}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.backHeaderFooter,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: theme.colors.backHeaderFooter,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: theme.colors.verdePii,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 16,
  },
  body: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: theme.colors.backHeaderFooter,
    gap: 15,
  },
});
