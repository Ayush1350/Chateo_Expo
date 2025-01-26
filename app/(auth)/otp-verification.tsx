import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '@/components/ui/BackArrow';
import CustomTextInput from '@/components/ui/CustomTextInput';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '@/components/ui/CustomButton';
import OtpInputCircle from '@/components/ui/OtpInputCircle';
import { OtpInput } from "react-native-otp-entry";

type FormData = {
  phoneNumber: string;
};

const OtpVerification = () => {
  const phoneNumber = useSelector((state: RootState) => {
    const number = state.phoneNumber.phoneNumber;
    return number.replace(/(?<=^\d{2})\d+(?=\d{2}$)/g, '*'.repeat(number?.length - 4));
  });

  const [otp, setOtp] = useState<string>('');

  
  const handleOtpChange = (otp: string) => {
    console.log(otp)
    setOtp(otp);
  };

  const handleSubmitCode = () => {
    
  };

  const handleResendCode = () => {

  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-primary-background px-4">
        <BackArrow header="Code verification" onPress={() => router.replace('/(auth)/number-verification')} />

        <View className="flex-1  items-center gap-4 px-4">

          <View className="gap-2 mt-[169px]">
            <Text className="w-[295px] h-[30px] text-center text-primary-text text-[24px] font-bold">
              Enter Code
            </Text>
            <Text className="text-primary-text w-[261px] h-[48px] text-center text-base">
              We have sent you an SMS with the code to {phoneNumber}
            </Text>
          </View>

          <View className="flex-row w-full justify-center gap-4 mt-[30px]">
              <OtpInput 
              numberOfDigits={4}
              onTextChange={handleOtpChange} 
              focusColor='#375FFF'
              focusStickBlinkingDuration={400}
              theme={{
                pinCodeContainerStyle:{
                  // backgroundColor: '#375FFF',
                  width: 58,
                  height: 58,
                  borderRadius: 12,
                },
                pinCodeTextStyle:{
                  color: '#FFFFFF'
                },
              }}
              />
          </View>

          <View className="justify-center items-center gap-8 mt-[20px]">
            <CustomButton
              variant="textOnly"
              placeholderClassName="text-xl font-semibold"
              onPress={handleResendCode}
              placeholder="Resend Code"
            />
            <CustomButton
              onPress={handleSubmitCode}
              placeholder="Submit"
              disabled={otp.length !== 4} 
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OtpVerification;
