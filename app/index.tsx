import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Link href={"/login"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Go to Login</Text>
      </Link>
      <Link href={"/signup"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Go to Signup</Text>
      </Link>
      <Link href={"/todo"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Go to todos</Text>
      </Link>
      <Link href={"/randomnumber"} style={{fontSize:16, color:"white", fontWeight:"bold"}}>
        <Text>Generate a random number</Text>
      </Link>
      <Link href={"/modal"} >
        <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>Open Modal</Text>
      </Link>
    </View>
  )
}

export default Index