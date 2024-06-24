// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZoomMeeting from './src/ZoomMeeting';

export default function App() {
  return (
    <View style={styles.container}>
      <ZoomMeeting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
