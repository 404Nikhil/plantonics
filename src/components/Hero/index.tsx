'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Hero = () => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-secondary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Harnessing AI for Sustainable Farming
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Revolutionizing Agriculture with Plantonics
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <button
                      onClick={() => setShowIframe(true)}
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Try Now
                    </button>
                  </li>
                </ul>
                {showIframe && (
                  <div id="streamlit-container" style={{ width: '100%', height: '600px', marginTop: '20px' }}>
                    <iframe
                      id="streamlit-iframe"
                      src="http://localhost:8501"
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
