import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const DonationScreen = () => {
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleSubmit = () => {
    Alert.alert("Message Sent", "Thank you for reaching out!");
    setContactEmail('');
    setContactMessage('');
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Donations - Vatsalya Trust Mumbai</Text>

      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://sukanyaujjwalwelfarefoundation.in/assets/images/t.jpg' }} // Your banner image URL
          style={styles.bannerImage}
        />
      </View>

      <Text style={styles.subtitle}>Ways to Help</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/5d4bdb/clock.png' }} style={styles.icon} />
          <Text style={styles.bold}>Donate Your Time:</Text> Volunteering is a significant way to contribute.
        </Text>
        <Text style={styles.text}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/5d4bdb/giving.png' }} style={styles.icon} />
          <Text style={styles.bold}>Sponsor a Child:</Text> Build a meaningful relationship through child sponsorship.
        </Text>
        <Text style={styles.text}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/5d4bdb/money.png' }} style={styles.icon} />
          <Text style={styles.bold}>Financial Adoption:</Text> Help provide essential needs for children in need.
        </Text>
      </View>

      <Text style={styles.subtitle}>Donation Options</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          <Text style={styles.bold}>Online Donations:</Text> Use cards for Bank Transfer or State Bank Collect option.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Offline Donations:</Text> Make Cheque/DD in favor of ‘VATSALYA TRUST MUMBAI’.
        </Text>
      </View>

      <Text style={styles.subtitle}>Child Sponsorship Plans</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          <Text style={styles.bold}>- Sponsor a Girl Child:</Text> Rs. 2,000/month (Rs. 25,000/year)
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>- Sponsor an Infant Orphan:</Text> Rs. 1,200/month (Rs. 15,000/year)
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>- Sponsor a Special Needs Child:</Text> Rs. 6,000/month
        </Text>
      </View>

      <Text style={styles.subtitle}>Frequently Asked Questions</Text>
      {[
        { question: "What are the tax benefits of donating?", answer: "All Domestic Donations to the Trust are eligible for Income Tax exemption under section 80(G)." }, 
        { question: "How can I volunteer?", answer: "You can contact us to find out about available volunteering opportunities!" }
      ].map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>{item.question}</Text>
          </TouchableOpacity>
          {expandedFAQ === index && (
            <Text style={styles.faqAnswer}>{item.answer}</Text>
          )}
        </View>
      ))}

      <Text style={styles.subtitle}>Impact Stories</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          "Thanks to our sponsors, children like Meera can now go to school and dream of a better future!"
        </Text>
      </View>

      <Text style={styles.subtitle}>Contact Us</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={contactEmail}
          onChangeText={setContactEmail}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Message"
          value={contactMessage}
          onChangeText={setContactMessage}
          multiline
          numberOfLines={4}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Bank Details for Donations</Text>
      <View style={styles.card}>
        <Text style={styles.text}>**Domestic Donations**</Text>
        <Text style={styles.text}>Beneficiary: VATSALYA TRUST MUMBAI</Text>
        <Text style={styles.text}>Bank: State Bank of India</Text>
        <Text style={styles.text}>Branch: Kanjurmarg, Mumbai</Text>
        <Text style={styles.text}>Current A/c No: 35562836398</Text>
        <Text style={styles.text}>IFSC Code: SBIN0006249</Text>
      </View>

      <Text style={styles.subtitle}>For USA Donors</Text>
      <View style={styles.card}>
        <Text style={styles.text}>You can issue checks to India Development and Relief Fund, Inc. (IDRF).</Text>
        <Text style={styles.text}>Check mailing address: 5821 Mossrock Drive, North Bethesda, MD 20852-3239</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Soft background
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5d4bdb', // Primary Color
    textAlign: 'center',
  },
  banner: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#5d4bdb',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  input: {
    height: 50,
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#f7fafc',
  },
  button: {
    backgroundColor: '#5d4bdb', // Primary Color
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  faqHeader: {
    padding: 12,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    marginVertical: 5,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5d4bdb',
  },
  faqAnswer: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f7fafc',
    borderRadius: 10,
  },
});

export default DonationScreen;
