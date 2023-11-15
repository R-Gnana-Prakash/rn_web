import * as React from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import successIcon from '../../assets/images/success_tick.png';
import noIcon from '../../assets/images/no_icon.png'


export default function Toggle (props:any) {
  

    const animatedValue = new Animated.Value(0)
    const {
        isOn,
        onColor,
        offColor,
        style,
        onToggle,
        labelStyle,
        label,
      } = props;
    const moveToggle = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [3, (style.width/2) - 3],
    });

    
    const color = isOn ? onColor : offColor;
    animatedValue.setValue(isOn ? 0 : 1);
    Animated.timing(animatedValue, {
        toValue: isOn ? 1 : 0.1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false
    }).start();

    const styles = styling(style.width, style.height);

    return (
      <View style={styles.container}>
        {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

        <TouchableWithoutFeedback
          onPress={() => {
            onToggle();
          }}>
          <View
            style={[styles.toggleContainer, style, { backgroundColor: color }]}>
            <Animated.View
              style={[
                styles.toggleWheelStyle,
                {
                  marginLeft: moveToggle,
                },
              ]}
            >
                <Image source={isOn ? successIcon : noIcon} style={{width: '45%', height: '45%', resizeMode: 'contain'}}/>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  
}

const styling = (width:any, height:any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    width: width,
    height: height,
    marginLeft: 3,
    borderRadius: width/8,
    justifyContent: 'center',
  },
  label: {
    marginRight: 2,
  },
  toggleWheelStyle: {
    borderRadius: width/9,
    width: width/2.2,
    height: width/2.5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});