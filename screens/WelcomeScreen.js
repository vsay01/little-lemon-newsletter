import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../assets/little-lemon-logo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.regularText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate('SubscribeScreen')} style={styles.button}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  )
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  regularText: {
    fontSize: 24,
    margin: 60,
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
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
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});