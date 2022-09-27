import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const DropdownComponent = ({
    data,
    value,
    setValue,
    inputValue,
    onChangeInput,
    isPremium
}) => {
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        if (inputValue) {
            onChangeInput(inputValue.toString())
        }
    }, [value])

    const [selectedValue, setSelectedValue] = useState(value ? value : null)

    return (
        <View style={styles.container}>
            <Dropdown
                style={
                    isPremium
                        ? [
                              styles.dropdown,
                              isFocus && { borderColor: 'gold', borderWidth: 2 }
                          ]
                        : [styles.dropdown, isFocus && { borderColor: 'black' }]
                }
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
                value={selectedValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setSelectedValue(item.value)
                    setValue(item)
                    setIsFocus(false)
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={
                            isPremium
                                ? isFocus
                                    ? 'gold'
                                    : 'black'
                                : isFocus
                                ? 'black'
                                : 'black'
                        }
                        name='star'
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
