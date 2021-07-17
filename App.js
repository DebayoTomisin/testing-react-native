import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>my first line of native code</Text>
    //   <StatusBar style="auto" />
    // </View>
    <ScrollView >
      <Text>Some Text</Text>
      <View style={styles.container}>
        <Text>some more text</Text>
        <Image
          source={{ uri :'https://reactnative.dev/docs/assets/p_cat2.png', }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: '1rem'
        }}
        placeholder="Type something in me please"
      />
      </View>
    </ScrollView>
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
