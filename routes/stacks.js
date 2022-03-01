import { View, Text } from 'react-native';
import React from 'react';
import Editprofile from '../screens/EditProfile';
import Faq from '../screens/Faq';
import Termsncondition from '../screens/Termsncondition';
import Profilephoto from '../components/Profilephoto';
import Viewall from '../screens/Viewall';
import Profile from '../screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appbar from '../components/Appbar';
import Status from '../components/Stories/Status';

const stacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Appbar"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Appbar" component={Appbar} />
        <Stack.Screen name="Viewall" component={Viewall} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Termsncondition" component={Termsncondition} />
        <Stack.Screen name="Profilephoto" component={Profilephoto} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stacks;
