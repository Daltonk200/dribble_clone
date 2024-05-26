import React from 'react';

export default function Hero() {
  return (
    <header className="mt-[6rem] w-full h-[60vh] flex flex-col items-center justify-center">
      <button className="p-2 bg-pink-500 rounded-2xl">Over 3 million ready-to-work creatives!</button>
      <div className="w-[80%] mx-auto flex justify-center items-center mt-5">
        <p className="text-7xl text-center">The World&apos;s destination for design</p> 
      </div>
      <p className="text-xl text-center mt-3">Get inspired by the work of millions of top-rated designers &amp; agencies around the world.</p>
      <button className="bg-blue-400/80 hover:bg-blue-400/60 p-2 mt-4 rounded-2xl">Get Started</button>
    </header>
  );
}
