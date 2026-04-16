import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Separator({ name, size, color }) {
  return (
    <View className="flex-row items-center my-4">
      <View className="flex-1 h-px bg-gray-300" />
<Ionicons name='flash' size={16} color='grey' style={{ marginHorizontal: 4 }} />
      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
}