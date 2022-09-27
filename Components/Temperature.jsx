import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { DropdownComponent } from './DropdownComponent'
import { TextInput } from 'react-native'
import { isNumber } from '../utils/isNumber'
import BigNumber from 'bignumber.js'

export const Temperature = ({ isPremium }) => {
    const data = [
        {
            label: 'Celsium degrees',
            converterTo: (prev) => parseFloat(prev),
            converterOut: (prev) => parseFloat(prev),
            value: 0
        },
        {
            label: 'Kalvin degrees',
            converterTo: (prev) => parseFloat(prev + 273),
            converterOut: (prev) => parseFloat(prev - 273),
            value: 1
        },
        {
            label: 'Faringate degrees',
            converterTo: (prev) => parseFloat((prev * 9) / 5 + 32),
            converterOut: (prev) => parseFloat(((prev - 32) * 5) / 9),
            value: 2
        }
    ]
    const data2 = [
        {
            label: 'Celsium degrees',
            converterTo: (prev) => parseFloat(prev),
            converterOut: (prev) => parseFloat(prev),
            value: 0
        },
        {
            label: 'Kalvin degrees',
            converterTo: (prev) => parseFloat(prev + 273),
            converterOut: (prev) => parseFloat(prev - 273),
            value: 1
        },
        {
            label: 'Faringate degrees',
            converterTo: (prev) => parseFloat((prev * 9) / 5 + 32),
            converterOut: (prev) => parseFloat(((prev - 32) * 5) / 9),
            value: 2
        }
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
    const [option2, setOption2] = useState({
        label: 'Celsium degrees',
        converterTo: (prev) => prev,
        converterOut: (prev) => prev,
        value: 0
    })

    const convertToRigthFloat1 = (str) => {
        let convertedStr = ''
        if (str || str != '') {
            if (str.toString().includes('.')) {
                if (str.toString().split('.')[1].length) {
                    if (str.toString().split('.')[1].length > 5) {
                        convertedStr = str
                            .toString()
                            .substring(
                                0,
                                str.toString().split('.')[1].length - 1
                            )
                    } else return str
                } else return str
            } else return str
        }
        return convertedStr
    }
    const convertToRigthFloat2 = (str) => {
        let convertedStr = ''
        if (str || str != '') {
            if (str.toString().includes('.')) {
                if (str.toString().split('.')[1].length) {
                    if (str.toString().split('.')[1].length > 5) {
                        convertedStr = str
                            .toString()
                            .substring(
                                0,
                                str.toString().split('.')[1].length - 1
                            )
                    } else return str
                } else return str
            } else return str
        }
        return convertedStr
    }
    const onChangeInput1 = (i) => {
        const m = isNumber(i.replace(/,/, '.'))
        let freshM = ''

        if (m[m.length - 1] == '.') {
            freshM = m

            let M = new BigNumber(+freshM)

            setValue1(freshM)
            let variantValue1 = new BigNumber(
                option2.converterTo(option1.converterOut(+M))
            )
            let variantValue2 = new BigNumber(option1.converterOut(+M))
            if (option2) {
                setValue2(convertToRigthFloat2(variantValue1))
            } else {
                // console.log(convertToRigthFloat(variantValue2))
                setValue2(convertToRigthFloat2(variantValue2))
            }
        } else {
            let M = new BigNumber(m)

            setValue1(M)
            let variantValue1 = new BigNumber(
                option2.converterTo(option1.converterOut(+M))
            )
            let variantValue2 = new BigNumber(option1.converterOut(+M))
            if (option2) {
                setValue2(convertToRigthFloat2(variantValue1))
            } else {
                setValue2(convertToRigthFloat2(variantValue2))
            }
        }
    }

    const onChangeInput2 = (i) => {
        const m = isNumber(i.replace(/,/, '.'))

        let freshM = ''
        if (m[m.length - 1] == '.') {
            freshM = m

            let M = new BigNumber(+freshM)
            setValue2(freshM)

            let variantValue3 = new BigNumber(
                option1.converterTo(option2.converterOut(+M))
            )
            setValue1(convertToRigthFloat1(variantValue3))
        } else {
            let M = new BigNumber(m)
            setValue2(M)

            let variantValue3 = new BigNumber(
                option1.converterTo(option2.converterOut(+M))
            )
            setValue1(convertToRigthFloat1(variantValue3))
        }
    }

    useEffect(() => {
        if (value1 == 'NaN') setValue1('0')
        if (value2 == 'NaN') setValue2('0')
    }, [value1, value2])

    const errDistance = () => {
        setValue1('')
        setValue2('')
        alert('Select unit')
    }

    const switchValues = () => {
        if (!value1 || !value2) alert('Enter value before switching')
        const tempValue1 = value1
        setValue1(value2)
        setValue2(tempValue1)
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
                <View>
                    <Pressable onPress={switchValues}>
                        <Image
                            style={{
                                right: 0,
                                marginRight: 10,
                                marginTop: 10,
                                width: 50,
                                height: 50
                            }}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/519/519848.png'
                            }}
                        />
                    </Pressable>
                </View>
            ) : null}
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
                            maxLength={15}
                            placeholder={option2?.label || 'Enter value here'}
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
                    <Text>
                        {value1
                            ? Number(+option1.converterOut(+value1))
                                  .toFixed(3)
                                  .toString()
                            : ''}
                    </Text>
                )}
                {isPremium ? null : (
                    <Text style={{ textAlign: 'center' }}>Celsium</Text>
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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 300,
        height: '100%',
        backgroundColor: '#fff'
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
