import { demoListings } from '@/data/demo-listings'
import Image from 'next/image'

interface Listing {
  title: string
  image: string
  distance: string
  tags: string[]
  category: string
}

const ListingCard = ({ title, image, distance, tags, category }: Listing) => (
  <div
    className='bg-white rounded-2xl shadow p-4 flex flex-col gap-2 transition-shadow hover:shadow-xl hover:-translate-y-1 duration-200 border border-transparent hover:border-[#F5A623]/40 focus-within:shadow-xl focus-within:border-[#0ea5e9] outline-none cursor-pointer'
    tabIndex={0}
    aria-label={`View details for ${title}`}
  >
    <div className='w-full h-32 relative mb-2 rounded-xl overflow-hidden'>
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover rounded-xl bg-[#F5A623]/20'
        sizes='(max-width: 768px) 100vw, 25vw'
        style={{ minHeight: 128 }}
      />
      <span className='absolute top-2 left-2 bg-[#0ea5e9] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm'>
        {category}
      </span>
    </div>
    <div className='font-semibold text-base leading-tight line-clamp-2 min-h-[2.5rem]'>
      {title}
    </div>
    <div className='text-xs text-[#555] mb-1'>{distance}</div>
    <div className='flex gap-2 mt-auto flex-wrap'>
      {tags.map((tag, i) => (
        <span
          key={i}
          className={
            tag.includes('Barter')
              ? 'px-2 py-1 rounded-full bg-[#27ae60]/20 text-[#27ae60] text-xs font-medium'
              : 'px-2 py-1 rounded-full bg-[#F5A623]/20 text-[#F5A623] text-xs font-medium'
          }
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const Listings = () => (
  <section
    className='w-full max-w-6xl mx-auto flex flex-col gap-6 py-10'
    id='listings'
  >
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
)

export default Listings
