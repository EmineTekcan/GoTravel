import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Bulunamadi } from '../../assets';
import yok from '../../assets/yok.png'

const ItemCard = ({ imgSrc, title, location, data }) => {

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("Item", { data: data })}
            className="rounded-md border border-gray-300 space-y-2 px-3 py-3 shadow-md bg-white w-[160px]  my-2 mx-4 justify-between">
            <Image className="w-full h-24 self-center" source={{ uri: imgSrc==null ? 'http://kurumsal.mynet.com/wp-content/uploads/2016/03/yemek-image.png' : imgSrc }} />
            <Text className="text-[#428288] font-bold text-sm">{title == null ? "Restaurant": title}</Text>
            <View className="flex-row space-x-2">
                <FontAwesome name="map-marker" size={22} color="#8597A2" />
                <Text className="text-[#428288] font-bold text-sm">{location == null ? "İstanbul" : location}</Text>
            </View>
        </Pressable>
    )
}

export default ItemCard

const styles = StyleSheet.create({})