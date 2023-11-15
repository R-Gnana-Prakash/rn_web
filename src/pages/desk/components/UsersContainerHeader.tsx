import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';



const UsersContainerHeader = ({label}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{label}</Text>
      <View style={styles.leftContent}>
        <Text style={styles.addText}>Add New</Text>
        <TouchableOpacity style={styles.addBtnContainer}>
            <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UsersContainerHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        color: '#000',
        fontSize: hp(2),
        fontWeight: '700'
    },
    addText: {
        color: '#601083',
        fontSize: hp(1.7),
        fontWeight: '500',
        marginRight: (Platform.OS == 'web') ? wp(0.5) : wp(2)
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addBtnContainer: {
        backgroundColor: '#601083',
        padding: (Platform.OS == 'web') ? hp(0.5) :hp(0.2),
        paddingLeft: (Platform.OS == 'web') ? hp(0.9) :hp(0.9),
        paddingRight: (Platform.OS == 'web') ? hp(0.9) : hp(0.9),
        borderRadius: hp(0.4)
    },
    addBtnText: {
        color: '#fff',
        fontSize: hp(1.8)
    }
})