import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import AuthStack from './src/Navigations/AuthStack';
import MainStack from './src/Navigations/MainStack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
        <Stack.Navigator>
          {
            true ? AuthStack(Stack)
            : MainStack(Stack)
          }
        </Stack.Navigator>
    </NavigationContainer>
    <FlashMessage 
      position="top"
    />
    </View>
  );
}

