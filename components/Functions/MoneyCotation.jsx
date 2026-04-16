import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Separator from '../VisualComponents/Separator';
import { Ionicons } from '@expo/vector-icons';


export default function MoneyCotation() {
  const [compraUSD, setCompraUSD] = useState(0);
  const [vendaUSD, setVendaUSD] = useState(0);
  const [compraEUR, setCompraEUR] = useState(0);
  const [vendaEUR, setVendaEUR] = useState(0);
  const [dataAtualizacao, setDataAtualizacao] = useState('');

  useEffect(() => {
    const fetchCotacaoDolar = async () => {
      try {
        const resposta = await axios.get('https://br.dolarapi.com/v1/cotacoes/usd');
        setCompraUSD(resposta.data.compra);
        setVendaUSD(resposta.data.venda);

        const data = new Date(resposta.data.dataAtualizacao);
        const formatada = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${String(data.getFullYear()).slice(-2)} ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}`;
        setDataAtualizacao(formatada);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
        const fetchCotacaoEUR = async () => {
      try {
        const resposta = await axios.get('https://br.dolarapi.com/v1/cotacoes/eur');
        setCompraEUR(resposta.data.compra);
        setVendaEUR(resposta.data.venda);

        const data = new Date(resposta.data.dataAtualizacao);
        const formatada = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${String(data.getFullYear()).slice(-2)} ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}`;
        setDataAtualizacao(formatada);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchCotacaoDolar();
    fetchCotacaoEUR();
  }, []);

  if (!compraUSD) return <Text>Carregando...</Text>;

  return (
    <View>
      <Separator name='flash' size={16} color='grey' />
      <View>
      <Text className='font-bold text-lg'>Cotação do Dólar:</Text>
      <Text>Compra: R$ {compraUSD.toFixed(2)}</Text>
      <Text>Venda: R$ {vendaUSD.toFixed(2)}</Text>
      <Text>Atualizado em: {dataAtualizacao}</Text>
      </View>
      <Separator name='flash' size={16} color='grey' />
      <View>
      <Text className='font-bold text-lg'>Cotação do Euro:</Text>
      <Text>Compra: R$ {compraEUR.toFixed(2)}</Text>
      <Text>Venda: R$ {vendaEUR.toFixed(2)}</Text>
      <Text>Atualizado em: {dataAtualizacao}</Text>
      </View>
      <Separator name='flash' size={16} color='grey' />

    </View>
  );
}