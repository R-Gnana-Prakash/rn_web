import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import React from 'react'
import UserTable from './components/UserTable';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BranchList = () => {

  const column = [
    {
      key: 'branchId',
      title: 'Branch Id'
    },
    {
      key: 'branchName',
      title: 'Branch Name'
    }
  ]

  const data = [
    {
      branchId: 'HS01',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
    {
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },{
      branchId: 'HS02',
      branchName: 'Koodal nagar'
    },
  ]
  return (
    <ScrollView style={styles.scrollableContainer}>
        <UserTable 
          column={column}
          data={data}
          isBranchList
        />
        <TouchableOpacity style={styles.leftContent}>
          <Text style={styles.addText}>Add new</Text>
          <View style={styles.addBtnContainer}>
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
    
  )
}

export default BranchList

const styles = StyleSheet.create({
  scrollableContainer: {
    flex: 1,
    paddingTop: hp(3),
    paddingBottom: hp(3)
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
      justifyContent: 'center',
      marginTop: hp(0.3),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E9E8E9',
      paddingTop: hp(1),
      paddingBottom: hp(1)
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