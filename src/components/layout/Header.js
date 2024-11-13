import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto shadow-md rounded-b-lg">
        <div className="py-4 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img src='/assets/self.jpg' alt="Edin Gilic" className="w-28 h-28 rounded-full object-cover" />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Edin Gilic</h1>
              <h2 className="text-xl text-text-secondary">Physics and Machine Learning Enthusiast, Aspiring Researcher</h2>
              <p className="text-sm mt-1">Phoenix, Arizona, United States</p>
              <div className="mt-2 space-x-2">
                <a href="mailto:egilic@umich.edu" className="text-primary hover:underline">Email</a> |
                <a href="tel:+14807109267" className="text-primary hover:underline">Phone</a> |
                <a href="https://linkedin.com/in/edin-gilic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> |
                <a href="https://github.com/egilic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a> |
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;