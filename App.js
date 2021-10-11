import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {

  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Beans'},
    {id: Math.random(), text: 'Rice'},
    {id: Math.random(), text: 'Yam'},
    {id: Math.random(), text: 'Spagetti'},
    {id: Math.random(), text: 'Beans'},
  ])

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} /> }
        keyExtractor={item => item.id}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
