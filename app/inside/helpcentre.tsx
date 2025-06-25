import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HelpCenterScreen = () => {
  const [expanded, setExpanded] = useState(null);
  const [question, setQuestion] = useState('');

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer a variety of services including counseling, therapy, and community support programs."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment through our app or by calling our office directly."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open Monday to Friday from 9 AM to 5 PM."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept various insurance plans. Please contact us for more details."
    },
    {
      question: "How can I donate to your organization?",
      answer: "You can donate through our website or directly via our app. Every contribution helps us serve the community better."
    },
    {
      question: "What is the address of your center?",
      answer: "Our center is located at [Your Center Address]. You can find directions on our website or contact us for assistance."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations are tax-deductible. We provide receipts for all contributions."
    },
    {
      question: "How do you use donations?",
      answer: "Donations help us fund our programs, support our community services, and maintain our facilities."
    },
  ];

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleAskQuestion = () => {
    // Add your logic to handle the question submission here
    console.log("Submitted question:", question);
    setQuestion('');
    alert("Your question has been submitted!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help Center</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity onPress={() => handlePress(index)} style={styles.question}>
            <Text style={styles.questionText}>{faq.question}</Text>
          </TouchableOpacity>
          {expanded === index && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
      
      <View style={styles.askContainer}>
        <Text style={styles.askTitle}>Ask a Question</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your question here..."
          value={question}
          onChangeText={setQuestion}
        />
        <Button title="Submit" onPress={handleAskQuestion} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  faqContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  question: {
    paddingVertical: 10,
  },
  questionText: {
    fontSize: 18,
    color: '#007BFF',
  },
  answerContainer: {
    paddingVertical: 5,
    paddingLeft: 10,
  },
  answerText: {
    fontSize: 16,
    color: '#333',
  },
  askContainer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 15,
  },
  askTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default HelpCenterScreen;
