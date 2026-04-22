import React from 'react';
import { View, Text } from 'react-native';
import ShowTextInput from 'components/Inputs/TextInput';
import {Comsuption} from './TravelMath';

export default function LiterToKilometerPerLiterView() {
  const [liter, setLiter] = React.useState(0);
  const [distance, setDistance] = React.useState(0);


  // const result = Comsuption(liter, distance);r

  return (
    <View>
      <Text className="mb-4 text-center text-2xl font-bold text-gray-800">
        Calculadora de Consumo de Combustível
      </Text>
      <View >
        <ShowTextInput
          label="Distância"
          placeholder="Digite a distância"
          inputMode="numeric"
          onChangeText={(text) => {
            const normalized = text.replace(',', '.');
            setDistance(parseFloat(normalized));
          }}
        />
        <ShowTextInput
          label="Litragem"
          placeholder="Digite a litragem de combustível"
          inputMode="numeric"
          onChangeText={(text) => setLiter(Number(text))}
        />
      </View>
      <View>
        <Comsuption distance={distance} liter={liter} />
    </View>
    </View>

  );
} 