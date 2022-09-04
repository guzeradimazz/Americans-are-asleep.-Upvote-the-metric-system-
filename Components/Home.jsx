import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import { useState } from 'react'
export const Home = ({ navigation, isPremium, SetIsPremium }) => {
    const toDistance = () => {
        navigation.navigate('Distance')
    }
    const toWeight = () => {
        navigation.navigate('Weight')
    }
    const toTemperature = () => {
        navigation.navigate('Temperature')
    }
    const getPremium = () => {
        isPremium ? SetIsPremium(false) : SetIsPremium(true)
    }
    const [isShow, SetIsShow] = useState(false)

    if (isShow) {
        return (
            <View style={styles.modalWrapper}>
                <View style={isShow ? styles.showTrue : styles.showFalse}>
                    <Pressable onPress={() => SetIsShow(!isShow)}>
                        <Image
                            style={{
                                right: 0,
                                position: 'absolute',
                                marginRight: 10,
                                marginTop: 10,
                                width: 30,
                                height: 30
                            }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/463/463612.png'
                            }}
                        ></Image>
                    </Pressable>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 24,
                            textAlign: 'center',
                            marginTop: 60,
                            marginBottom: 20
                        }}
                    >
                        Why Premium?
                    </Text>
                    <View style={styles.modalLine}>
                        <Image
                            style={styles.star}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/616/616489.png'
                            }}
                        />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            {' '}
                            NO MORE ADS
                        </Text>
                    </View>
                    <View style={styles.modalLine}>
                        <Image
                            style={styles.star}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/616/616489.png'
                            }}
                        />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            MORE CONVERTATIONS
                        </Text>
                    </View>
                    <View style={styles.modalLine}>
                        <Image
                            style={styles.star}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/616/616489.png'
                            }}
                        />
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            SPECIAL DESIGN
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.nav}>
                <Pressable
                    style={isPremium ? styles.navItemPremium : styles.navItem}
                    onPress={toDistance}
                >
                    <Text
                        style={
                            isPremium
                                ? styles.navItemTxtPremium
                                : styles.navItemTxt
                        }
                    >
                        Distance
                    </Text>
                </Pressable>
                <Pressable
                    style={isPremium ? styles.navItemPremium : styles.navItem}
                    onPress={toWeight}
                >
                    <Text
                        style={
                            isPremium
                                ? styles.navItemTxtPremium
                                : styles.navItemTxt
                        }
                    >
                        Weight
                    </Text>
                </Pressable>
                <Pressable
                    style={isPremium ? styles.navItemPremium : styles.navItem}
                    onPress={toTemperature}
                >
                    <Text
                        style={
                            isPremium
                                ? styles.navItemTxtPremium
                                : styles.navItemTxt
                        }
                    >
                        Temperature
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.mainTxt}>Welcome to unit converter!</Text>
                <Text style={styles.mainTxt2}>
                    Click on any tab below and convert values...
                </Text>
            </View>
            <View style={styles.wrapperBtn}>
                <Pressable
                    style={
                        isPremium ? styles.btnPremiumFull : styles.btnPremium
                    }
                    onPress={getPremium}
                >
                    <Text style={styles.btnPremiumTxt}>
                        {isPremium ? 'Off Premium' : 'Take Premium'}
                    </Text>
                </Pressable>
            </View>
            <View style={styles.wrapperTxt}>
                <Pressable onPress={() => SetIsShow(!isShow)}>
                    <Text>why premium?</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1
    },
    modalWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
        width: '100%'
    },
    mainTxt: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 100
    },
    mainTxt2: {
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    navItem: {
        backgroundColor: '#000',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    navItemPremium: {
        backgroundColor: '#f2c11f',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#f2c11f',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    navItemTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    navItemTxtPremium: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20
    },
    wrapperBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    btnPremium: {
        backgroundColor: '#999',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    btnPremiumFull: {
        shadowColor: '#f2c11f',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        backgroundColor: '#f2c11f',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        borderRadius: 5
    },
    btnPremiumTxt: {
        textAlign: 'center',
        fontSize: 26
    },
    wrapperTxt: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    showTrue: {
        display: 'flex',
        position: 'absolute',
        width: '70%',
        height: '50%',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 15
    },
    showFalse: {
        display: 'none'
    },
    star: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    modalLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
})
