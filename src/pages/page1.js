import React, { useRef } from 'react';
import { View, Animated, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RNShake from 'react-native-shake';

import Circle from '../components/circle.js';
import useNavigation from '../hooks.js';
import NAV_CONSTANTS from '../navigators.js';
import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';


const Page1 = (props) => {
  const { navigation } = props
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { pressToNavigate } = useNavigation({ navigation })

  useFocusEffect(() => {
    console.log('page1 focused')
    alert('page12 focused')
    const sub = RNShake.addListener(() => {
      alert(123)
      console.log('shake event 123!')
    })
    return () => {
      // fadeAnim.setValue(0)
      sub.remove()
      console.log('page1 unfocused!')
    }
  })

  const handleOnPress = () => {
    pressToNavigate({
      fadeAnim,
      navigateTargetName: NAV_CONSTANTS.PAGE2.name
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
      <Circle
        color={COLORS.yellow}
        onPress={handleOnPress}
        underlayColor={COLORS.yellowAccessible}
      />
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