import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <Image
          source={require('../assets/images/work.png')} // Replace with your illustration path
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Discover Your</Text>
      <Text style={styles.title}>Dream Job here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study
        major
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
         <Link href={'/login'}> <Text style={styles.buttonText}>Login</Text></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Link href={'/register'}> <Text style={styles.buttonText}>Register</Text></Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  illustration: {
    marginBottom: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});