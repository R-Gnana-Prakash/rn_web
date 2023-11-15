import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useLinkTo } from '@react-navigation/native';

const UserTable = ({scrollable, data, column, isBranchList}:any) => {

    const lintTo = useLinkTo();
    const styles = styling(isBranchList)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tableHeader}>
        {column.map((item:any, i:any) => {
            return (
                <Text style={[styles.th, ...(i == 0 ? [{width: '25%'}] : [])]}>{item.title}</Text>
            )
        })}
      </View>
      {scrollable ? 
        <ScrollView style={styles.tableContainer}>
            {data.map((item:any, i:any) => {
                return (
                    <TouchableOpacity key={i} style={styles.tableRow} onPress={() => lintTo('/userDetails')}>
                        {column.map((col:any, i:any) => {
                            return (
                                <Text style={[styles.tdValue, ...(i == 0 ? [{width: '25%'}] : [])]}>{item[col.key]}</Text>
                            )
                        })}
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
        :
        <View style={styles.tableContainer}>
            {data.map((item:any, i:any) => {
                return (
                    <TouchableOpacity key={i} style={styles.tableRow} onPress={() => lintTo('/userDetails')}>
                        {column.map((col:any, i:any) => {
                            return (
                                <Text style={[styles.tdValue, ...(i == 0 ? [{width: '25%'}] : [])]}>{item[col.key]}</Text>
                            )
                        })}
                    </TouchableOpacity>
                )
            })}
        </View>
      }
    </View>
  )
}

export default UserTable

const styling = (isBranchList:any) => StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    tableHeader: {
        width: '100%',
        height: hp(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: !isBranchList ? 'space-between' : 'flex-start',
        paddingLeft: hp(2),
        paddingRight: hp(2)
    },
    tableContainer: {
        width: '100%',
        height: '90%',
    },
    tableRow: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E9E8E9',
        marginTop: hp(0.3),
        padding: hp(2),
        paddingTop: hp(1.5),
        paddingBottom: hp(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: !isBranchList ? 'space-between' : 'flex-start',
        
    },
    tdValue: {
        color: '#3A3A3C',
        fontSize: hp(1.75),
        fontWeight: '500'
    },
    th: {
        color: '#737373',
        fontSize: hp(1.75),
        fontWeight: '500'
    }
})