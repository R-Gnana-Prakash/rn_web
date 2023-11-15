import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform, TextInput} from 'react-native';
import hamburger from '../../assets/images/hamburger-icon.png';
import notification from '../../assets/images/notification.png';
import arrow from '../../assets/images/Arrow.png'
import desk from '../../assets/images/desk-image.png'
import approvalImage from '../../assets/images/approval-image.png'
import branchWork from '../../assets/images/branch-work.png'
import productManagement from '../../assets/images/product_management.png'
import reports from '../../assets/images/reports-image.png'
import store from '../../assets/images/store-image.png'
import editIcon from '../../assets/images/Pencil.png'
import openEye from '../../assets/images/open_eye.png'
import closedEye from '../../assets/images/closed_eye.png'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from '../../components/modal/Modal';
import ModalPopUp from '../../components/modal/Modal';
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';
import InputText from '../../components/inputs/textInput/TextInput';
import { useLinkTo } from '@react-navigation/native';


const Options = ({containerStyle, optionStyle, optionsIconContainer, optionLabelStyle, labelStyle, arrowStyle, navigation}:any) => {
    
    const linkTo = useLinkTo();
    
    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={() => {
                if(Platform.OS == 'web'){
                    linkTo('/drawer')
                }else{
                    navigation.navigate('drawer')
                }
                
            }} style={[optionStyle, {
                backgroundColor: '#ccfff8'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={desk} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#cbf2ed'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Desk</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity style={[optionStyle, {
                backgroundColor: '#fff0d2'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={approvalImage} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#f3e5cb'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Approval</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>  
            </TouchableOpacity>
            <TouchableOpacity style={[optionStyle, {
                backgroundColor: '#ffcfe4'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={productManagement} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#f2cbdc'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Product {'\n'} Management</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[optionStyle, {
                backgroundColor: '#ded3ff'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={ branchWork} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#d5cbf2'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Branch {'\n'} works</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[optionStyle, {
                backgroundColor: '#cce3ff'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={store} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#cbddf2'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Store</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[optionStyle, {
                backgroundColor: '#d9ffc5'
            }]}>
                <View style={optionsIconContainer}>
                    <Image source={ reports} style={styles.image}/>
                </View>
                <View style={[styles.flexRow,{
                    backgroundColor: '#d8f2cb'
                }, optionLabelStyle]}>
                    <Text style={labelStyle}>Reports</Text>
                    <View style={arrowStyle}>
                        <Image source={arrow} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Home = ({navigation}:any) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCurrentPassword, setIsCurrentPassword] = useState(true);
  const [isNewPassword, setIsNewPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);


  const changeVisible = (type:any) => {
    if(type == '1'){
        setIsCurrentPassword(!isCurrentPassword)
    }else if(type == '2'){
        setIsNewPassword(!isNewPassword)
    }else{
        setIsConfirmPassword(!isConfirmPassword)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        {Platform.OS != 'web' && <>
                {/* <Drawer
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    renderDrawerContent={() => {
                        return <Text>Drawer content</Text>;
                    }}
                > */}
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.menuContainer} onPress={() => setOpen(!open)}>
                            <Image source={hamburger} style={styles.image}/>
                        </TouchableOpacity>
                        
                        <Text>Hotel Saranavans</Text>
                        <TouchableOpacity style={[styles.menuContainer]}>
                            <Image source={notification} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <Options 
                        containerStyle={styles.mobileOptionContainer} 
                        optionStyle={styles.mobileOptionStyle} 
                        optionLabelStyle={styles.mobileOptionLabelStyle} 
                        optionsIconContainer={styles.mobileOptionsIconContainer}
                        labelStyle={styles.mobileLabelStyle}
                        arrowStyle={styles.mobileArrow}
                        navigation={navigation}
                    />

                {/* </Drawer> */}
            
        </>
        }
        {Platform.OS == 'web' && 
            <View style={styles.webContainer}>
                <View style={styles.sideNavBar}>

                </View>
                <View style={styles.contentBar}>
                    <View style={styles.webTobBar}>
                        <View style={styles.webHeader}>
                            <View style={[styles.flexRow, styles.companyName]}>
                                <Text style={styles.nameText}>Hotel Saranavans</Text>
                                <TouchableOpacity onPress={() => setIsModalOpen(!isModalOpen)} style={{width: wp(1.5), aspectRatio: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={editIcon} style={[styles.image]}/>
                                </TouchableOpacity>
                                
                            </View>
                            <TouchableOpacity style={styles.menuContainer}>
                                <Image source={notification} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.webContentbar}>
                        <Options 
                            containerStyle={styles.mobileOptionContainer} 
                            optionStyle={styles.webOptionStyle} 
                            optionLabelStyle={styles.mobileOptionLabelStyle} 
                            optionsIconContainer={styles.mobileOptionsIconContainer}
                            labelStyle={styles.mobileLabelStyle}
                            arrowStyle={styles.webArrow}
                            navigation={navigation}
                        /> 
                    </View>
                </View>
            </View>
            
        }
        {Platform.OS == 'web' && 
            <ModalPopUp style={styles.changePasswordModal} visible={isModalOpen}>
                <View style={{width: '100%', height: '100%'}}>
                    <Text style={styles.modalHeader}>Change password</Text>
                    <View style={styles.marginTop}></View>
                    <InputText 
                        style={{width: '100%'}}
                        label={"Current Password"}
                        placeholder={"Enter password"} 
                        suffixIcon={isCurrentPassword ? closedEye : openEye}
                        secureTextEntry={isCurrentPassword} 
                        suffixIconAction={() => changeVisible('1')}/>
                    <View style={styles.marginTopSecond}></View>
                    <InputText 
                        style={{width: '100%'}}
                        label={"New Password"}
                        placeholder={"Enter password"} 
                        suffixIcon={isNewPassword ? closedEye : openEye}
                        secureTextEntry={isNewPassword} 
                        suffixIconAction={() => changeVisible('2')}/>
                    <View style={styles.marginTopSecond}></View>
                    <InputText 
                        style={{width: '100%'}}
                        label={"Confirm New Password"}
                        placeholder={"Enter password"} 
                        suffixIcon={isConfirmPassword ? closedEye : openEye}
                        secureTextEntry={isConfirmPassword} 
                        suffixIconAction={() => changeVisible('3')}/>


                    <View style={[styles.flexRow, styles.buttonContainer]}>
                        <PrimaryButton label="Cancel" onPress={() => {setIsModalOpen(false)}} primary={false} btnStyle={styles.cancelButton}/>
                        <PrimaryButton label="Update" onPress={() => {setIsModalOpen(true)}} primary={true} btnStyle={styles.updateButton}/>
                    </View>
                </View>
            </ModalPopUp>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flexRow: {
    flexDirection: 'row'
  },
  topBar: {
    width: '100%',
    padding: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  menuContainer: {
    width: hp(4),
    height: hp(4),
    borderColor: '#E9DAF2',
    borderWidth: 1,
    backgroundColor: '#f6f3f8',
    borderRadius: hp(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    ...(Platform.OS == 'web' ? {marginLeft: wp(1)} : {})
  },
  mobileOptionContainer: {
    width: '99.5%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: '0.5%'
  },
  mobileOptionStyle: {
    width: '45%',
    height: '30%',
    marginLeft: '3.5%',
    marginTop: '3.5%',
    backgroundColor: 'white',
    borderRadius: hp(1)
  },
  webOptionStyle: {
    width: '32.2%',
    margin: '0.5%',
  },
  mobileOptionsIconContainer: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileOptionLabelStyle: {
    width: '100%',
    height: '25%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderBottomLeftRadius: hp(1),
    borderBottomRightRadius: hp(1),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mobileLabelStyle: {
    fontSize: hp(1.8),
    color: '#000',
    fontWeight: '500',
    textAlign: 'left'
  },
  mobileArrow: {
    width: '15%',
    alignItems:'center'
  },
  webArrow: {
    width: '20%',
    height: '25%',
    alignItems:'center'
  },
  webContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sideNavBar: {
    width: '17%',
    height: '100%',
    backgroundColor: '#372f3d',
    
  },
  contentBar: {
    width: '83%',
    height: '100%',
  },
  webTobBar: {
    width: '100%',
    height: '7%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: hp(1.5)
  },
  webContentbar: {
    width: '100%',
    height: '92.5%',
    marginBottom: '1.5%'
  },
  webHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyName: {
    borderWidth: 1,
    borderColor: '#ebe7ec',
    alignItems: 'center',
    padding: hp(0.5),
    paddingLeft: wp(1),
  },
  nameText: {
    fontSize: hp(1.4),
    marginRight: wp(1)
  },
  changePasswordModal : {
    width: wp(20),
    height: hp(50),
    borderRadius: hp(2),
  },
  modalHeader: {
    fontSize: hp(2),
    color: '#201823',
    fontWeight: '700',
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 'auto'
  },
  cancelButton: {
    width: '41%',
    padding: '2.5%',
  },
  updateButton: {
    width: '41%',
    padding: '2.5%'
  },
  marginTop: {
    marginTop: hp(1)
  },
  marginTopSecond: {
    marginTop: hp(2.5)
  }
});

export default Home;