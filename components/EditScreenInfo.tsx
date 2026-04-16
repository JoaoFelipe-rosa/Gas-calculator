import { View } from 'react-native';
import React from 'react';
import PaginationButtons from './VisualComponents/PaginationButtons';

interface EditScreenInfoProps {
  path?: string;
  showInfo?: number;
}

export default function EditScreenInfo({ path }: EditScreenInfoProps) {
  return (
    <View className="">
      <PaginationButtons />
    </View>
  );
}
