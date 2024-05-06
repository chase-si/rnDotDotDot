import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import Circle from '../components/circle.js';
import BlinkinAnimated from '../components/blinkingAnimated';
import CircleAnimated from '../components/circleAnimated.js';
import useNavigation from '../hooks'
import { NAV_CONSTANTS } from '../navigators';

import { COLORS } from '../constants';
import { pageContainer } from '../style.js';

const Page4 = (props) => {
  const { navigation } = props
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { pressToNavigate } = useNavigation({ navigation })

  useEffect(() => {
    console.log('page4 mounted')
    return () => {
      console.log('page4 unmounted')
    }
  }, [])

  const color = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.yellow, COLORS.blue]
  })

  const handleOnPress = () => {
    pressToNavigate({
      fadeAnim,
      navigateTargetName: NAV_CONSTANTS.PAGE5.name
    })
  }

  return (
    <View style={pageContainer.container}>
      <Circle
        color={COLORS.red}
        underlayColor={COLORS.redAccessible}
      />
      <Circle
        color={COLORS.yellow}
        underlayColor={COLORS.yellowAccessible}
      />
      <BlinkinAnimated>
        <CircleAnimated
          color={color}
          onPress={handleOnPress}
        />
      </BlinkinAnimated>
    </View>
  );
}

export default Page4;