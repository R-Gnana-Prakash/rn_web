import { StyleSheet, Text, View , Platform, TouchableOpacity, Image} from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import backIcon from '../../assets/images/back_arrow.png';


const BackButtonWithLabel = ({navigation, title}:any) => {

    const isWeb = Platform.OS == 'web';
    const styles = styling(isWeb);
  return (
    <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrowContainer}>
            <Image source={backIcon} style={{width: '85%', height: '85%', resizeMode: 'contain'}}/>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>{title}</Text>
    </View>
  )
}

export default BackButtonWithLabel

const styling = (isWeb:any) => StyleSheet.create({
    topBar: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: isWeb ? wp(3) : wp(3),
        // paddingTop: isWeb ? wp(2): wp(2),
        // marginBottom: hp(2)
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