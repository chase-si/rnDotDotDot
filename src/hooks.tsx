import { Animated } from 'react-native';

import { NAVIGATE_ANIMATE_TIME } from './constants.js';

const useNavigation = (props: { navigation: any; }) => {
  const { navigation } = props

  /**
   * @description pressSomething to start the anmationg, then navigate to new page
   * @param {*} param0 
   */
  const pressToNavigate = ({
    fadeAnim,
    navigateTargetName,
    anmateEvent = {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }
  } : {
    fadeAnim: Animated.Value,
    navigateTargetName: string,
    anmateEvent?: {
      toValue: number,
      duration: number,
      useNativeDriver: boolean
    }
  
  }) => {
    Animated.timing(
      fadeAnim,
      anmateEvent
    ).start(({ finished }: { finished: boolean }) => {
      navigation.navigate(navigateTargetName)
      setTimeout(() => {
        fadeAnim.setValue(0)
      }, NAVIGATE_ANIMATE_TIME)
    })
  }

  // const getPositionRandomA

  return {
    pressToNavigate
  }
}

export default useNavigation;