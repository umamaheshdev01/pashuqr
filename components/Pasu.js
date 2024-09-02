import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

export default function AddPashudhan() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    category: '',
    name: '',
    earTagNumber: '',
    breed: '',
    age: '',
    lactationNumber: '',
    milkYield: '',
    weight: '',
    height: '',
    numberOfCalves: '',
  });

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const pickImage = async () => {


    let result = await DocumentPicker.getDocumentAsync({
      type: 'image/*',
    });

    console.log(result)

    setImage(result.assets[0].uri)
    console.log(image)
  };

  const pickVideo = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'video/*',
    });

    setVideo(result.assets[0].uri)
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#98C606' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Add your Pashudhan!</Text>
            <Text style={styles.subtitle}>
              Fill in the fields below to get started with adding your Pashudhan details.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>PashuDhan Category</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={form.category}
                  onValueChange={(itemValue) =>
                    setForm({ ...form, category: itemValue })
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Select the Category" value="" />
                  <Picker.Item label="Cow" value="Cow" />
                  <Picker.Item label="Buffalo" value="Buffalo" />
                  <Picker.Item label="Goat" value="Goat" />
                </Picker>
              </View>
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>PashuDhan Name</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(name) => setForm({ ...form, name })}
                placeholder="Enter Name"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.name}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>PashuDhan Ear Tag Number/UID</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(earTagNumber) => setForm({ ...form, earTagNumber })}
                placeholder="Enter Ear Tag Number/UID"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.earTagNumber}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Breed</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(breed) => setForm({ ...form, breed })}
                placeholder="Enter Breed"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.breed}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Age</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(age) => setForm({ ...form, age })}
                placeholder="Enter Age"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.age}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Lactation Number</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(lactationNumber) => setForm({ ...form, lactationNumber })}
                placeholder="Enter Lactation Number"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lactationNumber}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Milk Yield</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(milkYield) => setForm({ ...form, milkYield })}
                placeholder="Enter Milk Yield"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.milkYield}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>PashuDhan Weight</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(weight) => setForm({ ...form, weight })}
                placeholder="Enter Weight"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.weight}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>PashuDhan Height</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(height) => setForm({ ...form, height })}
                placeholder="Enter Height"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.height}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>No. of Calves</Text>
              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(numberOfCalves) => setForm({ ...form, numberOfCalves })}
                placeholder="Enter Number of Calves"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.numberOfCalves}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Image</Text>
              <TouchableOpacity onPress={pickImage} style={styles.pickerButton}>
                <Text style={styles.pickerButtonText}>
                  {image ? 'Image Selected' : 'Select Image'}
                </Text>
              </TouchableOpacity>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={styles.previewImage}
                />
              )}
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Video</Text>
              <TouchableOpacity onPress={pickVideo} style={styles.pickerButton}>
                <Text style={styles.pickerButtonText}>
                  {video ? 'Video Selected' : 'Select Video'}
                </Text>
              </TouchableOpacity>
              {video && (
                <Text style={styles.previewText}>
                  {/* Video URI: {video} */}
                </Text>
              )}
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SubmitPashudhan');
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Submit Pashudhan Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Go back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  picker: {
    height: 50,
    color: '#222',
  },
  pickerButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
    padding: 15,
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 15,
    color: '#222',
  },
  previewImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  previewText: {
    marginTop: 10,
    fontSize: 15,
    color: '#222',
  },
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
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
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
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
