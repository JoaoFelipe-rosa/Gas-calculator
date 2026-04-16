import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Button({ onPress, iconName, size, color,name }) {
  return (
    <TouchableOpacity onPress={onPress} className="rounded flex-1 items-center bg-white px-4 py-2 m-1">
      <Ionicons name={iconName} size={size} color={color} style={{ marginHorizontal: 4 }} />
      <Text className="text-black  font-bold text-sm">{name}</Text>
    </TouchableOpacity>
  );
}
