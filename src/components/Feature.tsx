import React from "react";
import FeatureImages from "@/components/FeatureImages";
import RotatedRect from "./RotatedRect";

const Feature = () => {
  return (
    <>
      <div className="flex gap-16 ml-20 mt-10">
        {/* Left column - Cart and Checkout */}
        <div>
          <h1 className="font-bold text-3xl">Features</h1>
          <h2 className="mt-5 font-bold text-xl">Cart and checkout</h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li className="text-gray-600 text-lg">Cart notes</li>
            <li className="text-gray-600 text-lg">In-store pickups</li>
            <li className="text-gray-600 text-lg">Pre-order</li>
            <li className="text-gray-600 text-lg">Quick buy</li>
            <li className="text-gray-600 text-lg">Sign in with Shop</li>
            <li className="text-gray-600 text-lg">Slide-out cart</li>
            <li className="text-gray-600 text-lg">Sticky cart</li>
          </ul>
        </div>

        {/* Right column - Marketing and Conversion */}
        <div className="ml-20">
          <h2 className="mt-[58px] font-bold text-xl">
            Marketing and conversion
          </h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li className="text-gray-600 text-lg">Blogs</li>
            <li className="text-gray-600 text-lg">Countdown timer</li>
            <li className="text-gray-600 text-lg">Cross-selling</li>
            <li className="text-gray-600 text-lg">Customizable contact form</li>
            <li className="text-gray-600 text-lg">
              EU translations (EN, FR, IT, DE, ES)
            </li>
            <li className="text-gray-600 text-lg">FAQ page</li>
            <li className="text-gray-600 text-lg">In-menu promos</li>
            <li className="text-gray-600 text-lg">Press coverage</li>
            <li className="text-gray-600 text-lg">Product badges</li>
            <li className="text-gray-600 text-lg">Promo banners</li>
            <li className="text-gray-600 text-lg">Promo popups</li>
            <li className="text-gray-600 text-lg">Promo tiles</li>
            <li className="text-gray-600 text-lg">Quick view</li>
            <li className="text-gray-600 text-lg">Recommended products</li>
            <li className="text-gray-600 text-lg">Right-to-left</li>
            <li className="text-gray-600 text-lg">Stock counter</li>
            <li className="text-gray-600 text-lg">Trust badges</li>
          </ul>
        </div>

        {/* Right column - Marketing and Conversion */}
        <div>
          <h2 className="mt-[58px] font-bold text-xl">Merchandising</h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li className="text-gray-600 text-lg">Usage information</li>
            <li className="text-gray-600 text-lg">Slideshow</li>
            <li className="text-gray-600 text-lg">Size chart</li>
            <li className="text-gray-600 text-lg">
              Shipping/delivery information
            </li>
            <li className="text-gray-600 text-lg">Product videos</li>
            <li className="text-gray-600 text-lg">Product tabs</li>
            <li className="text-gray-600 text-lg">Product options</li>
            <li className="text-gray-600 text-lg">Lookbooks</li>
            <li className="text-gray-600 text-lg">
              Ingredients or nutritional information
            </li>
            <li className="text-gray-600 text-lg">Image zoom</li>
            <li className="text-gray-600 text-lg">Image rollover</li>
            <li className="text-gray-600 text-lg">Image hotspot</li>
            <li className="text-gray-600 text-lg">Image galleries</li>
            <li className="text-gray-600 text-lg">High-resolution images</li>
            <li className="text-gray-600 text-lg">Color swatches</li>
            <li className="text-gray-600 text-lg">Animation</li>
            <li className="text-gray-600 text-lg">Combined listing</li>
            <li className="text-gray-600 text-lg">Shopify Plus</li>
          </ul>
        </div>

        {/* Right column - Marketing and Conversion */}
        <div className="mr-5">
          <h2 className="mt-[58px] font-bold text-xl">Product discovery</h2>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li className="text-gray-600 text-lg">Breadcrumbs</li>
            <li className="text-gray-600 text-lg">
              Collection page navigation
            </li>
            <li className="text-gray-600 text-lg">Enhanced search</li>
            <li className="text-gray-600 text-lg">Mega menu</li>
            <li className="text-gray-600 text-lg">
              Product filtering and sorting
            </li>
            <li className="text-gray-600 text-lg">Recommended products</li>
            <li className="text-gray-600 text-lg">Sticky header</li>
            <li className="text-gray-600 text-lg">Swatch filters</li>
          </ul>
        </div>
      </div>
      {/* Horizontal line */}
      <div className="mt-10 h-0.5 bg-gray-300 rounded-full"></div>

      {/*  */}

      <div className="flex flex-col ml-10 md:flex-row items-start justify-between px-8 py-10 gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 py-10">
          <div className="-mb-10">
            <RotatedRect />
          </div>
          <h2 className="font-bold  text-3xl">Presets</h2>
          <p className="font-bold text-lg text-gray-600">
            Symmetry comes with 4 ready-made designs for your store,
            <br />
            including Duke
          </p>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2">
          <FeatureImages />
        </div>
      </div>
    </>
  );
};

export default Feature;
