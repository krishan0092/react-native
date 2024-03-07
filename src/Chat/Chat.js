import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [
      ...messages,
      {id: messages.length, text: newMessage, sender: 'user'},
    ];
    setMessages(updatedMessages);
    setNewMessage('');
  };
  const handleSend2 = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [
      ...messages,
      {id: messages.length, text: newMessage, sender: 'reciver'}, 
    ];
    //console.log(updatedMessages)
    setMessages(updatedMessages);
    setNewMessage('');
  };
  const renderItem = ({item}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend2}>
          <Text style={styles.sendButtonText}>Send 1</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8',
    marginRight: 10,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF8765',
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FF8788',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#f5f5',
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#0084ff',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ChatApp;