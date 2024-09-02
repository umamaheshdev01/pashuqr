import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , useWindowDimensions } from 'react-native';

export default function Login(props) {
  
  const {width,height} = useWindowDimensions()
  const w=0.04*width
  const h=0.02*height

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
