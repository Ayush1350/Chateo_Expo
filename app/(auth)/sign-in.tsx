import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/ui/CustomButton";
import Toast from "react-native-toast-message";
import { auth } from "@/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: "Please enter both email and password.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Logged in successfully!",
      });

      setTimeout(() => router.replace("/home"), 1000);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: error.message,
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-background px-6">
      <Stack.Screen
        options={{
          title: "Sign In",
          headerStyle: { backgroundColor: "#0F1828" },
        }}
      />
      <View className="flex-1 justify-center items-center gap-4">
        <Text className="text-primary-text text-3xl font-extrabold">
          Welcome Back!
        </Text>
        <Text className="text-primary-text text-lg text-center opacity-75">
          Log in to your account to continue
        </Text>

        <View className="w-full gap-4">
          <TextInput
            className="w-full p-4 border border-primary-button rounded-xl text-primary-text bg-secondary-background"
            placeholder="Email ID"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A0A0A0"
          />

          <TextInput
            className="w-full p-4 border border-primary-button rounded-xl text-primary-text bg-secondary-background"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <TouchableOpacity
          onPress={() => console.log("Forgot Password?")}
          className="w-full items-end"
        >
          <Text className="text-primary-button text-sm font-semibold">
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <CustomButton
          onPress={handleSignIn}
          placeholder="Login"
          className="rounded-xl"
        />

        <View className="flex-row items-center space-x-2">
          <Text className="text-primary-text text-base">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text className="text-primary-button text-base font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Toast /> */}
    </SafeAreaView>
  );
};

export default SignIn;
