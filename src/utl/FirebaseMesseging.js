// push-notifications demo...

import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';

export const requestUserPermission = async () => {
  if (Platform.OS === 'ios') {
    //Request iOS permission
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } else if (Platform.OS === 'android') {
    //Request Android permission (For API level 33+, for 32 or below is not required)
    const res = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
};

export const getFCMToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('Your Firebase Token is:', fcmToken);
  } else {
    console.log('Failed', 'No token received');
  }
};

export const getnotification = (async = () => {
  messaging().onMessage(async remoteMessage => {
    console.log('Message received!', remoteMessage);
  });

  //   messaging().onNotification(notification => {
  //     console.log('Notification received!', notification);
  //   });

  //   messaging().onNotificationOpened(notificationOpen => {
  //     console.log('Notification opened!', notificationOpen);
  //   });
});
