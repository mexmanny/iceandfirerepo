import HouseList from '@/components/HouseList';
import Navbar from '@/components/NavBar';
import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HouseList />
    </main>
  );
}
