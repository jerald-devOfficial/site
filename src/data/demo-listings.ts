export interface DemoListing {
  id: number
  title: string
  image: string
  distance: string
  tags: string[]
  category: string
}

export const demoListings: DemoListing[] = [
  {
    id: 1,
    title: 'IKEA Dining Table',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/ikea-dining-table.jpg`,
    distance: '0.3 mi away',
    tags: ['Pending'],
    category: 'Furniture'
  },
  {
    id: 2,
    title: 'Mountain Bike',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/mountain-bike.jpg`,
    distance: '0.5 mi away',
    tags: ['Barter Accepted'],
    category: 'Sports'
  },
  {
    id: 3,
    title: 'MacBook Pro 2020',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/macbook-pro.png`,
    distance: '0.7 mi away',
    tags: ['Pending'],
    category: 'Electronics'
  },
  {
    id: 4,
    title: 'Acoustic Guitar',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/acoustic-guitar.jpg`,
    distance: '0.2 mi away',
    tags: ['Barter Accepted'],
    category: 'Music'
  },
  {
    id: 5,
    title: 'KitchenAid Mixer',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/kitchenaid-mixer.jpeg`,
    distance: '0.4 mi away',
    tags: ['Barter Accepted'],
    category: 'Appliances'
  },
  {
    id: 6,
    title: 'Camping Tent (4-Person)',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/tent.jpg`,
    distance: '0.6 mi away',
    tags: ['Pending'],
    category: 'Outdoors'
  },
  {
    id: 7,
    title: 'LEGO Star Wars Set',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/lego.jpg`,
    distance: '0.8 mi away',
    tags: ['Barter Accepted'],
    category: 'Toys'
  },
  {
    id: 8,
    title: 'Office Chair (Ergonomic)',
    image: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/listing/chair.jpg`,
    distance: '0.9 mi away',
    tags: ['Pending'],
    category: 'Furniture'
  }
]
