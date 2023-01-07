import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import icons from '../../assets/icons';

const SocialLogin = () => {
  const responseFacebook = token => {
    console.log('responseFacebook', token);
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        console.log('responseFacebook-json', json);
        let socialId = json.id;
        let email = json.email;
        let name = json.name.split(' ');
        console.log('name===', email);
        let firstName = name[0];
        let lastName = name.pop();
        console.log('firstName===', firstName);
        console.log('lastName===', lastName);
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
        // reject('ERROR GETTING DATA FROM FACEBOOK');
      });
  };

  const FBLogin = () => {
    console.log('FBLogin click ');
    return LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        AccessToken.getCurrentAccessToken().then(data => {
          console.log('loginonLoginFinished data.', data.accessToken);
          responseFacebook(data.accessToken.toString());
          // console.log('loginonLoginFinished data.', data.FBAccessToken.accessToken);
          console.log('loginonLoginFinished result...', result);

          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            console.log(
              'Login success with permissions>>>>>: ' +
                result.grantedPermissions.toString(),
            );
          }
        });
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 0}}>
      <TouchableOpacity
        onPress={FBLogin}
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 20,
          backgroundColor: '#4067b3',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row',
        }}>
        {icons.facebook()}
        <Text style={{marginLeft: 8, color: 'white', fontSize: 18}}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 20,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 20,
          backgroundColor: '#c50000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row',
        }}>
        {icons.google()}
        <Text style={{marginLeft: 8, color: 'white', fontSize: 18}}>
          Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
