import react, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { DropdownComponent } from './DropdownComponent'

export const Distance = ({ isPremium }) => {
    const data = [
        { label: 'Kilometers', value: 1000 },
        { label: 'Meters', value: 1 },
        { label: 'Cantimeters', value: 0.01 },
        { label: 'Millimeters', value: 0.001 }
    ]

    const [mainValue, SetMainValue] = useState('')
    const [convertedValue, SetConvertedValue] = useState('')
    const [distance, setDistance] = useState('')

    const errDistance = () => {
        SetMainValue('')
        alert('Select unit')
    }
    const convertValue = (item) => {
        if ((item.split('.') || []).length - 1 > 1) return
        else {
            SetMainValue(item)
            SetConvertedValue(`${+item * distance}`)
        }
    }
    return (
        <View style={styles.wrapper}>
            <DropdownComponent
                SetConvertedValue={SetConvertedValue}
                data={data}
                value={distance}
                setValue={setDistance}
                mainValue={mainValue}
                isPremium={isPremium}
            />
            <TextInput
                maxLength={15}
                placeholder='Enter value here'
                style={styles.input}
                value={mainValue}
                onChangeText={
                    distance
                        ? (i) => convertValue(i.replace(/,/, '.'))
                        : errDistance
                }
                keyboardType='numeric'
            ></TextInput>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TextInput
                    placeholder='Meters'
                    style={styles.input}
                    value={convertedValue}
                    keyboardType='numeric'
                ></TextInput>
                <Text style={{ textAlign: 'center' }}>Meters</Text>
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
