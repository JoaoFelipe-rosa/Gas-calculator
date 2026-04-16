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
    <View>
      <View className="m-2 items-start justify-center">
        <Text>{label}</Text>
      </View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="m-2 rounded border border-gray-300 p-10 px-4 py-2"
        inputMode={inputMode}
      />
    </View>
  );
}
