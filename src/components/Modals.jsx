import React, {useState} from 'react';
import {Button, Modal, View, Text} from 'react-native';

export default Modals = () => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <Modal
        // onRequestClose={()=>setModal(!modal)}
        animationType="fade"
        visible={modal}>
        <View style={{borderWidth: 5, height: 300}}>
          <Text>Modal</Text>
          <Button title="close " onPress={() => setModal(!modal)}></Button>
        </View>
      </Modal>
      <Button title="press" onPress={() => setModal(!modal)}></Button>
    </View>
  );
};
