import { View, Text, SafeAreaView, Image, TextInput, ScrollView, ScrollViewComponent, FlatList } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
 } from "react-native-heroicons/outline"
import Categories from '../components/categories';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  return (
    <SafeAreaView className="bg-white">
      <Text className="text-teal-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image  
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-5 rounded-full"
          />
          <View className="flex-1">
            <Text className=" font-bold text-xs text-t3">Deliver Now!</Text>
            <Text className=" font-bold text-xl text-t2">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>


        {/* Search */ }
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className=" flex-row flex-1 space-x-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon  size={20} color="gray" />
            <TextInput placeholder='What do you wanna eat today ?' 
            keyboardType='default'
            />
          </View>
          <AdjustmentsHorizontalIcon size={20} color="gray"/>
        </View>
        
        {/* Body */}
             
              <FlatList className="bg-gray-100 flex-1">
              
              {/* Categories */}
              <Categories />
              
              {/* Featured */}
              
              
              </FlatList>
              
      </Text>
    </SafeAreaView>
  );
};