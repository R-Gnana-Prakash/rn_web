import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'


const Drawer = ({navigation}) => {

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
         <Text>Navigate to next</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Drawer
