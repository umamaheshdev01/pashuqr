import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const icons = [
    {
        id: 1,
        image: require('../assets/1.png'),
        text: 'अपने पशु का ',
        text2 : 'QR डाउनलोड करें',
        onPress: () => console.log('QR Download Clicked'),
    },
    {
        id: 2,
        image: require('../assets/2.png'),
        text: 'अपने पशुधन की ',
        text2 : 'टीकाकरण रिपोर्ट',
        onPress: () => console.log('Vaccination Report Clicked'),
    },
    {
        id: 3,
        image: require('../assets/3.png'),
        text: 'पशुपालन के क्षेत्र ',
        text2 : 'में सरकारी योजनाएं',
        onPress: () => console.log('Government Schemes Clicked'),
    },
    {
        id: 4,
        image: require('../assets/4.png'),
        text: 'अपने पशुधन ',
        text2 : 'का बीमा करवाये',
        onPress: () => console.log('Insurance Clicked'),
    },
];

export default function List() {
    return (
        <View style={styles.container}>
            {icons.map(icon => (
                <TouchableOpacity key={icon.id} style={styles.iconContainer} onPress={icon.onPress}>
                    <View style={{backgroundColor : '#E8BE2E',padding :6,borderRadius :20}}>
                    <Image source={icon.image} style={styles.icon} />
                    </View>
                    <Text style={styles.iconText}>{icon.text}</Text>
                    <Text style={styles.iconText}>{icon.text2}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#98C606', // Optional: Set the background color similar to the image background
    },
    iconContainer: {
        alignItems: 'center',
        padding:0,
        // backgroundColor : '#E8BE2E'
    },
    icon: {
        width: 45,
        height: 45,
        marginBottom: 5,
        
    },
    iconText: {
        textAlign: 'center',
        fontSize: 10,
        color: '#000', // Change according to your design
    },
});
