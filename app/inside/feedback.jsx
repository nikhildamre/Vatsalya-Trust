import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(5); // Default rating
  const [comment, setComment] = useState('');

  const handleStarPress = (newRating) => {
    setRating(newRating); // Set new rating based on clicked star
  };

  const handleSubmit = () => {
    // Submit feedback logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Value Your Feedback</Text>

      {/* Star Rating System */}
      <Text style={styles.label}>Rate Your Experience</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={32}
              color="#FFD700" // Gold color for stars
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Comment Section */}
      <Text style={styles.label}>Leave a Comment</Text>
      <TextInput
        style={styles.textArea}
        value={comment}
        onChangeText={(text) => setComment(text)}
        multiline
        placeholder="Write your comments here..."
        placeholderTextColor="#9EB9F8"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',  // Light blue background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#480ca9',  // Accent color for title
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    borderColor: '#9EB9F8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    textAlignVertical: 'top',
    color: '#333',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#480ca9',  // Accent color
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
