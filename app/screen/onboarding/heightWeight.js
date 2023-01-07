import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
import screenNames from '../../routes/screenNames';
import colors from '../../assets/colors';

const HeightWeight = ({navigation}) => {
  const [contactNumber, setContactNumber] = useState('');

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#244d7d']}
        style={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
        <Image source={images.appLogo} style={styles.logo} />
        <Text style={styles.pageTitle}>Create your Account</Text>

        <View style={styles.formContainer}>
          <Text style={styles.inputHeading}>Contact Number</Text>
          <TextInput
            placeholder="Enter Contact Number"
            value={contactNumber}
            onChangeText={setContactNumber}
            style={styles.textInput}
            keyboardType="number-pad"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '45%'}}>
              <Text style={styles.inputHeading}>Age</Text>
              <TextInput
                placeholder="Age"
                value={contactNumber}
                onChangeText={setContactNumber}
                style={styles.textInput}
                keyboardType="number-pad"
              />
            </View>
            <View style={{width: '45%'}}>
              <Text style={styles.inputHeading}>Contact Number</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: colors.borderGrey,
                }}>
                <TextInput
                  placeholder="Weight"
                  value={contactNumber}
                  onChangeText={setContactNumber}
                  style={[styles.textInput, {borderBottomWidth: 0}]}
                  keyboardType="number-pad"
                />
                <Text>KG.</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '45%'}}>
              <Text style={styles.inputHeading}>Age</Text>
              <TextInput
                placeholder="Age"
                value={contactNumber}
                onChangeText={setContactNumber}
                style={styles.textInput}
                keyboardType="number-pad"
              />
            </View>
            <View style={{width: '45%'}}>
              <Text style={styles.inputHeading}>Contact Number</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: colors.borderGrey,
                }}>
                <TextInput
                  placeholder="Weight"
                  value={contactNumber}
                  onChangeText={setContactNumber}
                  style={[styles.textInput, {borderBottomWidth: 0}]}
                  keyboardType="number-pad"
                />
                <Text>KG.</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.mainCta}
            onPress={() => {
              navigation.navigate(screenNames.OnboardingImage);
            }}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                padding: 10,
                color: 'white',
              }}>
              Next Step
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default HeightWeight;

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
