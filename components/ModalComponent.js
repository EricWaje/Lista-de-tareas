import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ModalComponent = ({ modalVisible, modalOut, taskSelected }) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
                <View>
                    <Text style={{ paddingTop: 100 }}>
                        {taskSelected.title}
                    </Text>
                    <Text>{taskSelected.description}</Text>
                </View>
                <AntDesign
                    name="checkcircleo"
                    size={24}
                    color="black"
                    onPress={modalOut}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bcaa99',
    },
});

export default ModalComponent;
