import { View, Image, Text } from 'react-native';
import React from 'react';
import { TravelCostView } from '../Functions/TravelCost';
import Cotacao from '../Functions/MoneyCotation';
import LiterToKilometerPerLiterView from '../Functions/LiterToKilometer';

export default function ShowFunctions({ showInfo }: { showInfo: number }) {
  const telas: Record<number, React.ReactNode> = {
    1: <LiterToKilometerPerLiterView />,
    2: <TravelCostView />,
    3: <Cotacao />,
    4: (
      <View className="justify- m-2 items-center">
        <Text className="py-2 text-2xl">SAI FORA CURIOSO!</Text>
        <Image
          source={{ uri: 'https://i.redd.it/861gk9gqka0c1.png' }}
          className="h-full w-full rounded-xl "
        />
      </View>
    ),
  };

  return <View className="px-5">{telas[showInfo] ?? null}</View>;
}
