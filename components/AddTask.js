import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddTask = ({
    task,
    handleChange,
    description,
    handleChangeDescription,
    handleAdd,
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
            <Ionicons
                onPress={handleAdd}
                style={styles.add}
                name="add-circle"
            />
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
        borderBottomWidth: 2,
        borderBottomColor: '#bcaa99',
        fontSize: 17,
        padding: 10,
    },
    description: {
        borderWidth: 2,
        borderColor: '#bcaa99',
        fontSize: 17,
        padding: 10,
        marginTop: 20,
        height: 80,
    },
    add: {
        /* alignSelf: 'flex-end', */
        marginTop: 15,
        fontSize: 55,
        color: 'green',
    },
});

export default AddTask;
