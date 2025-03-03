import React from "react";
import Toast, { BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#4CAF50", backgroundColor: "#1E293B" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
      text2Style={{ fontSize: 14, color: "#B0BEC5" }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#F44336", backgroundColor: "#1E293B" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
      text2Style={{ fontSize: 14, color: "#B0BEC5" }}
    />
  ),
};

const CustomToast = () => <Toast config={toastConfig} />;

export default CustomToast;
