import { Image, TextInput, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const Fallback = () => {
    return (
        <View style={{alignItems: "center"}}>
            <Image source={require("../../images/todo_1.jpeg")} style={{ height:320, width: 320, marginTop:110,  borderRadius:40}} />
            <Text style={{marginTop:10, fontSize:20, fontWeight:"800"}}>Start Adding Your Task!</Text>
        </View>
    );
};

export default Fallback;