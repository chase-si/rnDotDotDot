import React, { useEffect, useRef } from 'react';
import {  Animated } from 'react-native';

/**
 * @description BlinkinAnimated container component
 * @returns BlinkinAnimated component
 */
const BlinkinAnimated = ({ children }) => {
  const blinkAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    handleBlink()
  }, [])

  const handleBlink = () => {
    Animated.timing(blinkAnim, {
      toValue: 1.2,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      // console.log('end')
      Animated.timing(blinkAnim, {
        toValue: 1,
        friction: 1000,
        useNativeDriver: true
      }).start(() => {
        handleBlink()
      })
    })
  }

  return (
    <Animated.View
      style={{
        transform: [{ scale: blinkAnim }],
      }}
    >
      {children}
    </Animated.View>
  )
}

export default BlinkinAnimated

