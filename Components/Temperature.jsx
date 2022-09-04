import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DropdownComponent } from './DropdownComponent'
import { TextInput } from 'react-native'

export const Temperature = ({ isPremium }) => {
    const data = [
        { label: 'Celsium degrees', value: 1 },
        { label: 'Kalvin degrees', value: 2 },
        { label: 'Faringate degrees', value: 3 }
    ]

    const [mainValue, SetMainValue] = useState('')
    const [convertedValue, SetConvertedValue] = useState('')
    const [degrees, setDegrees] = useState('')

    const errDistance = () => {
        SetMainValue('')
        alert('Select unit')
    }
    const convertValue = (item) => {
        if ((item.split('.') || []).length - 1 > 1) return
        else {
            SetMainValue(item)
            if (degrees == 1) SetConvertedValue(`${item}`)
            if (degrees == 2) SetConvertedValue(`${item - 273}`)
            if (degrees == 3) SetConvertedValue(`${((item - 32) * 5) / 9}`)
        }
    }

    return (
        <View style={styles.wrapper}>
            <DropdownComponent
                SetConvertedValue={SetConvertedValue}
                data={data}
                value={degrees}
                setValue={setDegrees}
                mainValue={mainValue}
                isPremium={isPremium}
            />
            <TextInput
                maxLength={15}
                placeholder='Enter value here'
                style={styles.input}
                value={mainValue}
                onChangeText={
                    degrees
                        ? (i) => convertValue(i.replace(/,/, '.'))
                        : errDistance
                }
                keyboardType='numeric'
            ></TextInput>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TextInput
                    placeholder='Celsium'
                    style={styles.input}
                    value={convertedValue}
                    keyboardType='numeric'
                ></TextInput>
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
