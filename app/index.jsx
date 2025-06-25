import { Link } from 'expo-router';//derirect to other pages
import React, { useState,useEffect,} from 'react';//usestate-use variables in jsx ,useeffect -run on render
import { Image, StyleSheet, Text, View,SafeAreaView  } from 'react-native';
//import AppointmentCalendar from '../../components/admin/admincalender';
//import favicon from '../../assets/images/favicon.png'; // Import the logo image
import AsyncStorage from '@react-native-async-storage/async-storage';//acts as session 
import App from './inside/index';
import Admin from './admin/index';
import { router } from 'expo-router';
const Home = () => {
  const [loading, setLoading] = useState(false);
    const [userId ,setUid] =useState(null);
    const [isAdmin ,setisAdmin] = useState('false');
useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      const isAdmin = await AsyncStorage.getItem('isAdmin');
      console.log(isAdmin);
      setisAdmin(isAdmin);
      setUid(storedUserId);
    };
    checkLoginStatus();
  }, []);

  return (
      <>
      {userId ? ( isAdmin === 'true'? <Admin/>: <App/> ):
    
      <SafeAreaView style={styles.container}>
      <Image 
        source={{ uri:'https://s.tmimgcdn.com/scr/800x500/143100/therapy-logo-template_143176-original.jpg'}} // Use the imported logo image
        style={styles.logo}
      />
      <Text style={styles.title}>Vatsalya Trust Mumbai</Text>

      <View style={styles.linkContainer}>
        <Link href={'/login'} style={styles.linktag}>Login</Link>
        <Link href={'/signup'} style={styles.linktag}>Sign Up</Link>
      </View>
      </SafeAreaView>}
   
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    marginBottom: 100,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  linkContainer: {
    width: '100%',
    alignItems: 'center',
  },
  linktag: {
    width: "90%",
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 17,
    backgroundColor: '#5d4bdb', // Example button color
    color: '#fff',
    borderRadius: 10,
  },
});

export default Home;