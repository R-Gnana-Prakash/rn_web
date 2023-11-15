import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function PrimaryButton({label, onPress, primary, btnStyle}:any) {

    const styles = styling(primary)
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer,btnStyle]}>
        <Text style={[styles.labelText]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styling = (primary:any) => StyleSheet.create({
    labelText: {
        fontSize: hp(1.8),
        color: primary ? '#fff' : '#656268'
    },
    buttonContainer: {
        backgroundColor: primary ? '#601083' : '#f0f0f0',
        borderWidth: 1,
        borderColor: primary ? '#601083' : '#e4e9ea',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(0.7)
    }
})



export default PrimaryButton
