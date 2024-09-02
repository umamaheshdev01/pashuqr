import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QRScanner from './Scanner'; 
import { StatusBar } from 'expo-status-bar';

export default function Qr() {
  return (
    <SafeAreaView style={styles.container}>
      <QRScanner />
      <StatusBar style='auto'></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
