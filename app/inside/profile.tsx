import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    childName: '',
    childDOB: '',
    motherTongue: '',
    informant: '',
    age: '',
    gender: '',
    referredBy: '',
    referrerContact: '',
    reasonForReferral: '',
    contactPerson: '',
    contactNumber: '',
  });

  const handleSave = () => {
    alert('Form submitted successfully.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Parent Profile Avatar */}
      <View style={styles.avatarContainer}>
        <Avatar.Image size={100} source={{ uri: 'https://i.pravatar.cc/100' }} />
        <TouchableOpacity style={styles.editButton} onPress={() => {}}>
          <Text style={styles.editButtonText}>Edit Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Parent Details */}
      <Text style={styles.sectionTitle}>Parent Details</Text>
      <Text style={styles.label}>Parent Name</Text>
      <TextInput
        style={styles.input}
        value={form.parentName}
        onChangeText={(text) => setForm({ ...form, parentName: text })}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={form.parentEmail}
        onChangeText={(text) => setForm({ ...form, parentEmail: text })}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={form.parentPhone}
        onChangeText={(text) => setForm({ ...form, parentPhone: text })}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={form.address}
        onChangeText={(text) => setForm({ ...form, address: text })}
        multiline={true}
      />

      {/* Child's Details */}
      <Text style={styles.sectionTitle}>Child's Details</Text>

      <Text style={styles.label}>Child's Name</Text>
      <TextInput
        style={styles.input}
        value={form.childName}
        onChangeText={(text) => setForm({ ...form, childName: text })}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        value={form.childDOB}
        onChangeText={(text) => setForm({ ...form, childDOB: text })}
      />

      <Text style={styles.label}>Mother Tongue</Text>
      <TextInput
        style={styles.input}
        value={form.motherTongue}
        onChangeText={(text) => setForm({ ...form, motherTongue: text })}
      />

      <Text style={styles.label}>Informant</Text>
      <TextInput
        style={styles.input}
        value={form.informant}
        onChangeText={(text) => setForm({ ...form, informant: text })}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={form.age}
        onChangeText={(text) => setForm({ ...form, age: text })}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={styles.input}
        value={form.gender}
        onChangeText={(text) => setForm({ ...form, gender: text })}
      />

      <Text style={styles.label}>Referred By</Text>
      <TextInput
        style={styles.input}
        value={form.referredBy}
        onChangeText={(text) => setForm({ ...form, referredBy: text })}
      />

      <Text style={styles.label}>Referrer Contact</Text>
      <TextInput
        style={styles.input}
        value={form.referrerContact}
        onChangeText={(text) => setForm({ ...form, referrerContact: text })}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Reason for Referral</Text>
      <TextInput
        style={styles.input}
        value={form.reasonForReferral}
        onChangeText={(text) => setForm({ ...form, reasonForReferral: text })}
        multiline={true}
      />

      {/* Emergency Contacts */}
      <Text style={styles.sectionTitle}>Emergency Contact</Text>
      <Text style={styles.label}>Contact Person</Text>
      <TextInput
        style={styles.input}
        value={form.contactPerson}
        onChangeText={(text) => setForm({ ...form, contactPerson: text })}
      />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.input}
        value={form.contactNumber}
        onChangeText={(text) => setForm({ ...form, contactNumber: text })}
        keyboardType="phone-pad"
      />

      {/* Placeholder for document upload */}
      <Text style={styles.sectionTitle}>Upload Documents</Text>
      <View style={styles.uploadSection}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Select Document</Text>
        </TouchableOpacity>
      </View>

      {/* Save Button */}
      <Button title="Submit Registration" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#0056b3',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  uploadSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegistrationForm;