import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

export const fetchCryptoPrices = async () => {
  const response = await axios.get(API_URL, {
    params: {
      ids: 'bitcoin,ethereum,solana',
      vs_currencies: 'usd',
    }
  });

  return response.data;
};
