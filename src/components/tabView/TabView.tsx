import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TabViewComponent = ({tabs}:any) => {

    const [currentTab, setCurrentTab] = useState("1");

  return (
    <View style={styles.container}>
        <View style={styles.tabBar}>
            <View style={[styles.spaceElement, {width: '2%'}]}></View>
            {tabs.map((item:any, i:any) => {
                return (
                    <>
                    <TouchableOpacity 
                        activeOpacity={1}
                        key={i} 
                        onPress={() => setCurrentTab(item.key)}
                        style={[styles.tabContainer, ...((currentTab == item.key) ? 
                            [{
                                backgroundColor: '#fff', 
                                
                                height: '100%'
                            }] 
                        : [{backgroundColor: '#eeedee'}])]}
                    >
                        <Text style={[styles.tabBarTitle, ...((currentTab == item.key) ? [{color: '#601083'}] : [{color: '#828393'}])]}>{item.title}</Text>
                    </TouchableOpacity>
                    {(tabs.length - 1 != i) && <View style={[styles.spaceElement, {width: '1%'}]}></View>}
                    </>
                )
            })}
            <View style={[styles.spaceElement, {width: '2%'}]}></View>
        </View>
        <View style={styles.tabContentContainer}>
            {tabs.map((item:any, i:any) => {
                if(item.key == currentTab){
                    return item.element
                }else{
                    <View></View>
                }
            })}
        </View>
    </View>
  )
}



export default TabViewComponent

const styles = StyleSheet.create({
    container: {
        flex:  1,
        marginTop: hp(1),
        // overflow: 'hidden'
    },
    tabBar: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderColor: '#ebebeb'
    },
    tabContentContainer: {
        width: '100%',
        height: '94%',
        backgroundColor: '#fff',
    },
    spaceElement:{
        height: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eeedee',
        backgroundColor: '#fff'
    },
    tabContainer: {
        width: '47.5%',
        height: '94%',
        backgroundColor: '#fff',
        borderWidth :1,
        borderColor: '#ebebeb',
        borderTopLeftRadius: hp(1),
        borderTopRightRadius: hp(1),
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarTitle: {
        fontSize: hp(1.6),
        fontWeight: '500',
    }
})