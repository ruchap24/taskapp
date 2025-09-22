import { View, Text } from 'react-native'
import React from 'react'
import SheetButton from '@/components/SheetButton'
import { useRouter } from "expo-router";

const Login = () => {
    const router=useRouter();
    const onPresss=()=>{
        router.navigate("/signup");
    };
  return (
    <View>
      <SheetButton title={"login"} onPress={onPresss}/>
    </View>
  )
}

export default Login