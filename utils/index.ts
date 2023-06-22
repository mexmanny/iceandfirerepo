const API_URL_DEFINITION = 'https://anapioficeandfire.com/api';

export const fetchHouses = async (pageNum?: number, pageSize?: number) => {
  let housesUrl = `${API_URL_DEFINITION}/houses`;
  if (pageNum !== undefined && pageSize !== undefined) {
    housesUrl += `?page=${pageNum}&pageSize=${pageSize}`;
  }
  const response = await fetch(housesUrl);
  const result = await response.json();
  return result;
};

export const fetchHouseById = async (houseId?: string | number) => {
  const housesUrl = `${API_URL_DEFINITION}/houses/${houseId}`;

  const response = await fetch(housesUrl);
  const result = await response.json();
  return result;
};

export const fetchCharacterInfo = async (characterId: string | null) => {
  const response = await fetch(
    `${API_URL_DEFINITION}/characters/${characterId}`
  );

  const result = await response.json();

  return result;
};

export const fetchLifeStatus = async (isAlive: string, name: string) => {
  let response = await fetch(
    `${API_URL_DEFINITION}/characters?isAlive=${isAlive}&name=${name}`
  );
  let result = await response.json();

  if (isAlive === 'true') {
    if (result.length > 0) {
      return { alive: true };
    } else {
      let response = await fetch(
        `${API_URL_DEFINITION}/characters?isAlive=false&name=${name}`
      );
      result = await response.json();
      if (result.length > 0) {
        return { alive: false, died: result[0].died };
      }
    }
  } else if (isAlive === 'false') {
    if (result.length > 0) {
      return { alive: false, died: result[0].died };
    } else {
      const response = await fetch(
        `${API_URL_DEFINITION}/characters?isAlive=true&name=${name}`
      );
      const result = await response.json();
      if (result.length > 0) {
        return { alive: true };
      }
    }
  }

  return { message: 'Member Not Found' };
};
