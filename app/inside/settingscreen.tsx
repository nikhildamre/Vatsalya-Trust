import CustomHeader from '@/components/header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const SERVER = Constants.expoConfig?.extra?.envar?.serverurl;

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation on screen load
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <CustomHeader 
        title="Settings" 
        showBackButton={true} 
        rightComponent={<Ionicons name="settings-outline" size={24} color="white" />}
      />
      
      <Text style={styles.title}>Settings</Text>

      {/* Notifications Toggle */}
      <View style={styles.settingItem}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          thumbColor={notificationsEnabled ? '#4CAF50' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Profile Section */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.label}>Profile</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>

      {/* Account Settings */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate('AccountSettings')}
      >
        <Text style={styles.label}>Account Settings</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>

      {/* Help Center */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate('HelpCenter')}
      >
        <Text style={styles.label}>Help Center</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen height
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    color: '#333',
    textAlign: 'center', // Center the title for better layout
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12, // Adjusted padding for better fit
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 5, // Reduced margin to minimize space
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 2, // Reduced elevation for a more subtle shadow
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
});

export default SettingsScreen;
