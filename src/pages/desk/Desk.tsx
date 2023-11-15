import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TabViewComponent from '../../components/tabView/TabView';
import UsersList from './UsersList';
import BranchList from './BranchList';
import BackButtonWithLabel from '../../components/backButtonWithLabel/BackButtonWithLabel';

function Desk({navigation}:any) {

    const isWeb = Platform.OS == 'web';
    const styles = styling(isWeb);

  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BackButtonWithLabel navigation={navigation} title={"Desk"}/>
        </View>
        <TabViewComponent 
            tabs={[
                {
                    key: '1',
                    title: 'Users',
                    element: <UsersList />
                },
                {
                    key: '2',
                    title: 'Branches',
                    element: <BranchList />
                }
            ]}
        />
        
    </View>
  )
}

const styling = (isWeb:any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topBar: {
        height: '7%',
    },
    backArrowContainer: {
        width: isWeb ? wp(2.4) : wp(8),
        aspectRatio: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#efedf0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(0.7),
    },
    pageTitle: {
        fontSize: hp(1.8),
        fontWeight: '600',
        marginLeft: isWeb ? wp(1) : wp(3)
    }
})

export default Desk;
