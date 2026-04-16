import React from 'react';
import { Text, View } from 'react-native';
import EditScreenInfo from './EditScreenInfo';

export function ScreenContent() {
  return (
    <View className="h-full w-full">
      <EditScreenInfo path="" />
    </View>
  );
}
