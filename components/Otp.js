import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Otp({SignIn}) {
 
    const navigation = useNavigation()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#98C606' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>

          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={styles.headerBack}>
              <FeatherIcon
                color="#1D2A32"
                name="chevron-left"
                size={30} />
            </View>
            </TouchableOpacity>

            <Text style={styles.title}>Enter the Code</Text>

            <Text style={styles.subtitle}>
              Please check your mobile with number 889XXXXX77 for OTP
            </Text>
          </View>

          <View style={styles.form}>
            
           


            <View style={styles.input}>
              <Text style={styles.inputLabel}>One Time Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={confirmPassword =>
                  setForm({ ...form, confirmPassword })
                }
                placeholder="******"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.confirmPassword} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                   SignIn()
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Verify</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  
                }}>
                <View style={styles.btn2}>
                  <Text style={styles.btnText2}>Resend OTP</Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Entered wrong number?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Go back</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
    marginTop : 25
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    // color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 20,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  btn2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnText2: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
});