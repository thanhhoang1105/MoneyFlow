import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './src/i18n';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const DemoApp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{t('hello')}</Text>
          <Text style={styles.subtitle}>{t('total_balance')}</Text>
          <Text style={styles.balance}>{t('money', { amount: '22.961.900' })}</Text>

          <View style={styles.row}>
            <Button title="English" onPress={() => i18n.changeLanguage('en')} />
            <View style={{ width: 12 }} />
            <Button title="Tiếng Việt" onPress={() => i18n.changeLanguage('vi')} />
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DemoApp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6fb' },
  content: { padding: 24, alignItems: 'flex-start' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#64748b', marginBottom: 6 },
  balance: { fontSize: 28, fontWeight: '800', marginBottom: 18 },
  row: { flexDirection: 'row', marginTop: 12 },
});
