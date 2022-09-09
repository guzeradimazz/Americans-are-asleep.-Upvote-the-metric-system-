import react, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { DropdownComponent } from './DropdownComponent'
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
                        placeholder='Meters'
                        style={styles.input}
                        value={value2.toString()}
                        onChangeText={
                            option2 && option1 ? onChangeInput2 : errDistance
                        }
                        keyboardType='numeric'
                    ></TextInput>
                ) : (
                    <Text>{value1 ? +value1 * option1.amount : ''}</Text>
                )}
                <Text style={{ textAlign: 'center' }}>Meters</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
