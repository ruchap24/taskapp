import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

const Button = ()=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={{
            backgroundColor:"orange",
            paddingHorizontal:40,
            paddingVertical:15,
            borderRadius:10,
        }}
        >
            <Text style={{fontSize:16, color:"white", fontWeight:"bold"}}>
                button h bhaii
            </Text>
        </TouchableOpacity>
    )
}

export default Button;