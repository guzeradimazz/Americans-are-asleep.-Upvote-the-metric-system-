import react from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

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
        <View>
            <View style={styles.nav}>
                <Pressable style={styles.navItem} onPress={toDistance}>
                    <Text style={styles.navItemTxt}>Distance</Text>
                </Pressable>
                <Pressable style={styles.navItem} onPress={toWeight}>
                    <Text style={styles.navItemTxt}>Weight</Text>
                </Pressable>
                <Pressable style={styles.navItem} onPress={toTemperature}>
                    <Text style={styles.navItemTxt}>Temperature</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.mainTxt}>
                    Welcome to unit converter! Click on any tab below and
                    convert values...
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40
    },
    mainTxt: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 100
    },
    navItem: {
        backgroundColor: '#000',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5
    },
    navItemTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
})
