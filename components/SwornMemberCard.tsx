import { SwornMemberDataProps, SwornMemberUICardProps } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SwornMemberModal from './SwornMemberModal';
import { toast } from 'react-toastify';

const SwornMemberCard = ({ url }: SwornMemberDataProps) => {
  const [memberData, setMemberData] = useState<SwornMemberUICardProps | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(false);
  const characterId = url.split('/').slice(-1).join('');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { name, lifeInfo } = memberData || {};

  const fetchSwornMemberData = async (pathName: string | number) => {
    try {
      const response = await fetch(`/api/characters/${pathName}`);
      const data = await response.json();
      return data;
    } catch (error) {
      toast.error('swornMemberInfo call failed');
      console.error('Error fetching swornMember data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSwornMemberData(characterId);
        setMemberData(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, characterId]);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="p-4 pb-0 border rounded-xl border-gray-600 bg-gray-900">
        <h1 className="text-2xl min-h-[50px] font-medium text-center mb-1 opacity-20">
          <Skeleton />
        </h1>
        <div className="text-[5.2rem] opacity-20">
          <Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <SwornMemberModal
            memberData={memberData}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      ) : (
        <div
          className="p-4 cursor-pointer border rounded-xl border-gray-600 bg-gray-900 transform transition-all duration-300 hover:scale-110"
          onClick={handleClick}
        >
          <h1 className="min-h-[50px] font-medium text-center mb-3">
            {name ? name : 'Unknown'}
          </h1>
          <div className="w-full h-[150px] relative">
            <div className="w-full h-[150px] relative rounded-full overflow-hidden">
              <Image
                src="https://media.istockphoto.com/id/153243835/photo/medieval-knight-on-grey-background.jpg?s=612x612&w=0&k=20&c=IrbDOZ2e4ROynVwtQFTCSxBmeIgJQ375g7CWLA1wHH4="
                alt={name || 'Sworn Member'}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col items-center h-16 justify-center mt-3">
            <p className="text-center">{lifeInfo?.alive ? 'Alive' : 'Dead'}</p>
            <p className="text-center">{lifeInfo?.died}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwornMemberCard;
