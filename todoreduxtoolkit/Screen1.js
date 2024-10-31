import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#999"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8a2be2',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
    color: '#000',
  },
  button: {
    backgroundColor: '#00bcd4',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen1;