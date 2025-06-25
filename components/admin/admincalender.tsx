
      import React, { useEffect, useState } from 'react';
      import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
      import { Calendar } from 'react-native-calendars';
      import axios from 'axios';
      import moment from 'moment';
      import CustomHeader from '../header';
      const AppointmentCalendar = () => {
        const [appointments, setAppointments] = useState({});
        const [loading, setLoading] = useState(true);
      
        // Fetch appointments from the API
        const fetchAppointments = async () => {
          try {
            const response = await axios.get('https://vatlaysabackend-production.up.railway.app/therapistappoint',{ params: { therapistId:"66ea4ca5a7cffa9520905f32"} }); // Replace with your actual API endpoint
           // console.log(response.data);
            const markedDates = {};
            
            response.data.forEach(appointment => {
              const formattedDate = moment(appointment.date).format('YYYY-MM-DD');
              markedDates[formattedDate] = { marked: true, dotColor: '#5d4bdb' };
            });
      
            setAppointments(markedDates);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
      
        useEffect(() => {
          fetchAppointments();
        }, []);
      
        if (loading) {
          return (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#5d4bdb" />
              <Text>Loading calendar...</Text>
            </View>
          );
        }
      
        return (
          <View style={styles.container}>
            <CustomHeader 
        title="My Screen" 
        showBackButton={true} 
        rightComponent={<Text style={{ color: 'white' }}></Text>}
        />
            <Text style={styles.title}>Appointment Calendar</Text>
            <Calendar
              // Mark appointment dates
              markedDates={appointments}
              // Calendar styling
              theme={{
                selectedDayBackgroundColor: '#5d4bdb',
                todayTextColor: '#5d4bdb',
                dotColor: '#5d4bdb',
                arrowColor: '#5d4bdb',
              }}
            />
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#f0f0f0',
        },
        title: {
          fontSize: 26,
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          marginVertical: 20,
        },
        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
      
      export default AppointmentCalendar;
      