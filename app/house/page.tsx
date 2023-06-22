'use client';
import { House } from '@/types';
import React, { useEffect, useState } from 'react';

const House = () => {
  const [houseData, setHouseData] = useState<House[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/swornMemberInfo/');

        const data = await response.json();
        setHouseData(data.houses);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {houseData.map((item: House, index: number) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
};

export default House;
