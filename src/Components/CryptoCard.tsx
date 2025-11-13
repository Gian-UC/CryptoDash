interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  icon: string;
}

export const CryptoCard = ({ name, symbol, price, icon }: CryptoCardProps) => {
  const formatPrice = (price: string) => {
    const numeric = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    if (isNaN(numeric)) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(numeric);
  };

  return (
    <div className="bg-zinc-800 hover:scale-105 transform transition duration-300 rounded-xl shadow-md p-4 m-2 text-center w-44">
      <img src={icon} alt={name} className="w-12 h-12 mx-auto mb-2" />
      <h2 className="text-lg font-bold text-white">{name}</h2>
      <p className="text-zinc-300">{symbol}</p>
      <p className="text-green-400 font-semibold mt-2">{formatPrice(price)}</p>
    </div>
  );
};
