import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

const shoeData = [
  {
    id: '1',
    name: 'Shoe 1',
    price: '$99',
    details: 'Comfortable running shoes',
    imageUrl: '../../assets/product/pic1.png',
  },
  {
    id: '2',
    name: 'Shoe 2',
    price: '$120',
    details: 'Stylish casual shoes',
    imageUrl: '../../assets/product/pic2.png',
  },
  {
    id: '3',
    name: 'Shoe 3',
    price: '$89',
    details: 'High-performance shoes',
    imageUrl: '../../assets/product/pic3.png',
  },
  {
    id: '4',
    name: 'Shoe 4',
    price: '$140',
    details: 'Elegant sports shoes',
    imageUrl: '../../assets/product/pic4.png',
  },
];

const Index = () => {
  const renderShoeCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.shoeImage} />
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.details}>{item.details}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Sport Shoes</Text>
        </View>
        <View style={styles.iconsContainer}>
         <Link href={'/wishlist'}> <AntDesign name="hearto" size={24} color="black" /></Link>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <Feather name="bell" size={24} color="black" />
        </View>
      </View>

      {/* Search Box */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search for shoes"
        />
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="white" />
        </View>
      </View>
     <View style={styles.banners}>
        <Image source={{ uri: '../../assets/product/banner.png' }} style={styles.banner1} />
     </View>
      {/* FlatList to display shoe cards */}
      <FlatList
        data={shoeData}
        renderItem={renderShoeCard}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

export default Index;

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
  banner1:{
    width:'85%',
    marginVertical:15,
    height:100,
    borderRadius:'20px'
  },
  cardsContainer: {
    marginTop: 20,
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
    color: 'orange',
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
