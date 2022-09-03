import react from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const Home = ({ navigation }) => {
    const toDistance = () => {
        navigation.navigate('Distance')
    }
    const toWeight = () => {
        navigation.navigate('Weight')
    }
    const toTemperature = () => {
        navigation.navigate('Temperature')
    }

    return (
        <View >
            <View style={styles.nav}>
                <Button title='Distance' onPress={toDistance} />
                <Button title='Weight' onPress={toWeight} />
                <Button title='Temperature' onPress={toTemperature} />
            </View>
            <View>
                <Text style={styles.mainTxt}>
                    Welcome to unit converter! Click on any tab below and convert values...
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    nav: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    mainTxt:{
        fontSize:26,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginTop:100
    }
})