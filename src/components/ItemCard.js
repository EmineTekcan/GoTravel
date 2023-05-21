import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ItemCard = ({ imgSrc, title, location }) => {

    return (
        <Pressable className="rounded-md border border-gray-300 space-y-2 px-3 py-3 shadow-md bg-white w-[160px] my-2">
            <Image className="w-full h-24 self-center" source={{ uri: imgSrc }} />
            <Text className="text-[#428288] font-bold text-base">{title.length > 14 ? title.slice(0, 14) + "..." : title}</Text>
            <View className="flex-row space-x-2">
                <FontAwesome name="map-marker" size={22} color="#8597A2" />
                <Text className="text-[#428288] font-bold text-base">{location.length > 18 ? location.slice(0, 18) + "..." : location}</Text>
            </View>
        </Pressable>
    )
}

export default ItemCard

const styles = StyleSheet.create({})