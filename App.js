import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Distance } from './Components/Distance'
import { Weight } from './Components/Weight'
import { Temperature } from './Components/Temperature'
import { Home } from './Components/Home'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Home'
                        options={{
                            title: 'Home',
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 26
                            }
                        }}
                        component={Home}
                    />
                    <Stack.Screen
                        name='Distance'
                        options={{
                            title: 'Distance Converter',
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 26
                            }
                        }}
                        component={Distance}
                    />
                    <Stack.Screen
                        name='Weight'
                        options={{
                            title: 'Weight Converter',
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 26
                            }
                        }}
                        component={Weight}
                    />
                    <Stack.Screen
                        name='Temperature'
                        options={{
                            title: 'Temperature Converter',
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 26
                            }
                        }}
                        component={Temperature}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
