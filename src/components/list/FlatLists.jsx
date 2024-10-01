import React, {useRef} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

export default FlatLists = () => {
  const flatRef = useRef(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatRef}
        initialNumToRender={10}
        // onRefresh={true}
        // refreshing={true}
        // keyExtractor={({item}) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{height: 100, backgroundColor: 'red'}}>
            <Text>hiiiiiiiiiiiii</Text>
          </View>
        )}
        data={DATA}
        renderItem={({item}) => <Text>{item.id}</Text>}
      />
      <Button
        onPress={() =>
          flatRef.current.scrollToOffset({animated: true, offset: 0})
        }
        title="Scroll to top"
      />
    </View>
  );
};
