import { SwornMemberUICardProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SwornMemberModalProps = {
  memberData: SwornMemberUICardProps | null;
  onClose: () => void;
};
const notify = () =>
  toast.error('Data source call failed. Please contact admin');
const SwornMemberModal = ({ memberData, onClose }: SwornMemberModalProps) => {
  if (!memberData) {
    notify();
    return <ToastContainer />;
  }

  const { name, gender, culture, born, father, mother, spouse } = memberData;

  return (
    <>
      <div className="bg-gray-900 bg-opacity-75 p-4">
        <div className="flex">
          <div className="w-1/2 pr-4">
            <div className="w-full  relative ">
              <Image
                src="https://c8.alamy.com/comp/J0NMF3/a-man-dressed-as-a-knight-takes-part-in-a-jousting-competition-during-J0NMF3.jpg"
                alt={name || 'Sworn Member'}
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="p-2">
            <h1 className="text-5xl font-medium">{name}</h1>
            <div className="m-8">
              <dl className="grid grid-cols-2 gap-y-2">
                <div>
                  <dt className="text-md font-bold mr-5">BIRTHPLACE:</dt>
                  <dt className="text-md font-bold">GENDER:</dt>
                  <dt className="text-md font-bold">CULTURE:</dt>
                  <dt className="text-md font-bold">MOTHER:</dt>
                  <dt className="text-md font-bold">FATHER:</dt>
                  <dt className="text-md font-bold">MARRIED:</dt>
                </div>
                <div>
                  <dd className="text-md">{born ? born : 'Not Listed'}</dd>
                  <dd className="text-md">{gender ? gender : 'Not Listed'}</dd>
                  <dd className="text-md">
                    {culture ? culture : 'Not Listed'}
                  </dd>
                  <dd className="text-md">{mother ? mother : 'Not Listed'}</dd>
                  <dd className="text-md">{father ? father : 'Not Listed'}</dd>
                  <dd className="text-md">{spouse ? 'True' : 'Not Listed'}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default SwornMemberModal;
