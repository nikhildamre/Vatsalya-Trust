import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Avatar, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import CustomHeader from '../header';
const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://vatlaysabackend-production.up.railway.app/users'); // Replace with your API endpoint
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle search
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredUsers(filtered);
  };

  // Render individual user
  const renderUser = ({ item }) => (
    <TouchableOpacity onPress={() => router.push({ pathname: '/admin/adminbook', params: { name: item.name, userId: item._id } })}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Avatar.Image size={60} source={{ uri: `https://gravatar.com/avatar/${item.name.toLowerCase().replace(/\s+/g, '')}?d=identicon` }} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name || 'Unknown'}</Text>
            <Text style={styles.email}>Email: {item.email}</Text>
            <Text style={styles.role}>Role: {item.role}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#5d4bdb" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  const logout = async () => {
    alert('Success');
    await AsyncStorage.setItem('userId', '');
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('isAdmin', 'false');
    router.replace('/');
  };

  return (
    <View style={styles.container}>
       
      <Text style={styles.title} onPress={logout}>User List</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredUsers}
        renderItem={renderUser}
        keyExtractor={(item) => item._id || Math.random().toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
    marginTop:40,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    elevation: 2,
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
    padding: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  role: {
    fontSize: 14,
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserListPage;
