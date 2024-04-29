import React from 'react';
import { View, Animated, Pressable } from 'react-native';

import { cirleSize } from '../style.js'

/**
 * @description a circle can be animated color, and pressed
 * @param {
 *  color {String} - background color of the circle, required
 *  onPress {Function} - callback function when button is pressed, optional
 * }
 * @returns Circle component
 */
const CircleAnimated = ({
  color = 'yellow',
  onPress = () => console.log('default OnPress'),
  style
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={style}
    >
      <Animated.View
        style={{
          width: cirleSize,
          height: cirleSize,
          borderRadius: 50,
          shadowOffset: { width: 3, height: 6 }, // 阴影偏移量
          shadowColor: '#000', // 阴影颜色
          shadowOpacity: 0.25, // 阴影不透明度
          shadowRadius: 6, // 阴影半径
          backgroundColor: color
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Animated.View>
    </Pressable>
  )
}

export default CircleAnimated

