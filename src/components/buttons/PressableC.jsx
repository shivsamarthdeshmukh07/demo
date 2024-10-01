import React from 'react';
import {
  Keyboard,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default PressableC = () => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{borderWidth: 2, height: 200}}
        // onPress={()=>console.log("on press")}
        onPressIn={() => console.log('on pressIN')}
        onPressOut={() => console.log('on pressOut')}
        onLongPress={() => console.log('on Long')}
        delayLongPress={5000}
        onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            height: 100,
            backgroundColor: 'gray',
          }}>
          <TextInput style={{backgroundColor: 'red'}}></TextInput>
        </View>
      </Pressable>

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        // onPress={()=>console.log("on press")}
        onPressIn={() => console.log('on pressIN')}
        onPressOut={() => console.log('on pressOut')}
        onLongPress={() => console.log('on Long')}>
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            height: 100,
            backgroundColor: 'gray',
          }}>
          <TextInput style={{backgroundColor: 'red'}}></TextInput>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
