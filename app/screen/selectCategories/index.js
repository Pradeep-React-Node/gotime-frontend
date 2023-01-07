import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import images from '../../assets/images';
import _ from 'lodash';
import icons from '../../assets/icons';
import selectCategory from '../onboarding/utils';
import Header from '../../components/header';

const allImages = [
  {id: 1, image: images.basketBall, title: 'cricket', marked: false},
  {id: 2, image: images.basketBall, title: 'football', marked: false},
  {id: 3, image: images.basketBall, title: 'tennis', marked: false},
  {id: 4, image: images.basketBall, title: 'basketball', marked: false},
  {id: 5, image: images.basketBall, title: 'cricket', marked: false},
  {id: 6, image: images.basketBall, title: 'football', marked: false},
  {id: 7, image: images.basketBall, title: 'tennis', marked: false},
  {id: 8, image: images.basketBall, title: 'basketball', marked: false},
];

const SelectCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    {
      image: images.basketBall,
      title: 'basketball',
      marked: false,
    },
  ]);
  const renderImage = ({item}) => {
    const isSelected = _.findIndex(selectedCategories, item) !== -1;
    console.log(isSelected, 'isSelected');
    return (
      <Pressable
        onPress={() => {
          if (isSelected) {
            let newCategories = selectedCategories.filter(cat => {
              return cat.id !== item.id;
            });
            setSelectedCategories(newCategories);
          } else {
            setSelectedCategories([...selectedCategories, item]);
          }
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={{width: 110, height: 110, margin: 10}}
          />
          <Text style={styles.imageText}>{item.title}</Text>
          {isSelected ? (
            <View
              style={{
                flexGrow: 1,
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
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
        </View>
      </Pressable>
    );
  };
  return (
    <ScrollView>
      <LinearGradient colors={['#fc6a4f', '#1f4185']} style={styles.gradient}>
        <Header title="Choose Multiple Categories" showBack />

        <FlatList
          data={allImages}
          renderItem={renderImage}
          numColumns="2"
          contentContainerStyle={styles.categoryContainer}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
        <View style={styles.doneBtnContainer}>
          <Text style={styles.doneBtnText}>DONE</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default SelectCategories;

const styles = StyleSheet.create({
  doneBtnText: {color: 'white', fontWeight: 'bold', textAlign: 'center'},
  doneBtnContainer: {
    backgroundColor: '#fc6a4f',
    width: '30%',
    alignSelf: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 40,
    elevation: 5,
    shadowColor: 'white',
  },
  categoryContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    //height: 600,
    borderRadius: 15,
    //width: '90%',
    paddingVertical: 10,
  },
  header: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  gradient: {flex: 1, alignItems: 'center'},
  imageContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fc6a4f',
    elevation: 5,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#fc6a4f',
  },
  selectedItemStyle: {
    backgroundColor: 'rgba(252,106,79,0.4)',
    zIndex: 2,
    top: 0,
    height: 160,
    width: 130,
    position: 'absolute',
    borderRadius: 10,
  },
  imageText: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
