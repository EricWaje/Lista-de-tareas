import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList/TaskList';
import ModalComponent from './components/ModalComponent';

export default function App() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [taskList, setTaskList] = useState([]);

    const [taskSelected, setTaskSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

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

    const handleEdit = (id) => {
        setModalVisible(true);
        setTaskSelected(taskList.find((item) => item.id === id));
    };

    const modalOut = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Lista de Tareas 😎</Text>
            </View>
            <AddTask
                task={task}
                description={description}
                handleChangeDescription={handleChangeDescription}
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <TaskList
                taskList={taskList}
                handleRemoveItem={handleRemoveItem}
                handleEdit={handleEdit}
            />
            <ModalComponent
                modalVisible={modalVisible}
                taskSelected={taskSelected}
                modalOut={modalOut}
            />
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#bcaa99',
        padding: 20,
    },
    title: {
        fontSize: 30,
    },
});
