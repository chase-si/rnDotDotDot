import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import Circle from '../components/circle.js';
import CircleAnimated from '../components/circleAnimated.js';
import useNavigation from '../hooks';
import { NAV_CONSTANTS } from '../navigators';

import { COLORS } from '../constants.js';
import { pageContainer } from '../style.js';


const Page3 = (props) => {
  const { navigation } = props
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { pressToNavigate } = useNavigation({ navigation })

  useEffect(() => {
    console.log('page3 mounted!')
    // fadeAnim.addListener( ({ value }) => {
    //   console.log('fadeAnim value:', value)
    // })
    return () => {
      console.log('page3 unmounted')
    }
  }, [])

  const color = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.yellow, COLORS.red]
  })

  const handleOnPress = () => {
    pressToNavigate({
      fadeAnim,
      navigateTargetName: NAV_CONSTANTS.PAGE4.name
    })
  }

  return (
    <View style={pageContainer.container}>
      <CircleAnimated
        color={color}
        onPress={handleOnPress}
      />
      <Circle
        color={COLORS.yellow}
        underlayColor={COLORS.yellowAccessible}
      />
      <Circle
        color={COLORS.yellow}
        underlayColor={COLORS.yellowAccessible}
      />
    </View>
  );
}

export default Page3;