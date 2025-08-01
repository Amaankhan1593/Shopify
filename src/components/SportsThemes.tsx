import React from 'react';
import Image from 'next/image';

const themes = [
  {
    name: "Outlet",
    price: "$400",
    img: "https://cdn.shopify.com/theme-store/djwd8eyvt9jtecaih75g86w53rt4.jpg?width=480",
  },
  {
    name: "Shooting Stars",
    price: "$21.15",
    img: "https://cdn.shopify.com/theme-store/x5djvdvfg8l2n12yamdgg72573la.jpg?width=480",
  },
  {
    name: "Neptune",
    price: "$12.00",
    img: "https://cdn.shopify.com/theme-store/i3muyjzveatow1f57g01dqpx9bql.jpg?width=480",
  },
  {
    name: "The 400 Blows",
    price: "$18.40",
    img: "https://cdn.shopify.com/theme-store/9dptuw05uwseq5d34wkm0hee8b91.jpg?width=480",
  },
  {
    name: "The Catalyzer",
    price: "$16.00",
    img: "https://cdn.shopify.com/theme-store/r6eq5halcgnblmt93idduhxqr4qn.jpg?width=480",
  },
  {
    name: "Shooting Stars",
    price: "$21.15",
    img: "https://cdn.shopify.com/theme-store/z5chi8sq2m4ex6t95uw1bjjewih8.jpg?width=480",
  },
  {
    name: "Neptune",
    price: "$12.00",
    img: "https://cdn.shopify.com/theme-store/gu116q0nsc41ny6mlqdmowc1s0yz.jpg?width=480",
  },
  {
    name: "The 400 Blows",
    price: "$18.40",
    img: "https://cdn.shopify.com/theme-store/bw17xx6zynjvf7zpb6qopk417eb7.jpg?width=480",
  },
];

const SportsThemes = () => {
  return (
      <section className="bg-white py-10 px-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold pl-13">More themes for sports</h2>
        <div className="flex items-center gap-3">
          <button className="border border-gray-300 rounded-full py-2 px-4 text-base font-semibold">
            View All
          </button>
          <div className="flex gap-2">
            <span className="cursor-pointer rounded-full border-2 px-2 py-1 hover:bg-gray-100">{`<`}</span>
            <span className="cursor-pointer rounded-full border-2 px-2 py-1 hover:bg-gray-100">{`>`}</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap flex gap-4 pl-12">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="inline-block min-w-[270px] max-w-[300px] border rounded-lg p-2"
          >
            <Image
              src={theme.img}
              width={2}
              height={2}
              alt={theme.name}
              className="rounded w-full h-80 object-cover"
            />
            <h3 className="text-gray-900 font-medium mt-2">{theme.name}</h3>
            <p className="text-gray-600">{theme.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
  
export default SportsThemes;
