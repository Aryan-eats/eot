import { View, Text, Image } from "react-native";
import { icons, images } from "@/constants";
import CustomButton from "./CustomButton";
const Oauth = () => {
    const handleGoogleSignIn = async () => {};
    return (
  <View>
    <View className="flex flex-row items-center justify-center mt-3 mb-3">
      <View className="flex-1 h-[1px] bg-gray-300" />
      <Text className="mx-3 text-gray-500 text-sm">or</Text>
      <View className="flex-1 h-[1px] bg-gray-300" />
    </View>
    <CustomButton
      title="Sign in with Google"
      className="w-11/12 shadow-none"
      IconLeft={() => (
        <Image
          source={icons.google}
          resizeMode="contain"
          className="w-5 h-4 mx-2"
        />
      )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
    />
  </View>
);
}
export default Oauth;
