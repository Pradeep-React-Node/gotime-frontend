import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';
import images from '../../assets/images';
import screenNames from '../../routes/screenNames';
import selectCategory from './utils';

const categoriesData = [
  {id: 1, image: images.football},
  {id: 2, image: images.football},
  {id: 3, image: images.football},
  {id: 4, image: images.football},
  {id: 5, image: images.football},
  {id: 6, image: images.football},
  {id: 7, image: images.football},
  {id: 8, image: images.football},

  {id: 9, image: images.football},
  {id: 10, image: images.football},
];

const avatars = [
  {
    image: images.avatar1,
  },
  {
    image: images.avatar2,
  },
  {
    image: images.avatar3,
  },
  {
    image: images.avatar1,
  },
];
const OnboardingImage = ({navigation}) => {
  const [profilePic, setProfilePic] = useState({});
  const [categories, setCategories] = useState([]);

  const renderCategory = ({item, index: itemIndex}) => {
    const index = categories.indexOf(item);
    const isSelected = index === -1 ? false : true;
    return (
      <Pressable
        onPress={() => selectCategory(item, categories, setCategories)}>
        <ImageBackground
          source={item.image}
          style={[
            {
              height: 100,
              width: 100,
              borderLeftWidth: itemIndex !== 0 ? 1 : 0,
              borderBottomWidth: itemIndex < categoriesData.length / 2 ? 1 : 0,
              borderColor: 'lightgrey',
            },
          ]}>
          {isSelected ? (
            <View
              style={{
                flexGrow: 1,
                backgroundColor: 'rgba(255, 153, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 1,
                //borderRadius: 1000,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              {icons.check()}
            </View>
          ) : null}
        </ImageBackground>
      </Pressable>
    );
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#244d7d']}
        style={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
        <Image source={images.appLogo} style={styles.logo} />

        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
            alignSelf: 'flex-start',
            marginLeft: 20,
            marginTop: 30,
          }}>
          Choose your profile pic
        </Text>

        <FlatList
          data={avatars}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginLeft: 20, paddingRight: 10}}
          renderItem={({item}) => {
            const isSelected = item === profilePic;
            return (
              <Pressable onPress={() => setProfilePic(item)}>
                <ImageBackground
                  source={item.image}
                  style={{
                    height: 100,
                    width: 100,
                    margin: 5,
                    flex: 1,
                  }}>
                  {isSelected ? (
                    <View
                      style={{
                        borderWidth: 2,
                        flexGrow: 1,
                        borderColor: 'white',
                        borderRadius: 1000,
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}>
                      <View
                        style={{
                          flexGrow: 1,
                          backgroundColor: 'rgba(255, 153, 0, 0.5)',

                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 1000,
                        }}>
                        {icons.check()}
                      </View>
                    </View>
                  ) : null}
                </ImageBackground>
              </Pressable>
            );
          }}
        />

        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
            alignSelf: 'flex-start',
            marginLeft: 20,
            marginTop: 30,
          }}>
          Choose multiple categories
        </Text>
        <View style={styles.formContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategory}
              numColumns={5}
            />
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Dashboard)}
            style={{
              backgroundColor: '#fc6a4f',
              padding: 10,
              alignItems: 'center',
              borderRadius: 20,
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              DONE
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            marginLeft: 40,
            marginTop: 10,
          }}>
          {icons.keyboardRight()}
          <Text
            style={{
              color: '#cbd94c',
              fontSize: 16,
            }}>
            Back
          </Text>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default OnboardingImage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  formContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
  },
});
