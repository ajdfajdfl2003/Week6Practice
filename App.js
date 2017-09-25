import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  StatusBar,
  Keyboard,
  TextInput, 
  TouchableWithoutFeedback,
  View,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{flex: 1, backgroundColor: 'transparent'}}
        imageStyle={{
          //Using for background, let width and height is null.
          width: undefined,
          height: undefined,
        }}
        source={{uri: 'https://i.pinimg.com/originals/64/e3/78/64e378620079d205ab682740cc000e19.jpg'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{width, alignItems: 'center'}}>
                <TextInput 
                  style={{width: '80%', height:36, backgroundColor: 'white', padding: 8, borderWidth: 1,
                  borderColor: '#00000020'}}
                  placeholder="輸入帳號..."
                  keyboardType="phone-pad"
                  />
              </View>
              <View style={{width, alignItems: 'center', marginVertical: 10}}>
                <TextInput 
                  style={{width: '80%', height: 36, backgroundColor: 'white', padding: 8, borderWidth: 1, borderColor: '#00000020'}}
                  placeholder="輸入密碼..."
                  secureTextEntry={true}
                  />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}