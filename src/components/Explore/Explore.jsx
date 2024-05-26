'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Explore() {
  const [designs, setDesigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch designs data from your API
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

  return (
    <div className="container float-right mt-[20vh] p-4 h-screen">
      <h1 className='text-4xl text-center mb-8'>Explore inspiring designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {designs.map(design => (
          <div key={design.id} className="border p-4 rounded-lg shadow-lg overflow-hidden group">
            <div className="relative overflow-hidden h-48 rounded-t-lg">
              <Link href={`/home/${design.id}`}>
                <img
                  src={design.imageUrl}
                  alt={design.host}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
              <p>{design.host}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
