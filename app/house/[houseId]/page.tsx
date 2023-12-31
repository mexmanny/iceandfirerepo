'use client';
import { House, SwornMemberProps, SwornMemberUICardProps } from '@/types';
import React, { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import { usePathname } from 'next/navigation';
import Carousel from '@/components/Carousel';
import SwornMemberCard from '@/components/SwornMemberCard';
import Link from 'next/link';
import Image from 'next/image';
const ROWS_PER_PAGE = 10;
const LoadingState = new Array(ROWS_PER_PAGE).fill(0);

const HousePage = () => {
  const [houseData, setHouseData] = useState<House | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const [selectedSwornMember, setSelectedSwornMember] = useState<string | null>(
    null
  );

  const [displayModal, setDisplayModal] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/houses/${pathName.split('/').slice(-1)}`
        );

        const data = await response.json();
        setHouseData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching house data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pathName]);

  const renderSwornMemberCard = (url: string) => {
    return <SwornMemberCard url={url} />;
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center px-16">
      <Link href="/">
        <div className="absolute top-4 left-4 flex items-center gap-3 font-bold">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          BACK
        </div>
      </Link>
      <h1 className="text-[2rem] font-bold my-4">{houseData?.name}</h1>
      <p className="text-xl font-medium text-gray-500">{houseData?.region}</p>
      {houseData && <h2 className="text-2xl font-bold mt-5">Sworn Members</h2>}
      {houseData && houseData?.swornMembers?.length == 0 && (
        <p className="text-gray-600 text-center text-2xl mt-20">
          NO MEMBERS FOUND
        </p>
      )}
      {houseData?.swornMembers && selectedSwornMember === null && (
        <Carousel
          items={houseData?.swornMembers.slice(
            pageNum * ROWS_PER_PAGE,
            pageNum * ROWS_PER_PAGE + ROWS_PER_PAGE
          )}
          renderItem={renderSwornMemberCard}
          handleNext={() => setPageNum((currentVal) => currentVal + 1)}
          handlePrev={() => {
            setPageNum((currentVal) => (currentVal > 0 ? currentVal - 1 : 0));
          }}
        />
      )}
    </div>
  );
};

export default HousePage;
