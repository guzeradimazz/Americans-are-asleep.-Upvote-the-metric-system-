export const isNumber = (value) => {
    let convertedValue = value.toString()
    
    if ((convertedValue.split('.') || []).length - 1 > 1)
        return convertedValue.slice(0, -1)
        
    return convertedValue
}
