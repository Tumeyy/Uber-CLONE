import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.}>I am the homescreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
});