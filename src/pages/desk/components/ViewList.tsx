import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import arrow from '../../../assets/images/greater_than_arrow.png';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ViewList = ({label}:any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Image source={arrow} style={styles.arrow}/>
    </TouchableOpacity>
  )
}

export default ViewList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e8dded',
        padding: Platform.OS == 'web' ?  hp(2) : hp(0.8),
        paddingLeft: hp(2),
        paddingRight: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: hp(1)
    },
    arrow: {
        width: 13,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    text: {
        color: '#601083',
        // fontSize: hp(2)
    }
})