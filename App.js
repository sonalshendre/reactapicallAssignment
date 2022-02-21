/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Apicall from './apicall';
import Detailpage from './detailpage';
import Contactfrom from './contactfrom';
import Paytmui from './paytmui';
import SearchProduct from './searchProduct';
import Listdata from './listdata';
const Stack = createNativeStackNavigator();
const App=   () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchProduct' screenOptions={{headerShown: false,}}>
      
        <Stack.Screen name="Apicall" component={Apicall} />
        <Stack.Screen name="Detailpage" component={Detailpage}/>
        <Stack.Screen name="Contactfrom" component={Contactfrom}/>
        <Stack.Screen name="Paytmui" component={Paytmui}/>

        <Stack.Screen name="SearchProduct" component={SearchProduct}/>
        <Stack.Screen name="Listdata" component={Listdata}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
