import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const PaymentScreen = () => {
  const [dueDate, setDueDate] = useState(new Date().getDate() + 15);
  const [amount] = useState(800);
  const [paid, setPaid] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Function to handle payment reminders
  const sendPaymentReminder = () => {
    const reminderDates = [1, 5, 10, 14, 15];
    const today = new Date().getDate();

    if (reminderDates.includes(today)) {
      Alert.alert("Payment Reminder", "Your payment of ₹800 is due. Please make your payment.");
    }
  };

  // Function to handle payment completion
  const handlePayment = () => {
    setPaid(true);
    setPaymentHistory([...paymentHistory, { date: new Date().toLocaleDateString(), amount }]);
    Alert.alert("Payment Successful", "Thank you for your payment! A receipt has been sent to your email.");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sendPaymentReminder();
    }, 86400000); // Check every day
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment for October Therapy</Text>
      <Text style={styles.subtitle}>Due Amount: ₹{amount}</Text>
      <Text style={styles.text}>
        Your payment is due by the <Text style={styles.bold}>{dueDate}</Text> of this month.
      </Text>

      <View style={styles.qrCodeContainer}>
        <Image
          source={{ uri: 'https://www.frommers.com/system/media_items/attachments/000/870/669/s980/Fake_QR_Code.webp?1690224743' }}
          style={styles.qrCode}
        />
        <Text style={styles.qrCodeLabel}>Scan to Pay</Text>
      </View>

      {!paid ? (
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.successMessage}>Payment Completed! Thank you.</Text>
      )}

      {paid && (
        <View style={styles.receiptContainer}>
          <Text style={styles.receiptTitle}>Payment Receipt</Text>
          <Text style={styles.receiptText}>Amount: ₹{amount}</Text>
          <Text style={styles.receiptText}>Date: {new Date().toLocaleDateString()}</Text>
        </View>
      )}

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Payment History</Text>
        {paymentHistory.length > 0 ? (
          paymentHistory.map((payment, index) => (
            <Text key={index} style={styles.historyItem}>
              ₹{payment.amount} on {payment.date}
            </Text>
          ))
        ) : (
          <Text style={styles.historyItem}>No payment history available.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#2980B9',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: '#34495E',
  },
  bold: {
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
    borderColor: '#2980B9',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
  qrCodeLabel: {
    marginTop: 10,
    fontSize: 16,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: '#2980B9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: '#27AE60',
    textAlign: 'center',
    marginTop: 20,
  },
  receiptContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E9F7EF',
    borderRadius: 10,
    borderColor: '#27AE60',
    borderWidth: 2,
  },
  receiptTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27AE60',
    textAlign: 'center',
  },
  receiptText: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
  },
  historyContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F0F4F7',
    borderRadius: 10,
    borderColor: '#2980B9',
    borderWidth: 2,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980B9',
    textAlign: 'center',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    color: '#34495E',
  },
});

export default PaymentScreen;
