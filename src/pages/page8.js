import React, { useRef } from 'react';
import { View, Animated, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RNShake from 'react-native-shake';

import Circle from '../components/circle.js';
import NAV_CONSTANTS from '../navigators.js';
import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';

const Page8 = (props) => {
  const { navigation } = props

  useFocusEffect(() => {
    console.log(Platform)
    // ShakeEventExpo
    console.log('Page8 focus')
    const shakeSub = RNShake.addListener(() => {
      console.log('shake event 123!')
    })
    return () => {
      // fadeAnim.setValue(0)
      shakeSub.remove()
      console.log('page1 unfocused!')
    }
  
  })

  // const handleOnPress = () => {
  //   pressTimes.current = pressTimes.current + 1
  //   if (pressTimes.current >= 5) {
  //     if (animating.current) {
  //       return
  //     }
  //     navigation.navigate(NAV_CONSTANTS.PAGE7.name)
  //   }

  //   let targetAnim = fadeAnim1
  //     if (pressTimes.current === 1) {
  //       targetAnim = fadeAnim1
  //     } else if (pressTimes.current === 2) {
  //       targetAnim = fadeAnim2
  //     } else if (pressTimes.current === 3) {
  //       targetAnim = fadeAnim3
  //     } else if (pressTimes.current === 4) {
  //       targetAnim = fadeAnim4
  //     }
  
  //   // start a new animation
  //   if (!animating.current) {
  //     animating.current = true
  //     animationTimer.current = Animated.timing(
  //       targetAnim,
  //       {
  //         toValue: 1,
  //         duration: 1000,
  //         useNativeDriver: true
  //       }
  //     ).start(({ _finished }) => {
  //       animating.current = false
  //     })
  //   } else { // add animation after the current animation
  //     animating.current = true
  //     Animated.add(
  //       animationTimer.current,
  //       Animated.timing(
  //         targetAnim,
  //         {
  //           toValue: 1,
  //           duration: 1000,
  //           useNativeDriver: true
  //         }
  //       ).start(({ _finished }) => {
  //         animating.current = false
  //       })
  //     )
  //   }
  // }

  return (
    <View style={pageContainer.container}>
      <View style={pageContainer.centerContainer}>
        {new Array(5).fill(1).map((_item, idx) => (
          <Circle
            key={idx}
            color={COLORS.red}
            underlayColor={COLORS.redAccessible} />
        ))}
      </View>
      <View style={pageContainer.centerContainer}>
        {new Array(5).fill(1).map((_item, idx) => (
          <Circle
            key={idx}
            color={COLORS.yellow}
            underlayColor={COLORS.yellowAccessible} />
        ))}
      </View>
      <View style={pageContainer.centerContainer}>
        {new Array(5).fill(1).map((_item, idx) => (
          <Circle
            key={idx}
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible} />
        ))}
      </View>
    </View>
  );
}

export default Page8;