import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DropdownComponent } from './DropdownComponent'
import { TextInput } from 'react-native'
import { isNumber } from '../utils/isNumber'

export const Temperature = ({ isPremium }) => {
    const data = [
        {
            label: 'Celsium degrees',
            converterTo: (temp) => temp,
            converterOut: (temp) => temp,
            value: 0
        },
        {
            label: 'Kalvin degrees',
            converterTo: (temp) => temp + 273,
            converterOut: (temp) => temp - 273,
            value: 1
        },
        {
            label: 'Faringate degrees',
            converterTo: (temp) => (temp * 9) / 5 + 32,
            converterOut: (temp) => ((temp - 32) * 5) / 9,
            value: 2
        }
    ]
    const data2 = [
        {
            label: 'Celsium degrees',
            converterTo: (temp) => temp,
            converterOut: (temp) => temp,
            value: 0
        },
        {
            label: 'Kalvin degrees',
            converterTo: (temp) => temp + 273,
            converterOut: (temp) => temp - 273,
            value: 1
        },
        {
            label: 'Faringate degrees',
            converterTo: (temp) => (temp * 9) / 5 + 32,
            converterOut: (temp) => ((temp - 32) * 5) / 9,
            value: 2
        }
    ]
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const [option1, setOption1] = useState()
    const [option2, setOption2] = useState()

    const onChangeInput1 = (i) => {
        if (!isNumber(+i)) return

        setValue1(i)
        setValue2(
            option2
                ? option2.converterTo(option1.converterOut(+i))
                : option1.converterOut(+i)
        )
    }

    const onChangeInput2 = (i) => {
        if (!isNumber(+i)) return

        setValue2(i)
        setValue1(option1.converterTo(option2.converterOut(+i)))
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
            <TextInput
                maxLength={15}
                placeholder='Enter value here'
                style={styles.input}
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
                    <TextInput
                        placeholder={option2?.label}
                        style={styles.input}
                        value={value2.toString()}
                        onChangeText={
                            option2 && option1 ? onChangeInput2 : errDistance
                        }
                        keyboardType='numeric'
                    ></TextInput>
                ) : (
                    <Text>{value1 ? option1.converterOut(+value1) : ''}</Text>
                )}
                <Text style={{ textAlign: 'center' }}>Celsium</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
