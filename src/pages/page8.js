import React, { useRef } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RNShake from 'react-native-shake';

import Circle from '../components/circle.js';
import { NAV_CONSTANTS } from '../navigators';
import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';
import { getRefDomOriginXY, getRandomPosition } from '../utils';

const Page8 = (props) => {
  const { navigation } = props
  const {
    width: windowWidth,
    height: windowHeight
  } = useWindowDimensions()
  const dom1 = useRef(null)
  const fadeAnim1 = useRef(new Animated.ValueXY()).current
  const fadeAnim2 = useRef(new Animated.ValueXY()).current

  useFocusEffect(() => {
    console.log('Page8 focus')
    const shakeSub = RNShake.addListener(() => {
      handleOnShark()
      console.log('shake event 123!')
    })
    return () => {
      // fadeAnim.setValue(0)
      shakeSub.remove(); 
      console.log('Page8 unfocused!')
    }
  })

  const handleOnShark = async () => {
    console.log('animate1', fadeAnim1.getLayout())
    const dom1XY = await getRefDomOriginXY(dom1.current)
    console.log('dom1XY', dom1XY)
    const dom1NewXY = getRandomPosition({
      xMax: windowWidth,
      yMax: windowHeight,
      originPosition: dom1XY
    })
    console.log('dom1NewXY', dom1NewXY)
    
    Animated.parallel([
      Animated.timing(fadeAnim1, {
        toValue: { x: dom1NewXY.x, y: dom1NewXY.y },
        duration: 1000,
        useNativeDriver: true
      }),
      // Animated.timing(fadeAnim2, {
      //   toValue: { x: res[1].x, y: res[1].y },
      //   duration: 1000,
      //   useNativeDriver: true
      // }),
    ]).start()
  }

  return (
    <View style={pageContainer.container}>
      <Circle
        color={COLORS.blue}
        underlayColor={COLORS.blueAccessible}
      />
      <Animated.View
        ref={dom1}
        style={[
          {
            transform: fadeAnim1.getTranslateTransform()
          }
        ]}
      >
        <Circle
          color={COLORS.blue}
          underlayColor={COLORS.blueAccessible}
        />
      </Animated.View>
      <Animated.View
        style={{
          ...fadeAnim2.getLayout(),
          transform: fadeAnim2.getTranslateTransform()
        }}
      >
        <Circle
          color={COLORS.blue}
          underlayColor={COLORS.blueAccessible}
        />
      </Animated.View>
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