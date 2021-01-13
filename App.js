import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Scan, Signup, Home} from './src/screens';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constants';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar backgroundColor={COLORS.lime} />
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
