import react from "react";
import { View,Text,StyleSheet } from "react-native";

export const Temperature = ()=>{
    return(
        <View style={styles.wrapper}>
            <Text>Temperature</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#fff',
        height:'100%'
    }
})