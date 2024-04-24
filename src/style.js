import { StyleSheet, View, Text } from 'react-native';

export const pageContainer = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  centerContainer: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export const page1Container = StyleSheet.create({
  left: {
    position: 'absolute',
    left: '20%',
  },
  right: {
    position: 'absolute',
    right: '20%',
  },
})