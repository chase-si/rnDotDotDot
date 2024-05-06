import { useRef } from 'react';
import { View, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Circle from '../components/circle.js';
import { NAV_CONSTANTS } from '../navigators';
import BlinkinAnimated from '../components/blinkingAnimated';

import { COLORS } from '../constants';
import { pageContainer } from '../style.js';

const Page7 = (props) => {
  const { navigation } = props
  const fadeAnim1 = useRef(new Animated.Value(0)).current
  const fadeAnim2 = useRef(new Animated.Value(0)).current
  const fadeAnim3 = useRef(new Animated.Value(0)).current
  const fadeAnim4 = useRef(new Animated.Value(0)).current

  // the anination is playing or not
  const animating = useRef(false)
  // middle button press times
  const pressTimes = useRef(0)
  // current animate object
  const animationTimer = useRef(null)

  useFocusEffect(() => {
    console.log('Page6 mounted')
    return () => {
      pressTimes.current = 0
      console.log('Page6 unmounted')
    }
  })

  const handleOnPress = () => {
    pressTimes.current = pressTimes.current + 1
    if (pressTimes.current >= 5) {
      if (animating.current) {
        return
      }
      navigation.navigate(NAV_CONSTANTS.PAGE8.name)
    }

    let targetAnim = fadeAnim1
      if (pressTimes.current === 1) {
        targetAnim = fadeAnim1
      } else if (pressTimes.current === 2) {
        targetAnim = fadeAnim2
      } else if (pressTimes.current === 3) {
        targetAnim = fadeAnim3
      } else if (pressTimes.current === 4) {
        targetAnim = fadeAnim4
      }
  
    // start a new animation
    if (!animating.current) {
      animating.current = true
      animationTimer.current = Animated.timing(
        targetAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }
      ).start(({ _finished }) => {
        animating.current = false
      })
    } else { // add animation after the current animation
      animating.current = true
      Animated.add(
        animationTimer.current,
        Animated.timing(
          targetAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        ).start(({ _finished }) => {
          animating.current = false
        })
      )
    }
  }

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
        <Animated.View
          style={{ opacity: fadeAnim3}}
        >
          <Circle
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible}
          />
        </Animated.View>
        <Animated.View
          style={{ opacity: fadeAnim1 }}
        >
          <Circle
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible}
          />
        </Animated.View>
        <BlinkinAnimated>
          <Circle
            onPress={() => handleOnPress()}
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible}
          />
        </BlinkinAnimated>
        <Animated.View
          style={{ opacity: fadeAnim2}}
        >
          <Circle
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible}
          />
        </Animated.View>
        <Animated.View
          style={{ opacity: fadeAnim4}}
        >
          <Circle
            color={COLORS.blue}
            underlayColor={COLORS.blueAccessible}
          />
        </Animated.View>
      </View>
    </View>
  );
}

export default Page7;