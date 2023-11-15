import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import BackButtonWithLabel from '../../components/backButtonWithLabel/BackButtonWithLabel'
import DropDown from '../../components/dropDown/DropDown'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import navBarIcon from '../../assets/images/navBarIcon.png'
import Toggle from '../../components/toggleSwitch/Toggle'


const UserDetails = ({navigation}:any) => {

  const [openDropDown, setOpenDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setOpenDropDown(false)}>
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.leftContent}>
          <BackButtonWithLabel navigation={navigation} title={"User Details"}/>
          <View style={styles.userType}>
            <Text style={{color: '#707577', fontSize: hp(1.5)}}>{"Branch manager"}</Text>
          </View>
        </View>
        <View>
          <DropDown position="right" visible={openDropDown} visibleFunction={setOpenDropDown} options={
            [
              {
                key: 'changePassword',
                label: 'Change Password',
                action: () => console.log('first')
                // icon: 
              },
              {
                key: 'resetPassword',
                label: 'Reset Password',
                action: () => console.log('second')
                // icon: 
              }
            ]
          }>
            <Image source={navBarIcon} style={{height: hp(1.5), aspectRatio: 1, resizeMode: 'contain'}}/>
          </DropDown>
        </View>
      </View>
      <View style={styles.content}>
          <Toggle 
            isOn={isOpen}
            onColor={'#3EBD89'}
            offColor={'#e1e4ee'}
            style={{width: 120, height: 60}}
            onToggle={() => setIsOpen(!isOpen)}
            label="First"
          />
          
          <Toggle 
            isOn={isOpen}
            onColor={'#3EBD89'}
            offColor={'#e1e4ee'}
            style={{width: 50, height: 30}}
            onToggle={() => setIsOpen(!isOpen)}
            label="First"
          />
          
          <Toggle 
            isOn={isOpen}
            onColor={'#3EBD89'}
            offColor={'#e1e4ee'}
            style={{width: 30, height: 18}}
            onToggle={() => setIsOpen(!isOpen)}
            label="First"
          />
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topHeader: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: wp(2)
  },
  content:{
    flex: 1,
    justifyContent: 'space-around'
  },
  userType: {
    backgroundColor: '#f2f5f6',
    borderRadius: hp(0.5),
    padding: hp(0.8),
    paddingLeft: hp(1),
    paddingRight: hp(1),
    marginLeft: wp(2),

  }
})