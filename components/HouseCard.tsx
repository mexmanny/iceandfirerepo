import { HouseProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HouseCard = ({ name, imgUrl, url }: HouseProps) => {
  const houseId = url.split('/').slice(-1);

  return (
    <Link href={`/house/${houseId}`}>
      <div className="p-4 cursor-pointer border rounded-xl border-gray-600 bg-gray-900 transform transition-all duration-300  hover:scale-110">
        <h1 className="min-h-[50px] font-medium text-center mb-3">{name}</h1>
        <Image src={imgUrl} alt="House Image" width={300} height={300} />
      </div>
    </Link>
  );
};

export default HouseCard;
