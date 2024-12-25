// import React from 'react'
import Image from 'next/image'

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
    <div className='w-full'>
    <div className='flex flex-col sm:flex-row mt-1 mb-1 gap-y-2 sm:gap-x-1 md:gap-x-2 mx-2 '>
      <div>
        <Image className='border-4 border-black border-solid' src="/mainds.webp" width={600} height={500} alt='mainds.webp'/>
      </div>
      <div>
        <Image className='border-4 border-black border-solid' src="/mainsd.webp" width={600} height={500} alt='mainsd.webp'/>
      </div>
      <div>
        <Image className='border-4 border-black border-solid' src="/maindd.webp" width={600} height={500} alt='maindd.webp'/>
      </div>
    </div>
    </div>
    </section>
  )
}

  