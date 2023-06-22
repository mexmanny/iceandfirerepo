export interface House {
  ancestralWeapons: string[];
  cadetBranches: string[];
  coatOfArms: string;
  currentLord: string;
  diedOut: string;
  founded: Founded;
  founder: string;
  heir: string;
  name: string;
  overlord: string;
  region: string;
  seats: string[];
  swornMembers: string[];
  titles: string[];
  url: string;
  words: string;
}

export enum Founded {
  ComingOfTheAndals = 'Coming of the Andals',
  Empty = '',
  The299AC = '299 AC',
}

export interface HouseProps {
  name: string;
  swornMembers: string[];
  imgUrl: string;
  url: string;
}

export interface SwornMemberProps {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export interface SwornMemberUICardProps {
  name: string;
  lifeInfo: {
    alive: boolean;
    died?: string;
  };
  born?: string;
  spouse?: string;
  father?: string;
  mother?: string;
  gender?: string;
  culture?: string;
}

export interface SwornMemberDataProps {
  url: string;
}

export interface ApiHandlerProps {
  path: string;
  onSuccess: (data: any) => void;
}

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  handleNext: () => void;
  handlePrev: () => void;
}
