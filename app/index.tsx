import { Image, Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/Images';
import CustomButton from '@/components/ui/CustomButton';


const Index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-primary-background">
        <View className="flex-1 items-center justify-around px-4">

          <View className='flex flex-col items-center justify-center gap-4'>
          <Image source={images.walkthroughLogo} className="w-[262px] h-[271px]" />
          <Text className="text-primary-text text-center text-[24px] font-bold w-[280px] h-[90px] mt-[42px]">
            Connect easily with your family and friends over countries
          </Text>
          </View>

          <View className='flex flex-col justify-center items-center gap-4'>
                <Text className='w-[148px] h-[24px] text-sm font-semibold text-primary-text'>
                Terms & Privacy Policy
                </Text>

                <CustomButton
                onPress={() => router.push('/(auth)/number-verification')}
                placeholder='Start Messaging'
                />
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
