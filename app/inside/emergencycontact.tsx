import Constants from 'expo-constants';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SERVER = Constants.expoConfig?.extra?.envar?.serverurl;

const EmergencyContactScreen = () => {
  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      <View style={styles.contactCard}>
        <Text style={styles.label}>National Suicide Prevention Lifeline</Text>
        <TouchableOpacity onPress={() => handleCall('1-800-273-8255')}>
          <Text style={styles.contactNumber}>1-800-273-8255</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.label}>Crisis Text Line</Text>
        <TouchableOpacity onPress={() => handleCall('Text HOME to 741741')}>
          <Text style={styles.contactNumber}>Text HOME to 741741</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.label}>Vatsalya Trust Helpline</Text>
        <TouchableOpacity onPress={() => handleCall('+91 98765 43210')}>
          <Text style={styles.contactNumber}>+91 98765 43210</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F4F5', // Light background for subtle contrast
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3E50', // Darker shade for the title
    marginBottom: 20,
  },
  contactCard: {
    backgroundColor: '#ffffff', // White background for the contact cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 4, // Shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }, // Shadow for iOS
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A3B3C', // Darker label color for better readability
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 18,
    color: '#1E88E5', // Use blue for contact numbers to make them stand out
    fontWeight: 'bold',
  },
});

export default EmergencyContactScreen;
