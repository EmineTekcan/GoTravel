import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const FavouriteScreen = () => {
  const favourites=useSelector((state)=>state.favourites)
  console.log(favourites)
  return (
    <View>
      <Text>FavouriteScreen</Text>
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})