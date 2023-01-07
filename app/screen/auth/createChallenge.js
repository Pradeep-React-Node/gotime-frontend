import React, {useState, useRef} from 'react';
import { Text, View,StyleSheet,Picker,TextInput,TouchableOpacity,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/core';
import BottomSheet from '../../components/bottomSheet';


function onChangeGame({value:string}) {
    if(value == 'Select...')
        alert('please enter Game')
    else{    
    this.setState({
      selectedGame: value
    });
    }
  };

  function onChangeAdd({value: string}) {
    if(value == 'Select...')
        alert('please enter Game')
    else{    
    this.setState({
        addDropDownSelected: value
    });
    }
  };

  function handleUploadImage(){
    const [selectedImageUrl, setselectedImageUrl] = useState();
      console.log('inside handleupload');
        const options={
            
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response:-',response);
            if(response){
                var res = response
                setselectedImageUrl(res.uri);
                console.log(res)
            }
        });
        
  };


const createNewChallenge=()=> {

const gameRef = useRef();
const addRef = useRef();
const navigation = useNavigation();

const [category, setCategory] = useState();
const [selectedGame, setselectedGame] = useState();
const [addDropDownSelected, setaddDropDownSelected] = useState();
    
    // state={
    //     selectedGame:'Select...',
    //     addDropDownSelected:'Select...',
    //     selectedImageUrl:'',
    // }

        return (
            <LinearGradient colors={['#fc6a4f','#1f4185']} style={{height:'100%',width:'100%'}}>

            
                <View style={styles.titleView}>
                <Text style={{color:'#fc6a4f'}}>Create New Challenge</Text>
            </View>
            <View style={styles.gameDropDownContainer}>
            <TouchableOpacity
              onPress={() => {
                gameRef.current.open();
              }}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                {selectedGame ? (
                  <Text>{selectedGame.title}</Text>
                ) : (
                  <Text style={{color:'gray'}}>Select Game</Text>
                )}
                {<Icon name='caret-down-outline' />}
              </View>
            </TouchableOpacity>
            <BottomSheet
              sheetRef={gameRef}
              options={[
                {id: 1, title: 'Cricket'},
                {id: 1, title: 'Basketball'},
                {id: 3, title: 'Football'},
                {id: 3, title: 'Hockey'},
              ]}
              selected={selectedGame}
              onSelect={e => {
                setselectedGame(e);
                console.log(e);
                gameRef.current.close();
              }}
            />
            </View>

            <View style={styles.addDropDownContainer}>
            <TouchableOpacity
              onPress={() => {
                addRef.current.open();
              }}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
                {addDropDownSelected ? (
                  <Text>{addDropDownSelected.title}</Text>
                ) : (
                  <Text style={{color:'gray'}}>Add...</Text>
                )}
                {<Icon name='caret-down-outline' />}
              </View>
            </TouchableOpacity>
            <BottomSheet
              sheetRef={addRef}
              options={[
                {id: 1, title: 'Add Text'},
                {id: 2, title: 'Add Images'},
                {id: 3, title: 'Add Videos'},
              ]}
              selected={addDropDownSelected}
              onSelect={e => {
                setaddDropDownSelected(e);
                addRef.current.close();
              }}
            />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textBox}>Age</Text>
                <TextInput style={styles.inputTextBox} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textBox}>Description</Text>
                <TextInput style={styles.inputTextBox} />
            </View>
            
            <TouchableOpacity style={styles.uploadImgBtn} onPress={()=> handleUploadImage()}>
                <Text style={{fontSize:20,color:'#fff'}}>UPLOAD IMAGE</Text>
            </TouchableOpacity>

                <Text style={{fontSize:20,textAlign:'center',marginVertical:20,color:'#fff'}}></Text>

            </LinearGradient>
        )
    }
export default createNewChallenge;

const styles=StyleSheet.create({

    titleView:{
        width:'100%',
        height:50,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
    },
    gameDropDownContainer:{
        height:50,
        borderRadius:10,
        justifyContent:'center',
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#fff'
    },
    addDropDownContainer:{
        height:50,
        borderRadius:10,
        justifyContent:'center',
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#fff'
    },
    inputContainer:{
        flexDirection:'row',
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'#cdd9fa',
        marginTop:20,
    },
    textBox:{
        height:50,
        width:100,
        textAlign:'center',
        textAlignVertical:'center',
        borderRightColor:'#fc6a4f',
        borderRightWidth:2
    },
    inputTextBox:{
        
        height:50,
        width:250,
        textAlign:'center',
        textAlignVertical:'center'
    },
    uploadImgBtn:{
        height:50,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#59c7f0',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:10
    },
})
