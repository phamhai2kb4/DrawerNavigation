import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
