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
import AuthRoutes from './auth';
import images from '../assets/images';
import Profile from '../screen/profile';
import CreateEvent from '../screen/auth/createEvent.js';
import CreateChallenge from '../screen/auth/createChallenge.js';
import SelectAddress from '../screen/selectAddress';

const Stack = createStackNavigator();

const MainRoutes = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.Dashboard} component={Dashboard} />

        <Stack.Screen
          name={screenNames.SelectCategories}
          component={SelectCategories}
        />
        <Stack.Screen name={screenNames.Profile} component={Profile} />
        <Stack.Screen name={screenNames.CreateEvent} component={CreateEvent} />
        <Stack.Screen name={screenNames.CreateChallenge} component={CreateChallenge} />
        <Stack.Screen
          name={screenNames.SelectAddress}
          component={SelectAddress}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainRoutes;
