import React, {useEffect, useState} from 'react';
import {Button, Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {AntDesign} from '@expo/vector-icons';
import {Formik} from 'formik'
import * as ImagePicker from 'expo-image-picker';
import * as yup from 'yup'
import {pickImage} from "../utils/pickImage";

const Schema = yup.object({
  title: yup.string()
     .required()
     .min(5),
  body: yup.string()
     .required()
     .min(5),
  image: yup.object({
    url: yup.string().required(),
    description: yup.string().required()
  })
})

export default function Form({closeModal, addPost}) {

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  return (
     <View style={globalStyles.container}>
       <AntDesign name="close" size={24} color="black" style={styles.close} onPress={closeModal}/>
       <Formik
          validationSchema={Schema}
          initialValues={{ title: '', body: '',image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'}}}
          onSubmit={(values, actions) => {
            values.image.url = image || 'https://via.placeholder.com/150'
            actions.resetForm();
            addPost(values);
          }}
       >
         {props => (
            <View>
              <TextInput
                 style={globalStyles.input}
                 placeholder='Post title'
                 placeholderTextColor={'black'}
                 onChangeText={props.handleChange('title')}
                 onBlur={props.handleBlur('title')}
                 value={props.values.title}
              />
              <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

              <TextInput
                 style={globalStyles.input}
                 multiline minHeight={60}
                 placeholder='Description'
                 placeholderTextColor={'black'}
                 onChangeText={props.handleChange('body')}
                 onBlur={props.handleBlur('body')}
                 value={props.values.body}
              />
              <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
              <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{uri: image}} style={{ width: 200, height: 200 }}/>}
              </View>

              <Button onPress={props.handleSubmit} title='submit' />
            </View>
         )}
       </Formik>
     </View>
  )
}

const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: 20,
    left: 0,
    padding: 20

  }
})