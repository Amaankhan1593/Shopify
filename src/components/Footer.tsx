import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">
      {/* Column 1: Crafted for Commerce */}
      <div className="flex flex-col md:flex-row justify-between gap-8 px-6 py-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h3 className="font-bold text-xL text-gray-400 mb-4">
            CRAFTED FOR COMMERCE
          </h3>
          <p className="text-6xl">
            The world’s best <br /> online stores use Shopify themes
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          <div>
            <h1 className="font-bold text-lg mb-1">Future proof</h1>
            <p className="text-gray-400 font-semibold text-lg">
              Regularly updated and always works with the newest Shopify <br />{" "}
              features.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-1">Play before you pay</h1>
            <p className="text-gray-400 font-semibold text-lg">
              Customize until you love it. Only pay when you publish.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-1">Blazing fast checkout</h1>
            <p className="text-gray-400 font-semibold text-lg">
              Speed-tested so your customers check out in record time.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-1">Keep it forever</h1>
            <p className="text-gray-400 font-semibold text-lg">
              One-time payment, lifetime license for your store. No <br />{" "}
              expiration.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-64 text-center">
        <h1 className="text-6xl font-semibold">
          Build fast and sell more <br /> with Shopify themes
        </h1>
      </div>

      <div className="flex justify-center items-center text-center">
        <button className="-mt-10 rounded-full bg-green-400  px-6 py-4 font-semibold text-black">
          Start your free trial
        </button>
      </div>

      <div className="ml-14 mt-15">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/ios-filled/96/ffffff/shopify.png"
          alt="shopify"
        />
      </div>
      <div className="lg:w-1/4 md:w-1/2 ml-60 -mt-10 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-4">
          Top industries
        </h2>
        <nav className="list-none mb-10">
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Clothing
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Beauty
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Jewelry and accessories
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Home
            </a>
          </li>
        </nav>
      </div>

      {/* . */}
      <div className="lg:w-1/4 md:w-1/2 ml-125 -mt-54 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-4">
          Categories
        </h2>
        <ul className="list-none mb-10 space-y-3">
          <li>
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              All themes
            </a>
          </li>
          <li>
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              Free themes
            </a>
          </li>
        </ul>
      </div>

      {/*  */}
      <div className="lg:w-1/4 md:w-1/2 ml-185 -mt-36 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-4">
          Support
        </h2>
        <nav className="list-none mb-10">
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Shopify Help Center
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              API Documentation
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Shopify Community
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold  hover:text-white hover:underline cursor-pointer">
              Blogs
            </a>
          </li>
        </nav>
      </div>

      {/*  */}
      <div className="lg:w-1/4 md:w-1/2 ml-250 -mt-54 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-4">
          Shopify
        </h2>
        <nav className="list-none mb-10">
          <li className="mb-3">
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              About
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              Partners
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              Legal
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white font-semibold hover:text-white hover:underline cursor-pointer">
              Service status
            </a>
          </li>
        </nav>
      </div>

      {/* Full-width horizontal line */}
      <hr className="border-t border-white-700 my-6 w-full" />

      <div className="p-2 pb-2 flex flex-wrap gap-5 text-lg font-semibold">
      <Link href={"/"} className="hover:underline">Terms of Service</Link>
      <Link href={"/"} className="hover:underline">Privacy Policy</Link>
      <Link href={"/"} className="hover:underline">Sitemap</Link>
    </div>

    <div className="w-full flex justify-end -mt-9">
  <div className="relative inline-block text-left">
    <button className="inline-flex justify-center items-center   border-gray-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
      English
      <svg
        className="ml-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</div>

    </footer>
  );
};

export default Footer;
