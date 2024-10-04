import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        {/* Logo on the left */}
        <View style={styles.logoContainer}>
        <Link href={'/Home'}><Text> - </Text></Link> 
          <Text style={styles.logoText}>Wishlist</Text>
        </View>

        {/* Icons on the right */}
        <View style={styles.iconsContainer}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <Feather name="bell" size={24} color="black" />
        </View>
      </View>

      {/* Wrap content in ScrollView to enable scrolling */}

            <ScrollView>
        {/* Shoe Cards */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' }}
              style={styles.shoeImage}
            />
            <Text style={styles.cardText}>Shoe 1</Text>
            <Text style={styles.price}>$99</Text>
            <Text style={styles.details}>Comfortable running shoes</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' }}
              style={styles.shoeImage}
            />
            <Text style={styles.cardText}>Shoe 2</Text>
            <Text style={styles.price}>$120</Text>
            <Text style={styles.details}>Stylish casual shoes</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' }}
              style={styles.shoeImage}
            />
            <Text style={styles.cardText}>Shoe 3</Text>
            <Text style={styles.price}>$89</Text>
            <Text style={styles.details}>High-performance shoes</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' }}
              style={styles.shoeImage}
            />
            <Text style={styles.cardText}>Shoe 4</Text>
            <Text style={styles.details}>Elegant sports shoes</Text>
            <Text style={styles.price}>$140</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'orange',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  shoeImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  details: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});
