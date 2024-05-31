'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import SearchIcon from '../icons/SearchIcon';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='flex items-center'>
      {!isOpen && (
        <button
          className='pl-3 group'
          onClick={toggleSearchBar}
        >
          <SearchIcon className='group-hover:stroke-primary'/>
        </button>
      )}
      <div
        className={`relative flex items-center transition-all duration-300 ease-in-out ${isOpen ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
      >
        {isOpen && (
          <>
            <button className='absolute inset-y-0 left-0 flex items-center pl-3 z-10' onClick={toggleSearchBar}>
              <SearchIcon className='*:stroke-primary' />
            </button>
            <Input
              type='text'
              className='pl-10 rounded-md py-2 pr-4 border-gray-200 placeholder-gray-300 focus:outline-none'
              placeholder='Search'
            />
          </>
        )}
      </div>
    </div>
  );
}