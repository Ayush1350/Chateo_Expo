import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type OtpInputCircleProps = {
  onOtpChange?: (otp: string) => void;
};

const OtpInputCircle: React.FC<OtpInputCircleProps> = ({ onOtpChange }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const refs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (onOtpChange) {
      onOtpChange(otp.join(''));
    }
  }, [otp, onOtpChange]);

  const handleInputChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < otp.length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleDelete = (index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = '';
    setOtp(updatedOtp);
    if (index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
      {otp.map((value, index) => (
        <View key={index} style={{ borderWidth: 1, borderColor: 'gray', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
          {value ? (
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</Text>
          ) : (
            <TextInput
              ref={(ref) => (refs.current[index] = ref)}
              className='text-center text-2xl font-semibold text-primary-text' 
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && !value && index > 0) {
                  handleDelete(index - 1);
                }
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default OtpInputCircle;
