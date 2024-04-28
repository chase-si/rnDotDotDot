import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import Circle from '../components/circle.js';
import useNavigation from '../hooks.js';
import { NAV_CONSTANTS } from '../navigators';

import { COLORS, NAVIGATE_ANIMATE_TIME } from '../constants.js';
import { pageContainer } from '../style.js';


const Page2 = (props) => {
  const { navigation } = props
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { pressToNavigate } = useNavigation({ navigation })

  useEffect(() => {
    console.log('page2 mounted')
    return () => {
      console.log('page2 unmounted')
    }
  }, [])

  const handleOnPress = () => {
    pressToNavigate({
      fadeAnim,
      navigateTargetName: NAV_CONSTANTS.PAGE3.name
    })
  }

  return (
    <View style={pageContainer.container}>
      <Circle
        color={COLORS.yellow}
        underlayColor={COLORS.yellowAccessible}
      />
      <Circle
        color={COLORS.yellow}
        onPress={handleOnPress}
        underlayColor={COLORS.yellowAccessible}
      />
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
    </View>
  );
}

export default Page2;