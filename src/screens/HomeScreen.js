import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import MenuContainer from '../components/MenuContainer';
import { Hotels, Attractions, Restaurants, NotFound, Tour } from '../../assets';
import { Entypo } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';
import { useEffect } from 'react';
import { getPlaces,getRestaurants } from '../../api/index'

const HomeScreen = () => {

  const [tur, setTur] = useState("attractions")
  const [isLoading, setIsLoading] = useState(true)
  const [mainData, setMainData] = useState([])

  useEffect(() => {
    setIsLoading(true);
    data = getRestaurants().then(response => {
      setMainData(response)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    });
  }, [])
  return (
    <View className="flex-1 bg-white relative">

      {/* Header section */}
      <View className="flex-row mt-8 justify-between  mx-8 items-center">
        <View>
          <Text className="text-[#0B646B] text-[32px] font-bold">Discover</Text>
          <Text className="text-[#527873] text-[26px]" >the beauty today</Text>
        </View>
        <View className="w-14 h-14 justify-center items-center">
          <Image className="w-14 h-14 rounded-md object-cover" source={require('../../assets/avatar.png')} />
        </View>
      </View>

      {/* Search section <View className=" bg-white mx-4 rounded-xl shadow-md mt-4 h-12">
        <TextInput
          className="w-full h-full px-3 py-2"
          placeholder='Search'
          onChangeText={(text) => getPlace(text)}
        />
      </View> */}

      {/* menu section */}
      <View className="flex-row items-center justify-between mx-6 mt-6">
        <MenuContainer key={"hotel"} title="Hotels" imgSrc={Hotels} type={tur} setType={setTur} />
        <MenuContainer key={"attraction"} title="Attractions" imgSrc={Attractions} type={tur} setType={setTur} />
        <MenuContainer key={"restaurant"} title="Restaurants" imgSrc={Restaurants} type={tur} setType={setTur} />
      </View>

      <View className="flex-row items-center justify-between mx-6 my-2">
        <Text className="text-[24px] text-[#2C7379] font-bold">Top Tips</Text>
        <TouchableOpacity className="flex-row space-x-3 ">
          <Text className="text-[#2C7379] text-base font-semibold">Explore</Text>
          <Entypo name="arrow-long-right" size={24} color="#A0C4C7" />
        </TouchableOpacity>
      </View>

      {isLoading ? (<View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2C7379" />
      </View>) :
        (
          mainData?.length > 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              className="flex w-full "
              numColumns={2}
              contentContainerStyle={
                {
                  alignItems: "center",
                }
              }
              zoomScale={true}
              data={mainData}
              renderItem={({ item, index }) => (
                <ItemCard
                  data={item}
                  key={index}
                  imgSrc={item.photo?.images?.small?.url}
                  location={item.location_string}
                  title={item.name}
                />
              )}
            />
          ) : (

            <View className="items-center justify-center flex-1 space-y-3">
              <Image source={NotFound} className="w-16 h-16" />
              <Text className="text-[#2C7379] font-semibold text-base">Opps... No Data Found</Text>
            </View>


          )
        )
      }
    </View >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})