import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgressCard = ({name,number}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>पशुसवेक प्रगति कार्ड</Text>
      
      <View style={styles.qrCodeContainer}>
        <View style={styles.qrCodeBox}>
          <Image
            source={require('../assets/umaqr.png')} 
            style={styles.qrCodeImage}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/brocow.png')}
            style={styles.mainImage}
          />
        </View>
      </View>
      
      <Text style={styles.subTitle}>पशुधन का नाम</Text>
      
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: '#E8BE2E', // Adjust to your preferred color
//     padding: 5,
//     borderRadius: 20,
//     alignItems: 'center',
//     borderWidth: 4,
//     borderColor: '#6A4A00',
//     marginVertical : 17,
//   },
//   title: {
//     fontSize: 24,
//     color: '#4A3A00',
//     fontWeight: 'bold',
//     marginBottom: 0,
//   },
//   qrCodeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     margin :5
//   },
//   qrCodeBox: {
//     backgroundColor: '#E8BE2E', // Adjust to your preferred color
//     padding: 10,
//     marginRight: 20, // Added margin to the right to create space between the QR code and the main image
//   },
//   qrCodeImage: {
//     width: 80,
//     height: 80,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   mainImage: {
//     width: 140,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   subTitle: {
//     fontSize: 18,
//     color: '#4A3A00',
//     marginBottom: 5,
//   },
//   number: {
//     fontSize: 24,
//     color: '#6A4A00',
//     fontWeight: 'bold',
//   },
// });


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#E8BE2E',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,  
    borderColor: '#6A4A00',
    marginVertical: 10,
    width: 265,  
    height: 190, 
    marginRight : 20
  },
  title: {
    fontSize: 18,  
    color: '#4A3A00',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  qrCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: 5,
  },
  qrCodeBox: {
    backgroundColor: '#E8BE2E',
    padding: 5,
    marginRight: 10,
  },
  qrCodeImage: {
    width: 60,  // Reduced QR code size
    height: 60, // Reduced QR code size
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  mainImage: {
    width: 100,  // Reduced image size
    height: 80,  // Reduced image size
    resizeMode: 'contain',
  },
  subTitle: {
    fontSize: 14,  // Reduced font size
    color: '#4A3A00',
    marginBottom: 3,
  },
  number: {
    fontSize: 18,  // Reduced font size
    color: '#6A4A00',
    fontWeight: 'bold',
  },
});

export default ProgressCard;
