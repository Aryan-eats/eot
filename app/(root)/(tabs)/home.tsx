import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import Search from "@/components/Search";
import HeadingWithSeparator from "@/components/HeadingWithSeparator";
import ItemCard from "@/components/ItemCard";
import { ResData } from "@/constants/ResData";
import { RestDish } from "@/constants/RestDishes";
import { AllRes } from "@/constants/AllRes";
import RestaurantCard from "@/components/TrendRes";
import handleAddToCart from "@/app/(root)/(tabs)/Cart";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const offers = new Array(3).fill(null);
  return (
    <View className={`w-full h-full`}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          className={`w-full h-[50vh] relative flex justify-center items-center gap-8 border`}
        >
          <Image
            source={images.home}
            className={`w-full h-full bg-cover absolute top-0 left-0 rounded-lg`}
          />
          <View
            className={`w-11/12 h-14 flex justify-center items-center rounded-lg`}
          >
            <Search
              placeholder="Search"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <Text className="text-transparent text-4xl font-bold " style={styles.specialText}>
            Save More</Text> 

          <HeadingWithSeparator
            isBorder={true}
            text="Trending offers For you"
          />
          <View className="w-full flex flex-row justify-between px-4">
            {offers.map((offer, index) => (
              <View
                key={index}
                className="w-28 h-28 bg-transparent border border-primary rounded-lg shadow-md mt-5"
              >
                {/* Offer content will be rendered here when backend data is available */}
              </View>
            ))}
          </View>
        </View>
        <View className={`w-full h-16 flex items-center justify-center`}>
          <HeadingWithSeparator text="For You" />
        </View>

        <View className="w-full flex justify-center items-center">
          <ScrollView
            horizontal={true} // Enable left-right scrolling
            showsHorizontalScrollIndicator={false} // Hide scrollbar
            contentContainerStyle={{
              paddingHorizontal: 10, // Add padding
              gap: 10, // Space between columns
            }}
          >
            <View className="flex flex-col gap-4">
              {Array.from({ length: 2 }).map((_, rowIndex) => (
                <View key={rowIndex} className="flex flex-row gap-4">
                  {ResData.filter((_, i) => i % 2 === rowIndex).map(
                    (item, index) => (
                      <ItemCard key={index} {...item} />
                    )
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="w-full h-20 flex items-center justify-center">
          <HeadingWithSeparator text="Whats On Your Mind?" />
        </View>
        <ScrollView
          horizontal={true} // Enable left-right scrolling
          showsHorizontalScrollIndicator={false} // Hide scrollbar
          contentContainerStyle={{
            paddingHorizontal: 10, // Add padding
            gap: 10, // Space between columns
          }}
        >
          <View className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <View key={rowIndex} className="flex flex-row gap-4">
                {RestDish.filter((_, i) => i % 2 === rowIndex).map(
                  (item, index) => (
                    <ItemCard key={index} {...item} />
                  )
                )}
              </View>
            ))}
          </View>
        </ScrollView>
        {/* </View> */}
        <View className="w-full h-20 flex items-center justify-center">
          <HeadingWithSeparator text="Trending Restaurants" />
        </View>

        <View className="w-11/12 min-h-60 bg-white rounded-xl shadow-black shadow-md pb-8">
          <Image
            source={ResData[0].imageSource}
            className="w-full h-60 bg-gray-200 border rounded-xl"
            resizeMode="cover"
          />

          <View className="w-full h-20 flex items-center justify-center overflow-hidden">
            <HeadingWithSeparator text="Popular Items" />
          </View>

          <ScrollView
            horizontal={true} // Enable left-right scrolling
            showsHorizontalScrollIndicator={false} // Hide scrollbar
            contentContainerStyle={{
              paddingHorizontal: 10, // Add padding
              gap: 10, // Space between columns
            }}
          >
            <View className="flex flex-col gap-4">
              {Array.from({ length: 1 }).map((_, rowIndex) => (
                <View key={rowIndex} className="flex flex-row gap-4">
                  {ResData.filter((_, i) => i % 2 === rowIndex).map(
                    (item, index) => (
                      <ItemCard
                        key={index}
                        {...item}
                        isAddButton={true}
                        buttonTitle="Add"
                        addButtonOnPress={handleAddToCart}
                      />
                    )
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  specialText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default App;
