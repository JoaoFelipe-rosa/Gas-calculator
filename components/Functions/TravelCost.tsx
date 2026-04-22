import React from 'react';
import { Text, View } from 'react-native';
import ShowTextInput from '../Inputs/TextInput';

// (Distância Total ÷ Consumo do Carro) × Preço do Combustível + Total de Pedágios

export function TravelCostView() {
  const [distance, setDistance] = React.useState(0);
  const [liter, setLiter] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [tollQuantity, setTollQuantity] = React.useState(0);
  const [tollValue, setTollValue] = React.useState(0);

  const costOfTravel = (distance / liter) * value + tollQuantity * tollValue;

  return (
    <View>
      <Text className="mb-4 text-center text-2xl font-bold text-gray-800">
        Calculadora de Custo de Viagem
      </Text>
      <View>
        <ShowTextInput
          label="Distância em km"
          placeholder="Digite a distância em km"
          inputMode="numeric"
          onChangeText={(text) => {
            const normalized = text.replace(',', '.');
            setDistance(parseFloat(normalized));
          }}
        />
        <ShowTextInput
          label="Consumo do carro (km/l)"
          placeholder="Digite o consumo do carro"
          inputMode="numeric"
          onChangeText={(text) => setLiter(Number(text))}
        />
        <ShowTextInput
          label="Valor do combustível"
          placeholder="Digite a Valor do combustível"
          inputMode="numeric"
          onChangeText={(text) => {
            const normalized = text.replace(',', '.');
            setValue(parseFloat(normalized));
          }}
        />
        <ShowTextInput
          label="Quantidade de pedágios"
          placeholder="Digite a quantidade de pedágios"
          inputMode="numeric"
          onChangeText={(text) => {
            const normalized = text.replace(',', '.');
            setTollQuantity(parseFloat(normalized));
          }}
        />
        <ShowTextInput
          label="Valor do pedágio"
          placeholder="Digite a media de valor do pedágio"
          inputMode="numeric"
          onChangeText={(text) => {
            const normalized = text.replace(',', '.');
            setTollValue(parseFloat(normalized));
          }}
        />
      </View>
      <View className=" items-center justify-center">
        {isNaN(costOfTravel) ? (
          <Text className="text-lg font-bold text-red-500">
            Por favor, preencha todos os campos corretamente.
          </Text>
        ) : (
          <>
            <Text>O custo total dessa viagem sera de :</Text>
            <Text>R${costOfTravel.toFixed(2)}</Text>
          </>
        )}
      </View>
    </View>
  );
}
