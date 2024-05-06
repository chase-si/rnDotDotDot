import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Circle from '../components/circle.js';
import BlinkinAnimated from '../components/blinkingAnimated';
import useNavigation from '../hooks';
import { NAV_CONSTANTS } from '../navigators';
import { COLORS } from '../constants';
import { pageContainer } from '../style.js';

const Page1 = (props) => {
  const { navigation } = props
  const blinkAnim = useRef(new Animated.Value(1)).current
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { pressToNavigate } = useNavigation({ navigation })

  useFocusEffect(() => {
    console.log('page1 focused')
    // handleBlink()
    return () => {
      // fadeAnim.setValue(0)
      console.log('page1 unfocused!')
    }
  })

  const handleOnPress = () => {
    pressToNavigate({
      fadeAnim,
      navigateTargetName: NAV_CONSTANTS.PAGE2.name
    })
  }
  
  const handleBlink = () => {
    Animated.timing(blinkAnim, {
      toValue: 1.2,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      console.log('end')
      Animated.timing(blinkAnim, {
        toValue: 1,
        friction: 1000,
        useNativeDriver: true
      }).start(() => {
        handleBlink()
      })
    })
  }

  return (
    <View style={pageContainer.container}>
       <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Circle
          color={COLORS.yellow}
          underlayColor={COLORS.yellowAccessible}
        />
      </Animated.View>
      <BlinkinAnimated>
        <Circle
          color={COLORS.yellow}
          onPress={handleOnPress}
          underlayColor={COLORS.yellowAccessible}
        />
      </BlinkinAnimated>
      {/* occupy circle */}
      <Circle
        style={{ opacity: 0 }}
        color={COLORS.yellow}
        onPress={handleOnPress}
        underlayColor={COLORS.yellowAccessible}
      />
    </View>
  );
}

export default Page1;