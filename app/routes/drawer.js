import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from '../screen/auth/login/login';
import Register from '../screen/auth/register/index';
import screenNames from './screenNames';
import HeightWeight from '../screen/onboarding/heightWeight';
import OnboardingImage from '../screen/onboarding/images';
import Dashboard from '../screen/dashboard';
import SelectCategories from '../screen/selectCategories';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainRoutes from './mainStack';
import images from '../assets/images';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
const DrawerNav = createDrawerNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import icons from '../assets/icons';
const DrawerStack = ({}) => {
  const navigation = useNavigation();
  const [active, setActive] = useState('Dashboard');
  const DrawerContent = () => {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
          <Icon
            onPress={() => navigation.closeDrawer()}
            name="close"
            color="white"
            size={25}
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image source={images.avatar1} style={{height: 100, width: 100}} />
            <Text
              style={{
                color: 'gold',
                fontWeight: 'bold',
                marginTop: 10,
                fontSize: 20,
              }}>
              Welcome Raja
            </Text>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              active={active === 'Dashboard'}
              icon={({color, size}) => (
                <View
                  style={{
                    padding: 2,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  {icons.home()}
                </View>
              )}
              label="Dashboard"
              labelStyle={{color: 'white'}}
              onPress={() => {
                //navigation.navigate('Dashboard');
              }}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </View>
    );
  };
  return (
    <DrawerNav.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      lazy={true}
      drawerStyle={{
        backgroundColor: 'rgba(0, 98, 255, 0.5)',
        width: 200,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
      }}>
      <DrawerNav.Screen name="Dashboard" component={MainRoutes} />
    </DrawerNav.Navigator>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerStack;
