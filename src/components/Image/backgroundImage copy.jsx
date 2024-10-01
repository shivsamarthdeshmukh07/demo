import React from 'react';
import {ImageBackground, View, Image} from 'react-native';

export default BackgroundImage = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="stretch"
        source={require('../assets/images/139409-OSPRJR-663.jpg')}>
        <Image
          style={{height: 200}}
          //source={require('../assets/images/car.avif')}
          source={{
            uri: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&uid=R161452794&ga=GA1.1.429095624.1724928827&semt=ais_hybrid',
          }}
        />
      </ImageBackground>
    </View>
  );
};
