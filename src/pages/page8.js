import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RNShake from 'react-native-shake';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Circle from '../components/circle.js';

import useHooks from '../hooks';
import { NAV_CONSTANTS } from '../navigators';
import { COLORS } from '../constants';
import { pageContainer } from '../style.js';

const Page8 = (props) => {
  const { navigation } = props
  const { handleDomsToAnimations } = useHooks()
  const animator = useRef(null)
  const shakeRef = useRef(null)
  const dom1 = useRef(null)
  const dom2 = useRef(null)
  const dom3 = useRef(null)
  const dom4 = useRef(null)
  const dom5 = useRef(null)
  const dom6 = useRef(null)
  const dom7 = useRef(null)
  const dom8 = useRef(null)
  const dom9 = useRef(null)
  const dom10 = useRef(null)
  const dom11 = useRef(null)
  const dom12 = useRef(null)
  const dom13 = useRef(null)
  const dom14 = useRef(null)
  const dom15 = useRef(null)
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
    console.log('Page8 focus!')
    shakeRef.current = RNShake.addListener(() => {
      handleOnShark()
    })

    return () => {
      console.log('Page8 unfocused!')
      shakeRef.current?.remove();
    }
  })


  const handleOnShark = async () => {
    try {
      const {
        animations,
        // todo set to localstorage to for next page display
        positions
      } = await handleDomsToAnimations({
        domsRefArray: [
          dom1.current,
          dom2.current,
          dom3.current,
          dom4.current,
          dom5.current,
          dom6.current,
          dom7.current,
          dom8.current,
          dom9.current,
          dom10.current,
          dom11.current,
          dom12.current,
          dom13.current,
          dom14.current,
          dom15.current,
        ],
        animsRefArray: [
          anim1, anim2, anim3, anim4, anim5,
          anim6, anim7, anim8, anim9, anim10,
          anim11, anim12, anim13, anim14, anim15
        ],
      })

      console.log('positions', positions)
      AsyncStorage.setItem('page8Positions', JSON.stringify(positions))

      animator.current = Animated.parallel(animations).start(({ _finished }) => {
        // console.log('finished')
        navigation.navigate(NAV_CONSTANTS.PAGE9.name)
        setTimeout(() => {
          anim1.setValue({ x: 0, y: 0 })
          anim2.setValue({ x: 0, y: 0 })
          anim3.setValue({ x: 0, y: 0 })
          anim4.setValue({ x: 0, y: 0 })
          anim5.setValue({ x: 0, y: 0 })
          anim6.setValue({ x: 0, y: 0 })
          anim7.setValue({ x: 0, y: 0 })
          anim8.setValue({ x: 0, y: 0 })
          anim9.setValue({ x: 0, y: 0 })
          anim10.setValue({ x: 0, y: 0 })
          anim11.setValue({ x: 0, y: 0 })
          anim12.setValue({ x: 0, y: 0 })
          anim13.setValue({ x: 0, y: 0 })
          anim14.setValue({ x: 0, y: 0 })
          anim15.setValue({ x: 0, y: 0 })
        }, 1500)
      })
    } catch (error) {
      console.log('err', error)
    }
  }

  const AnimatedView = ({ d, a, c, uc }) => {
    return (
      <Animated.View
        ref={d}
        style={{ transform: a.getTranslateTransform() }}
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
      <View style={pageContainer.centerContainer}>
        <AnimatedView d={dom1} a={anim1} c={COLORS.red} uc={COLORS.redAccessible} />
        <AnimatedView d={dom2} a={anim2} c={COLORS.red} uc={COLORS.redAccessible} />
        <AnimatedView d={dom3} a={anim3} c={COLORS.red} uc={COLORS.redAccessible} />
        <AnimatedView d={dom4} a={anim4} c={COLORS.red} uc={COLORS.redAccessible} />
        <AnimatedView d={dom5} a={anim5} c={COLORS.red} uc={COLORS.redAccessible} />
      </View>
      <View style={pageContainer.centerContainer}>
        <AnimatedView d={dom6} a={anim6} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
        <AnimatedView d={dom7} a={anim7} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
        <AnimatedView d={dom8} a={anim8} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
        <AnimatedView d={dom9} a={anim9} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
        <AnimatedView d={dom10} a={anim10} c={COLORS.yellow} uc={COLORS.yellowAccessible} />
      </View>
      <View style={pageContainer.centerContainer}>
        <AnimatedView d={dom11} a={anim11} c={COLORS.blue} uc={COLORS.blueAccessible} />
        <AnimatedView d={dom12} a={anim12} c={COLORS.blue} uc={COLORS.blueAccessible} />
        <AnimatedView d={dom13} a={anim13} c={COLORS.blue} uc={COLORS.blueAccessible} />
        <AnimatedView d={dom14} a={anim14} c={COLORS.blue} uc={COLORS.blueAccessible} />
        <AnimatedView d={dom15} a={anim15} c={COLORS.blue} uc={COLORS.blueAccessible} />
      </View>
    </View>
  );
}

export default Page8;