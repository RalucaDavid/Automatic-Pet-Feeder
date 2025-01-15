import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2D79CB',
                tabBarInactiveTintColor: '#8e8e93',
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
                tabBarLabelStyle: {
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'time' : 'time-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}