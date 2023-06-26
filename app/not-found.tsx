'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {};

const Page404 = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);
  return <div className="w-screen h-screen bg-black"></div>;
};

export default Page404;
