import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './Component';
import MyState from './myState'
export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent></MyComponent>
      <MyComponent text="The Component is here!" />
      <MyState></MyState>
      <StatusBar style="auto" />
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
