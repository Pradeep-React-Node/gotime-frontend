import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../assets/colors';
import screenNames from '../../routes/screenNames';
import icons from '../../assets/icons';
import Header from '../../components/header';
import UserDetails from './userDetails';

const Dashboard = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#fc6a4f', '#1f4185']}
      style={styles.backgroundGradientColor}>
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <Header title="Go Time App" />
        <View style={styles.container}>
          <UserDetails />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 0,
            }}>
            <Text style={{marginStart: 10, fontSize: 16}}>
              Your selected categories
            </Text>
            <TouchableOpacity
              style={styles.editCategory}
              onPress={() => navigation.navigate(screenNames.SelectCategories)}>
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1, 3, 4]}
            numColumns={3}
            contentContainerStyle={{
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'center',
              marginTop: 10,
            }}
            renderItem={() => (
              <View
                style={{
                  backgroundColor: 'lightgrey',
                  marginHorizontal: 10,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                <Image
                  source={images.basketBall}
                  resizeMode="stretch"
                  style={{height: 60, width: 50, marginVertical: 5}}
                />
                <Text>Cricket</Text>
              </View>
            )}
          />
          <Text
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            New Events
          </Text>
          <FlatList
            data={[1, 2]}
            renderItem={() => (
              <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
                <View style={styles.eventImgContainer}>
                  <Image
                    source={images.basketBall}
                    style={{height: 50, width: 50}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    Basket Ball Championship
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'gray',
                      alignItems: 'center',
                      marginStart: 10,
                      marginTop: 5,
                      borderRadius: 10,
                    }}>
                    28 oct 2020
                  </Text>
                </View>
              </View>
            )}
          />

          <Text
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Challenges
          </Text>
          <FlatList
            data={[1, 2]}
            renderItem={() => (
              <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
                <View style={styles.eventImgContainer}>
                  <Image
                    source={images.basketBall}
                    style={{height: 50, width: 50}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    Basket Ball Championship
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'gray',
                      alignItems: 'center',
                      marginStart: 10,
                      marginTop: 5,
                      borderRadius: 10,
                    }}>
                    28 oct 2020
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.createNewEventBtn}
          onPress={() => navigation.navigate(screenNames.CreateEvent)}>
          <Text style={{fontSize: 16, color: 'white'}}>Create New Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createNewChallengeBtn} 
                          onPress={() => navigation.navigate(screenNames.CreateChallenge)}>
          <Text style={{fontSize: 16, color: 'white'}}>
            Create New Challenge
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  backgroundGradientColor: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 20,
  },

  editCategory: {
    marginStart: 50,
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: '#f57542',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengesHeading: {
    marginStart: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  joinedPlayers: {
    fontSize: 12,
    color: 'gray',
    alignItems: 'center',
    marginStart: 10,
    marginTop: 5,
    borderRadius: 10,
    textAlignVertical: 'bottom',
  },
  createNewEventBtn: {
    width: '50%',
    height: 50,
    backgroundColor: '#fc6a4f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNewChallengeBtn: {
    width: '50%',
    height: 50,
    backgroundColor: '#1f4185',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventsTitle: {
    marginStart: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  eventImgContainer: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
});
