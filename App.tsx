import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProjectListScreen from './screens/ProjectListScreen';
import AddProjectScreen from './screens/AddProjectScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Project {
    id: string;
    name: string;
    dueDate: Date;
    completed: boolean; 
}

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const addProject = (project: Project) => {
        setProjects((prevProjects) => [...prevProjects, project]);
    };

    const deleteProject = (id: string) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    };

    const completeProject = (id: string) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id ? { ...project, completed: !project.completed } : project
            )
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Proyectos" 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="folder" color={color} size={size} />
                        ),
                    }}
                >
                    {() => (
                        <ProjectListScreen
                            projects={projects}
                            onDelete={deleteProject}
                            onComplete={completeProject}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen 
                    name="Agregar Proyecto" 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                        ),
                    }}
                >
                    {() => <AddProjectScreen onAdd={addProject} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
