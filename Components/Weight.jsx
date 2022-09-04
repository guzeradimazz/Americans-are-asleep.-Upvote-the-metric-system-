import react, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { DropdownComponent } from './DropdownComponent'

export const Weight = ({ isPremium }) => {
    const data = [
        { label: 'Kilograms', value: 1 },
        { label: 'Grams', value: 0.001 },
        { label: 'Milligrams', value: 0.000001 },
        { label: 'Pound', value: 0.453592 }
    ]

    const [mainValue, SetMainValue] = useState('')
    const [convertedValue, SetConvertedValue] = useState('')
    const [weight, setWeight] = useState('')

    const errDistance = () => {
        SetMainValue('')
        alert('Select unit')
    }
    const convertValue = (item) => {
        if ((item.split('.') || []).length - 1 > 1) return
        else {
            SetMainValue(item)
            SetConvertedValue(`${+item * weight}`)
        }
    }

    return (
        <View style={styles.wrapper}>
            <DropdownComponent
                SetConvertedValue={SetConvertedValue}
                data={data}
                value={weight}
                setValue={setWeight}
                mainValue={mainValue}
                isPremium={isPremium}
            />
            <TextInput
                maxLength={15}
                placeholder='Enter value here'
                style={styles.input}
                value={mainValue}
                onChangeText={
                    weight
                        ? (i) => convertValue(i.replace(/,/, '.'))
                        : errDistance
                }
                keyboardType='numeric'
            ></TextInput>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TextInput
                    placeholder='Kilograms'
                    style={styles.input}
                    value={convertedValue}
                    keyboardType='numeric'
                ></TextInput>
                <Text style={{ textAlign: 'center' }}>Kilograms</Text>
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
