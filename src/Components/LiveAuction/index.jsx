import React from 'react';
import CustomButton from '../Button';
import './LiveAuction.css';

const LiveAuction = () => {
  // Placeholder data
  const auctionItems = [
    { 
      id: 1, 
      name: 'Chemical A', 
      price: '$100', 
      time: '2h 30m', 
      image: 'https://via.placeholder.com/300x200?text=Chemical+A' 
    },
    { 
      id: 2, 
      name: 'Chemical B', 
      price: '$150', 
      time: '1h 45m', 
      image: 'https://via.placeholder.com/300x200?text=Chemical+B' 
    },
    { 
      id: 3, 
      name: 'Chemical C', 
      price: '$200', 
      time: '3h 15m', 
      image: 'https://via.placeholder.com/300x200?text=Chemical+C' 
    },
  ];

  return (
    <section className="live-auction py-8 bg-gray-50 sm:py-12 lg:py-16">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-2">
          Live Auctions
        </h2>
        <p className="text-md text-gray-600 text-center mb-6">
          Browse and bid on a variety of chemicals available for auction. Don't miss out on these great deals!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctionItems.map((item) => (
            <div key={item.id} className="auction-item bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <span className="auction-time absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.time}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-md text-gray-600">Lowest Bid: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <CustomButton text="View More" sx={{ marginTop: '20px' }} />
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
