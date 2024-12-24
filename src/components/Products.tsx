import React from 'react'
import Image from 'next/image'

export default function Products() {
  return (
    <div className='flex flex-row mt-1 mb-1 gap-x-3 mx-2 '>
      <div>
        <Image className='border-4 border-black border-dashed' src="/mainds.webp" width={500} height={500} alt='mainds.webp'/>
      </div>
      <div>
        <Image className='border-4 border-black border-dashed' src="/mainsd.webp" width={500} height={500} alt='mainsd.webp'/>
      </div>
      <div>
        <Image className='border-4 border-black border-dashed' src="/maindd.webp" width={500} height={500} alt='maindd.webp'/>
      </div>
    </div>
  )
}

  