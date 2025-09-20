import { View, Text } from 'react-native'
import React from 'react'

const settings = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"red", width:400, height:90, backgroundColor:"yellow", fontSize:60}}>settings</Text>
      <Text style={{color:"white", width:800, height:80, backgroundColor:"blue", fontSize:60}}>hello, this is the settings page</Text>
    </View>
  )
}



export default settings