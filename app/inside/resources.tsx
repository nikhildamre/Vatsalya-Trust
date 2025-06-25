import Constants from 'expo-constants';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

const SERVER = Constants.expoConfig?.extra?.envar?.serverurl;

const ResourcesScreen = () => {
  const resources = [
    { id: '1', title: 'Managing Stress', description: 'Tips and strategies for managing stress.', details: 'Learn effective techniques to manage your stress, including breathing exercises and mindfulness.' },
    { id: '2', title: 'Understanding Therapy', description: 'A guide to what therapy is and how it helps.', details: 'Explore different types of therapy, their benefits, and what to expect in a session.' },
    { id: '3', title: 'Coping with Anxiety', description: 'Strategies to cope with anxiety in daily life.', details: 'Discover practical tips and resources to help manage anxiety effectively.' },
    { id: '4', title: 'Building Resilience', description: 'How to build resilience and overcome challenges.', details: 'Find out ways to strengthen your resilience through positive thinking and support networks.' },
    { id: '5', title: 'Healthy Communication', description: 'Improve your communication skills for better relationships.', details: 'Learn techniques for effective communication in personal and professional settings.' },
  ];

  const renderResource = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
        <Text style={styles.details}>{item.details}</Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resources and Articles</Text>
      <FlatList
        data={resources}
        renderItem={renderResource}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F7FA', // Light background color
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B', // Darker teal for the heading
  },
  card: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B', // Darker teal for title
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: '#555', // Dark grey for description
  },
  readMoreButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00796B', // Dark teal for the button
    borderRadius: 5,
    alignItems: 'center',
  },
  readMoreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: '#333', // Dark text for details
    marginTop: 10,
  },
  list: {
    paddingBottom: 20,
  },
});

export default ResourcesScreen;
