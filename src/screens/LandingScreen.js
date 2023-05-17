import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="bg-white flex-1 relative">

      {/* First Section */}
      <View className="mt-12 flex-row px-6 items-center space-x-2">
        <View className="bg-[#2A2B4B] w-16 h-16 items-center justify-center rounded-full">
          <Text className="text-3xl text-[#00bcc9] font-semibold">Go</Text>
        </View>
        <Text className="text-2xl font-semibold text-[#2A2B4B]">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-4 space-y-1">
        <Text className="text-[#3C6072] text-[32px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[28px] font-bold">Good Moments</Text>
      </View>

      <Text className="text-[#3C6072] px-6 mt-2 text-base">
        “All journeys have secret destinations of which the traveller is unaware.”
        - Martin Buber</Text>

      {/* Circles Section */}
      <View className="w-[300px] h-[300px] bg-[#00BCC9] absolute rounded-full bottom-20 -right-28" />
      <View className="w-[300px] h-[300px] bg-[#E99265] absolute rounded-full -bottom-28 -left-28" />

      {/* Image Section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeInUp"
          easing="ease-in-circ"
          source={require('../../assets/hero.png')}
          className="object-cover w-[340] h-full " />
      </View>

      {/* Button Section */}

      <TouchableOpacity
      onPress={()=>navigation.navigate("Main")}
      >
        <View
          className="absolute bottom-20 items-center 
        justify-center w-28 h-28 self-center rounded-full 
        border-t-8 border-b-8
         border-[#00BCC9]">
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 bg-[#00BCC9] rounded-full items-center justify-center">
            <Text className="text-gray-50 text-[38px] font-semibold">Go</Text>
          </Animatable.View>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})