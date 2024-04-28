import { useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import {
  NAV_COMPONENTS_MAP,
  NAV_CONSTANTS
} from './src/navigators';

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
    console.log('app mounted')
  }, [])

  return (
    <View style={styles.container}>
      <NavigationContainer>
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
