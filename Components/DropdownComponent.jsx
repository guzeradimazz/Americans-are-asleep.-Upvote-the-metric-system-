import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const DropdownComponent = ({
    data,
    value,
    setValue,
    SetConvertedValue,
    mainValue
}) => {
    const [isFocus, setIsFocus] = useState(false)

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Distance dropdown
                </Text>
            )
        }
        return null
    }

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField='label'
                valueField='value'
                placeholder={!isFocus ? 'Select unit' : '...'}
                searchPlaceholder='Search...'
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    SetConvertedValue(`${mainValue * item.value}`)
                    setValue(item.value)
                    setIsFocus(false)
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name='Safety'
                        size={20}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        width: '90%'
    },
    dropdown: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8
    },
    icon: {
        marginRight: 5
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14
    },
    placeholderStyle: {
        fontSize: 16
    },
    selectedTextStyle: {
        fontSize: 16
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16
    }
})
