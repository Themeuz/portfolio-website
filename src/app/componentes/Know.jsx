import React from 'react';
import Image from 'next/image';

const languages = [
  { name: 'JavaScript', src: '/images/javascript.svg' },
  { name: 'PHP', src: '/images/php.png'},
  { name: 'Python', src: '/images/python.svg' },
  { name: 'HTML 5', src: '/images/html.svg' },
  { name: 'CSS 3', src: '/images/css.svg' },

];


const Pricing = () => {
  return (
    <section className='text-white'>
      <h2 className="text-center text-8xl font-bold text-[#025a4e] mt-36 mb-8 md:mb-12">
        Linguagens
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center py-4 px-2 xl:gap-16 sm:py-28 xl:px-2'>
        {languages.map((language, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center p-2 bg-transparent bg-opacity-100 py-14 rounded-2xl shadow-2xl transition duration-300 hover:scale-125'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-black bg-opacity-0 rounded-md'></div>
              <Image
                src={language.src}
                alt={language.name}
                width={120} 
                height={120}
              />
            </div>
            <h3 className='font-bold text-xl mt-4'>{language.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
