import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJSzLl_DNceMKGhLRyNyJOmJ14McoViaIPw&s' }} 
        style={styles.headerImage} 
      />
      <Text style={styles.title}>About Vatsalya Trust Mumbai</Text>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Vision</Text>
        <Text style={styles.text}>
          “To create lasting solutions to improve the quality of life for destitute and deprived individuals, regardless of age, race, caste, religion, and gender.”
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.text}>
          Help the destitute and deprived under our care to achieve their rights to survival, protection, development, and participation in societal growth, ultimately earning dignity and self-respect.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Core Values</Text>
        <Text style={styles.text}>
          <MaterialIcons name="favorite" size={20} color="#FF6347" /> Love,{"\n"}
          <MaterialIcons name="favorite" size={20} color="#FF6347" /> Affection,{"\n"}
          <MaterialIcons name="favorite" size={20} color="#FF6347" /> Care
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Services Provided</Text>
        <Text style={styles.text}>
          We offer comprehensive services for:
          {"\n"}- Adoption
          {"\n"}- Orphanage
          {"\n"}- Old Age Home
          {"\n"}- Care for destitute girls
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Impact</Text>
        <Text style={styles.text}>
          Over the years, around 1275 children have found their adoptive homes through the efforts of Vatsalya Trust. We pride ourselves on our long-term relationships with adoptive families and the success of our programs.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Join us in making a difference!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4a4a4a',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
});

export default AboutUsScreen;
