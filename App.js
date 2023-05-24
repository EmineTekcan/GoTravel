import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './src/constants/colors'
import HomeScreen from './src/screens/HomeScreen'
import LandingScreen from './src/screens/LandingScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import FavouriteScreen from './src/screens/FavouriteScreen'
import SearchScreen from './src/screens/SearchScreen'
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ItemScreen from './src/screens/ItemScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard:true,
        lazy: true,
        tabBarStyle: {
          marginHorizontal: 20,
          marginBottom: 20,
          backgroundColor: colors.blue,
          borderRadius: 20,
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          borderRadius: 15,
          marginVertical: 10,
          marginHorizontal: 20,
        },
        headerPressOpacity: 0.3,
        headerShown: false
      }}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => focused ?
              <Foundation name="home" size={28} color={colors.white} /> :
              <Feather name="home" size={23} color={colors.white} />

          }} />
        <Tab.Screen
          name='Search'
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color }) => focused ?
              <FontAwesome name="search" size={24} color={colors.white} />:
              <Ionicons name="search-outline" size={24} color={colors.white} /> 
          }}
        />
        <Tab.Screen
          name='Favourite'
          component={FavouriteScreen}
          options={{
            tabBarIcon: ({ focused, color }) => focused ?
              <AntDesign name="heart" size={22} color={colors.white} /> :
              <AntDesign name="hearto" size={24} color={colors.white} />

          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color }) => focused ?
              <Ionicons name="person" size={24} color={colors.white} /> :
              <Ionicons name="person-outline" size={24} color={colors.white} />

          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} />
        <Stack.Screen name='Main' component={Tabs} />
        <Stack.Screen name='Item' component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

