import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-elements';
import AvatarImage from '../pics/images.png';
const home = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#fc6a4f', '#1f4185']}
        style={{flex: 1, alignItems: 'center'}}>
        <View style={{width: '100%', minHeight: 747}}>
          <View
            style={{
              margin: 10,
              alignSelf: 'center',
              top: 70,
              zIndex: 1,
              position: 'absolute',
            }}>
            <Avatar size="xlarge" rounded source={AvatarImage} />
          </View>

          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 10,
              minHeight: 687,
              top: 160,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              paddingTop: 80,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Welcome Raj
            </Text>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              raj@gmail.com
            </Text>
            <View
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                marginVertical: 10,
                marginHorizontal: 50,
              }}></View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 15}}>
                Your Selected Categories
              </Text>
              <ScrollView horizontal={true} style={{margin: 5}}>
                <View
                  style={{
                    margin: 10,
                  }}>
                  <Avatar
                    size="large"
                    rounded
                    source={require('../pics/download.jpeg')}
                  />
                  <Text style={{textAlign: 'center'}}>Cricket</Text>
                </View>
                <View
                  style={{
                    margin: 10,
                  }}>
                  <Avatar
                    size="large"
                    rounded
                    source={require('../pics/football.jpeg')}
                  />
                  <Text style={{textAlign: 'center'}}>FootBall</Text>
                </View>
              </ScrollView>
            </View>

            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 15}}>
                New Events
              </Text>

              {/* events  */}
              <View
                style={{
                  backgroundColor: '#fc6a4f',
                  margin: 10,
                  borderRadius: 40,
                }}>
                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                  }}>
                  <Avatar size="medium" rounded source={AvatarImage} />
                  <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      No Event Created Yet
                    </Text>
                    <Text style={{color: 'white'}}>No Events</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 15}}>
                New Events
              </Text>

              {/* Challanges */}
              <View
                style={{
                  backgroundColor: '#1f4185',
                  margin: 10,
                  borderRadius: 40,
                }}>
                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                  }}>
                  <Avatar size="medium" rounded source={AvatarImage} />
                  <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      No Challenges Created Yet
                    </Text>
                    <Text style={{color: 'white'}}>No Challenge</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({});
