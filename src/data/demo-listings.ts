import ikeadining from '@/assets/images/listing/ikeadining.png';
import mountainbike from '@/assets/images/listing/mountainbike.png';
import mcbookpro from '@/assets/images/listing/mcbookpro.png';
import accousticguitar from '@/assets/images/listing/accousticguitar.png';
import mixer from '@/assets/images/listing/mixer.png';
import tent from '@/assets/images/listing/tent.png';
import lego from '@/assets/images/listing/lego.png';
import chair from '@/assets/images/listing/chair.png';
import { StaticImageData } from 'next/image';
export interface DemoListing {
  id: number;
  title: string;
  image: StaticImageData;
  distance: string;
  tags: string[];
  category: string;
}

export const demoListings: DemoListing[] = [
  {
    id: 1,
    title: 'IKEA Dining Table',
    image: ikeadining,
    distance: '0.3 mi away',
    tags: ['Pending'],
    category: 'Furniture',
  },
  {
    id: 2,
    title: 'Mountain Bike',
    image: mountainbike,
    distance: '0.5 mi away',
    tags: ['Barter Accepted'],
    category: 'Sports',
  },
  {
    id: 3,
    title: 'MacBook Pro 2020',
    image: mcbookpro,
    distance: '0.7 mi away',
    tags: ['Pending'],
    category: 'Electronics',
  },
  {
    id: 4,
    title: 'Acoustic Guitar',
    image: accousticguitar,
    distance: '0.2 mi away',
    tags: ['Barter Accepted'],
    category: 'Music',
  },
  {
    id: 5,
    title: 'KitchenAid Mixer',
    image: mixer,
    distance: '0.4 mi away',
    tags: ['Barter Accepted'],
    category: 'Appliances',
  },
  {
    id: 6,
    title: 'Camping Tent (4-Person)',
    image: tent,
    distance: '0.6 mi away',
    tags: ['Pending'],
    category: 'Outdoors',
  },
  {
    id: 7,
    title: 'LEGO Star Wars Set',
    image: lego,
    distance: '0.8 mi away',
    tags: ['Barter Accepted'],
    category: 'Toys',
  },
  {
    id: 8,
    title: 'Office Chair (Ergonomic)',
    image: chair,
    distance: '0.9 mi away',
    tags: ['Pending'],
    category: 'Furniture',
  },
];
