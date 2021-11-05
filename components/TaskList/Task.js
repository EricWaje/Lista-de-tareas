import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Task = ({ id, title, description, handleRemoveItem, handleEdit }) => {
    return (
        <View style={styles.task} key={id}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.optionsContainer}>
                <AntDesign
                    name="edit"
                    size={23}
                    color="#181818"
                    style={{ marginRight: 25 }}
                    onPress={() => handleEdit(id)}
                />
                <AntDesign
                    onPress={() => handleRemoveItem(id)}
                    name="delete"
                    size={23}
                    color="red"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        marginTop: 12,
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f7f2',
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
    optionsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default Task;
