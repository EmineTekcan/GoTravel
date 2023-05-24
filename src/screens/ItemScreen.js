import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ItemScreen = ({ route }) => {

  const data = route.params?.data;
  const imgSrc = data.photo?.images?.large?.url;
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Image section */}
        <View className="bg-white shadow-lg items-center rounded-md">
          <Image className="w-full h-64 rounded-md" source={{ uri: imgSrc == null ? 'http://kurumsal.mynet.com/wp-content/uploads/2016/03/yemek-image.png' : imgSrc }} />
          <Pressable className="bg-white absolute w-7 h-7 items-center justify-center left-0 ml-3 mt-3 rounded-md">
            <FontAwesome5 name="angle-left" size={24} color="#44afb9"/>
          </Pressable>
          <Pressable className=" absolute w-8 h-8 items-center justify-center right-0 mr-3 mt-3 rounded-md">
            <Foundation name="heart" size={34} color="red" />
          </Pressable>
        </View>

      </ScrollView>
    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({})