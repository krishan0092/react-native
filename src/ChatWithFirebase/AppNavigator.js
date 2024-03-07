import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Chats from './screens/Chats';
import Message from './screens/Message';
import Redux from '../Redux Toolkit/Redux';
import Cart from '../Redux Toolkit/Cart';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Redux"
          component={Redux}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{headerShown: true}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigator;
