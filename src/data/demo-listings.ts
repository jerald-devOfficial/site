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
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
    distance: '0.3 mi away',
    tags: ['Barter Accepted', 'Auction Ends in 2h'],
    category: 'Furniture'
  },
  {
    id: 2,
    title: 'Mountain Bike',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    distance: '0.5 mi away',
    tags: ['Barter Accepted'],
    category: 'Sports'
  },
  {
    id: 3,
    title: 'MacBook Pro 2020',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    distance: '0.7 mi away',
    tags: ['Auction Ends in 2h'],
    category: 'Electronics'
  },
  {
    id: 4,
    title: 'Acoustic Guitar',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    distance: '0.2 mi away',
    tags: ['Barter Accepted'],
    category: 'Music'
  },
  {
    id: 5,
    title: 'KitchenAid Mixer',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    distance: '0.4 mi away',
    tags: ['Barter Accepted', 'Auction Ends in 2h'],
    category: 'Appliances'
  },
  {
    id: 6,
    title: 'Camping Tent (4-Person)',
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    distance: '0.6 mi away',
    tags: ['Auction Ends in 2h'],
    category: 'Outdoors'
  },
  {
    id: 7,
    title: 'LEGO Star Wars Set',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    distance: '0.8 mi away',
    tags: ['Barter Accepted'],
    category: 'Toys'
  },
  {
    id: 8,
    title: 'Office Chair (Ergonomic)',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    distance: '0.9 mi away',
    tags: ['Barter Accepted', 'Auction Ends in 2h'],
    category: 'Furniture'
  }
]
