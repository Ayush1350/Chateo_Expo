import { View, Text, Image } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import images from "@/constants/Images";
import CustomTextInput from "@/components/ui/CustomTextInput";
import CustomButton from "@/components/ui/CustomButton";
import BackArrow from "@/components/ui/BackArrow";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "@/src/store/phoneNumberSlice";

type FormData = {
  phoneNumber: string;
};

const NumberVerification = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      phoneNumber: "",
    },
    mode: "onChange",
  });

  const handleContinue = (data: FormData) => {
    dispatch(setPhoneNumber(data?.phoneNumber));
    router.replace("/(auth)/otp-verification");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "hello",
          headerStyle: { backgroundColor: "#0F1828" },
        }}
      />

      <SafeAreaView className="flex-1 bg-primary-background px-4">
        <View className="flex-1 justify-center items-center gap-4 px-4">
          <Text className="w-[295px] h-[30px] text-center text-primary-text text-2xl font-bold">
            Enter Your Phone Number
          </Text>

          <View className="flex-row w-full justify-center gap-4 mt-2">
            <View className="flex-row justify-center items-center gap-2 border border-primary-button h-[50px] p-2 rounded-md">
              <Image source={images.indianFlagIcon} className="w-8 h-8" />
              <Text className="text-primary-text text-[20px]"> +91</Text>
            </View>
            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  value={value}
                  onChangeText={onChange}
                  maxLength={10}
                />
              )}
            />
          </View>

          <CustomButton
            onPress={handleSubmit(handleContinue)}
            placeholder="Continue"
            disabled={!isValid}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default NumberVerification;
