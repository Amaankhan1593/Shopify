import React from "react";

const Reviews = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-20 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="darkgreen"
                >
                  <path d="M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z" />
                </svg>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  screamstore
                </h2>
              </div>
              <p className="leading-relaxed text-base text-gray-500 font-semibold">
                We run eCommerce for 20+ years, and this is the first theme
                that truly delivered: fast, clean, flexible, smart layout, great
                support. It works perfectly for both our niche shops – Halloween
                and Christmas – without limits. Custom add-ons were easy.
                Customers love it, and so do we. Absolute top rating. Tom
                Viereckl – Cultica® / screamstore.de / griswoldshop.de
              </p>
            </div>
          </div>

          {/* second */}
          <div className="lg:w-3/5 mx-auto border-b -mt-7 pb-5 mb-10 border-gray-200">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="darkgreen"
              >
                <path d="M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z" />
              </svg>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Adinkra Expo
              </h2>
              <p className="text-sm text-gray-500 -mb-1 ml-125">Jul 2, 2025</p>
            </div>

            <p className="leading-relaxed text-base text-gray-500 font-semibold mb-6">
              Customer service was not helpful the first two times I contacted
              them and gave me generic responses. When I followed up and asked
              that they actually look at my site, they were then helpful,
              reviewed my site, identified the problem, and sent a video with an
              explanation. The issue was not related to their theme but an app I
              deleted that was still attempting to run and slowing down my site
              tremendously.
            </p>

            <div className="border-gray-300 pl-4">
              <div className="flex items-center gap-2 mb-1">
                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill=""
                >
                  <path d="M9.25066 12C9.00966 12 8.91666 12 8.84066 11.996C8.03487 11.9563 7.27267 11.6182 6.7023 11.0477C6.13192 10.4771 5.79414 9.7148 5.75466 8.909C5.75066 8.834 5.75066 8.741 5.75066 8.5C5.75066 8.259 5.75066 8.166 5.75466 8.09C5.7944 7.28421 6.13243 6.52201 6.70299 5.95164C7.27355 5.38126 8.03586 5.04348 8.84166 5.004C8.97795 4.99977 9.11431 4.99843 9.25066 5H10.7507C10.9496 5 11.1403 4.92098 11.281 4.78033C11.4216 4.63968 11.5007 4.44891 11.5007 4.25C11.5007 4.05109 11.4216 3.86032 11.281 3.71967C11.1403 3.57902 10.9496 3.5 10.7507 3.5H9.22666C9.01666 3.5 8.88466 3.5 8.76666 3.506C7.58932 3.56413 6.47565 4.05794 5.64212 4.89146C4.8086 5.72499 4.31478 6.83866 4.25666 8.016C4.25066 8.134 4.25066 8.266 4.25066 8.476V8.524C4.25066 8.734 4.25066 8.866 4.25666 8.984C4.31478 10.1613 4.8086 11.275 5.64212 12.1085C6.47565 12.9421 7.58932 13.4359 8.76666 13.494C8.88466 13.5 9.01666 13.5 9.22666 13.5H13.1897L11.4697 15.22C11.3981 15.2892 11.341 15.372 11.3017 15.4635C11.2624 15.555 11.2418 15.6535 11.241 15.7531C11.2402 15.8526 11.2592 15.9514 11.2969 16.0435C11.3347 16.1357 11.3904 16.2194 11.4609 16.2898C11.5313 16.3602 11.6151 16.4158 11.7073 16.4535C11.7995 16.4912 11.8982 16.5101 11.9978 16.5092C12.0974 16.5083 12.1958 16.4875 12.2873 16.4482C12.3788 16.4088 12.4615 16.3517 12.5307 16.28L15.5307 13.28C15.6711 13.1394 15.75 12.9488 15.75 12.75C15.75 12.5512 15.6711 12.3606 15.5307 12.22L12.5307 9.22C12.3885 9.08752 12.2004 9.0154 12.0061 9.01882C11.8118 9.02225 11.6265 9.10097 11.489 9.23838C11.3516 9.37579 11.2729 9.56118 11.2695 9.75548C11.2661 9.94978 11.3382 10.1378 11.4707 10.28L13.1907 12H9.25066Z" />
                </svg>
                <p className="text-gray-900 font-semibold">
                  Reply from designer
                </p>
                <p className="text-sm text-gray-500 -mb-1">Jul 7, 2025</p>
              </div>

              <p className="leading-relaxed text-base text-gray-500 font-semibold">
                Hi Adinkra Expo! Thank you for your feedback and we appreciate
                you taking the time to follow up so we could take a deeper look.
                We re glad we were ultimately able to pinpoint the issue and
                provide clarity, especially since it wasn’t theme-related.
                Wishing you every success from all the Clean Canvas team!
              </p>
            </div>
          </div>

          {/* third */}
          <div className="lg:w-3/5 mx-auto border-b -mt-7 pb-5 mb-10 border-gray-200">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="lightgreen"
              >
                <path d="M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z" />
              </svg>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Drumland Canada | Official
              </h2>
              <p className="text-sm text-gray-500 -mb-1 ml-95">Jun 27, 2025</p>
            </div>
            <h3 className="text-gray-500 text-lg title-font mb-3 ml-2 font-semibold">
              Excellent customer service and great theme features!
            </h3>
            <div className="border-gray-300 pl-4">
              <div className="flex items-center gap-2 mb-1">
                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill=""
                >
                  <path d="M9.25066 12C9.00966 12 8.91666 12 8.84066 11.996C8.03487 11.9563 7.27267 11.6182 6.7023 11.0477C6.13192 10.4771 5.79414 9.7148 5.75466 8.909C5.75066 8.834 5.75066 8.741 5.75066 8.5C5.75066 8.259 5.75066 8.166 5.75466 8.09C5.7944 7.28421 6.13243 6.52201 6.70299 5.95164C7.27355 5.38126 8.03586 5.04348 8.84166 5.004C8.97795 4.99977 9.11431 4.99843 9.25066 5H10.7507C10.9496 5 11.1403 4.92098 11.281 4.78033C11.4216 4.63968 11.5007 4.44891 11.5007 4.25C11.5007 4.05109 11.4216 3.86032 11.281 3.71967C11.1403 3.57902 10.9496 3.5 10.7507 3.5H9.22666C9.01666 3.5 8.88466 3.5 8.76666 3.506C7.58932 3.56413 6.47565 4.05794 5.64212 4.89146C4.8086 5.72499 4.31478 6.83866 4.25666 8.016C4.25066 8.134 4.25066 8.266 4.25066 8.476V8.524C4.25066 8.734 4.25066 8.866 4.25666 8.984C4.31478 10.1613 4.8086 11.275 5.64212 12.1085C6.47565 12.9421 7.58932 13.4359 8.76666 13.494C8.88466 13.5 9.01666 13.5 9.22666 13.5H13.1897L11.4697 15.22C11.3981 15.2892 11.341 15.372 11.3017 15.4635C11.2624 15.555 11.2418 15.6535 11.241 15.7531C11.2402 15.8526 11.2592 15.9514 11.2969 16.0435C11.3347 16.1357 11.3904 16.2194 11.4609 16.2898C11.5313 16.3602 11.6151 16.4158 11.7073 16.4535C11.7995 16.4912 11.8982 16.5101 11.9978 16.5092C12.0974 16.5083 12.1958 16.4875 12.2873 16.4482C12.3788 16.4088 12.4615 16.3517 12.5307 16.28L15.5307 13.28C15.6711 13.1394 15.75 12.9488 15.75 12.75C15.75 12.5512 15.6711 12.3606 15.5307 12.22L12.5307 9.22C12.3885 9.08752 12.2004 9.0154 12.0061 9.01882C11.8118 9.02225 11.6265 9.10097 11.489 9.23838C11.3516 9.37579 11.2729 9.56118 11.2695 9.75548C11.2661 9.94978 11.3382 10.1378 11.4707 10.28L13.1907 12H9.25066Z" />
                </svg>
                <p className="text-gray-900 font-semibold">
                  Reply from designer
                </p>
                <p className="text-sm text-gray-500 -mb-1">Jul 7, 2025</p>
              </div>

              <p className="leading-relaxed text-base text-gray-500 font-semibold">
                Hi Drumland Canada! We’re delighted that you found the theme
                easy to use and that it’s helping bring your vision to life. Our
                mission is to empower merchants with powerful, intuitive
                tools—and it’s fantastic to know we’ve achieved that for you.
                Wishing you every success from all the Clean Canvas team!
              </p>
            </div>
          </div>

          {/* fourth */}
          <div className="lg:w-3/5 mx-auto  pb-8 -mt-6 border-gray-200">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="darkgreen"
              >
                <path d="M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z" />
              </svg>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Goondiwindi Cotton
              </h2>
              <p className="text-sm text-gray-500 -mb-1 ml-108">May 19, 2025</p>
            </div>

            <p className="leading-relaxed text-base text-gray-800 mb-6">
              As a designer and front-end developer, Symmetry has been my
              favourite theme to work with for fashion stores. The spacing,
              alignment, and responsiveness are beautifully refined, and the
              typography—from H1 to body copy—follows a clear and consistent
              hierarchy. My back-end developers also appreciate how easy the
              code is to work with when custom changes are needed.
            </p>

            <div className="border-gray-300 pl-4">
              <div className="flex items-center gap-2 mb-1">
                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill=""
                >
                  <path d="M9.25066 12C9.00966 12 8.91666 12 8.84066 11.996C8.03487 11.9563 7.27267 11.6182 6.7023 11.0477C6.13192 10.4771 5.79414 9.7148 5.75466 8.909C5.75066 8.834 5.75066 8.741 5.75066 8.5C5.75066 8.259 5.75066 8.166 5.75466 8.09C5.7944 7.28421 6.13243 6.52201 6.70299 5.95164C7.27355 5.38126 8.03586 5.04348 8.84166 5.004C8.97795 4.99977 9.11431 4.99843 9.25066 5H10.7507C10.9496 5 11.1403 4.92098 11.281 4.78033C11.4216 4.63968 11.5007 4.44891 11.5007 4.25C11.5007 4.05109 11.4216 3.86032 11.281 3.71967C11.1403 3.57902 10.9496 3.5 10.7507 3.5H9.22666C9.01666 3.5 8.88466 3.5 8.76666 3.506C7.58932 3.56413 6.47565 4.05794 5.64212 4.89146C4.8086 5.72499 4.31478 6.83866 4.25666 8.016C4.25066 8.134 4.25066 8.266 4.25066 8.476V8.524C4.25066 8.734 4.25066 8.866 4.25666 8.984C4.31478 10.1613 4.8086 11.275 5.64212 12.1085C6.47565 12.9421 7.58932 13.4359 8.76666 13.494C8.88466 13.5 9.01666 13.5 9.22666 13.5H13.1897L11.4697 15.22C11.3981 15.2892 11.341 15.372 11.3017 15.4635C11.2624 15.555 11.2418 15.6535 11.241 15.7531C11.2402 15.8526 11.2592 15.9514 11.2969 16.0435C11.3347 16.1357 11.3904 16.2194 11.4609 16.2898C11.5313 16.3602 11.6151 16.4158 11.7073 16.4535C11.7995 16.4912 11.8982 16.5101 11.9978 16.5092C12.0974 16.5083 12.1958 16.4875 12.2873 16.4482C12.3788 16.4088 12.4615 16.3517 12.5307 16.28L15.5307 13.28C15.6711 13.1394 15.75 12.9488 15.75 12.75C15.75 12.5512 15.6711 12.3606 15.5307 12.22L12.5307 9.22C12.3885 9.08752 12.2004 9.0154 12.0061 9.01882C11.8118 9.02225 11.6265 9.10097 11.489 9.23838C11.3516 9.37579 11.2729 9.56118 11.2695 9.75548C11.2661 9.94978 11.3382 10.1378 11.4707 10.28L13.1907 12H9.25066Z" />
                </svg>
                <p className="text-gray-900 font-semibold">
                  Reply from designer
                </p>
                <p className="text-sm text-gray-500 -mb-1">Jul 7, 2025</p>
              </div>

              <p className="leading-relaxed text-base text-gray-500 font-semibold">
                Hi Adinkra Expo! Thank you for your feedback and we appreciate
                you taking the time to follow up so we could take a deeper look.
                We re glad we were ultimately able to pinpoint the issue and
                provide clarity, especially since it wasn’t theme-related.
                Wishing you every success from all the Clean Canvas team!
              </p>
            </div>
          </div>

          {/*  */}
          <div className="bg-white p-6 rounded-lg text-sm text-gray-800 space-y-6">
            {/* Header */}
            <div>
              <h1 className="font-bold text-gray-900 text-3xl">
                Designed by Clean <br /> Canvas
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <button className="border-2 text-black px-4 py-1.5 text-base font-semibold rounded-full transition">
                Get support
              </button>
              <button className="border-2 text-black px-4 py-1.5 text-base font-semibold rounded-full transition">
                All themes
              </button>
            </div>

            {/* Version Info + Documentation + Contact */}
            <div className="flex flex-col ml-80 -mt-40 gap-4 text-sm text-gray-700">
              {/* Version Info */}
              <div className="text-gray-500">
                <h3 className="text-lg font-semibold text-gray-800">Version 8.0.0 • June 18, 2025</h3>
                <p className="text-xl font-semibold text-gray-500">Restructured theme files for theme store redesign</p>
              </div>
              <div className="mb-3 -mt-3">
               <a href="#" className="underline font-semibold text-base text-gray-800 hover:underline">
                  View details
                </a>
                <a href="#" className="underline font-semibold text-base text-gray-800 hover:underline ml-3 -mt-10">
                  All versions
                </a>
              </div>
              {/* Documentation Links */}
              <div className="flex flex-wrap gap-4">
                <a href="#" className="font-semibold text-lg text-gray-800">
                  Theme documentation
                </a>
              </div>

            <div className="underline font-semibold text-lg text-gray-800 -mt-4">
                <a href="#" >
                  View details
                </a>
                </div>

              {/* Contact Info */}
              <div className="font-semibold text-lg text-gray-500">
                <p>
                  6th Floor, 100 Liverpool Street, London, ENG, EC2M 2AT, GB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
