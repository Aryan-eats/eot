import { View, Text, TextInput } from "react-native";
import React from "react";

interface SearchBarProps {
  placeholder: string; // Default placeholder text
  onPress?: () => void; // Action when the search bar is pressed
  value?: string; // Current input value
  onChangeText?: (text: string) => void; // Function triggered on text change
  onEndEditing?: () => void; // Function triggered when input is submitted
}

const Search = ({
  placeholder,
  onPress,
  value,
  onChangeText,
  onEndEditing,
}: SearchBarProps) => {
  return (
    // <View className="w-full flex-row justify-between items-center border p-4">
        <TextInput
          className="w-full py-6 text-lg text-black px-4 rounded-lg bg-white"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onFocus={onPress} // Triggers on press
          placeholderTextColor="gray"
        />
      // </View>
  );
};

export default Search;
