import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddTask = ({
    task,
    handleChange,
    description,
    handleChangeDescription,
    handleAdd,
    validation,
}) => {
    return (
        <View style={styles.addContainer}>
            <TextInput
                style={styles.name}
                maxLength={30}
                placeholder="Nombre de la tarea"
                value={task}
                onChangeText={handleChange}
            />
            <TextInput
                style={styles.description}
                multiline={true}
                numberOfLines={3}
                placeholder="Descripción de la tarea"
                value={description}
                onChangeText={handleChangeDescription}
            />
            <View style={styles.containerAdd}>
                <Ionicons
                    onPress={
                        task === '' || description === ''
                            ? validation
                            : handleAdd
                    }
                    style={styles.add}
                    name="add-circle"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addContainer: {
        display: 'flex',
        marginTop: 20,
        padding: 10,
    },
    name: {
        borderWidth: 2,
        borderColor: '#bcaa99',
        fontSize: 17,
        padding: 10,
        borderRadius: 10,
    },
    description: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#bcaa99',
        fontSize: 17,
        padding: 10,
        marginTop: 20,
        height: 80,
    },
    containerAdd: {
        width: '13%',
    },
    add: {
        marginTop: 15,
        fontSize: 55,
        color: 'green',
    },
    validation: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10,
        color: 'black',
    },
});

export default AddTask;
