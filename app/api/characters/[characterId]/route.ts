import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

import { fetchHouses, fetchLifeStatus, fetchCharacterInfo } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: Request, { params }: Params) => {
  const characterId = params['characterId'];
  const isAlive = 'true';
  if (characterId) {
    const characterData = await fetchCharacterInfo(characterId);
    const { name, gender, born, father, mother, spouse, culture } =
      characterData;
    const getLifeInfo = await fetchLifeStatus(isAlive, name);
    const lifeInfo = getLifeInfo;
    const swornMemberInfo = {
      name,
      gender,
      born,
      father,
      mother,
      spouse,
      culture,
      lifeInfo,
    };
    return NextResponse.json(swornMemberInfo);
  } else {
    const response = {
      message: 'Missing Character id',
    };
    return {
      status: 400,
      body: response,
    };
  }
};
