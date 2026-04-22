import { View } from 'react-native';
import React from 'react';
import Button from '../Inputs/Button';
import ShowFunctions from './ShowFunctions';
import { StatusBar } from 'expo-status-bar';

export default function PaginationButtons() {
  const [showInfo, setShowInfo] = React.useState(1);

  return (
    <View className=" ">
      <StatusBar style="light" />
      <View className=" mb-4 min-w-full flex-row justify-between bg-green-500 pb-4 pt-14">
        <Button
          onPress={() => setShowInfo(1)}
          name="Consumo"
          iconName="car"
          size={24}
          color="green"
          textStyle="text-black font-bold text-sm"
          active={showInfo === 1}
        />
        <Button
          onPress={() => setShowInfo(2)}
          name="Custo"
          iconName="flash"
          size={24}
          color="green"
          textStyle="text-black font-bold text-sm"
          active={showInfo === 2}
        />
        <Button
          onPress={() => setShowInfo(3)}
          name="Cotação"
          iconName="cash"
          size={24}
          color="green"
          textStyle="text-black font-bold text-sm"
          active={showInfo === 3}
        />
        <Button
          onPress={() => setShowInfo(4)}
          name="em breve"
          iconName="flag"
          size={24}
          color="green"
          textStyle="text-black font-bold"
          active={showInfo === 4}
        />
      </View>
      <ShowFunctions showInfo={showInfo ?? 1} />
    </View>
  );
}
