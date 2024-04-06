import React from 'react'
import { BallCanvas } from './canvas'
import { StarWrapper } from '@/app/hoc'
import { technologies } from '@/app/constants'

const Tech = () => {
  return (
    <div id='tech' className='w-full h-auto px-4 xl:px-10 md:px-8 sm:px-6 py-4 xl:py-10 md:py-8 sm:py-6 flex flex-row flex-wrap gap-10'>
      {technologies.map((technologies) => (
        <div key={technologies.name} className='w-'>
          
        </div>
      ))}
    </div>
  )
}

export default StarWrapper(Tech, "tech");