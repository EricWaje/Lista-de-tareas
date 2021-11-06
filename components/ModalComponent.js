import React from 'react';
import { Modal, Text, View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ModalComponent = ({
    modalVisible,
    modalOut,
    taskSelected,
    setTask,
    task,
    setDescription,
    description,
    validationModal,
}) => {
    return (
        <Modal visible={modalVisible} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.taskContainer}>
                    <TextInput
                        placeholderTextColor="#ebf5eeaa"
                        placeholder={taskSelected.title}
                        style={styles.title}
                        editable={true}
                        multiline={false}
                        maxLength={30}
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    />
                    <TextInput
                        placeholderTextColor="#ebf5eeaa"
                        placeholder={taskSelected.description}
                        style={styles.description}
                        editable={true}
                        multiline={false}
                        value={description}
                        onChangeText={(description) =>
                            setDescription(description)
                        }
                    />
                </View>
                <AntDesign
                    name="checkcircleo"
                    size={70}
                    color="green"
                    onPress={
                        task === '' || description === ''
                            ? validationModal
                            : modalOut
                    }
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
        backgroundColor: '#283044',
    },
    taskContainer: {
        borderWidth: 3,
        borderColor: '#78a1bb',
        width: '80%',
        marginBottom: 30,
        padding: 20,
        borderRadius: 10,
    },
    title: {
        color: '#ebf5ee',
        fontSize: 19,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    description: {
        color: '#ebf5ee',
        fontSize: 17,
        marginBottom: 10,
    },
});

export default ModalComponent;
