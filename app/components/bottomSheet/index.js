import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import icons from '../../assets/icons';
import images from '../../assets/images';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../assets/colors';

const BottomSheet = ({
  sheetRef,
  options = [],
  selected = {},
  onSelect,
  CustomComponent,
}) => {
  const navigation = useNavigation();
  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingHorizontal: 20,
          padddingTop: 0,
        },
      }}>
      {CustomComponent ? (
        <CustomComponent />
      ) : (
        <>
          {options.map((item, i) => (
            <Pressable
              style={styles.option(selected.title === item.title)}
              onPress={() => onSelect(item)}>
              <View style={styles.optionTextContainer}>
                {/* <Text style={styles.emojiText}>{item.emoji}</Text> */}
                <Text style={styles.optionText}>{item.title}</Text>
              </View>
              {selected.title === item.title && (
                <View style={styles.tick}>{icons.check({size: 15})}</View>
              )}
            </Pressable>
          ))}
        </>
      )}
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  option: selected => ({
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: selected ? '#f5fbf8' : '#ecedf0',
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: selected ? colors.orange : 'transparent',
  }),
  optionTextContainer: {flexDirection: 'row', alignItems: 'center'},
  emojiText: {fontSize: 16, marginRight: 12},
  optionText: {fontSize: 16},
  tick: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomSheet;
