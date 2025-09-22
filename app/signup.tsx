import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import SheetButton from '@/components/SheetButton';

const Signup = () => {
  const router=useRouter();
      const onPresss=()=>{
          router.navigate("/login");
      };
    return (
      <View>
        <SheetButton title={"shigup"} onPress={onPresss}/>
      </View>
    )
}

export default Signup