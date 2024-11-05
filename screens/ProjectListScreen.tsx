import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Project {
    id: string;
    name: string;
    dueDate: Date;
    completed: boolean; 
}

interface ProjectListScreenProps {
    projects: Project[];
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
}

const ProjectListScreen: React.FC<ProjectListScreenProps> = ({ projects, onDelete, onComplete }) => {
    return (
        <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.projectItem}>
                    <TouchableOpacity onPress={() => onComplete(item.id)} style={styles.projectContent}>
                        <Text style={item.completed ? styles.completedText : styles.projectText}>
                            {item.name}
                        </Text>
                        {item.completed && <MaterialCommunityIcons name="check" size={20} color="green" />}
                    </TouchableOpacity>
                    <Text style={styles.dueDateText}>
                        {item.dueDate.toLocaleDateString()} 
                    </Text>
                    <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <MaterialCommunityIcons name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    projectItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    projectContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectText: {
        fontSize: 18,
        marginRight: 8, 
    },
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-through', 
        color: 'gray',
    },
    dueDateText: {
        fontSize: 16,
        color: 'gray', 
    },
});

export default ProjectListScreen;
