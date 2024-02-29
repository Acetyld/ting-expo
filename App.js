import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { toast } from '@baronha/ting';
// ...
const options = {
  title: 'Done 😎',
  message: 'Successful!!',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={{
          padding:10
      }} onPress={()=>{
        toast(options); // easy to use
      }}>
        <Text>Press me</Text>
      </Pressable>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
