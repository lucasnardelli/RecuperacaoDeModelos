import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ModelsProvider } from './contexts/ModelsContext';

import Navigate from './navigate'
import Auth from './views/Auth'
import Modelo from './views/Modelo';

const Stack = createStackNavigator();


export default function () {
    return(
        <ModelsProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Auth' 
                    screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Auth' component={Auth}/>
                    <Stack.Screen name='Navigate' component={Navigate} />
                    <Stack.Screen name='Modelo' component={Modelo} />
                </Stack.Navigator>
            </NavigationContainer>
        </ModelsProvider>
        
    ) 
}
