import React from 'react';

const FeatureImages = () => {
  const images = [
    'https://cdn.shopify.com/theme-store/ysj08x9uln6va35jrrb08e3prmt4.jpg',
    'https://cdn.shopify.com/theme-store/8kzklgel8qp8wi0oc51f0wy1vwck.jpg',
    'https://cdn.shopify.com/theme-store/0o209r1x2zstj8igzaiyfo2ixqoh.jpg',
    'https://cdn.shopify.com/theme-store/4tebyluch7ceuogr4ymbtlcbbs9y.jpg',
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg aspect-[3/4] bg-gray-100"
        >
          <img
            src={src}
            alt={`Feature ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu will-change-transform"
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureImages;
