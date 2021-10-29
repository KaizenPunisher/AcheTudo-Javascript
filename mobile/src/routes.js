import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import Inicio from './paginas/inicio';
import Empresa from './paginas/empresa';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Inicio" component={Inicio}/>
                <AppStack.Screen name="Empresa" component={Empresa}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}