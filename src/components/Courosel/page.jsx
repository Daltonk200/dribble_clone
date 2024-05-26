'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Explore() {
  const [designs, setDesigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/designs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setDesigns(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 600 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 600, min: 480 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

  return (
    <div className="container mt-[20vh] p-4 h-[40vh] w-[99vw]">
      <h1 className='text-4xl text-center mb-8'>Explore inspiring designs</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile" ,"desktop",]}
        showDots={true}
      >
        {designs.map(design => (
          <div key={design.id} className="p-4">
            <div className=" p-4 rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden h-48 rounded-t-lg">
                <Link href={`/`}>
                  <img
                    src={design.imageUrl}
                    alt={design.host}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                <p className="mt-2 text-center">{design.host}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
