import { View, TextInput, TextInputProps, Text } from "react-native";
import React from "react";
import cn from "clsx";

interface CustomTextInputProps extends TextInputProps {
  className?: string;
  placeholder?: string;
  keyboardType: TextInputProps["keyboardType"];
  value: string;
  onChangeText: (value: string) => void;
  maxLength?: number;
  errors?: string;
}

const CustomTextInput = React.forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      className = "",
      placeholder,
      keyboardType,
      value,
      onChangeText,
      maxLength,
      errors,
      ...rest
    },
    ref,
  ) => {
    return (
      <View className="gap-4">
        <TextInput
          ref={ref}
          className={cn(
            "h-[50px] w-[250px] border border-primary-button rounded-md text-primary-text text-[20px] pl-2",
            className,
          )}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          {...rest}
        />
        <View className={errors ? "h-20" : ""}>
          {errors && <Text className="text-red-500">{errors}</Text>}
        </View>
      </View>
    );
  },
);

CustomTextInput.displayName = "CustomTextInput";

export default CustomTextInput;
