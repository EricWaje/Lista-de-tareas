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

    const handleEditItem = (taskSelected) => {
        const newData = taskList.map((item) => {
            if (item.id === taskSelected.id) {
                item.title = task;
                item.description = description;
                return item;
            }
            return item;
        });
        setTaskList(newData);
        setTask('');
        setDescription('');
    };

    const modalOut = () => {
        handleEditItem(taskSelected);
        setModalVisible(false);
    };

    const validation = () => {
        alert('Debés completar ambos campos para añadir una tarea');
    };

    const validationModal = () => {
        alert('Debés completar ambos campos para editar una tarea');
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
                validation={validation}
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
                task={task}
                setTask={setTask}
                setDescription={setDescription}
                description={description}
                validationModal={validationModal}
            />
            <StatusBar barStyle="dark-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#ebf5ee',
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#283044',

        padding: 20,
    },
    title: {
        fontSize: 30,
        color: '#ebf5ee',
        fontWeight: 'bold',
    },
});
