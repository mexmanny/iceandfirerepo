import { CarouselProps, House, HouseProps } from '@/types';
import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';

const SHOW_AT_ONCE = 5;

const Carousel = <T extends {}>({
  items,
  renderItem,
  handleNext,
  handlePrev,
  isLastPage,
}: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(items.length);
  console.log(currentIndex);
  return (
    <div className="flex flex-col items-center justify-center h-screen py-16">
      <div className="flex-1 h-full">
        <div className="flex justify-center">
          <div className={`grid grid-cols-5 gap-7`}>
            {items.map((item, index) => (
              <div key={index} className="w-48">
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="rounded px-3 py-2 mt-23 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800 transition-all duration-200"
            style={{ margin: '0 65px' }}
          >
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
          </button>
          <button
            onClick={handleNext}
            className="rounded px-3 py-2 mt-23 border-b-4 border-l-2 shadow-lg bg-blue-700 border-blue-800 transition-all duration-200"
            style={{ margin: '0 65px' }}
            disabled={isLastPage}
          >
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
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
