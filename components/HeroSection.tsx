import React from 'react'


export const HeroSection = () => {
    return (
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Welcome to MyApp</h1>
          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            Discover amazing features and solutions tailored for you.
          </p>
          <div className="mt-6">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
  