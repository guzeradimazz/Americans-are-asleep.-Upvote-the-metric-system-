import react, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image
} from 'react-native'
import { DropdownComponent } from './DropdownComponent'
import * as Clipboard from 'expo-clipboard'
import { isNumber } from '../utils/isNumber'

export const Weight = ({ isPremium }) => {
    const data = [
        { label: 'Kilograms', amount: 1000, value: 0 },
        { label: 'Grams', amount: 1, value: 1 },
        { label: 'Milligrams', amount: 0.01, value: 2 },
        { label: 'Pound', amount: 0.001, value: 3 }
    ]

    const data2 = [
        { label: 'Kilograms', amount: 1000, value: 0 },
        { label: 'Grams', amount: 1, value: 1 },
        { label: 'Milligrams', amount: 0.01, value: 2 },
        { label: 'Pound', amount: 0.001, value: 3 }
    ]

    const copyToClipboard1 = async () => {
        await Clipboard.setStringAsync(value1.toString())
    }

    const copyToClipboard2 = async () => {
        await Clipboard.setStringAsync(value2.toString())
    }

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()

    const onChangeInput1 = (i) => {
        if (!isNumber(+i)) return

        setValue1(i)

        if (option2) setValue2((+i * option1.amount) / option2.amount)
    }
    const onChangeInput2 = (i) => {
        if (!isNumber(+i)) return

        setValue2(i)
        setValue1((+i * option2.amount) / option1.amount)
    }

    const errDistance = () => {
        setValue1('')
        setValue2('')
        alert('Select unit')
    }

    return (
        <View style={styles.wrapper}>
            <DropdownComponent
                onChangeInput={onChangeInput1}
                inputValue={value1}
                data={data}
                value={option1}
                setValue={setOption1}
                isPremium={isPremium}
            />

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%'
                }}
            >
                <TextInput
                    maxLength={15}
                    placeholder='Enter value here'
                    style={isPremium ? styles.inputPremium : styles.input}
                    value={value1.toString()}
                    onChangeText={
                        isPremium
                            ? option1 && option2
                                ? onChangeInput1
                                : errDistance
                            : option1
                            ? onChangeInput1
                            : errDistance
                    }
                    keyboardType='numeric'
                ></TextInput>

                {isPremium ? (
                    <Pressable onPress={copyToClipboard1}>
                        <Image
                            style={{
                                right: 0,
                                marginRight: 10,
                                marginTop: 10,
                                width: 30,
                                height: 30
                            }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/4280/4280618.png'
                            }}
                        />
                    </Pressable>
                ) : null}
            </View>
            {isPremium ? (
                <DropdownComponent
                    onChangeInput={onChangeInput2}
                    inputValue={value2}
                    data={data2}
                    value={option2}
                    setValue={setOption2}
                    isPremium={isPremium}
                />
            ) : null}
            <View style={{ width: '100%', alignItems: 'center' }}>
                {isPremium ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '90%'
                        }}
                    >
                        <TextInput
                            placeholder='Enter value here'
                            style={
                                isPremium ? styles.inputPremium : styles.input
                            }
                            value={value2.toString()}
                            onChangeText={
                                option2 && option1
                                    ? onChangeInput2
                                    : errDistance
                            }
                            keyboardType='numeric'
                        ></TextInput>

                        <Pressable onPress={copyToClipboard2}>
                            <Image
                                style={{
                                    right: 0,
                                    marginRight: 10,
                                    marginTop: 10,
                                    width: 30,
                                    height: 30
                                }}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/4280/4280618.png'
                                }}
                            />
                        </Pressable>
                    </View>
                ) : (
                    <Text>{value1 ? +value1 * option1.amount : ''}</Text>
                )}
                {isPremium ? null : (
                    <Text style={{ textAlign: 'center' }}>Kilos</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputPremium: {
        height: 50,
        textAlign: 'center',
        width: '70%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderRadius: 5,
        fontSize: 20
    },
    wrapper: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 16,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 300
    },
    input: {
        height: 50,
        textAlign: 'center',
        width: '90%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderRadius: 5,
        fontSize: 20
    }
})
