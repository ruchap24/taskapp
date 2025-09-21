import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>
                      button h bhaii
                  </Text>
      <Link href={"/login"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Go to Login</Text>
      </Link>
      <Link href={"/signup"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Go to Signup</Text>
      </Link>
      <Link href={"/modal"} >
        <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Open Modal</Text>
      </Link>
    </View>
  )
}

export default Index