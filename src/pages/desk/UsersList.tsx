import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewList from './components/ViewList'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import UsersContainerHeader from './components/UsersContainerHeader';
import UserTable from './components/UserTable';


const UsersList = () => {

    const adminList = [
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
        {
            name: 'Kumaresan',
            mobileNo: '9876543210'
        },
    ]
    const column = [
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Mobile number',
            key: 'mobileNo'
        }
    ]
  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <ViewList label="View disabled users"/>
        </View>
        <ScrollView style={styles.scrollableContainer}>
            <View style={styles.usersHeader}>
                <UsersContainerHeader label="Admin"/>
            </View>
            <UserTable 
                data={adminList}
                column={column}
            />
            <View style={{marginBottom: hp(2)}}></View>
            <View style={styles.usersHeader}>
                <UsersContainerHeader label="Admin"/>
            </View>
            <UserTable 
                data={adminList}
                column={column}
            />
            <View style={{marginBottom: hp(2)}}></View>
            <View style={styles.usersHeader}>
                <UsersContainerHeader label="Admin"/>
            </View>
            <UserTable 
                data={adminList}
                column={column}
            />
            
        </ScrollView>
    </View>
  )
}

export default UsersList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        width: '100%', 
        height: '6%', 
        marginTop: hp(2),
        paddingLeft: hp(1),
        paddingRight: hp(1)
    },
    usersHeader: {
        width: '100%',
        // height: '6%',
        marginTop: hp(1),
        marginBottom: hp(1),
        paddingLeft: hp(2),
        paddingRight: hp(2)
    },
    scrollableContainer: {
        flex: 1,
        marginTop: hp(2),
        marginBottom: hp(2),
    }

})