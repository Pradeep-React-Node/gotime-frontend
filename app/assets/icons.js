import React from 'react';
import Entypo from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const icons = {
  check: props => <Entypo name="check" color="white" size={30} {...props} />,

  caretDown: props => (
    <FontAwesome name="caret-down" color="black" size={15} {...props} />
  ),

  location: props => (
    <Ionicons name="md-location-sharp" color="black" size={15} {...props} />
  ),

  keyboardRight: props => (
    <MaterialIcons
      name="keyboard-arrow-left"
      color="white"
      size={30}
      {...props}
    />
  ),
  keyboardLeft: props => (
    <MaterialIcons
      name="keyboard-arrow-left"
      color="white"
      size={40}
      {...props}
    />
  ),

  menu: props => <Feather name="menu" color="white" size={30} {...props} />,
  bell: props => (
    <Ionicons
      name="ios-notifications-outline"
      color="white"
      size={30}
      {...props}
    />
  ),
  home: props => <AntDesign name="home" color="blue" size={20} {...props} />,
  google: props => (
    <AntDesign size={23} color="white" name="google" {...props} />
  ),
  facebook: props => (
    <EvilIcons size={23} color="white" name="sc-facebook" {...props} />
  ),
};
export default icons;
