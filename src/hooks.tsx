import { Animated, useWindowDimensions } from 'react-native';

import { RefDomCurrent } from './types.js';
import { NAVIGATE_ANIMATE_TIME, NAVBAR_HEIGHT } from './constants';
import { getRefDomOriginXY, getRandomPosition } from './utils';

const useHooks = (props: { navigation: any; }) => {
  const {
    width: windowWidth,
    height: windowHeight
  } = useWindowDimensions()

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
      props.navigation.navigate(navigateTargetName)
      setTimeout(() => {
        fadeAnim.setValue(0)
      }, NAVIGATE_ANIMATE_TIME)
    })
  }

  /**
   * @description get the new random position for the doms
   * @param param0 
   * @return new random position array, and the animations array
   */
  const handleDomsToAnimations = async ({
    domsRefArray,
    animsRefArray
  } : {
    domsRefArray: Array<RefDomCurrent>,
    animsRefArray: Array<any>
  }) => {
    const domsXY: Array<any>  = await Promise.all(domsRefArray
      .map((domRef: RefDomCurrent) => getRefDomOriginXY(domRef))
    )
    const newDomsXY = domsXY.map((domXY: any)  => getRandomPosition({
      xMax: windowWidth - domXY.x,
      xMin: 0 - domXY.x,
      yMax: windowHeight - domXY.y,
      yMin: 0 - domXY.y + NAVBAR_HEIGHT,
      randomFactor: 0.8
    }))

    return {
      animations: newDomsXY.map((newDomXY: { x: number, y: number }, index: number) => (
        Animated.timing(animsRefArray[index], {
          toValue: { x: newDomXY.x, y: newDomXY.y },
          duration: 1500,
          useNativeDriver: true
        })
      )),
      positions: newDomsXY.map((newDomXY: { x: number, y: number }, index: number) => ({
        x: newDomXY.x + domsXY[index].x,
        // 减去导航栏的高度
        y: newDomXY.y + domsXY[index].y - NAVBAR_HEIGHT
      }))
    }
  }

  return {
    pressToNavigate,
    handleDomsToAnimations
  }
}

export default useHooks;