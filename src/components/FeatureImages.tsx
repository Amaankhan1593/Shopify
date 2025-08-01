import React from 'react';
import Image from 'next/image';

const FeatureImages = () => {
  const images = [
    'https://cdn.shopify.com/theme-store/ysj08x9uln6va35jrrb08e3prmt4.jpg',
    'https://cdn.shopify.com/theme-store/8kzklgel8qp8wi0oc51f0wy1vwck.jpg',
    'https://cdn.shopify.com/theme-store/0o209r1x2zstj8igzaiyfo2ixqoh.jpg',
    'https://cdn.shopify.com/theme-store/4tebyluch7ceuogr4ymbtlcbbs9y.jpg',
  ];

  return (
       <div className="w-full overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-gray-100 w-[300px] h-[400px]"
          >
            <Image
              src={src}
              width={2}
              height={2}
              alt={`Feature ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureImages;



// components/StackedCards.tsx
// 'use client';
// import React from 'react';

// const images = [
//   'https://cdn.shopify.com/theme-store/ysj08x9uln6va35jrrb08e3prmt4.jpg',
//   'https://cdn.shopify.com/theme-store/8kzklgel8qp8wi0oc51f0wy1vwck.jpg',
//   'https://cdn.shopify.com/theme-store/0o209r1x2zstj8igzaiyfo2ixqoh.jpg',
//   'https://cdn.shopify.com/theme-store/4tebyluch7ceuogr4ymbtlcbbs9y.jpg',
// ];

// const StackedCards = () => {
//   return (
//     <div className="relative w-[300px] h-[400px] ml-20 group">
//       {images.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           alt={`Preset ${i + 1}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out
//             ${i === 0 ? 'z-40 rotate-0 group-hover:translate-x-0 group-hover:-translate-y-0' : ''}
//             ${i === 1 ? 'z-30 rotate-[5deg] group-hover:translate-x-[10px] group-hover:-translate-y-[10px]' : ''}
//             ${i === 2 ? 'z-20 rotate-[10deg] group-hover:translate-x-[20px] group-hover:-translate-y-[20px]' : ''}
//             ${i === 3 ? 'z-10 rotate-[15deg] group-hover:translate-x-[30px] group-hover:-translate-y-[30px]' : ''}
//           `}
//           style={{ transformOrigin: 'bottom right' }}
//         />
//       ))}
//     </div>
//   );
// };

// export default StackedCards;
