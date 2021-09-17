import React from 'react';
import Navigator from './routes/homestack'
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";

export default function App() {
  return (

      <NavigationContainer style={styles.container}>
          <Navigator />
      </NavigationContainer>
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
