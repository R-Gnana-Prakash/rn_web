import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewList from './components/ViewList';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import UsersContainerHeader from './components/UsersContainerHeader';
import UserTable from './components/UserTable';

const UsersList = () => {

    const array = [
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },

        {
            name: "Prakash",
            mobileNo: '9751569465'
        },

        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },
        {
            name: "Prakash",
            mobileNo: '9751569465'
        },

        {
            name: "Arun",
            mobileNo: '9751569465'
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
        <View style={{width: '33%', height: '6%', marginTop: hp(0)}}>
            <ViewList label="View disabled users"/>
        </View>
        <View style={styles.mainContainer}>
            <View style={styles.adminContainer}>
                <View style={{width: '100%', height: '10%', paddingLeft: hp(2), paddingRight: hp(2)}}>
                    <UsersContainerHeader label={"Admin"}/>
                </View>
                <UserTable 
                    scrollable
                    data={array}
                    column={column}
                />
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.childContainer}>
                    <View style={{width: '100%', height: '10%', paddingLeft: hp(2), paddingRight: hp(2)}}>
                        <UsersContainerHeader label={"Branch Manager"}/>
                    </View>
                    <UserTable 
                        scrollable
                        data={array}
                        column={column}
                    />

                </View>
                <View style={styles.childContainer}>
                <View style={{width: '100%', height: '10%', paddingLeft: hp(2), paddingRight: hp(2)}}>
                    <UsersContainerHeader label={"Pickup counter"}/>
                </View>
                <UserTable 
                    scrollable
                    data={array}
                    column={column}
                />

                </View>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.childContainer}>
                <View style={{width: '100%', height: '10%', paddingLeft: hp(2), paddingRight: hp(2)}}>
                    <UsersContainerHeader label={"Supervisor"}/>
                </View>
                <UserTable 
                    scrollable
                    data={array}
                    column={column}
                />

                </View>
                <View style={styles.childContainer}>
                <View style={{width: '100%', height: '10%', paddingLeft: hp(2), paddingRight: hp(2)}}>
                    <UsersContainerHeader label={"Store"}/>
                </View>
                <UserTable 
                    scrollable
                    data={array}
                    column={column}
                />
                    
                </View>
            </View>
        </View>
    </View>
  )
}

export default UsersList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: hp(2)
    },
    mainContainer: {
        width: '100%',
        height: '94%',
        paddingTop: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    adminContainer : {
        width: '33%',
        height: '100%',
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: hp(1),
    },
    childContainer:{
        width: '100%',
        height: '48%',
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: hp(1),
        paddingTop: hp(2)
    },
    secondContainer: {
        width: '33%',
        height: '100%',
        justifyContent: 'space-between'
    }
})