import React from 'react'
import {ImageBackground, StyleSheet, Text, View} from "react-native";

export default function Header({title}) {
  return (
     <ImageBackground source={{uri: 'https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg'}} style={styles.header}>
       <View style={styles.headerTitle}>
         <Text style={styles.headerText}>{title}</Text>
       </View>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row'
  },
})