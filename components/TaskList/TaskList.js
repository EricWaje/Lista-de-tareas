import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Task from './Task';

const TaskList = ({ taskList, handleRemoveItem, handleEdit }) => {
    return (
        <View style={styles.listContainer}>
            {taskList.length === 0 ? (
                <Text style={styles.text}>
                    Que esperás para escribir tu primer tarea? 🤟
                </Text>
            ) : (
                <FlatList
                    data={taskList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Task
                            {...item}
                            handleRemoveItem={handleRemoveItem}
                            handleEdit={handleEdit}
                        />
                    )}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#283044',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 80,
    },
});

export default TaskList;
