import { useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Orientation, { OrientationLocker, LANDSCAPE, PORTRAIT } from "react-native-orientation-locker";

import {
  NAV_COMPONENTS_MAP,
  NAV_CONSTANTS
} from './src/navigators';
import { NAVIGATE_ANIMATE_TIME } from './src/constants'

const Stack = createNativeStackNavigator();

export default function App() {
  const navArr = useMemo(() => {
    return Object.values(NAV_CONSTANTS).map(navItem =>({
      name: navItem.name,
      title: navItem.title,
      component: NAV_COMPONENTS_MAP[navItem.name]
    }))
  }, [])

  useEffect(() => {
    Orientation.getOrientation((orientation) => {
      console.log('get orientation when app mount', orientation)
      if (orientation === PORTRAIT) {
        Orientation.lockToLandscapeLeft();
      }
    });
    return () => {
      console.log('unmount app')
    }
  }, [])

  return (
    <View style={styles.container}>
        <NavigationContainer>
        <OrientationLocker
          orientation={LANDSCAPE}
          onChange={(orientation) => {
            // console.log('orientation', orientation)
          }}
          onDeviceChange={orientation => {
            // console.log('onDeviceChange', orientation)
            if (orientation === PORTRAIT) {
              Orientation.lockToLandscapeLeft();
            }
          }}
        />
          <Stack.Navigator>
            {navArr
              .map(nav => (
                <Stack.Screen
                  key={nav.name}
                  name={nav.name}
                  component={nav.component}
                  options={{
                    title: nav.title,
                    headerBackTitle: '返回上一页',
                    animation: "fade",
                    animationDuration: NAVIGATE_ANIMATE_TIME
                    // orientation: "landscape"
                    // headerRight: () => (
                  }}
                />
              ))}
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  },
});
