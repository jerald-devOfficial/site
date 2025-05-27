import { demoListings } from '@/data/demo-listings';
import ListingCard from './listingcard';

const Listings = () => (
  <section
    className='w-full max-w-6xl mx-auto flex flex-col gap-6 py-10'
    id='listings'>
    <h2 className='text-2xl font-bold mb-4 text-center'>Featured Listings</h2>
    {/* Filters placeholder */}
    <div className='flex flex-wrap gap-4 justify-center mb-4'>
      <input
        className='px-4 py-2 rounded-full border border-[#0ea5e9] text-sm focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none'
        placeholder='Location'
      />
      <input
        className='px-4 py-2 rounded-full border border-[#27ae60] text-sm focus:ring-2 focus:ring-[#27ae60] focus:outline-none'
        placeholder='Category'
      />
      <button className='px-4 py-2 rounded-full bg-[#F5A623] text-white font-bold shadow hover:bg-[#f7b84a] transition-colors'>
        More Filters
      </button>
    </div>
    {/* Listings grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {demoListings.map((listing) => (
        <ListingCard key={listing.title} {...listing} />
      ))}
    </div>
  </section>
);

export default Listings;
