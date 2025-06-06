import { InputFieldProps } from "@/types/type";
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, Image, TextInput, Platform, Keyboard } from "react-native";
import { icons } from "@/constants";



const InputFeild = ({
    label, 
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle, 
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-2 w-full">
            <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
            <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg  focus:border-primary-500 ${containerStyle}`}>
                {icon && <Image source={icon} className={`w-5 h-5 ml-3 ${iconStyle}`} />}
                <TextInput
                    className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                    secureTextEntry={secureTextEntry}
                    {...props}/>

            </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
export default InputFeild;