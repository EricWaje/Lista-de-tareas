import React from 'react';
import { Modal, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ModalComponent = ({ modalVisible, modalOut, taskSelected }) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View>
                <Text style={{ paddingTop: 100 }}>{taskSelected.title}</Text>
                <Text>{taskSelected.description}</Text>
            </View>
            <AntDesign
                name="checkcircleo"
                size={24}
                color="black"
                onPress={modalOut}
            />
        </Modal>
    );
};

export default ModalComponent;
