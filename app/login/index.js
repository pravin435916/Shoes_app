import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login here</Text>
        <Text style={styles.headerSubText}>
          Welcome back you've been missed!
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href={'/hero'}> <Text style={styles.buttonText}>Sign in</Text></Link>
          {/* <Text style={styles.buttonText}>Sign in</Text> */}
        </TouchableOpacity>
        <Text style={styles.accountText}>
          Create new account
        </Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="apple" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.continueText}>Or continue with</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  headerSubText: {
    fontSize: 16,
    color: '#000',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  continueText: {
    textAlign: 'center',
  },
});

export default login;