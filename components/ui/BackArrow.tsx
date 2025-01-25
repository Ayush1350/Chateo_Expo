import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

interface BackArrow {
    onPress: () => void,
    header: string,
}

const BackArrow: React.FC<BackArrow> = ({onPress, header}) => {
  return (
    <View className="flex-row items-center justify-start gap-4 w-full">
             <TouchableOpacity onPress={onPress}>
               <Icon name="chevron-left" size={28} style={{ color: '#F7F7FC' }} />
             </TouchableOpacity>
             <Text className='text-primary-text text-2xl'>
                {header}
             </Text>
           </View>
  )
}

export default BackArrow