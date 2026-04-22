import React from 'react';
import { Text, View, TextInput } from 'react-native';

type ShowTextInputProps = {
  label: string;
  onChangeText: (text: string) => void;
  inputMode: 'numeric';
  placeholder: string;
};

export default function ShowTextInput({
  label,
  onChangeText,
  inputMode,
  placeholder,
}: ShowTextInputProps) {
  return (
    <View className="px-4 py-3">
      <Text className="mb-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        inputMode={inputMode}
        className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900"
      />
    </View>
  );
}
