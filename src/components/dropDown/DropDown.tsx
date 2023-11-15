import { Modal, Platform, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DropDown = ({options, children, position}:any) => {

    const styles = styling(position);
    const [visible, setVisible] = useState(false);

  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        {children}
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <View style={{flex: 1}}>
              <TouchableWithoutFeedback style={{flex: 1}} onPress={() => setVisible(false)}>
                <View style={{flex: 1}}></View>
              </TouchableWithoutFeedback>
              <View style={styles.popupmenuContainer}> 
                {options.map((op:any, i:any) => {
                  return (
                    <TouchableOpacity onPress={op.action} style={[styles.popupMenu, ...((i == options.length - 1) ? []: [styles.bottomBorder])]}>
                      <Text>{op.label}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
        </View>
      </Modal>
    </View>
  )
}

export default DropDown

const styling = (position:any) => StyleSheet.create({
  popupmenuContainer: {
    borderColor: '#d4d7d5',
    borderWidth: 1,
    borderRadius: hp(1),
    backgroundColor: '#fff',
    position: 'absolute',
    top: hp(5),
    right: wp(2),
    padding: hp(1),
    shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  popupMenu: {
    padding: hp(0.5),
    paddingBottom: hp(1)
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#d4d7d5',
  }
})