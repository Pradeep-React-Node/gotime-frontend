import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import Header from '../../../components/header';
import icons from '../../../assets/icons';
import screenNames from '../../../routes/screenNames';
import {useNavigation} from '@react-navigation/core';
import BottomSheet from '../../../components/bottomSheet';
import colors from '../../../assets/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CreateEvent = () => {
  const categoriesRef = useRef();
  const datePickerRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const navigation = useNavigation();
  const [showItems, setShowItems] = useState(false);
  const [category, setCategory] = useState();
  const [address, setAddress] = useState();
  const [eventName, setEventName] = useState();
  const [eventDesc, setEventDesc] = useState();

  const [eventStartTime, setEventStartTime] = useState(new Date());
  const [eventEndTime, setEventEndTime] = useState(new Date());
  const [maxPlayers, setMaxPlayers] = useState();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);

  return (
    <KeyboardAwareScrollView style={{width: '100%'}}>
      <LinearGradient colors={['#fc6a4f', '#1f4185']} style={styles.gradient}>
        <Header title="Create New Event" showBack />
        <View style={styles.formContainer}>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.SelectAddress)}>
              <View style={styles.selectContent}>
                {category ? (
                  <Text>{category?.title}</Text>
                ) : (
                  <Text style={{color: colors.fontGrey}}>Select Category</Text>
                )}
                {icons.location()}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              onPress={() => {
                categoriesRef.current.open();
              }}>
              <View style={styles.selectContent}>
                {category ? (
                  <Text>{category?.title}</Text>
                ) : (
                  <Text style={{color: colors.fontGrey}}>Select Category</Text>
                )}
                {icons.caretDown()}
              </View>
            </TouchableOpacity>

            <BottomSheet
              sheetRef={categoriesRef}
              options={[
                {id: 1, title: 'Cricket'},
                {id: 1, title: 'Basketball'},
                {id: 3, title: 'Football'},
              ]}
              selected={category}
              onSelect={e => {
                setCategory(e);
                categoriesRef.current.close();
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Event Name"
              placeholderTextColor={colors.fontGrey}
              onChangeText={text => {
                setEventName(text);
              }}
              value={eventName}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.textInput, {height: 100}]}
              placeholder="Event Description"
              placeholderTextColor={colors.fontGrey}
              onChangeText={text => {
                setEventDesc(text);
              }}
              multiline
              numberOfLines={5}
              value={eventDesc}
            />
          </View>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              onPress={() => {
                //setShowDatePicker(prev => !prev);
                datePickerRef.current.open();
              }}>
              <View style={styles.selectContent}>
                {date ? (
                  <Text>
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                  </Text>
                ) : (
                  <Text>Event Date</Text>
                )}
                <Icon name="caret-down" />
              </View>
            </TouchableOpacity>
            <BottomSheet
              sheetRef={datePickerRef}
              CustomComponent={() => (
                <View style={styles.calendarModal}>
                  <DatePicker date={date} onDateChange={setDate} mode="date" />
                  <TouchableOpacity
                    style={styles.doneBtnContainer}
                    onPress={() => {
                      datePickerRef.current.close();
                    }}>
                    <Text style={styles.doneBtn}>DONE</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.startEndDate}>
            <View style={styles.startDate}>
              <TouchableOpacity
                onPress={() => {
                  startDateRef.current.open();
                }}>
                <View style={styles.selectContent}>
                  {date ? (
                    <Text>
                      {eventStartTime.getHours()}:{eventStartTime.getMinutes()}
                    </Text>
                  ) : (
                    <Text>Start Date</Text>
                  )}
                  <Icon name="caret-down" />
                </View>
              </TouchableOpacity>
              <BottomSheet
                sheetRef={startDateRef}
                CustomComponent={() => (
                  <View style={styles.calendarModal}>
                    <DatePicker
                      date={eventStartTime}
                      onDateChange={setEventStartTime}
                      mode="time"
                    />
                    <TouchableOpacity
                      style={styles.doneBtnContainer}
                      onPress={() => {
                        startDateRef.current.close();
                      }}>
                      <Text style={styles.doneBtn}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>

            <View style={styles.startDate}>
              <TouchableOpacity
                onPress={() => {
                  endDateRef.current.open();
                }}>
                <View style={styles.selectContent}>
                  {date ? (
                    <Text>
                      {eventEndTime.getHours() + 1}:{eventEndTime.getMinutes()}
                    </Text>
                  ) : (
                    <Text>Event Date</Text>
                  )}
                  <Icon name="caret-down" />
                </View>
              </TouchableOpacity>
              <BottomSheet
                sheetRef={endDateRef}
                CustomComponent={() => (
                  <View style={styles.calendarModal}>
                    <DatePicker
                      date={eventEndTime}
                      onDateChange={setEventEndTime}
                      mode="time"
                    />
                    <TouchableOpacity
                      style={styles.doneBtnContainer}
                      onPress={() => {
                        endDateRef.current.close();
                      }}>
                      <Text style={styles.doneBtn}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Maximum Players"
              placeholderTextColor={colors.fontGrey}
              onChangeText={text => {
                setMaxPlayers(text);
              }}
              value={maxPlayers}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.doneBtnContainer}>
          <View>
            <Text style={styles.doneBtn}>DONE</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  gradient: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: '90%',
  },
  textInput: {
    backgroundColor: '#e8e4e3',
    borderRadius: 10,
    margin: 10,
    fontSize: 14,
    color: 'black',
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //height: 60,
    //zIndex: -1,
  },
  selectContainer: {
    backgroundColor: '#e8e4e3',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  selectContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    width: '100%',
    margin: 10,
    borderRadius: 5,
  },
  dropdownText: {
    padding: 10,
    zIndex: 1,
  },
  startEndDate: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  startDate: {
    backgroundColor: '#e8e4e3',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    width: '45%',
  },
  doneBtn: {color: 'white', fontWeight: 'bold', textAlign: 'center'},
  doneBtnContainer: {
    backgroundColor: '#fc6a4f',
    width: '30%',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 40,
    elevation: 5,
    shadowColor: 'white',
  },
  calendarModal: {
    //position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    //zIndex: 100,

    backgroundColor: 'white',
    margin: 10,
    //borderColor: '#fc6a4f',
    // borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    width: '80%',
    padding: 10,
  },
});
