import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { toast } from '@baronha/ting';
// ...
const options = {
  title: 'Done 😎',
    duration: 10,
  message: 'Successful!!',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed})=>({
          paddingVertical:15,
          paddingHorizontal:30,
          borderRadius: 100,
          backgroundColor: pressed ? 'lightgray' : 'white'
      })} onPress={()=>{
        toast(options); // easy to use
      }}>
        <Text style={{
            color: '#2a2a2a',
            fontWeight: 'bold',
            fontSize: 20
        }}>Show awesome toast‍🔥</Text>
      </Pressable>
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
