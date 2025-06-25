import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {  router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../header';
const TherapistAppointments = () => {
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'completed'

  // Fetch therapist appointments from the API
  const fetchAppointments = async () => {
    try {
        const response = await axios.get('https://vatlaysabackend-production.up.railway.app/therapistappoint',{ params: { therapistId:"66ea4ca5a7cffa9520905f32"} }); // Replace with your actual API endpoint
        const currentDate = moment(); // Current date to compare

      const completed = [];
      const upcoming = [];

      response.data.forEach(appointment => {
        const appointmentDate = moment(appointment.date);

        if (appointmentDate.isBefore(currentDate)) {
          completed.push(appointment);
        } else {
          upcoming.push(appointment);
        }
      });

      setCompletedAppointments(completed);
      setUpcomingAppointments(upcoming);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
    setLoading(true); // Show loader during refresh
    fetchAppointments(); // Re-fetch appointments
  };
  useEffect(() => {
    fetchAppointments();
  }, []);

  const renderAppointment = ({ item }) => (
    <TouchableOpacity onPress={() => router.push({
        pathname: '/admin/editappoiny',
        params: { appid:item._id, datep: item.date,locationp:item.location,statusp:item.status,username:item.user.name}
      })}>
    <View style={styles.appointmentCard}>
      <Text style={styles.appointmentText}>Patient: {item.user.name}</Text>
      <Text style={styles.appointmentText}>Location: {item.location}</Text>
      <Text style={styles.appointmentText}>Date: {moment(item.date).format('MMMM Do YYYY, h:mm a')}</Text>
      <Text style={styles.appointmentText}>Status: {item.status}</Text>
    </View>
    </TouchableOpacity>
  );

  const renderEmptyMessage = () => {
    return (
      <Text style={styles.emptyText}>
        {activeTab === 'upcoming' ? 'No upcoming appointments.' : 'No completed appointments.'}
      </Text>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#5d4bdb" />
        <Text>Loading appointments...</Text>
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
      <Text style={styles.title}>Therapist Appointments</Text>

      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'upcoming' && styles.activeTabButton]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'completed' && styles.activeTabButton]}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Appointment List */}
      <FlatList
        data={activeTab === 'upcoming' ? upcomingAppointments : completedAppointments}
        renderItem={renderAppointment}
        keyExtractor={item => item._id}
        ListEmptyComponent={renderEmptyMessage}
      />
      <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Ionicons name="refresh-circle" size={36} color="#5d4bdb" />
        </TouchableOpacity>
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  activeTabButton: {
    backgroundColor: '#5d4bdb',
  },
  refreshButton: {
    right:30,
    bottom:30,
    position:'absolute',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  appointmentText: {
    fontSize: 16,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginVertical: 10,
  },
});

export default TherapistAppointments;
