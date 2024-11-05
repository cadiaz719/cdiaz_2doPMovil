import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

interface AddProjectScreenProps {
    onAdd: (project: { id: string; name: string; dueDate: Date; completed: boolean }) => void;
}

const AddProjectScreen: React.FC<AddProjectScreenProps> = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState<string>('');

    const handleAddProject = () => {
        const newProject = {
            id: Math.random().toString(),
            name,
            dueDate: new Date(dueDate),
            completed: false,
        };
        onAdd(newProject);
        setName('');
        setDueDate('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar Proyecto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre del Proyecto"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de culminación (YYYY-MM-DD)"
                value={dueDate}
                onChangeText={setDueDate}
            />
            <Button title="Agregar Proyecto" onPress={handleAddProject} color="#6200ea" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default AddProjectScreen;
