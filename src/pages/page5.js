import { useRef } from 'react';
import { View, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Circle from '../components/circle.js';
import NAV_CONSTANTS from '../navigators.js';
import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';

const Page5 = (props) => {
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
    console.log('page5 mounted')
    return () => {
      pressTimes.current = 0
      console.log('page5 unmounted')
    }
  })

  const handleOnPress = () => {
    pressTimes.current = pressTimes.current + 1
    if (pressTimes.current >= 5) {
      if (animating.current) {
        return
      }
      navigation.navigate(NAV_CONSTANTS.PAGE6.name)
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
      animationTimer.current = Animated.add(
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
      <Circle
        color={COLORS.red}
        underlayColor={COLORS.redAccessible}
      />
      <View style={pageContainer.centerContainer}>
        <Animated.View
          style={{ opacity: fadeAnim3}}
        >
          <Circle
            color={COLORS.yellow}
            underlayColor={COLORS.yellowAccessible}
          />
        </Animated.View>
        <Animated.View
          style={{ opacity: fadeAnim1 }}
        >
          <Circle
            color={COLORS.yellow}
            underlayColor={COLORS.yellowAccessible}
          />
        </Animated.View>
        <Circle
          onPress={() => handleOnPress()}
          color={COLORS.yellow}
          underlayColor={COLORS.yellowAccessible}
        />
        <Animated.View
          style={{ opacity: fadeAnim2}}
        >
          <Circle
            color={COLORS.yellow}
            underlayColor={COLORS.yellowAccessible}
          />
        </Animated.View>
        <Animated.View
          style={{ opacity: fadeAnim4}}
        >
          <Circle
            color={COLORS.yellow}
            underlayColor={COLORS.yellowAccessible}
          />
        </Animated.View>
      </View>
      <Circle
        color={COLORS.blue}
        underlayColor={COLORS.blueAccessible}
      />
    </View>
  );
}

export default Page5;