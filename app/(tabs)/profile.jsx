import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQGwb2f1ONSERg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725645542157?e=1733356800&v=beta&t=UD9Z__PTaGmL2u5Pbd8xnRecG6hyFIz4MvVWpwFGGoM' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Pravin Nandankar</Text>
        <Text style={styles.email}>pravin@gmail.com</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <ProfileOption
          icon={<FontAwesome name="shopping-bag" size={24} color="orange" />}
          title="Your Orders"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<MaterialIcons name="favorite" size={24} color="orange" />}
          title="Saved Items"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<FontAwesome name="credit-card" size={24} color="orange" />}
          title="Payment Methods"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<MaterialIcons name="settings" size={24} color="orange" />}
          title="Settings"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<FontAwesome name="sign-out" size={24} color="orange" />}
          title="Log Out"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

// Reusable Profile Option component
const ProfileOption = ({ icon, title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.option}>
    <View style={styles.optionIcon}>{icon}</View>
    <Text style={styles.optionText}>{title}</Text>
    <FontAwesome name="angle-right" size={24} color="orange" />
  </TouchableOpacity>
);

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  email: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 4,
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    color: '#455A64',
  },
};

export default profile;
