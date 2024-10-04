import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
// import { postsListJson } from './postsList';

export default function App() {
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos"
    const response = await fetch(url);
    const responseJson = await response.json();
    setPostsList(responseJson)
  }
  useLayoutEffect(() => {
    console.log("Before dom build")

  }, [])
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor='#000' 
      animated={true} style={"light"} /> */}
      <Button title='Go to home' onPress={() => router.push("home")} />
      <FlatList
        data={postsList}
        renderItem={({ item, index }) => {
          return <View>
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{
                height: 100,
                width: 100
              }}
            />
            <Text>{item.title}</Text></View>
        }}
        initialNumToRender={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
