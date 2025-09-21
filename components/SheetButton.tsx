import React from "react";
import { View, Text, Touchable, TouchableOpacity, StyleSheet } from "react-native";

const SheetButton = ({title, onPress})=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button} onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default SheetButton;


const styles = StyleSheet.create({
    button:{
        backgroundColor:"blue",
            paddingHorizontal:40,
            paddingVertical:15,
            borderRadius:10,
    },
    text:{fontSize:16, color:"white", fontWeight:"bold"}
});
