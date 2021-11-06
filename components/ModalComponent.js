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
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.taskContainer}>
                    <TextInput
                        placeholder={taskSelected.title}
                        style={styles.title}
                        editable={true}
                        multiline={false}
                        maxLength={30}
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    />
                    <TextInput
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
        backgroundColor: '#bcaa99',
    },
    taskContainer: {
        borderWidth: 1,
        width: '80%',
        marginBottom: 30,
        backgroundColor: '#f2f7f2',
        padding: 20,
    },
    title: {
        fontSize: 19,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 17,
        marginBottom: 10,
    },
});

export default ModalComponent;
