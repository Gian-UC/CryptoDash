import { useEffect, useState } from 'react';
import bitcoinIcon from './assets/bitcoin.jpg';
import ethereumIcon from './assets/ethereum.jpg';
import solanaIcon from './assets/solana.jpg';
import { CryptoCard } from './Components/CryptoCard';
import { fetchCryptoPrices } from './Services/CryptoService';

function App() {
  const [prices, setPrices] = useState({
    bitcoin: 0,
    ethereum: 0,
    solana: 0
  });

  useEffect(() => {
    const loadPrices = async () => {
      try {
        const data = await fetchCryptoPrices();
        setPrices({
          bitcoin: data.bitcoin.usd,
          ethereum: data.ethereum.usd,
          solana: data.solana.usd,
        });
      } catch (error) {
        console.error('Erro ao buscar preços:', error);
      }
    };

    loadPrices();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-4xl font-bold underline mb-6">
        CryptoDash 🤑
      </h1>
      <div className="flex flex-wrap justify-center">
        <CryptoCard name="Bitcoin" symbol="BTC" price={prices.bitcoin.toFixed(2)} icon={bitcoinIcon} />
        <CryptoCard name="Ethereum" symbol="ETH" price={prices.ethereum.toFixed(2)} icon={ethereumIcon} />
        <CryptoCard name="Solana" symbol="SOL" price={prices.solana.toFixed(2)} icon={solanaIcon} />
      </div>
    </div>
  );
}

export default App;
