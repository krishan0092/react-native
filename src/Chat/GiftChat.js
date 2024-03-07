import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';

const GiftChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://th-i.thgim.com/public/incoming/5madbe/article66511280.ece/alternates/LANDSCAPE_1200/2015-09-13T184741Z_2122366025_TB3EB9D1G76H6_RTRMADP_3_TENNIS-OPEN.JPG',
        },
      },
    ]);
  }, []);

  const onSend = (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  };
  return (
    <GiftedChat
      messages={messages}
      
      onSend={messages => onSend(messages)}
      renderInputToolbar={props => {
        return (
          <InputToolbar
            {...props}
            containerStyle={{
              borderTopWidth: 3,
              borderTopColor: '#367766',
              backgroundColor: 'black',
            }}
            user={{
              _id: 1,
              
            }}
          />
        );
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{right: {backgroundColor: 'green'}}}
          />
        );
      }}
    />
  );
};
export default GiftChat;
