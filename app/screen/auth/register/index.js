import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../../assets/images';
import screenNames from '../../../routes/screenNames';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#244d7d']}
        style={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
        <Image source={images.appLogo} style={styles.logo} />
        <Text style={styles.pageTitle}>Create your Account</Text>

        <View style={styles.formContainer}>
          <Text style={styles.inputHeading}>User Name*</Text>
          <TextInput
            placeholder="Enter Username"
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
          />
          <Text style={styles.inputHeading}>Email*</Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            keyboardType="email-address"
          />
          <Text style={styles.inputHeading}>Password*</Text>
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.mainCta}
            onPress={() => {
              navigation.navigate(screenNames.HeightWeight);
            }}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                padding: 10,
                color: 'white',
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.ctaSupportText}>
              Or Register using Social Media
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Icon name="facebook-square" size={30} style={{marginRight: 10}} />
            <Icon name="facebook" size={30} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Register)}>
          <Text
            style={{
              color: 'white',
              marginTop: 15,
            }}>
            Already have an account?{' '}
            <Text style={{color: '#cbd94c'}}>Login</Text>
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  pageTitle: {fontSize: 18, color: 'white', fontWeight: 'bold', marginTop: 20},
  formContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    marginTop: 20,
    padding: 20,
  },
  inputHeading: {color: '#a3a3a3', marginTop: 20, fontWeight: 'bold'},
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#878787',
    marginTop: 0,
    color: 'black',
    fontWeight: 'bold',
  },
  mainCta: {
    backgroundColor: '#fd694f',
    borderRadius: 30,
    width: '100%',
    marginBottom: 10,
    marginTop: 20,
  },
  ctaSupportText: {color: '#383838', textAlign: 'center'},
});
