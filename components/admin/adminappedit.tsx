import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import { router } from 'expo-router';

const EditAppointmentForm = ({ route, navigation }) => {
  const { appointment } = route.params;
  console.log(appointment) ; // Get the appointment passed from the appointment list screen
  const [date, setDate] = useState(moment(appointment.date).format('YYYY-MM-DD'));  // Format the date for input
  const [location, setLocation] = useState(appointment.location);
  const [status, setStatus] = useState(appointment.status);

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://vatlaysabackend-production.up.railway.app/appointments/${appointment._id}`, {params: { date,
        location,
        status,
     }
        });

      if (response.status === 200) {
        Alert.alert('Success', 'Appointment updated successfully');
        //navigation.goBack();
        router.back() ; // Go back to the previous screen
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update appointment');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
      />

      <Text style={styles.label}>Status</Text>
      <TextInput
        style={styles.input}
        value={status}
        onChangeText={setStatus}
        placeholder="Enter status"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#5d4bdb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EditAppointmentForm;
