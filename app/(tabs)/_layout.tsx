import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout(){
    return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: 'black',
        headerStyle: {
            backgroundColor: '#C8E9ED',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: '#C8E9ED',
        },
        headerTitleStyle: {
            color: 'black'
        }
    }}>
        <Tabs.Screen name = "index" options={{title: 'Home',
            tabBarIcon: ({color, focused}) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}></Ionicons>
            )
        }}></Tabs.Screen>
        <Tabs.Screen name = "settings" options={{title: 'Settings',
            tabBarIcon: ({color, focused}) => (
                <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24}></Ionicons>
            )
        }}></Tabs.Screen>
    </Tabs>
    );
}
