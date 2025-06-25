import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const locations = [
  {
    name: "Kanjurmarg",
    address: "Near Kanjurmarg Police Station, Kanjurmarg (E) Mumbai 400042",
    phone: ["022-25782958", "022-25794798", "022-25784810"],
    mobile: ["8422883149", "8422883150"],
    email: "admin.kanjurmarg@vatsalyatrustmumbai.org",
    activities: [
      "Child Care (Orphanage) & Rehabilitation (Adoption)",
      "Counselling & Therapy Centre for children with special needs",
      "Khushi - Child Parent Guidance Centre",
      "Aakar - Early Intervention Centre",
      "Sankalp - Home for disabled orphans",
      "Disha - Outreach activity",
      "Vocational Skill Centre for disabled"
    ]
  },
  {
    name: "Sanpada",
    address: "Plot No.11, Sector 2 Near Oriemtal College, Sanpada Navi Mumbai 400705",
    phone: ["8422883141", "8422883148", "8591046910"],
    email: "admin.sanpada@vatsalyatrustmumbai.org",
    activities: [
      "Balikashram: Home for Girls",
      "Old Age Home",
      "Women Empowerment & Skill Development",
      "Patient Assistant Programme",
      "Digital Literacy"
    ]
  },
  {
    name: "Alibag",
    address: "House No.1510-B-2 Behind Mayur Bakery, Alibag Dist Raigad 402201",
    phone: ["8554884004"],
    email: "admin.alibag@vatsalyatrustmumbai.org",
    activities: [
      "Child Care (Orphanage)",
      "Rehabilitation Centre",
      "Proposed: Digital Literacy"
    ]
  },
  {
    name: "Badlapur",
    address: "Mauje Bhoj Survey No.12/1 12/2 13/1, Badlapur Dist Thane",
    phone: ["9821028578"],
    activities: [
      "Medical Centre",
      "Rehabilitation Centre",
      "Proposed: Old Age Home",
      "Women Empowerment & Skill Development",
      "Patient Assistant Programme",
      "Digital Literacy"
    ]
  },
  {
    name: "Kurla",
    address: "Bhagini Mandal, Brahmanwadi, Moreshwar Patankar Marg, Kurla (West), Mumbai 400070",
    phone: ["7977895175"],
    email: "admin.kurla@vatsalyatrustmumbai.org",
    activities: [
      "Computer Training Centre",
      "Beauty and Wellness Centre",
      "Tailoring and Fashion",
      "Mobile Repairing Course"
    ]
  },
];

const LocationPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Locations - Vatsalya Trust Mumbai</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {locations.map((location, index) => (
          <View key={index} style={styles.locationCard}>
            <Text style={styles.locationName}>{location.name}</Text>
            <Text style={styles.address}>{location.address}</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <MaterialIcons name="phone" size={20} color="#007BFF" />
                <Text style={styles.phoneLabel}>Phone:</Text>
                <View style={styles.phoneNumbers}>
                  {location.phone.map((phone, idx) => (
                    <Text key={idx} style={styles.phone}>{phone}</Text>
                  ))}
                </View>
              </View>
              {location.mobile && location.mobile.length > 0 && (
                <View style={styles.contactItem}>
                  <MaterialIcons name="mobile-friendly" size={20} color="#007BFF" />
                  <Text style={styles.phoneLabel}>Mobile:</Text>
                  <View style={styles.phoneNumbers}>
                    {location.mobile.map((mobile, idx) => (
                      <Text key={idx} style={styles.phone}>{mobile}</Text>
                    ))}
                  </View>
                </View>
              )}
              {location.email && (
                <View style={styles.contactItem}>
                  <MaterialIcons name="email" size={20} color="#007BFF" />
                  <Text style={styles.phoneLabel}>Email:</Text>
                  <Text style={styles.email}>{location.email}</Text>
                  <TouchableOpacity onPress={() => Linking.openURL(`mailto:${location.email}`)}>
                    <Text style={styles.emailLink}>Send Email</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={styles.activitiesHeader}>Activities:</Text>
            {location.activities.map((activity, idx) => (
              <Text key={idx} style={styles.activity}>{activity}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  locationCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  locationName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#007BFF',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  contactInfo: {
    marginVertical: 10,
  },
  contactItem: {
    flexDirection: 'column', // Stack the icon and text vertically
    marginBottom: 5,
  },
  phoneLabel: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneNumbers: {
    flexDirection: 'column', // Stack phone numbers vertically
    marginLeft: 30,
  },
  phone: {
    color: '#007BFF',
  },
  email: {
    marginLeft: 5,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  emailLink: {
    marginLeft: 5,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  activitiesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  activity: {
    fontSize: 16,
    color: '#555',
    marginVertical: 3,
    paddingLeft: 20,
    position: 'relative',
  },
});

export default LocationPage;
