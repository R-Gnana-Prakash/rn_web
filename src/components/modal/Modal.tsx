import React, {useEffect, useRef, useState} from 'react'
import { Modal, View, StyleSheet, Text, Animated } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ModalPopUp = ({style, visible, children}:any) => {

    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                useNativeDriver: false,
                duration: 100,
            }).start()
        }else{
            setTimeout(() => setShowModal(false), 100)
            Animated.timing(scaleValue, {
                toValue: 0,
                useNativeDriver: true,
                duration: 200,
            }).start()
        }
    }
  return (
    <>
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContent, style, {transform:[{scale: scaleValue}]}]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#fff',
        width: 'auto',
        height: 'auto',
        padding: hp(2)
    }
})

export default ModalPopUp
