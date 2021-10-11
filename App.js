import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';

export default function App() {

  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Beans'},
    {id: Math.random(), text: 'Rice'},
    {id: Math.random(), text: 'Yam'},
    {id: Math.random(), text: 'Spagetti'},
    {id: Math.random(), text: 'Beans'},
    {id: Math.random(), text: 'Rice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems =>{
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = text => {
    if(!text){
      Alert.alert('Error', 'Please Enter an Item', {text: 'Ok'})
    }
    else{
      setItems(prevItems => {
        return [{id: Math.random(), text},...prevItems]
      })
    }
    
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> }
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
