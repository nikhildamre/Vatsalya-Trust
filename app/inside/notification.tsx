import React from 'react';
import { View, Button } from 'react-native';
import  sendPushNotification  from './notificsend'; // Make sure the sendPushNotification function is accessible
import Constants from 'expo-constants';
const OtherPage = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Send Notification from Other Page"
        onPress={async () => {
          if (expoPushToken) {
            await sendPushNotification();
          } else {
            alert('Push token not available');
          }
        }}
      />
    </View>
  );
};

export default OtherPage;
