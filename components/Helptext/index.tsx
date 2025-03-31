// components/Header/index.tsx
import theme from '@/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HelpText({ title, description }: { title: string, description: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
  <View style={styles.headerIconBox}>
    <MaterialIcons name="help-outline" color={theme.colors.verdePiiClaro} size={35} />
  </View>
  <View style={styles.headerTextBox}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
</View>


      <View>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },
  headerIconBox: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerTextBox: {
    width: '85%',
  },
  headerText: {
    color: theme.colors.verdePiiClaro,
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'justify',
    fontWeight: 'bold'
  },
  
  descriptionText: {
    color: 'white',
    textAlign: 'justify',
    lineHeight: 20,
    fontSize: 16
  },
});
