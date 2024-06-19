import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';

const DividerText = ({ text }) => (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.line} />
    </View>
);

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  const handleLinkPress = () => {
    Linking.openURL('https://example.com'); // Replace with your URL
  };



  return (
    <View style={styles.container}>
      <Text style={styles.name}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back 👋</Text>
      <Text style={styles.subText}>Lets log in and apply jobs!</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <DividerText text="Or continue with" />
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/0/747.png' }} style={styles.image} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }} style={styles.image} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }} style={styles.image} />
      </View>
      <Text style={styles.low}>Don't Have Account?
      <Text style={styles.register} >Register</Text>
      </Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FAFAFD',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  name : {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 10,
    textAlign: 'left',
    color: '#356899',
  },
  welcomeText: {
    fontSize: 24,
    width: 207,
    height: 34,
    lineHeight: 33.6,
    letterSpacing: -1.5,
    marginBottom: 8,
    textAlign: 'left',
    color: '#0D0D26',
  },
  subText: {
    fontSize: 14,
    marginBottom: 16,
    height: 22,
    width: 170,
    textAlign: 'left',
    opacity: 0.4,
    letterSpacing: -1,
  },
  button: {
    backgroundColor: '#356899',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    opacity: 0.6,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: 'gray',
  },
  low: {
    opacity: 0.5,
    textAlign: 'center',
  },
  register: {
    color: '#356899',
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 16,
    color: '#356899',
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 9,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
  },
});

export default LoginScreen;
