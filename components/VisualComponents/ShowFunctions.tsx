import { View, Text } from 'react-native';
import React from 'react';
import { TravelCostView } from '../Functions/TravelCost';
import Cotacao from '../Functions/MoneyCotation';
import LiterToKilometerPerLiterView from '../Functions/LiterToKilometer';

export default function ShowFunctions({ showInfo }: { showInfo: number }) {
  const telas: Record<number, React.ReactNode> = {
    1: <Cotacao />,
    2: <TravelCostView />,
    3: <LiterToKilometerPerLiterView />,
    4: <Text>Em andamento</Text>,
  };

  return <View className="px-5">{telas[showInfo] ?? null}</View>;
}
