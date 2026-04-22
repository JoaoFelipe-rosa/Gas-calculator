import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Button({ onPress, iconName, size, color,name, textStyle, active }) {
  return (
    <TouchableOpacity onPress={onPress} className={`rounded flex-1 items-center px-4 py-2 m-1 ${active ? 'bg-green-300' : 'bg-white'}`}>
      <Ionicons name={iconName} size={size} color={color} style={{ marginHorizontal: 4 }} />
      <Text className={textStyle}>{name}</Text>
    </TouchableOpacity>
  );
}


// text-black  font-bold text-sm