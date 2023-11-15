import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const InputText = ({label, placeholder, secureTextEntry, suffixIconAction, style, suffixIcon}:any) => {

  const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true)
    };
    const handleBlur = () => {
        setIsFocused(false)
    };
    
  return (
    <View style={[styles.TextInputContainer, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputContainer, ...(isFocused ? [{ borderColor: '#601083'}] : [{borderColor: '#e3dde5'}])]}>
        <TextInput 
          placeholder={placeholder} 
          secureTextEntry={secureTextEntry} 
          style={{width: '90%', height: '100%', borderWidth: 0, outlineStyle: 'none', color: '#332d36'}}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor="#bcbcbc" 
          />
        {suffixIcon && (
          <TouchableOpacity onPress={() => {suffixIconAction()}} style={styles.suffixIconContainer}>
            <Image source={suffixIcon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    TextInputContainer: {
        marginTop: hp(1),
    },
    inputLabel: {
      fontSize: hp(1.5),
      marginLeft: wp(0.3),
      color: '#2D3132'
    },
    inputContainer: {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingLeft: wp(1),
        paddingRight: wp(1),
        borderRadius: hp(0.6),
        marginTop: hp(0.5),

    },
    suffixIconContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
})

export default InputText;
