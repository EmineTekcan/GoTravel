import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../../redux/favouriteSlice'

const ItemScreen = ({ route }) => {

  const count = useSelector((state) => state.favourites)
  const dispatch = useDispatch()

  const data = route.params?.data;
  const imgSrc = data.photo?.images?.large?.url;
  const isClosed = data.is_closed;
  const price = data.price;
  const name = data.name;
  const location = data.location;
  const cuisine = data.cuisine

  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Image section */}
        <View className="bg-white shadow-lg items-center rounded-md">
          <Image className="w-full h-64 rounded-md" source={{ uri: imgSrc == null ? 'http://kurumsal.mynet.com/wp-content/uploads/2016/03/yemek-image.png' : imgSrc }} />
          <Pressable
            onPress={() => navigation.goBack()}
            className="bg-white absolute w-7 h-7 items-center justify-center left-0 ml-3 mt-3 rounded-md">
            <FontAwesome5 name="angle-left" size={24} color="#44afb9" />
          </Pressable>
          <Pressable
            onPress={() => dispatch(addFavourite({
              imgSrc: imgSrc,
              name: name,
              isClosed: isClosed,
              location: location
            }))}
            className=" absolute w-8 h-8 items-center justify-center right-0 mr-3 mt-3 rounded-md">
            <Foundation name="heart" size={34} color="red" />
          </Pressable>
          <View className="absolute bottom-3 flex flex-row w-full justify-between px-4 ">
            <Text className="text-2xl font-extrabold text-white">{route.params?.data.price != null ? price : "$20 - $40"}</Text>
            <Pressable className="bg-blue-200 rounded-lg px-6 items-center justify-center ">
              <Text className="text-base">{data.open_now_text == null ? "Closed Now" : data.open_now_text}</Text>
            </Pressable>
          </View>
        </View>

        <View className="w-full my-3 space-y-2 ">
          <Text className="text-lg font-bold">{name}</Text>
          <View className="flex-row space-x-2">
            <FontAwesome name="map-marker" size={22} color="#8597A2" />
            <Text className="text-[#428288] font-bold text-sm">{location == null ? "İstanbul" : location}</Text>
          </View>
        </View>

        <View className="flex-row justify-around">
          <View className="flex-row w-24 h-10 ">
            <View className="w-10 h-10 bg-red-200 justify-center items-center rounded-lg shadow-md">
              <FontAwesome name="star" size={24} color="#D25380" />
            </View>
            <View className="left-2">
              <Text className="font-medium">{data.rating}</Text>
              <Text>Ratings</Text>
            </View>
          </View>
          <View className="flex-row w-24 h-10">
            <View className="w-10 h-10 bg-red-200 justify-center items-center rounded-lg shadow-lg">
              <FontAwesome name="dollar" size={24} color="black" />
            </View>
            <View className="left-2">
              <Text className="font-medium">{data.price_level == null ? "$-$" : data.price_level}</Text>
              <Text>Price Level</Text>
            </View>
          </View>
          <View className="flex-row w-24 h-10">
            <View className="w-10 h-10 bg-red-200 justify-center items-center rounded-lg shadow-lg">
              <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />
            </View>
            <View className="left-2">
              <Text className="font-medium">{data.distance_string == null ? "2 km" : data.distance_string}</Text>
              <Text>Distance</Text>
            </View>
          </View>
        </View>

        <View className="w-full flex-row flex-wrap space-x-4 my-3 space-y-1">
          {cuisine != null ? (cuisine.map((item, index) => {
            return (
              <Pressable key={index} className="bg-green-200 px-2 py-1 rounded-md">
                <Text>{item.name}</Text>
              </Pressable>
            )
          })) :
            (<Text>hello</Text>)}
        </View>

        <View className="w-full space-y-2 bg-slate-100 px-2 py-2 rounded-md">
          <View className="flex-row space-x-4 px-2 py-1">
            <FontAwesome name="phone" size={24} color="black" />
            <Text>{data.phone}</Text>
          </View>
          <View className="flex-row space-x-4 px-2 py-1">
            <Entypo name="mail" size={24} color="black" />
            <Text>{data.email}</Text>
          </View>
          <View className="flex-row space-x-6 px-3 py-1">
            <FontAwesome name="map-pin" size={24} color="black" />
            <Text>{data.address}</Text>
          </View>
        </View>

      </ScrollView>
      <Pressable className="absolute self-center mx-2 my-2 bg-green-200 w-11/12 h-12 justify-center items-center rounded-xl bottom-0">
        <Text className="text-base font-semibold">BOOK NOW</Text>
      </Pressable>
    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({})