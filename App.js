import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from './components/Login';
import Opening from './components/Opening'
import Login from './components/Login';
import Signup from './components/Signup';
import Otp from './components/Otp';
import HomeScreen from './components/Home';
import Qr from './components/Qr';



const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home"  options={{ headerShown: false }}>
              {() => <HomeScreen onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen name="Qr" options={{ headerShown: false }} component={Qr} />
          </>
        ) : (
          <>
            <Stack.Screen name="Opening"  options={{ headerShown: false }} component={Opening}></Stack.Screen>
            <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen  options={{ headerShown: false }} name="Signup" component={Signup} />
            
            <Stack.Screen name="Otp"  options={{ headerShown: false }}>
              {() => <Otp SignIn={handleLogin} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SignupScreen() {
  return (
    <View>
      <Text>Signup Screen</Text>
    </View>
  );
}



function CowDetailsScreen() {
  return (
    <View>
      <Text>Cow Details Screen</Text>
    </View>
  );
}
