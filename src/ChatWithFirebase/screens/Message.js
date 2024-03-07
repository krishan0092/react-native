import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Chats from './Chats';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  useEffect(() => {
    updatemessage();
  }, []);

  const updatemessage = () => {
    const subscirbe = firestore()
      .collection('Chats')

      .doc(route.params.id + route.params.data.userId)
      .collection('messages')

      .orderBy('createdAt', 'desc');
    subscirbe.onSnapshot(querysnapshot => {
      const allMeassages = querysnapshot.docs.map(item => {
        return {...item.data, createdAt: Date.parse(new Date())};
      });

      //console.log(allMeassages, '.......');
      setMessages(allMeassages);
    });
    return () => subscirbe();
  };

  const onSend = (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sender: route.params.id,
      receiver: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + route.params.data.userId + route.params.id)
      .collection('messages')
      .add(myMsg);
    console.log(myMsg);
  };
  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
      />
    </View>
  );
};

export default Message;
