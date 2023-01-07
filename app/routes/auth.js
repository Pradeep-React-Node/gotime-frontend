import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from '../screen/auth/login/login';
import Register from '../screen/auth/register/index';
import screenNames from './screenNames';
import HeightWeight from '../screen/onboarding/heightWeight';
import OnboardingImage from '../screen/onboarding/images';
import Dashboard from '../screen/dashboard';
import SelectCategories from '../screen/selectCategories';
import Drawer from './drawer';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.Login} component={Login} />
        <Stack.Screen name={screenNames.Register} component={Register} />
        <Stack.Screen
          name={screenNames.HeightWeight}
          component={HeightWeight}
        />
        <Stack.Screen
          name={screenNames.OnboardingImage}
          component={OnboardingImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
