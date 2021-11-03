import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList/TaskList';

export default function App() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleChange = (value) => {
        setTask(value);
    };

    const handleChangeDescription = (value) => {
        setDescription(value);
    };

    const handleAdd = () => {
        const newTask = {
            title: task,
            description: description,
            id: Math.random().toString(),
        };
        setTaskList([...taskList, newTask]);
        setTask('');
        setDescription('');
    };

    const handleRemoveItem = (id) => {
        const filteredList = taskList.filter((x) => x.id !== id);
        setTaskList(filteredList);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Lista de Tareas</Text>
            </View>
            <AddTask
                task={task}
                description={description}
                handleChangeDescription={handleChangeDescription}
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <TaskList taskList={taskList} handleRemoveItem={handleRemoveItem} />
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        paddingTop: 80,
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});
