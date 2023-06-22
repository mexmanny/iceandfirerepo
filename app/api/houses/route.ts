import React from 'react';

import { fetchHouses } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const pageSize = parseInt(
    request.nextUrl.searchParams.get('pageSize') || '10',
    10
  );
  const pageNum = parseInt(request.nextUrl.searchParams.get('page') || '1', 10);
  const houses = await fetchHouses(pageNum, pageSize);
  return NextResponse.json({ houses });
};
