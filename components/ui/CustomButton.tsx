import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import cn from 'clsx';

interface CustomButtonProps extends TouchableOpacityProps {
  className?: string;
  onPress: () => void;
  placeholder?: string;
  disabled?: boolean;
  variant?: 'default' | 'textOnly'; 
  placeholderClassName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  placeholder,
  disabled = false,
  className = '',
  variant = 'default',
  placeholderClassName,
  ...rest
}) => {
  return (
    <View>
      <TouchableOpacity
        className={cn(
          variant === 'default' &&
            `bg-primary-button w-[327px] h-[52px] rounded-[30px] flex items-center justify-center ${
              disabled ? 'opacity-50' : ''
            }`,
          variant === 'textOnly' && 'bg-transparent',
          className
        )}
        onPress={onPress}
        disabled={disabled}
        {...rest}
      >
      <Text className={cn("text-white", placeholderClassName)}>{placeholder}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
