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
      <View className=" mb-4 min-w-full flex-row justify-between bg-black pt-14">
        <Button
          onPress={() => setShowInfo(1)}
          name="cotação"
          iconName="cash"
          size={24}
          color="black"
        />
        <Button
          onPress={() => setShowInfo(2)}
          name="Custo"
          iconName="flash"
          size={24}
          color="black"
        />
        <Button
          onPress={() => setShowInfo(3)}
          name="Consumo"
          iconName="car"
          size={24}
          color="black"
        />
        <Button
          onPress={() => setShowInfo(4)}
          name="em breve"
          iconName="flag"
          size={24}
          color="black"
        />
      </View>
      <ShowFunctions showInfo={showInfo ?? 1} />
    </View>
  );
}
