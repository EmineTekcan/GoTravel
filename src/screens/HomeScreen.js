import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import MenuContainer from '../components/MenuContainer';
import { Hotels, Attractions, Restaurants } from '../../assets';
import { Entypo } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';

const HomeScreen = () => {

  const [tur, setTur] = useState("restaurants")


  const getPlace = (text) => {
    let response = axios.request({
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
      params: {
        query: text,
        lang: 'en_US',
        units: 'km'
      },
      headers: {
        'X-RapidAPI-Key': '6576653bb4mshbaa5503b12cec53p140bbajsn545e0756ea61',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    }).then((res) => console.log(res.data))

  }

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
      <ScrollView>

        <View className="px-4 mt-6 flex-row items-center justify-evenly flex-wrap">
          <ItemCard imgSrc={"https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg"} title="Doga" location="Ormanlık" />
          <ItemCard imgSrc={"https://lavinya.net/wp-content/uploads/2022/11/54e79a-lavanta-cicegi-tarlasi-manzara-lavender-field-scaled.jpeg"} title="Doga" location="Ormanlık" />
          <ItemCard imgSrc={"https://lavinya.net/wp-content/uploads/2022/11/54e79a-lavanta-cicegi-tarlasi-manzara-lavender-field-scaled.jpeg"} title="Doga" location="Ormanlık" />

          <ItemCard imgSrc={"https://lavinya.net/wp-content/uploads/2022/11/54e79a-lavanta-cicegi-tarlasi-manzara-lavender-field-scaled.jpeg"} title="Doga" location="Ormanlık" />

        </View>

      </ScrollView>

    </View >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})