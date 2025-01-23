import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import "./global.css"

const Index = () => {
  const router = useRouter();

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "#007BFF",
          borderRadius: 5,
          alignItems: "center",
        }}
        onPress={() => {
          console.log('hy')
          router.push('/(tabs)/home')
        }}
      >
        <Text className='text-white' >Go to Login Page</Text>
      </Pressable>
    </View>
  );
};

export default Index;
