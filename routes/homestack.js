import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home'
import Header from "../shared/Header";
import PostDetails from "../screens/PostDetails";

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
                        options={{
                          headerTitle: () => <Header title={'Home'}/>,
                          headerStyle: {
                            height: 60
                          } }}/>
          <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
    );
}