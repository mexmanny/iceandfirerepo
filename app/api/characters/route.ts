import { fetchCharacterInfo, fetchLifeStatus } from '@/utils';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const characterIdParams = searchParams.get('characterIds');
  const characterIds = characterIdParams ? characterIdParams.split(',') : [];

  const isAlive = 'true';
  if (characterIds.length > 0) {
    const swornMemberInfo = await Promise.all(
      characterIds.map(async (characterId) => {
        const getCharacterData = await fetchCharacterInfo(characterId);
        const name = getCharacterData.name;
        const getLifeInfo = await fetchLifeStatus(isAlive, name);
        const lifeInfo = getLifeInfo;
        return { name, lifeInfo };
      })
    );

    return NextResponse.json({ swornMemberInfo });
  } else {
    return new Response(
      JSON.stringify({ message: 'characterIds are missing from request' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application.json',
        },
      }
    );
  }
};
