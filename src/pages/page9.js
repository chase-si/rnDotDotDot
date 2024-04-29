import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Circle from '../components/circle.js';
import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';
import { NAV_CONSTANTS } from '../navigators';
import useHooks from '../hooks';

const Page8 = (props) => {
  const { navigation } = props
  const anim1 = useRef(new Animated.ValueXY()).current
  const anim2 = useRef(new Animated.ValueXY()).current
  const anim3 = useRef(new Animated.ValueXY()).current
  const anim4 = useRef(new Animated.ValueXY()).current
  const anim5 = useRef(new Animated.ValueXY()).current
  const anim6 = useRef(new Animated.ValueXY()).current
  const anim7 = useRef(new Animated.ValueXY()).current
  const anim8 = useRef(new Animated.ValueXY()).current
  const anim9 = useRef(new Animated.ValueXY()).current
  const anim10 = useRef(new Animated.ValueXY()).current
  const anim11 = useRef(new Animated.ValueXY()).current
  const anim12 = useRef(new Animated.ValueXY()).current
  const anim13 = useRef(new Animated.ValueXY()).current
  const anim14 = useRef(new Animated.ValueXY()).current
  const anim15 = useRef(new Animated.ValueXY()).current

  useFocusEffect(() => {
    console.log('Page9 focus')
    initRender()
    return () => {
      console.log('Page9 unfocused!')
    }
  })

  const initRender = async () => {
    const res = await AsyncStorage.getItem('page8Positions')
    const postionsRes = JSON.parse(res)
    console.log('postionsRes', postionsRes)
    anim1.setValue(postionsRes[0])
    anim2.setValue(postionsRes[1])
    anim3.setValue(postionsRes[2])
    anim4.setValue(postionsRes[3])
    anim5.setValue(postionsRes[4])
    anim6.setValue(postionsRes[5])
    anim7.setValue(postionsRes[6])
    anim8.setValue(postionsRes[7])
    anim9.setValue(postionsRes[8])
    anim10.setValue(postionsRes[9])
    anim11.setValue(postionsRes[10])
    anim12.setValue(postionsRes[11])
    anim13.setValue(postionsRes[12])
    anim14.setValue(postionsRes[13])
    anim15.setValue(postionsRes[14])
  }

  const AnimatedView = ({ d, a, c, uc }) => {
    return (
      <Animated.View
        ref={d}
        style={{
          position: 'absolute',
          left: a.x,
          top: a.y
        }}
      >
        <Circle
          color={c}
          underlayColor={uc}
        />
      </Animated.View>
    )
  }

  return (
    <View style={pageContainer.container}>
      <AnimatedView a={anim1} c={COLORS.red} uc={COLORS.redAccessible} />
      <AnimatedView a={anim2} c={COLORS.red} uc={COLORS.redAccessible} />
      <AnimatedView a={anim3} c={COLORS.red} uc={COLORS.redAccessible} />
      <AnimatedView a={anim4} c={COLORS.red} uc={COLORS.redAccessible} />
      <AnimatedView a={anim5} c={COLORS.red} uc={COLORS.redAccessible} />
      <AnimatedView a={anim6} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      <AnimatedView a={anim7} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      <AnimatedView a={anim8} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      <AnimatedView a={anim9} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      <AnimatedView a={anim10} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      <AnimatedView a={anim11} c={COLORS.blue} uc={COLORS.blueAccessible} />
      <AnimatedView a={anim12} c={COLORS.blue} uc={COLORS.blueAccessible} />
      <AnimatedView a={anim13} c={COLORS.blue} uc={COLORS.blueAccessible} />
      <AnimatedView a={anim14} c={COLORS.blue} uc={COLORS.blueAccessible} />
      <AnimatedView a={anim15} c={COLORS.blue} uc={COLORS.blueAccessible} />
    </View>
  );
}

export default Page8;