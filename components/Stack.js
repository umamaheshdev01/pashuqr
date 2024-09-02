import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProgressCard from './Card';

const ProgressCardList = () => {
  const cards = [
    { id: '1', name: 'गाय 1', number: '12345678910' },
    { id: '2', name: 'गाय 2', number: '23456789101' },
    { id: '3', name: 'गाय 3', number: '34567891012' },

  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProgressCard name={item.name} number={item.number} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#E8BE2E',
      padding: 5,
      borderRadius: 20,
      alignItems: 'center',
      borderWidth: 4,
      borderColor: '#6A4A00',
      marginVertical: 17,
      width: 180,  // Set a fixed width for the card
      height: 180, // Set a fixed height for the card
    },
    // ... other styles remain the same
  });
  
  

export default ProgressCardList;
