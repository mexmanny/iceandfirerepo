import React from 'react';

import { fetchHouseById, fetchHouses } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export const GET = async (request: NextRequest, { params }: Params) => {
  const houseId = params['houseId'];
  const houses = await fetchHouseById(houseId);
  return NextResponse.json(houses);
};
