import { DemoListing } from '@/data/demo-listings';
import Image from 'next/image';
import React from 'react';

export default function ListingCard({
  title,
  image,
  distance,
  tags,
  category,
}: DemoListing) {
  return (
    <div
      className='bg-white rounded-2xl shadow p-4 flex flex-col gap-2 transition-shadow hover:shadow-xl hover:-translate-y-1 duration-200 border border-transparent hover:border-[#F5A623]/40 focus-within:shadow-xl focus-within:border-[#0ea5e9] outline-none cursor-pointer'
      tabIndex={0}
      aria-label={`View details for ${title}`}>
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
            }>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
