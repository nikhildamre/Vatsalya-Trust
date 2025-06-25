import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const projects = [
  {
    name: 'Balikashram - Home for Destitute Girls',
    description: `Balikashram provides shelter, nourishment, and education to over 50 orphan and destitute girls, emphasizing personality development and confidence. The project includes medical care, counseling, and vocational skills training.`,
    image: 'https://www.vatsalyatrustmumbai.org/images/WebSiteImg_Balikashram.jpg',
  },
  {
    name: 'Digital Literacy for Underprivileged',
    description: `The Digital Literacy program aims to enhance employability for underprivileged youth by providing computer training. Recognized by MKCL, it empowers economically weaker sections of society through skill development.`,
    image: 'https://blog.equinix.com/wp-content/uploads/2022/05/IN-CSR-image-2-738x414.jpg',
  },
  {
    name: 'Training on E-Vehicles at Janadhar Latur',
    description: `In collaboration with Janadhar, Vatsalya Trust trained 30 women waste collectors in Latur to operate E-Vehicles, enhancing their income and quality of life through valuable skills.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2022/11/1/IMG-20221031-WA0016_202211011359095922_H@@IGHT_400_W@@IDTH_1280.jpg',
  },
  {
    name: 'Rehabilitation Centre',
    description: `Vatsalya Trust’s Rehabilitation Centre provides therapy and support to over 2000 registered cases of special needs children, focusing on community-based programs and early intervention.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2020/4/15/2_12_21_50_Vatsalya-Rehab_1_H@@IGHT_300_W@@IDTH_600.jpg', // Add the actual image URL
  },
  {
    name: 'Earthmover Operator Training Program',
    description: `Savitribai Phule Mahila Ekatma Samaj Mandal(SPMESM) & Vatsalya Trust, Mumbai have commenced Earthmover Operator Training Program through the “Drive with Pride”.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2024/9/23/WhatsApp-Image-2024-09-10-at-4.22.27-PM-(1)_202409231509160381_H@@IGHT_300_W@@IDTH_1280.jpeg', // Add the actual image URL
  },
  {
    name: 'Collaboration with Saksham South',
    description: `Vatsalya Trust Mumbai in collaboration with Saksham South "Assam" Prant.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2024/9/23/WhatsApp-Image-2024-09-10-at-4.09.27-PM_202409231506156352_H@@IGHT_576_W@@IDTH_1280.jpeg', // Add the actual image URL
  },
  {
    name: 'Battery Operated Vehicles for Jeevan Rakshak',
    description: `Vatsalya Trust has helped Jeevan Rakshak Bahuudeshiya Sanstha, Meeraj with battery operated electrical vehicles.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2024/9/23/WhatsApp-Image-2024-09-10-at-3.58.12-PM_202409231457322835_H@@IGHT_960_W@@IDTH_1280.jpeg', // Add the actual image URL
  },
  {
    name: 'Certificates Distribution',
    description: `Certificates distributed by Swayamsiddha Mahila Mandal and Vatsalya Trust Mumbai.`,
    image: 'https://www.vatsalyatrustmumbai.org/Encyc/2024/9/23/WhatsApp-Image-2024-09-10-at-3.49.54-PM_202409231450451321_H@@IGHT_648_W@@IDTH_1103.jpeg', // Add the actual image URL
  },
];

const ProjectPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Our Projects</Text>
      </View>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectCard}>
          <Image source={{ uri: project.image }} style={styles.projectImage} />
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
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
  headerContainer: {
    backgroundColor: '#480ca9', // Change header background color
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', // Change header text color
  },
  projectCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  projectImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  projectName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#480ca9',
  },
  projectDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
});

export default ProjectPage;
