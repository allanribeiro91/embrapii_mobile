import theme from '@/app/styles/theme';
import { tabs } from '@/app/tabs';
import { StyleSheet, Text, View } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <View style={styles.footerTab}>
          {tab.icon}
          <Text style={styles.footerActive}>{tab.tab}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.backHeaderFooter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerTab: {
    alignItems: 'center',
    gap: 5,
  },
  footerActive: {
    color: theme.colors.verdePii,
  },
});
