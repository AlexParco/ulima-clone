import { StyleSheet, Text, View, Animated, Image, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import React, { useEffect } from 'react';

const { height } = Dimensions.get('screen')

export default function App() {
  const barPosition = new Animated.Value(0)

  useEffect(() => {
    const finalHeight = height - 10;
    Animated.loop(
      Animated.timing(barPosition, {
        toValue: finalHeight,
        duration: 3000,
        useNativeDriver: true
      }),
      {
        iterations: 10000
      }
    ).start()
  }, [])

  const animatedStyle = {
    transform: [{translateY: barPosition.interpolate({
      inputRange: [0, 250, 700],
      outputRange: [0, 800, 0],
    })}] 
  }  

  return (
    <>
      <Animated.View style={[styles.baranimation, animatedStyle]}></Animated.View>
      <View style={styles.container}>
        <View style={styles.container_title}>
          <Image style={styles.ulima_icon} source={require('./assets/ulima_icon.png')}/>
          <TouchableOpacity >
            <Text>UNIVERSIDAD</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>DE LIMA</Text>
        </View>
        <View style={styles.container_profile}>
          <Text style={styles.name}>{'Isabella haani alessandra uribe'.toUpperCase()}</Text>
          <Text style={styles.name}>20212342</Text>
        </View>
        <View style={styles.container_footer}>
          <Image style={styles.profile_img} source={require('./assets/profile9.png')}/>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.name}>ALUMNO</Text>
            <Image style={styles.barcode_img} source={require('./assets/barcode-png.webp')}/>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  baranimation: {
    opacity: 0.9,
    position: 'absolute',
    width: '100%',
    height: 15,
    zIndex: 10000,
    backgroundColor: '#f37a31',
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    display: 'flex',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_title: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  container_profile: {
    flex: 0.8,
  },
  container_footer:{
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  ulima_icon: {
    width: 75,
    height: 75
  },
  name: {
    width: 280,
    textAlign: 'center',
    fontSize: 28,
    color: '#F37021'
  },
  profile_img: {
    marginBottom: 20,
    borderRadius: 9,
    width: 200,
    height: 250,
  },
  barcode_img: {
    width: 350,
    height: 65
  }
});
