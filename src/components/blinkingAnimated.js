import React from 'react';
import { View, TouchableHighlight } from 'react-native';

import { cirleSize } from '../style.js'

/**
 * @description circle button, could be pressed
 * @param {
 *  color {String} - background color of the circle, required
 *  underlayColor {String} - background color when button is pressed, required
 *  onPress {Function} - callback function when button is pressed, optional
 * }
 * @returns Circle component
 */
const Circle = ({
    onPress = () => console.log('default OnPress'),
    color = 'yellow',
    underlayColor = 'orange',
    style
}) => {
    return (
        <TouchableHighlight
            style={{
                width: cirleSize,
                height: cirleSize, 
                borderRadius: 50,
                shadowOffset: { width: 3, height: 6 }, // 阴影偏移量
                shadowColor: '#000', // 阴影颜色
                shadowOpacity: 0.25, // 阴影不透明度
                shadowRadius: 6, // 阴影半径
                backgroundColor: color,
                ...style
            }}
            onPress={onPress}
            underlayColor={underlayColor}
        >
            <View
                style={{
                    width: '100%',
                    height: '100%', 
                }}
            />
        </TouchableHighlight>
    )
}

export default Circle

