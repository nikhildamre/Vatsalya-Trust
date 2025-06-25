import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'; // Add TextInput here
import axios from 'axios';
import moment from 'moment';
import CustomHeader from '@/components/header';
import { useLocalSearchParams,router } from 'expo-router';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component

const EditAppointmentForm = () => {
  const { appid, datep, locationp, username, statusp } = useLocalSearchParams();
  const [date, setDate] = useState(moment(datep).format('YYYY-MM-DD'));
  const [location, setLocation] = useState(locationp);
  const [status, setStatus] = useState(statusp); // Initial status from params

  const handleSave = async () => {
    try {
      const response = await axios.put(`https://vatlaysabackend-production.up.railway.app/editapp`, {
        date: date,
        appid: appid,
        location: location,
        status: status, // Sending the selected status
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Appointment updated successfully');
        router.back();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update appointment');
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Edit Appointment" showBackButton={true} />
      
      <View style={styles.formContainer}>
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Pending" value="Pending" />
            <Picker.Item label="confirmed" value="confirmed" />
            <Picker.Item label="completed" value="completed" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  formContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  pickerContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#5d4bdb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#5d4bdb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default EditAppointmentForm;
