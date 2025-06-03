import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactInfo({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className='mt-8 bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='bg-blue-600 text-white p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-blue-100'>{subtitle}</p>
      </div>
      <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <Mail className='size-5 text-blue-600' />
              <div>
                <p className='font-medium text-gray-800'>Email</p>
                <p className='text-gray-600'>team@tindamo.store</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <Phone className='size-5 text-blue-600' />
              <div>
                <p className='font-medium text-gray-800'>Phone</p>
                <p className='text-gray-600'>+63 966 765 2125</p>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-start space-x-3'>
              <MapPin className='size-5 text-blue-600 mt-0.5' />
              <div>
                <p className='font-medium text-gray-800'>Address</p>
                <p className='text-gray-600'>Cebu City, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
