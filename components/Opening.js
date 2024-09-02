import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Opening() {

    const navigation = useNavigation()
  return (

    <SafeAreaView style={styles.container}>
        <StatusBar style='auto'></StatusBar>
      <View style={styles.hero}>
        <Image
          source={require('../assets/pasu.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Plan your day{'\n'}with{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>MyApp</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Aliqua ullamco incididunt elit labore consequat ipsum sunt
            exercitation aliqua duis nulla et qui fugiat
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 40,
    backgroundColor : '#98C606'
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    // color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#E8BE2E',
    margin: 12,
    borderRadius: 16,
    padding: 13,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    // backgroundColor: '#fff2dd',
    backgroundColor : '#E8BE2E',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});