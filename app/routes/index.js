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

const Stack = createStackNavigator();

const Routes = () => {
  if (false) {
    return <AuthRoutes />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Drawer'} component={Drawer} />
        <Stack.Screen name={screenNames.Dashboard} component={Dashboard} />

        <Stack.Screen
          name={screenNames.SelectCategories}
          component={SelectCategories}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
