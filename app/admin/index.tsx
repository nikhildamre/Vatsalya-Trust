import * as React from 'react';
import { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../homescreen';
import { Ionicons } from '@expo/vector-icons';  // Optional for adding icons
import UserListPage from '../../components/admin/adminhome';
import EditAppoint from "../../components/admin/adminappedit";
import TherapistAppointments from '../../components/admin/adminappoints';
import AppointmentCalendar from '../../components/admin/admincalender';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
const Tab = createBottomTabNavigator();

function App() {
  
  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      //setUserId(storedUserId);
      if (!storedUserId) {
         console.log("no value");
      }
    };
    checkLoginStatus();
  }, []);
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'adminusers') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'admincalender') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'adminappoint') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
          <Tab.Screen name="adminusers"  options={{ headerShown: false }}  component={UserListPage} />
        <Tab.Screen name="admincalender" options={{ headerShown: false }}  component={AppointmentCalendar} />

         <Tab.Screen name="adminappoint"  options={{ headerShown: false }}  component={TherapistAppointments} />
        
      </Tab.Navigator>
  );
}

export default App;
