import React from 'react';

const ThemeCard = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-6xl font-bold mb-4">Duke</h1>
      <div className="flex justify-end">
    <div className="flex items-baseline space-x-1">
        <p className="tw-text-heading-4xl font-bold tw-text-fg-primary flex-shrink-0">
        $380
        </p>
        <br />
        <span className="tw-text-body-md">
        USD
        </span>
    </div>
</div>
      <p className="text-2xl font-semibold text-gray-700 mb-10">
        Part of Symmetry • Versatile, fashionable, professional theme with premium features.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
         <img
          src="https://cdn.shopify.com/theme-store/qn1prb4hlbslj97uu2iesbjgtjfg.jpg"
          alt="Theme 1"
          className="w-full h-auto object-cover rounded-3xl shadow"
        />
        <h2 className='font-bold mt-4 ml-2 text-lg'>Top Selling Theme</h2>
        <p className='font-semibold mt-2 ml-2 text-lg text-gray-500'>
            Unrivalled selection of highly customizable drag-and-drop sections and features designed by one of the most experienced Theme Store Partners
        </p>
        </div>
        <div>
        <img
          src="https://cdn.shopify.com/theme-store/jtxdjyz4bw63fwt0hknpbeolg2yy.jpg"
          alt="Theme 2"
          className="w-full h-auto object-cover rounded-3xl shadow"
        />
        <h2 className='font-bold mt-4 ml-2 text-lg'>Make An Impact - Drive Sales</h2>
        <p className='font-semibold mt-2 ml-2 text-lg text-gray-500'>
           Developed by leading Shopify Theme Partners with over 11 years of experience in building high-end Premium themes for all types of merchants.      
        </p>
        </div>
        <div>
        <img
          src="https://cdn.shopify.com/theme-store/3fzpncknc20y7wisqxj45bsgpp38.jpg"
          alt="Theme 3"
          className="w-full h-auto object-cover rounded-3xl shadow"
        />
        <h2 className='font-bold mt-4 ml-2 text-lg'>Help Buyers Convert</h2>
        <p className='font-semibold mt-2 ml-2 text-lg text-gray-500'>
           Powerful filters to drive conversions. Perfect for all fashion stores, but just as great for any store wanting a professional web presence!
        </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full my-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="px-4 py-2 text-lg bg-gray-100 border border-gray-300 rounded-3xl text-center">WHAT'S INCLUDED</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

    </div>
  );
};

export default ThemeCard;
