'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const ImageDTI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <Fragment>
      {/* DTI Certificate Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'
          onClick={closeModal}
        >
          <div className='relative w-full h-full flex items-center justify-center'>
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10'
              aria-label='Close modal'
            >
              <X className='w-8 h-8' />
            </button>
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/dti/tindamo_dti.png`}
              alt='TindaMo DTI Business Registration Certificate - Full Size'
              width={800}
              height={1120}
              className='rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[95vw] bg-white'
              priority={false}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Image
        src={`${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/dti/tindamo_dti.png`}
        alt='TindaMo DTI Business Registration Certificate'
        width={200}
        height={280}
        className='rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer'
        priority={false}
        onClick={openModal}
      />
    </Fragment>
  )
}

export default ImageDTI
