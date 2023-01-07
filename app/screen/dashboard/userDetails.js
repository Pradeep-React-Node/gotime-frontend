import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import icons from '../../assets/icons';
import images from '../../assets/images';

const UserDetails = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(screenNames.Profile)}
      style={{
        margin: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        alignItems: 'center',
        paddingBottom: 20,
      }}>
      <Image source={images.avatar1} style={{height: 80, width: 80}} />
      <View style={{marginLeft: 20}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'gray',
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 10,
          }}>
          Johndoe@gmail.com
        </Text>
      </View>
    </Pressable>
  );
};

export default UserDetails;
