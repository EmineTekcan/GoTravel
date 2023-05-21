import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imgSrc, type, setType }) => {
   
    const handlePress=()=>{
        setType(title.toLowerCase())
    }

    return (
        <TouchableOpacity
        className="items-center space-y-2 justify-around"
        onPress={handlePress}
      >
        <View
          className={`w-20 h-20 p-2 shadow-sm rounded-full items-center justify-center ${
            type === title.toLowerCase() ? "bg-gray-200" : ""
          }`}
        >
          <Image source={imgSrc} className="w-full h-full object-contain" />
        </View>
        <Text className="text-[#00BCC9] text-lg font-semibold">{title}</Text>
      </TouchableOpacity>
    )
}

export default MenuContainer

const styles = StyleSheet.create({})