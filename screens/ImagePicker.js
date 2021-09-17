import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';


export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Button title="Pick an image from camera roll" onPress={pickImage}/>
       {image && <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
     </View>
  );
}