'use client';
import { House } from '@/types';
import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';
import Carousel from './Carousel';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';

const ROWS_PER_PAGE = 10;
const LoadingState = new Array(ROWS_PER_PAGE).fill(0);

const HouseList = () => {
  const [houseData, setHouseData] = useState<House[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/houses?page=${pageNum}&pageSize=${ROWS_PER_PAGE}`
        );

        const data = await response.json();
        setHouseData(data.houses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching house data:', error);
        toast.error('house call failed');
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNum]);

  console.log(pageNum);
  const renderLoadingSkeleton = () => {
    return (
      <div className="p-4 pb-0 border rounded-xl border-gray-600 bg-gray-900">
        <h1 className="text-2xl min-h-[50px] font-medium text-center mb-1 opacity-20">
          <Skeleton />
        </h1>
        <div className="text-[8rem] opacity-20">
          <Skeleton />
        </div>
      </div>
    );
  };
  const renderHouseCard = (house: House) => {
    return (
      <HouseCard
        name={house.name}
        swornMembers={house.swornMembers}
        imgUrl="https://awoiaf.westeros.org/images/thumb/6/6f/House_Baratheon_of_King%27s_Landing.svg/300px-House_Baratheon_of_King%27s_Landing.svg.png"
        url={house.url}
      />
    );
  };

  return (
    <Carousel
      items={loading ? LoadingState : houseData}
      renderItem={loading ? renderLoadingSkeleton : renderHouseCard}
      handleNext={() => setPageNum((currentVal) => currentVal + 1)}
      handlePrev={() => {
        setPageNum((currentVal) => (currentVal > 1 ? currentVal - 1 : 1));
      }}
    />
  );
};

export default HouseList;
