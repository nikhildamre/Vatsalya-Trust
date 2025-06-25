import { Ionicons } from '@expo/vector-icons'; // Icons
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'; // For navigation
import React, { useEffect } from 'react';
import HomeScreen from '../homescreen';
import History from './appointhist';
import SettingsScreen from './settingscreen';

const Tab = createBottomTabNavigator();

function App() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      
      if (!storedUserId) {
        console.log("No user found, redirecting to login...");
        navigation.replace('Login'); // Redirect to Login if not logged in
      }
    };
    checkLoginStatus();
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Appointments') {
            iconName = focused ? 'calendar' : 'calendar-outline'; // Changed to 'calendar' for appointments
          }

          return <Ionicons name={iconName} size={focused ? 28 : 24} color={color} />; // Larger size when focused
        },
        tabBarActiveTintColor: '#480ca9', // Your preferred color
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f9f9f9', // Light background for tabs
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
        headerShown: false, // No header on any screen
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={History} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default App;
