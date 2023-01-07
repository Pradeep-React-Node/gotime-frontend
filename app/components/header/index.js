import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import icons from '../../assets/icons';
import images from '../../assets/images';

const Header = ({title, showBack}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
      }}>
      {showBack ? (
        <Pressable onPress={() => navigation.goBack()}>
          {icons.keyboardLeft()}
        </Pressable>
      ) : (
        <Pressable onPress={() => navigation.openDrawer()}>
          {icons.menu()}
        </Pressable>
      )}
      {/* <Image source={images.appLogo} style={{height: 50, width: 50}} /> */}
      {title ? (
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
          {title}
        </Text>
      ) : null}
      <Pressable>{icons.bell()}</Pressable>
    </View>
  );
};

export default Header;
