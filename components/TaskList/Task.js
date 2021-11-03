import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Task = ({ id, title, description, handleRemoveItem }) => {
    return (
        <View style={styles.task} key={id}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <AntDesign
                onPress={() => handleRemoveItem(id)}
                name="delete"
                size={28}
                color="red"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        /* backgroundColor: '#181818ff', */
        borderWidth: 1,
        marginTop: 12,
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 23,
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default Task;
