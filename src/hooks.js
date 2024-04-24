import { Animated } from 'react-native';

import { NAVIGATE_ANIMATE_TIME } from './constants.js';

const useNavigation = (props) => {
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
  }) => {
    Animated.timing(
      fadeAnim,
      anmateEvent
    ).start(({ _finished }) => {
      navigation.navigate(navigateTargetName)
      setTimeout(() => {
        fadeAnim.setValue(0)
      }, NAVIGATE_ANIMATE_TIME)
    })
  }

  return {
    pressToNavigate
  }
}

export default useNavigation;