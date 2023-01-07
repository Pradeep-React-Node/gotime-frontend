import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../../assets/images';
import screenNames from '../../../routes/screenNames';
import SocialLogin from '../socialLogin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#244d7d']}
        style={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
        <Image source={images.appLogo} style={styles.logo} />
        <Text style={[styles.pageTitle, {fontSize: 22}]}>Hello...!</Text>
        <Text style={styles.pageTitle}>Create your Account</Text>

        <View style={styles.formContainer}>
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
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
              Login
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.ctaSupportText}>
              Or Login using Social Media
            </Text>
          </View>
          <SocialLogin />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Register)}>
          <Text
            style={{
              color: 'white',
              marginTop: 15,
            }}>
            Don't have an account?{' '}
            <Text style={{color: '#cbd94c'}}>Register Now</Text>
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
  forgotPassword: {textAlign: 'right', marginTop: 10},
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
