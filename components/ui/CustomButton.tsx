import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import cn from 'clsx'

interface CustomButtonProps extends TouchableOpacityProps {
  className?: string;
  onPress: () => void;
  placeholder: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  placeholder,
  disabled = false,
  className = '',
  ...rest
}) => {
  return (
    <View>
      <TouchableOpacity
        className={cn(`bg-primary-button w-[327px] h-[52px] rounded-[30px] flex items-center justify-center ${disabled ? 'opacity-50' : ''}` ,className)}
        onPress={onPress}
        disabled={disabled}
        {...rest}
      >
        <Text className="text-white">{placeholder}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
