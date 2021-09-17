import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {globalStyles} from "../styles/global";
import Card from "../shared/Card";


export default function PostDetails({route, navigation}) {
  const {title, image,body } = route.params
  return (
     <View style={globalStyles.container}>
       <Card>
         <View style={styles.postContainer}>
           <Image source={{uri: image.url}} style={globalStyles.image}/>
           <Text style={globalStyles.title}>{title}</Text>
           <Text style={globalStyles.body}>{body}</Text>
         </View>

       </Card>
     </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    // flexDirection:'row'
  }
})