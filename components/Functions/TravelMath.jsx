import { Text, View } from 'react-native';

export function TravelMath({ distance, liter, value }) {

  if (!distance || !liter || !value) {
    return (
      <View>
        <Text>Preencha todos os campos</Text>
      </View>
    );
  }

  const totalCost = liter * value;

  return (
    <View>
      <Text className='text-2xl font-semibold'>O valor gasto gasto com combustive é de:</Text>
      <Text className='text-2x1 font-bold text-blue-800'>R$ {totalCost.toFixed(2)}</Text>
    </View>
  );
}

export function Comsuption({ distance, liter }) {


  if (!distance || !liter) {
    return (
      <View>
        <Text>Preencha todos os campos</Text>
      </View>
    );
    }
    const consumption = distance / liter;

    return (
      <View>
        <Text className='text-2xl font-semibold'>O consumo do seu veiculor é de</Text>
        <Text className='text-2x1 font-bold text-blue-800'>{consumption.toFixed(2)} km/l</Text>
      </View>
    );
 }



