import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import Constants from 'expo-constants';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SERVER = Constants.expoConfig?.extra?.envar?.serverurl;

const AppointmentBookingScreen = () => {
  const { therapistId, name } = useLocalSearchParams();
  const [selectedTherapist, setSelectedTherapist] = useState(therapistId || '');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      const storedUserId = await AsyncStorage.getItem('userId');
      if (loggedIn === 'true') {
        setUserId(storedUserId);
      } else {
        router.replace('/');
      }
    };
    checkLoginStatus();
  }, []);

  const handleBook = async () => {
    if (!date || !selectedTherapist) {
      return Alert.alert('Error', 'Please select a date and therapist.');
    }

    setLoading(true);
    try {
      await axios.post(`${SERVER}/appoint`, {
        therapistId: selectedTherapist,
        date,
        userId,
      });
      Alert.alert('Success', 'Appointment booked successfully!');
      router.push('/inside/appointhist');
    } catch (error) {
      Alert.alert('Error', 'Failed to book the appointment. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Book Your Appointment with {name}</Text>

      <Text style={styles.label}>Therapist ID: {selectedTherapist}</Text>
      <TextInput
        style={styles.input}
        placeholder="Therapist ID"
        value={selectedTherapist}
        editable={false}
      />

      <Text style={styles.label}>Selected Date: {date.toDateString()}</Text>

      <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          minimumDate={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity style={styles.bookButton} onPress={handleBook} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Booking...' : 'Book Appointment'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dateButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5d4bdb',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  bookButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppointmentBookingScreen;
