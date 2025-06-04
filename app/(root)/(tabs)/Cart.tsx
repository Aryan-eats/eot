import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import { Image } from 'expo-image'
import CustomButton from '@/components/CustomButton'

const Cart = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4 pt-12 pb-4 bg-primary-50">
        <Text className="text-2xl font-JakartaBold text-white">Your Cart</Text>
      </View>
      
      <ScrollView className="flex-1 px-4">
        {/* Empty Cart State */}
        <View className="flex-1 items-center justify-center py-20">
          <Image 
            source={icons.list}
            className="w-24 h-24 mb-4"
            contentFit="contain"
          />
          <Text className="text-xl font-JakartaSemiBold text-secondary-700 mb-2">
            Your cart is empty
          </Text>
          <Text className="text-base font-Jakarta text-secondary-500 text-center mb-8">
            Looks like you haven't added any items to your cart yet
          </Text>
          <CustomButton 
            title="Start Shopping"
            bgVariant="primary"
            className="w-full"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  }
})