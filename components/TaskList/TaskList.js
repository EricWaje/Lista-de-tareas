import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Task from './Task';

const TaskList = ({ taskList, handleRemoveItem }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={taskList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Task {...item} handleRemoveItem={handleRemoveItem} />
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
});

export default TaskList;
