'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';


async function fetchDesign(id) {
  const res = await fetch(`http://localhost:3000/api/designs?id=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch design');
  }
  const design = await res.json();
  return design;
}


export default function DesignDetail({ params }) {
  const { id } = params;
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function loadData() {
      try {
        const designData = await fetchDesign(id);
        if (!designData || designData.error) {
          notFound();
          return;
        }
        setDesign(designData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

 
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!design) return <div>Design not found</div>;

  return (
    <div className="container mt-[20vh] p-4 h-screen">
      <Link href="/" legacyBehavior><a className="text-blue-500">Back to Explore</a></Link>
      <div className="mt-4 p-4 border rounded-lg shadow-lg">
        <Image 
        src={design.imageUrl}
        width={500}
        height={400} 
        alt={design.host} 
        className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-2xl font-bold mb-2">{design.host}</h1>
        <p>Likes: {design.likes}</p>
      </div>
    </div>
  );
}
