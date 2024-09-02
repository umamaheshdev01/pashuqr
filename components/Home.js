import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import List from './List';
import { useNavigation } from '@react-navigation/native';






export default function HomeScreen() {




  const nav = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#98C606' }}>
        <StatusBar style='auto'></StatusBar>
      <View style={styles.container}>
        <View>
          <View style={styles.actionWrapper}>
            
            <View style={{margin : 'auto',marginLeft : 10}}>
       
            <Text style={{fontSize:22}} >पशुसेवक </Text>
            <Text style={{fontSize:14}}>आपका स्वागत है</Text>

            </View>
            

            <TouchableOpacity
              onPress={() => {
                nav.navigate('Qr')
              }}>
              <View style={styles.action}>
              <MaterialIcons name="qr-code-scanner" size={24} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon
                  color="black"
                  name="user"
                  size={22} />
              </View>
            </TouchableOpacity>
          </View>

          {/* <Text style={styles.title}>Online Orders</Text> */}

          <View style={{marginBottom:5}}>

          

           
            

             <List></List>



          </View>

          <View style={styles.search}>
            <View style={styles.searchInput}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="फ़ोन नंबर का उपयोग करके जानवर रिपोर्ट खोजें"
                  placeholderTextColor="#9eadba"
                  style={styles.input} />

                <View style={styles.inputIcon}>
                  <FeatherIcon
                    color="#9eadba"
                    name="search"
                    size={16} />
                </View>
              </View>
            </View>

            {/* <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
            {/* Replace with your content */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop : 15
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    marginTop: 24,
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#E8BE2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#f0f6fb',
    paddingLeft: 10,
    paddingRight:24,
    borderRadius: 12,
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    // borderColor: '#e5e7eb',
    borderColor : 'gray',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});