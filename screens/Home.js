import React, {useState} from 'react'
import {
  FlatList,
  Image,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Card from '../shared/Card'
import Form from "./Form";
import {globalStyles} from "../styles/global";
import {AntDesign} from '@expo/vector-icons';


export default function Home({navigation}) {
    const [posts, setPosts] = useState([
      {title: 'Test Post', body: 'My new post', image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'},key: '1'},
      {title: 'Test Post 2', body: 'My newer post', image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'}, key: '2'},
      {title: 'Test Post 3', body: 'My newest post', image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'}, key: '3'},
      {title: 'Test Post 3', body: 'My newest post', image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'}, key: '4'},
      {title: 'Test Post 3', body: 'My newest post', image: {url: 'https://via.placeholder.com/150', description: 'Placeholder'}, key: '5'},
    ])
    const [modalOpen, setModalOpen] = useState('false')

    const addPost = ((newPost = {}) => {
      newPost.key = Math.random().toString()
      setPosts(cur => [newPost, ...cur])
      setModalOpen(false)
    })
    return (

        <View style={globalStyles.container}>
          <Modal visible={modalOpen} style={styles.modal}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modal}>
                <Form closeModal={() => setModalOpen(!modalOpen)} addPost={addPost}/>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <AntDesign name="plus" size={24} color="black" style={styles.plusSign} onPress={() => setModalOpen(!modalOpen)}/>
            <FlatList
            data={posts}
            renderItem={({item}) => (
               <TouchableOpacity onPress={() => navigation.navigate('PostDetails', item)} style={styles.cardContainer}>
                 <Card>
                   <View>
                    <Image source={{uri: item.image.url}} style={globalStyles.image}/>
                    <Text style={globalStyles.title}>{item.title}</Text>
                   </View>
                 </Card>
               </TouchableOpacity>
              )}/>
        </View>
    )
}
const styles = StyleSheet.create({

  plusSign: {
    marginVertical: 10,
    borderWidth: .5,
    borderRadius: 3,
    borderColor: '#D3D3D3'
  },
  modal: {
    flex: 1,
  }
})