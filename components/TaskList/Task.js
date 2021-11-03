import React from 'react';
import { Button, Text, View } from 'react-native';

const Task = ({ id, title, description, handleRemoveItem }) => {
    return (
        <View style={{ flex: 1 }} key={id}>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
            <Button onPress={() => handleRemoveItem(id)} title="X" />
        </View>
    );
};

export default Task;
