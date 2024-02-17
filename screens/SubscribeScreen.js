import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, Alert } from 'react-native';
import { ValidateEmail, validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = useState('');
  const createSubscribeButtonAlert = () =>
    Alert.alert('', 'Thanks for subscribing, stay tuned!', [
      {
        text: 'OK',
        onPress: () => console.log('subscribed button pressed'),
      }
    ]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../assets/little-lemon-logo-grey.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.regularText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={newEmail => onChangeEmail(newEmail)}
        placeholder={'Type your email'}
      />
      <View>
        {console.log(validateEmail(email) != null)}
      </View>

      <Pressable disabled={validateEmail(email) == null} onPress={createSubscribeButtonAlert} style={validateEmail(email) ? styles.button : styles.buttonDisable}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  regularText: {
    fontSize: 20,
    margin: 14,
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 30
  },
  button: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3e524b',
    marginBottom: 50,
    bottom: 0
  },
  buttonDisable: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ccc',
    marginBottom: 50,
    bottom: 0
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  inputBox: {
    width: "90%",
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 8,
    margin: 10
  },
});