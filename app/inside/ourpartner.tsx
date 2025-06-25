import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const partners = [
  { name: 'Johnson & Johnson', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-Jonson-and-Jonson.jpg' },
  { name: 'L&T Infotech', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-L-and-T-Infotech.jpg' },
  { name: 'MKCL', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-mkcl.jpg' },
  { name: 'NSDL', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-Nsdl.jpg' },
  { name: 'Orange Foundation', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-orange-foundation1.jpg' },
  { name: 'RPG Foundation', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-RPG-Foundation.jpg' },
  { name: 'SBI Life', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-Sbi-life.jpg' },
  { name: 'UPS', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-ups.jpg' },
  { name: 'YCMOU', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_lg-ycmou11.jpg' },
  { name: 'NIIT Foundation', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_Niit-foundation.jpg' },
  { name: 'SBICAP Securities', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_Sbicap-securities.jpg' },
  { name: 'IDRF', image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_idrf-logo.jpg' },
];

const PartnersSection = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Our Partners</Text>
      {partners.map((partner, index) => (
        <View key={index} style={styles.partnerCard}>
          <Image source={{ uri: partner.image }} style={styles.partnerImage} />
          <Text style={styles.partnerName}>{partner.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  partnerCard: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  partnerImage: {
    width: '80%',
    height: 100,
    resizeMode: 'contain',
  },
  partnerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#007BFF', // Highlighted color for the name
    textAlign: 'center',
  },
});

export default PartnersSection;
