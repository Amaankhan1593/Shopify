import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white bg-black min-h-screen">
      <header className="body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          {/* Shopify logo and title */}
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M37.82 59.855l15.187-3.774s-6.539-44.21-6.58-44.513a.582.582 0 0 0-.527-.49c-.219-.019-4.495-.084-4.495-.084s-2.606-2.53-3.586-3.49v52.351ZM36.166 7c-.003.002-.672.208-1.796.557-.189-.61-.465-1.36-.86-2.113-1.273-2.43-3.138-3.715-5.391-3.718h-.008c-.157 0-.312.015-.469.028a6.766 6.766 0 0 0-.203-.235C26.457.47 25.199-.042 23.691.003c-2.91.083-5.807 2.184-8.157 5.917-1.653 2.626-2.911 5.926-3.268 8.48l-5.729 1.775c-1.686.53-1.74.582-1.96 2.171C4.414 19.548 0 53.67 0 53.67L36.61 60V6.925c-.18.012-.342.045-.444.075Zm-8.454 2.618-6.174 1.911c.597-2.284 1.728-4.559 3.118-6.05.517-.555 1.24-1.174 2.097-1.527.804 1.68.98 4.058.96 5.666Zm-3.964-7.679c.683-.015 1.258.135 1.75.458-.787.409-1.547.995-2.26 1.76-1.848 1.983-3.264 5.061-3.83 8.03-1.76.545-3.484 1.08-5.07 1.57 1.001-4.674 4.919-11.688 9.41-11.818Zm-5.66 26.628c.196 3.114 8.39 3.794 8.85 11.09.361 5.739-3.045 9.665-7.953 9.975-5.89.371-9.133-3.105-9.133-3.105l1.248-5.31s3.264 2.462 5.877 2.297c1.707-.108 2.317-1.496 2.255-2.478-.257-4.062-6.929-3.822-7.35-10.498-.355-5.617 3.334-11.31 11.474-11.823 3.136-.198 4.743.603 4.743.603l-1.861 6.964s-2.077-.945-4.538-.79c-3.611.228-3.65 2.505-3.613 3.075ZM29.646 9.02c-.022-1.473-.197-3.523-.883-5.295 2.208.419 3.294 2.917 3.754 4.406-.851.262-1.821.562-2.871.889Z" />
            </svg>
            <span className="text-lg font-semibold">Shopify Theme Store</span>
          </a>

          {/* Navigation */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* Dropdown Button */}
            <div className="relative group inline-block mr-10">
              <button className="hover:text-green-300  font-semibold text-white focus:outline-none flex items-center gap-1">
                Browse themes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute z-10 hidden group-hover:block bg-white text-black mt-3 rounded-3xl shadow-lg w-56">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Large catalogs
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Small catalogs
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Free themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Selling in person
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Selling internationally
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Minimalist style
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Trending this week
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    New themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Horizon themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    All themes
                  </li>
                </ul>
              </div>
            </div>
            
           <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png"
            alt="Search Icon"
            width={30}
            height={30}
            className="cursor-pointer opacity-80 hover:opacity-100 transition"
          />
          
          
            {/* Buttons */}
            <button className="ml-8 font-semibold text-white hover:text-green-300">
              Log in
            </button>

            <button className="ml-4 font-semibold text-black hover:text-green-500 bg-white px-5 py-2 rounded-full shadow">
              Sign up
            </button>
          </nav>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="button"
            className="flex items-center gap-2 text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75h-1.25v1.5h.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.75v-1.5h-1.25a2.75 2.75 0 0 1-2.75-2.75v-4.5Zm5.5 7.25h2v1.5h-2v-1.5Zm-2.75-8.5c-.69 0-1.25.56-1.25 1.25v3.25h10v-3.25c0-.69-.56-1.25-1.25-1.25h-7.5Zm8.725 6c-.116.57-.62 1-1.225 1h-7.5a1.25 1.25 0 0 1-1.225-1h9.95Z" />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M4.75 5.75a2.75 2.75 0 0 1 2.75-2.75h5a2.75 2.75 0 0 1 2.75 2.75v8.5a2.75 2.75 0 0 1-2.75 2.75h-5a2.75 2.75 0 0 1-2.75-2.75v-8.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25h-.531a1 1 0 0 1-.969.75h-2a1 1 0 0 1-.969-.75h-.531Z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="relative w-full h-screen overflow-hidden px-8">
        <div className="absolute inset-0 scale-85">
          <img
            src="/Shopify2.jpg"
            alt="Shopify theme preview"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
